import express from "express";
import cors from "cors";
import path from "path";
import mysql from "mysql2";

const app = express();

//* Connect to Database
const db = mysql.createConnection({
  database: "mading",
  host: "localhost",
  user: "root",
  password: "",
});

//* ROUTE
app.get("/reset", (req, res) => {
  //* Create table user
  db.query(`drop table user`);
  db.query(`
    create table user (
      id int primary key auto_increment,
      username varchar(100),
      email varchar(100),
      password varchar(100),
      createAd timestamp
      );
  `);
  res.send("Success create table user dan reset");
});

//* Middleware
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extends: false,
  })
);

app.get("/user_add/", async (req, res) => {
  // kita akan tangkap query dari user
  const { username, email, password } = req.query;

  // // response
  // res.send({
  //   username: username,
  //   email: email,
  // });

  let query = `insert into user (username, email, password) values ("${username}", "${email}", "${password}")`;

  // jalankan querynya
  db.query({ sql: query }, (err, result, field) => {
    if (err) {
      res.send({
        success: false,
        msg: "Gagal memasukan data",
      });
    } else {
      // res.send({
      //   success: true,
      //   data: result,
      //   msg: "Berhasil memasukan data",
      // });
      res.redirect("http://localhost:5500/index.html");
    }
  });
});

//delete
app.get("/user_delete", (req, res) => {
  const { id } = req.query;
  db.query({ sql: `delete from user where id=${id}` }, (err, result) => {
    if (err) {
      res.send({
        success: false,
        msg: "Gagal menghapus data",
      });
    } else {
      // res.send({
      //   success: true,
      //   data: result,
      //   msg: "Berhasil menghapus data",
      // });
      res.redirect("http://localhost:5500/index.html");
    }
  });
});

// get data
app.get("/user_read", (req, res) => {
  const query = `select * from user`;

  db.query({ sql: query }, (err, result) => {
    res.json(result);
  });
});

app.listen(8080, () => {
  console.log("Starting in port 8080");
});
