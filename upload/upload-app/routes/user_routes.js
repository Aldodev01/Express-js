import express from "express";
import { User } from "../model/Model";
import { form_data } from "../services/multer_service";

const user = express.Router();

// CREATE, READ, UPDATE, DELETE, FIND, SEARCH

// TODO: Create User
user.post("/user-create", form_data.single("file"), (req, res) => {
  // !Cara jadul
  // const data = req.query;

  const data = req.body;
  const file = req.file;

  // res.send({ data: data, file: file });

  // *Memasukan data ke table user
  User.create({
    username: data.username,
    email: data.email,
    password: data.password,
  })
    .then((result) => {
      res.send({
        success: true,
        data: result,
        file: file,
      });
    })
    .catch((error) => {
      res.send({
        success: false,
        error: error,
        msg: "Data tidak bisa ditambahkan",
      });
    });
});

//TODO: Read data user
user.get("/user-read", (req, res) => {
  User.findAll()
    .then((result) => {
      res.send({
        success: true,
        data: result,
      });
    })
    .catch((error) => {
      res.send({
        success: false,
        error: error,
        msg: "Data tidak dapat ditemukan",
      });
    });
});

//TODO: Delete data user
user.delete("/user-delete", (req, res) => {
  const data = req.body;

  User.findOne({ where: { id: data.id } })
    .then((record) => {
      record
        .destroy()
        .then((result) => {
          res.send({
            success: true,
            data: result,
          });
        })
        .catch((err) => {
          res.send({
            success: false,
            error: err,
            msg: "Data tidak dapat dihapus",
          });
        });
    })
    .catch((err) => {
      res.send({
        success: false,
        error: err,
        msg: "internal server error",
      });
    });
});

//TODO: Mengedit data
user.put("/user-update", (req, res) => {
  const data = req.body;

  User.findOne({ where: { id: data.id } }).then((record) => {
    if (!record) {
      res.send({
        success: false,
        msg: "data tidak ditemukan",
      });
    } else {
      record.update(data).then((result) => {
        res.send({
          success: true,
          data: result,
        });
      });
    }
  });
});

export default user;

// ! User - untuk Schema
// ! user - untuk routing
