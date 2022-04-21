import express from "express";

const absen = express.Router();

// CREATE ABSEN
absen.post("/absen_create", async (req, res) => {
  try {
    const data = await req.body;
    const file = await req.file;
  } catch (error) {}
});
