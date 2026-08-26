import User from '../models/User.js';
import UserProfile from '../models/UserProfile.js';
import jwt from 'jsonwebtoken';

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

    // Check for user
    const user = await User.findOne({ email }).select('+password');
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
    const { name, educationLevel, currentInstitutionOrCompany, majorOrField, skills, interests, bio, experienceYears, targetCareerDomain } = req.body;

    if (name) {
      await User.findByIdAndUpdate(req.user.id, { name });
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
      message: 'Profile updated successfully',
      user,
      profile,
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
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, message: 'No user found with that email' });
    }

    // Generate 6 digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    user.otpCode = otp;
    user.otpExpire = Date.now() + 15 * 60 * 1000; // 15 mins
    await user.save();

    // In a live environment, send via Nodemailer. In dev/demo, return OTP for easy testing
    res.status(200).json({
      success: true,
      message: `Password reset OTP generated. Check your email or use test OTP: ${otp}`,
      devOtp: process.env.NODE_ENV === 'development' ? otp : undefined,
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

    const user = await User.findOne({
      email,
      otpCode: otp,
      otpExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid or expired OTP' });
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
    });
  } catch (error) {
    next(error);
  }
};
