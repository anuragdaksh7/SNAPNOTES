import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Specify the directory where uploaded files will be stored
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)); // Use the current timestamp as the filename
    },
});
const upload = multer({ storage: storage });

export default upload;