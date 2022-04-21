import express from "express";
import cors from "cors";
import path from "path";
import env from "dotenv";
import sequelize from "./model/connection";
import { User } from "./model/Model";
import user from "./routes/user_routes";

//TODO: Config
env.config();

// *Memanggil .env
const {
  PORT,
  DB_NAME,
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  SECRET_KEY,
} = process.env;

console.log(PORT);

//TODO: Alias
const app = express();

//TODO: Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extends: false }));
app.use(express.static(path.join(__dirname, "static/")));

//TODO: Routing Middleware
app.use("/api", user);

//TODO: Connection to database
sequelize
  // !Membuat database reset automatic
  .sync({ force: true })
  .then(() => {
    console.log("Berhasil konek ke database");
  })
  .catch((error) => {
    console.log(error);
  });

//TODO: Listen
app.listen(PORT, () => {
  console.log(`listen port ${PORT}`);
});
