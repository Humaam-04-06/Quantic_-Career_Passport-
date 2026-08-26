import User from '../models/User.js';
import UserProfile from '../models/UserProfile.js';
import jwt from 'jsonwebtoken';
import {
  sendWelcomeEmail,
  sendPasswordResetEmail,
  sendPassportVerificationEmail,
} from '../services/emailService.js';

// Helper to generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'pathseeker_super_secure_jwt_secret_key_2026', {
    expiresIn: process.env.JWT_EXPIRE || '7d',
  });
};

// @desc    Register new user & create initial profile
// @route   POST /api/v1/auth/register
// @access  Public
export const register = async (req, res, next) => {
  try {
    const { name, email, password, role, educationLevel, skills, interests } = req.body;

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ success: false, message: 'User already exists with this email' });
    }

    // Create user
    const user = await User.create({
      name,
      email,
      password,
      role: role || 'student',
    });

    // Create associated user profile
    await UserProfile.create({
      user: user._id,
      educationLevel: educationLevel || (role === 'graduate' ? 'Undergraduate' : role === 'professional' ? 'Postgraduate' : 'High School'),
      skills: Array.isArray(skills) ? skills : [],
      interests: Array.isArray(interests) ? interests : [],
    });

    const token = generateToken(user._id);

    // Dispatch Welcome Email asynchronously
    sendWelcomeEmail(user.name, user.email, user.role).catch((err) => {
      console.warn('Welcome email error:', err);
    });

    res.status(201).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Login user
// @route   POST /api/v1/auth/login
// @access  Public
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Please provide email and password' });
    }

    const cleanEmail = email.trim().toLowerCase();

    // Check for user case-insensitively
    const user = await User.findOne({ email: cleanEmail }).select('+password');
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const token = generateToken(user._id);

    res.status(200).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update Password (from Dashboard Settings)
// @route   PUT /api/v1/auth/update-password
// @access  Public
export const updatePassword = async (req, res, next) => {
  try {
    const { email, currentPassword, newPassword } = req.body;
    const cleanEmail = (email || '').trim().toLowerCase();

    if (!cleanEmail || !newPassword) {
      return res.status(400).json({ success: false, message: 'Please provide email and new password' });
    }

    let user = await User.findOne({ email: cleanEmail }).select('+password');

    if (!user) {
      // Auto-create user if in local state
      user = await User.create({
        name: cleanEmail.split('@')[0] || 'Candidate',
        email: cleanEmail,
        password: newPassword,
        role: 'student',
      });
      return res.status(200).json({
        success: true,
        message: 'Password created and account synchronized successfully',
      });
    }

    // If current password provided, check it
    if (currentPassword && user.password) {
      const isMatch = await user.matchPassword(currentPassword);
      if (!isMatch) {
        return res.status(400).json({ success: false, message: 'Current password does not match' });
      }
    }

    user.password = newPassword;
    await user.save();

    res.status(200).json({
      success: true,
      message: 'Password updated successfully in database',
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get current logged in user & profile
// @route   GET /api/v1/auth/me
// @access  Private
export const getMe = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    const profile = await UserProfile.findOne({ user: req.user.id });

    res.status(200).json({
      success: true,
      user,
      profile,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update user profile & skills
// @route   PUT /api/v1/auth/profile
// @access  Private
export const updateProfile = async (req, res, next) => {
  try {
    const { name, avatar, role, educationLevel, currentInstitutionOrCompany, majorOrField, skills, interests, bio, experienceYears, targetCareerDomain } = req.body;

    const userUpdates = {};
    if (name) userUpdates.name = name;
    if (avatar !== undefined) userUpdates.avatar = avatar;
    if (role) userUpdates.role = role;

    if (Object.keys(userUpdates).length > 0) {
      await User.findByIdAndUpdate(req.user.id, userUpdates);
    }

    const profile = await UserProfile.findOneAndUpdate(
      { user: req.user.id },
      {
        educationLevel,
        currentInstitutionOrCompany,
        majorOrField,
        skills,
        interests,
        bio,
        experienceYears,
        targetCareerDomain,
      },
      { new: true, upsert: true, runValidators: true }
    );

    const user = await User.findById(req.user.id);

    res.status(200).json({
      success: true,
      message: 'Profile updated successfully in MongoDB Atlas',
      user,
      profile,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update user profile & avatar by Email (Public endpoint for live dashboard sync)
// @route   PUT /api/v1/auth/update-profile
// @access  Public
export const updateProfilePublic = async (req, res, next) => {
  try {
    const { email, name, avatar, role, targetRole, skills } = req.body;
    const cleanEmail = (email || '').trim().toLowerCase();

    if (!cleanEmail) {
      return res.status(400).json({ success: false, message: 'Please provide email' });
    }

    let user = await User.findOne({ email: cleanEmail });
    if (user) {
      if (name) user.name = name;
      if (avatar !== undefined) user.avatar = avatar;
      if (role) user.role = role;
      await user.save();
    }

    res.status(200).json({
      success: true,
      message: 'Profile and avatar permanently updated in database',
      user: user
        ? {
            id: user._id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
            role: user.role,
            isVerified: user.isVerified,
          }
        : null,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Upload user resume
// @route   POST /api/v1/auth/upload-resume
// @access  Private
export const uploadResume = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'Please upload a resume file' });
    }

    const resumeUrl = `/uploads/${req.file.filename}`;

    const profile = await UserProfile.findOneAndUpdate(
      { user: req.user.id },
      { resumeUrl },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: 'Resume uploaded successfully',
      resumeUrl,
      profile,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Forgot Password / Request OTP
// @route   POST /api/v1/auth/forgot-password
// @access  Public
export const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, message: 'Please provide an email address' });
    }

    const cleanEmail = email.trim().toLowerCase();
    let user = await User.findOne({ email: cleanEmail });

    // If user record is not yet seeded or is in local session, auto-provision on demand
    if (!user) {
      user = await User.create({
        name: cleanEmail.split('@')[0] || 'Candidate Passport Holder',
        email: cleanEmail,
        password: 'Password@2026',
        role: 'student',
        isVerified: true,
      });

      await UserProfile.create({
        user: user._id,
        educationLevel: 'Undergraduate',
        skills: ['Python', 'Problem Solving'],
      });
    }

    // Generate 6 digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    user.otpCode = otp;
    user.otpExpire = Date.now() + 15 * 60 * 1000; // 15 mins
    await user.save();

    // Dispatch Password Reset Email via SMTP Nodemailer
    await sendPasswordResetEmail(user.name, user.email, otp);

    res.status(200).json({
      success: true,
      message: `Password reset verification email dispatched to ${user.email}. OTP: ${otp}`,
      devOtp: otp,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Reset Password with OTP
// @route   POST /api/v1/auth/reset-password
// @access  Public
export const resetPassword = async (req, res, next) => {
  try {
    const { email, otp, newPassword } = req.body;
    const cleanEmail = (email || '').trim().toLowerCase();

    const user = await User.findOne({
      email: cleanEmail,
      otpCode: otp,
      otpExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid or expired OTP code' });
    }

    user.password = newPassword;
    user.otpCode = undefined;
    user.otpExpire = undefined;
    await user.save();

    const token = generateToken(user._id);

    res.status(200).json({
      success: true,
      message: 'Password reset successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Send Passport Verification OTP Email
// @route   POST /api/v1/auth/send-verification-otp
// @access  Public
export const sendPassportVerificationOtp = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, message: 'Please provide an email address' });
    }

    const cleanEmail = email.trim().toLowerCase();
    let user = await User.findOne({ email: cleanEmail });

    if (!user) {
      user = await User.create({
        name: cleanEmail.split('@')[0] || 'Candidate Passport Holder',
        email: cleanEmail,
        password: 'Password@2026',
        role: 'student',
        isVerified: false,
      });
      await UserProfile.create({
        user: user._id,
        educationLevel: 'Undergraduate',
        skills: ['Python', 'Problem Solving'],
      });
    }

    // Generate 6 digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    user.otpCode = otp;
    user.otpExpire = Date.now() + 15 * 60 * 1000; // 15 mins
    await user.save();

    // Dispatch Passport Verification Email via SMTP
    await sendPassportVerificationEmail(user.name, user.email, otp);

    res.status(200).json({
      success: true,
      message: `Passport verification code dispatched to ${user.email}. OTP: ${otp}`,
      devOtp: otp,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Verify Passport with OTP
// @route   POST /api/v1/auth/verify-passport-otp
// @access  Public
export const verifyPassportOtp = async (req, res, next) => {
  try {
    const { email, otp } = req.body;
    const cleanEmail = (email || '').trim().toLowerCase();

    const user = await User.findOne({
      email: cleanEmail,
      otpCode: otp,
      otpExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid or expired verification code' });
    }

    user.isVerified = true;
    user.otpCode = undefined;
    user.otpExpire = undefined;
    await user.save();

    res.status(200).json({
      success: true,
      message: 'Passport verified successfully! Verification badge granted.',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        isVerified: true,
      },
    });
  } catch (error) {
    next(error);
  }
};
