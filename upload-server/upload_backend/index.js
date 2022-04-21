import express from "express";
import cors from "cors";
import path from "path";
import env from "dotenv";
import sequelize from "./model/connection";
import user from "./routes/user_routes";
env.config();

// alias
const app = express();
const { PORT } = process.env;

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "static/")));

// koneksi ke database
sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Connect to databse");
  })
  .catch((err) => {
    console.log(err);
  });

// buat middleware route
app.use("/api", user);

// listener
app.listen(PORT, () => {
  console.log(`Listen to port ${PORT}`);
});
