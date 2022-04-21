import express from "express";
import cors from "cors";
import path from "path";
import env from "dotenv";
env.config();

// alias
const app = express();
const {
  PORT,
  DB_NAME,
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  SECRET_KEY,
} = process.env;

// middleware
app.use(cors());
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "static/")));

// middleware route
// app.get("/", (req, res) => {
//   res.send("Hallo bekeng");
// });

app.listen(PORT, () => {
  console.log(`Berhasil menjalankan port ${PORT}`);
});

// routing
