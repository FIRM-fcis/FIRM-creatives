import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}-${file.originalname}`);
    },
});

const fileFilter = (req, file, cb) => {
    // Allowed file types
    const allowedMimeTypes = [
        'image/jpeg',
        'image/png',
        'image/gif',
        'image/webp',
        'video/mp4',
        'video/mpeg',
        'application/pdf'
    ];

    if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true);  // Accept the file
    } else {
        cb(new Error('Invalid file type. Only images, videos, and PDFs are allowed.'), false);  // Reject the file
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
});

export default upload;
