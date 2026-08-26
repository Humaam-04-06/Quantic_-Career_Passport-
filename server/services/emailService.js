import 'dotenv/config';
import nodemailer from 'nodemailer';

/**
 * Configure Nodemailer Transporter
 * Supports Gmail, Custom SMTP, or falls back gracefully to ethereal/console preview in dev
 */
export const createTransporter = () => {
  const cleanPass = (process.env.SMTP_PASS || '').replace(/\s+/g, '');
  const user = (process.env.SMTP_USER || '').trim();

  // Gmail Direct Support (Recommended for 100% delivery)
  if (
    user &&
    (process.env.SMTP_HOST === 'smtp.gmail.com' || user.includes('@gmail.com'))
  ) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user,
        pass: cleanPass,
      },
    });
  }

  // Custom SMTP Relay (SendGrid, Brevo, Mailgun, AWS SES)
  if (process.env.SMTP_HOST && user) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user,
        pass: cleanPass,
      },
    });
  }

  // Development Fallback: Ethereal/Local Mock Transporter
  return nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'ethereal.user@ethereal.email',
      pass: 'ethereal_pass',
    },
  });
};

/**
 * Modern Ultra-Glass Dark HTML Email Templates
 */

// 1. WELCOME EMAIL TEMPLATE
export const getWelcomeEmailHtml = (name, email, role = 'Student') => {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to PathSeeker Career Passport</title>
  <style>
    body { margin: 0; padding: 0; background-color: #000000; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #FFFFFF; }
    .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
    .card { background-color: #0A0A0F; border: 1px solid #27272A; border-radius: 24px; padding: 36px 28px; box-shadow: 0 20px 40px rgba(0,0,0,0.8); }
    .logo-badge { display: inline-block; background-color: #E8602E; color: #FFFFFF; font-weight: 900; font-size: 14px; padding: 8px 16px; border-radius: 12px; margin-bottom: 20px; letter-spacing: 1px; }
    h1 { color: #FFFFFF; font-size: 26px; font-weight: 800; margin: 0 0 14px; line-height: 1.3; }
    .fire-text { color: #E8602E; }
    p { color: #D4D4D8; font-size: 14px; line-height: 1.6; margin: 0 0 20px; }
    .passport-box { background: linear-gradient(135deg, rgba(232,96,46,0.12) 0%, rgba(18,18,24,0.8) 100%); border: 1px solid rgba(232,96,46,0.3); border-radius: 18px; padding: 20px; margin: 24px 0; text-align: left; }
    .passport-field { margin-bottom: 10px; font-size: 13px; }
    .passport-label { color: #A1A1AA; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; }
    .passport-val { color: #FFFFFF; font-weight: 700; font-family: monospace; font-size: 14px; }
    .btn { display: inline-block; background: linear-gradient(135deg, #FF7A45 0%, #E8602E 100%); color: #FFFFFF !important; text-decoration: none; font-weight: 800; font-size: 14px; padding: 15px 32px; border-radius: 16px; margin: 20px 0; box-shadow: 0 10px 25px rgba(232,96,46,0.4); text-align: center; }
    .footer { text-align: center; padding-top: 30px; border-top: 1px solid #1F1F23; margin-top: 30px; }
    .footer p { color: #71717A; font-size: 11px; margin: 4px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <div style="text-align: center;">
        <div class="logo-badge">PATHSEEKER PASSPORT</div>
        <h1>Welcome to Your Future, <br><span class="fire-text">${name}</span>.</h1>
        <p>Your official Digital Career Passport has been initialized. You now have full access to tailored roadmaps, 150+ career blueprints, cognitive RIASEC telemetry, and industry masterclasses.</p>
      </div>

      <div class="passport-box">
        <div class="passport-field">
          <div class="passport-label">Candidate Name</div>
          <div class="passport-val">${name}</div>
        </div>
        <div class="passport-field">
          <div class="passport-label">Authenticated Email</div>
          <div class="passport-val">${email}</div>
        </div>
        <div class="passport-field">
          <div class="passport-label">Career Stage Track</div>
          <div class="passport-val" style="color: #10B981;">${role} Track</div>
        </div>
        <div class="passport-field" style="margin-bottom: 0;">
          <div class="passport-label">Ledger Verification Status</div>
          <div class="passport-val" style="color: #FFB800;">Genesis Pass • Active</div>
        </div>
      </div>

      <div style="text-align: center;">
        <a href="http://localhost:5173/dashboard" class="btn">Launch Candidate Command Center &rarr;</a>
      </div>

      <p style="text-align: center; font-size: 12px; color: #A1A1AA; margin-top: 10px;">
        Tip: Complete the 7-Step Holland Cognitive Assessment on /quiz to calibrate your multi-axis radar!
      </p>

      <div class="footer">
        <p>&copy; 2026 PathSeeker Career Passport Inc. All rights reserved.</p>
        <p>Cryptographically Secured & Verified Multi-Role Career Guidance Engine.</p>
      </div>
    </div>
  </div>
</body>
</html>
  `;
};

// 2. PASSWORD RESET OTP EMAIL TEMPLATE
export const getPasswordResetEmailHtml = (name, otp) => {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your PathSeeker Password</title>
  <style>
    body { margin: 0; padding: 0; background-color: #000000; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #FFFFFF; }
    .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
    .card { background-color: #0A0A0F; border: 1px solid #27272A; border-radius: 24px; padding: 36px 28px; box-shadow: 0 20px 40px rgba(0,0,0,0.8); text-align: center; }
    .shield-badge { display: inline-block; background-color: rgba(232,96,46,0.15); border: 1px solid rgba(232,96,46,0.4); color: #E8602E; font-weight: 800; font-size: 12px; padding: 6px 14px; border-radius: 20px; margin-bottom: 20px; }
    h1 { color: #FFFFFF; font-size: 24px; font-weight: 800; margin: 0 0 12px; }
    p { color: #D4D4D8; font-size: 14px; line-height: 1.6; margin: 0 0 24px; }
    .otp-card { background: #121218; border: 2px dashed #E8602E; border-radius: 20px; padding: 24px; margin: 24px 0; }
    .otp-label { color: #A1A1AA; font-size: 11px; font-family: monospace; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px; }
    .otp-code { color: #FF7A45; font-size: 38px; font-weight: 900; letter-spacing: 8px; font-family: monospace; }
    .btn { display: inline-block; background: linear-gradient(135deg, #FF7A45 0%, #E8602E 100%); color: #FFFFFF !important; text-decoration: none; font-weight: 800; font-size: 14px; padding: 14px 28px; border-radius: 14px; margin: 15px 0; }
    .warning { color: #71717A; font-size: 12px; line-height: 1.5; margin-top: 20px; }
    .footer { text-align: center; padding-top: 24px; border-top: 1px solid #1F1F23; margin-top: 24px; }
    .footer p { color: #52525B; font-size: 11px; margin: 4px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <div class="shield-badge">PASSPORT SECURITY PROTOCOL</div>
      <h1>Password Reset Request</h1>
      <p>Hello <strong style="color: #FFFFFF;">${name}</strong>, we received a request to reset the password associated with your PathSeeker Career Passport account.</p>

      <div class="otp-card">
        <div class="otp-label">YOUR ONE-TIME VERIFICATION CODE</div>
        <div class="otp-code">${otp}</div>
        <div style="color: #A1A1AA; font-size: 11px; margin-top: 10px;">This code is valid for 15 minutes.</div>
      </div>

      <div style="margin: 20px 0;">
        <a href="http://localhost:5173/login" class="btn">Enter OTP & Reset Password &rarr;</a>
      </div>

      <p class="warning">
        If you did not request this password reset, please ignore this email or change your password immediately. Your account remains completely secure.
      </p>

      <div class="footer">
        <p>&copy; 2026 PathSeeker Career Passport. 256-Bit Cryptographic Vault.</p>
      </div>
    </div>
  </div>
</body>
</html>
  `;
};

// 3. PASSPORT IDENTITY VERIFICATION EMAIL TEMPLATE
export const getPassportVerificationEmailHtml = (name, otp) => {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Digital Career Passport</title>
  <style>
    body { margin: 0; padding: 0; background-color: #000000; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #FFFFFF; }
    .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
    .card { background-color: #0A0A0F; border: 1px solid #27272A; border-radius: 24px; padding: 36px 28px; box-shadow: 0 20px 40px rgba(0,0,0,0.8); text-align: center; }
    .shield-badge { display: inline-block; background-color: rgba(16,185,129,0.15); border: 1px solid rgba(16,185,129,0.4); color: #10B981; font-weight: 800; font-size: 12px; padding: 6px 14px; border-radius: 20px; margin-bottom: 20px; }
    h1 { color: #FFFFFF; font-size: 24px; font-weight: 800; margin: 0 0 12px; }
    p { color: #D4D4D8; font-size: 14px; line-height: 1.6; margin: 0 0 24px; }
    .otp-card { background: linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(10,10,15,0.9) 100%); border: 2px dashed #10B981; border-radius: 20px; padding: 24px; margin: 24px 0; }
    .otp-label { color: #A1A1AA; font-size: 11px; font-family: monospace; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px; }
    .otp-code { color: #10B981; font-size: 38px; font-weight: 900; letter-spacing: 8px; font-family: monospace; text-shadow: 0 0 20px rgba(16,185,129,0.5); }
    .btn { display: inline-block; background: linear-gradient(135deg, #10B981 0%, #059669 100%); color: #000000 !important; text-decoration: none; font-weight: 900; font-size: 14px; padding: 14px 28px; border-radius: 14px; margin: 15px 0; box-shadow: 0 10px 25px rgba(16,185,129,0.3); }
    .footer { text-align: center; padding-top: 24px; border-top: 1px solid #1F1F23; margin-top: 24px; }
    .footer p { color: #52525B; font-size: 11px; margin: 4px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <div class="shield-badge">PASSPORT IDENTITY PROTOCOL</div>
      <h1>Verify Your Career Passport</h1>
      <p>Hello <strong style="color: #FFFFFF;">${name}</strong>, enter the 6-digit cryptographic verification code below to unlock your verified green badge on your Digital Passport ID card.</p>

      <div class="otp-card">
        <div class="otp-label">YOUR PASSPORT VERIFICATION CODE</div>
        <div class="otp-code">${otp}</div>
        <div style="color: #A1A1AA; font-size: 11px; margin-top: 10px;">Valid for 15 minutes.</div>
      </div>

      <div style="margin: 20px 0;">
        <a href="http://localhost:5173/dashboard" class="btn">Return to Dashboard & Verify &rarr;</a>
      </div>

      <div class="footer">
        <p>&copy; 2026 PathSeeker Career Passport Inc. Cryptographic Ledger Verification.</p>
      </div>
    </div>
  </div>
</body>
</html>
  `;
};

/**
 * Dispatch Welcome Email
 */
export const sendWelcomeEmail = async (name, email, role = 'Student') => {
  try {
    const transporter = createTransporter();
    const sender = process.env.SMTP_USER || 'ciphe7432@gmail.com';
    const fromAddress = `"PathSeeker Career Passport" <${sender}>`;

    const mailOptions = {
      from: fromAddress,
      to: email,
      subject: `Welcome to PathSeeker, ${name}! Your Career Passport is Active 🚀`,
      html: getWelcomeEmailHtml(name, email, role),
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`✉️ Welcome Email dispatched to ${email} (Message ID: ${info.messageId})`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error(`❌ Error sending Welcome Email to ${email}:`, error.message);
    return { success: false, error: error.message };
  }
};

/**
 * Dispatch Password Reset OTP Email
 */
export const sendPasswordResetEmail = async (name, email, otp) => {
  try {
    const transporter = createTransporter();
    const sender = process.env.SMTP_USER || 'ciphe7432@gmail.com';
    const fromAddress = `"PathSeeker Security" <${sender}>`;

    const mailOptions = {
      from: fromAddress,
      to: email,
      subject: `[PathSeeker] ${otp} is your Password Reset Verification Code 🔒`,
      html: getPasswordResetEmailHtml(name, otp),
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`🔒 Password Reset OTP dispatched to ${email} (Message ID: ${info.messageId})`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error(`❌ Error sending Password Reset Email to ${email}:`, error.message);
    return { success: false, error: error.message };
  }
};

/**
 * Dispatch Passport Identity Verification OTP Email
 */
export const sendPassportVerificationEmail = async (name, email, otp) => {
  try {
    const transporter = createTransporter();
    const sender = process.env.SMTP_USER || 'ciphe7432@gmail.com';
    const fromAddress = `"PathSeeker Attestation" <${sender}>`;

    const mailOptions = {
      from: fromAddress,
      to: email,
      subject: `[PathSeeker] ${otp} is your Digital Passport Verification Code 🛡️`,
      html: getPassportVerificationEmailHtml(name, otp),
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`🛡️ Passport Verification OTP dispatched to ${email} (Message ID: ${info.messageId})`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error(`❌ Error sending Passport Verification Email to ${email}:`, error.message);
    return { success: false, error: error.message };
  }
};
