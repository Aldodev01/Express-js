// IMPORT PACKAGE YANG HARUS DIBUTUHKAN
const express = require("express");
const cors = require("cors");
const costumer = require("./routes/costumer_routes");
const sequelize = require("./model/connection");
require("dotenv").config();
const app = express();

// middleware
app.use(cors());
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: false }));

// dummy data
// const dummyData = [
//   {
//     id: 1,
//     username: "aldodevv",
//     email: "aldodevox@gmail.com",
//     password: "1qazxsw2",
//   },
// ];

// // routing dummy
// //* READ
// app.get("/api/test_read", (req, res) => {
//   res.json(dummyData);
// });

// //* CREATE
// app.post("/api/test_create", (req, res) => {
//   // tangkap req body dari frontend
//   const body = req.body;

//   // tambahkan  / push ke dummy Data
//   dummyData.push(body);

//   // response kembali dengan body tersebut
//   res.json(dummyData);
// });

// TODO: ROUTING REAL
app.use("/api", costumer);

// Koneksi ke database
sequelize
  .sync()
  .then(() => {
    console.log("success connect to database");
  })
  .catch((err) => {
    console.log(err);
  });

// listener
app.listen(8080, () => {
  console.log("server listen port 8080");
});
