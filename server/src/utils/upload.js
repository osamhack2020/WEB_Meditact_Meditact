import multer from 'multer';

const maxSize = 1024 * 1024 * 5;

// file storage setting
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/files');
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
  },
});

// upload options middleware
let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single('file');

export default uploadFile;
