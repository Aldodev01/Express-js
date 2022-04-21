import multer from "multer";

//TODO: Config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "static/public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, "AldoAssets" + Date.now() + "." + file.mimetype.split("/")[1]);
  },
});

// *Buat variable untuk multer
export const form_data = multer({
  storage: storage,
});
