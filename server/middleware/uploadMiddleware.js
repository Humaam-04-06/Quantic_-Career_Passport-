import multer from 'multer';
import path from 'path';
import fs from 'fs';
import os from 'os';

// Safe upload directory for serverless (Vercel uses /tmp) and local dev
const isServerless = !!process.env.VERCEL || process.env.NODE_ENV === 'production';
const uploadDir = isServerless 
  ? path.join(os.tmpdir(), 'uploads')
  : path.join(process.cwd(), 'uploads');

try {
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }
} catch (e) {
  console.warn('Upload dir note:', e.message);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedExtensions = /pdf|doc|docx|png|jpg|jpeg/;
  const extname = allowedExtensions.test(path.extname(file.originalname).toLowerCase());

  if (extname) {
    return cb(null, true);
  } else {
    cb(new Error('Only document (PDF, DOCX) and image files are allowed'));
  }
};

export const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: fileFilter,
});
