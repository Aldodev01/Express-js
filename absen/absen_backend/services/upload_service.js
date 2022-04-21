import multer from "multer";
import path from "path";

// kita akan buat config storagenya
const upload_storage = multer.diskStorage({
  // mengatur lokasi file upload
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../static/uploads/"));
  },

  // mengatur nama file
  filename: (req, res, cb) => {
    // aldodevv-123123.jpg
    cb(
      null,
      req.body.nama_siswa.split(" ").join("-") +
        "-" +
        Date.now() +
        "." +
        file.mimetype.split("/")[1]
    );
  },
});
