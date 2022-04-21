// jalur endpoint
import express from "express";
import { Avatar, User } from "../model/Model";
import upload from "../services/upload_service";

const user = express.Router();

// create route
user.post("/user_create", upload.single("avatar"), async (req, res) => {
  try {
    // menangkap request dari client
    const data = await req.body;
    const file = await req.file;

    // console.log({ data, file });

    // store data ke database
    const storeData = await User.create({
      username: data.username,
      email: data.email,
      password: data.password,
    });

    const storeAvatarData = await Avatar.create({
      path: `/uploads/${file.filename}`,
      filename: file.filename,
      mime: file.mimetype,
      user_id: JSON.parse(storeData.id),
    });

    // promise all

    const result = await Promise.all([storeData, storeAvatarData]);

    res.status(201).send({
      data: result[0],
      file: result[1],
    });
  } catch (error) {
    res.status(500).send({
      msg: "Gagal upload data",
    });
  }
});

// Read
user.get("/user_read", async (req, res) => {
  try {
    const result = await User.findAll({
      include: [
        {
          model: Avatar,
          attributes: ["path", "filename"],
        },
      ],
    });

    res.status(200).send(result);
  } catch (error) {
    res.send({
      success: false,
      msg: "Gagal mendapatkan data",
    });
  }
});

// // delete
// user.delete("/user_delete", async (req, res) => {
//   try {
//     const result = await User.findOne

//   } catch (error) {}
// });

export default user;
