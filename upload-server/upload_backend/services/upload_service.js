import multer from "multer";
import path from "path";

const avatar_storage = multer.diskStorage({
  // menentukan direktori file
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../static/uploads/"));
  },
  // menentukan nama file
  filename: (req, file, cb) => {
    cb(
      null,
      req.body.username +
        "-" +
        file.fieldname +
        "." +
        file.mimetype.split("/")[1]
    );
  },
});

const upload = multer({ storage: avatar_storage });

export default upload;
