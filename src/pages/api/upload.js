import fs from 'fs';
import path from 'path';
import multer from 'multer';

// تنظیمات Multer برای ذخیره فایل‌ها
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const fileType = file.mimetype.split('/')[0];

    let folder = '';
    if (fileType === 'image') {
      folder = './public/images';
    } else if (fileType === 'video') {
      folder = './public/videos';
    } else {
      return cb(new Error('فرمت فایل پشتیبانی نمی‌شود'), false);
    }

    const dir = path.join(process.cwd(), folder);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "_" + file.originalname.replace(/\s/g, "_"); // حذف فاصله‌ها از نام فایل
    cb(null, uniqueName);
  },
});

// اعتبارسنجی فایل‌ها
const fileFilter = (req, file, cb) => {
  const allowedImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
  const allowedVideoTypes = ['video/mp4', 'video/webm', 'video/avi'];

  if (allowedImageTypes.includes(file.mimetype)) {
    cb(null, true); // اجازه دادن به فایل‌های عکس
  } else if (allowedVideoTypes.includes(file.mimetype)) {
    cb(null, true); // اجازه دادن به فایل‌های ویدیو
  } else {
    cb(new Error('فرمت فایل پشتیبانی نمی‌شود'), false); // رد کردن فایل‌های غیرمجاز
  }
};

// محدودیت حجم فایل
const limits = {
  fileSize: 2 * 1024 * 1024 * 1024, // 2GB حداکثر حجم برای ویدیوها
};

// تنظیمات Multer
const upload = multer({
  storage,
  fileFilter,
  limits,
});

// API route برای آپلود فایل
export const config = {
  api: {
    bodyParser: false, // غیرفعال کردن bodyParser پیش‌فرض Next.js
  },
};

const handler = (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  upload.single('file')(req, res, (err) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    }

    if (!req.file) {
      return res.status(400).json({ message: 'فایلی ارسال نشده است' });
    }

    let filePath = '';
    if (req.file.mimetype.startsWith('image')) {
      filePath = `/images/${req.file.filename}`;
    } else if (req.file.mimetype.startsWith('video')) {
      filePath = `/videos/${req.file.filename}`;
    }

    return res.status(200).json({
      message: 'فایل با موفقیت آپلود شد',
      filePath,
    });
  });
};


export default handler;
