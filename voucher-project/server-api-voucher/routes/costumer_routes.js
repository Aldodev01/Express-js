// IMPORT yang dibutuhkan
const express = require("express");
const { Op } = require("sequelize");
const { Costumer } = require("../model/Model");
const costumer = express.Router();

// const dummyCostumer = [];

// CREATE COSTUMER
costumer.post("/costumer_create", (req, res) => {
  // dapatkan data costumer dari front end
  const body = req.body;

  // // masukan data dummy
  // dummyCostumer.push(body);

  // TODO: masukan data ke database

  Costumer.create(body)
    .then((result) => {
      // kembalikan response
      res.status(201).json({
        success: true,
        query: result,
        date: new Date().toDateString(),
      });
    })
    .catch((error) => {
      res.status(404).json(error);
    });
});

// READ COSTUMER
costumer.get("/costumer_read", (req, res) => {
  Costumer.findAll()
    .then((result) => {
      res.status(200).json({
        success: true,
        query: result,
      });
    })
    .then((error) => {
      res.status(500).json(error);
    });
  // res.status(200).json(dummyCostumer);
});

// UPDATE COSTUMER
costumer.put("/costumer_update", (req, res) => {
  const body = req.body;

  Costumer.update(body, { where: { id: body.id } })
    .then((result) => {
      res.status(200).json({
        success: true,
        query: result,
      });
    })
    .catch((error) => {
      res.status(404).json({
        success: false,
        error: error,
      });
    });
});

// DELETE COSTUMER
costumer.delete("/costumer_delete", (req, res) => {
  const body = req.body;

  Costumer.destroy({ where: { id: body.id } })
    .then((result) => {
      res.status(200).json({
        success: true,
        deleted: result,
      });
    })
    .catch((error) => {
      res.status(404).json({
        success: false,
        error: error,
      });
    });
});

// SEARCH COSTUMER
costumer.post("/costumer_search", (req, res) => {
  const { filter } = req.body;
  const key = Object.keys(filter);
  const value = Object.values(filter);

  Costumer.findAll({
    where: {
      [key]: {
        [Op.like]: `%${value}%`,
      },
    },
  })
    .then((result) => {
      res.status(200).json({
        success: true,
        query: result,
      });
    })
    .catch((error) => {
      res.status(404).json({
        success: false,
        error: error,
      });
    });
});

// Find Costumer
costumer.post("/costumer_find", (req, res) => {
  const { filter } = req.body;

  Costumer.findOne({ where: filter })
    .then((result) => {
      res.status(200).json({
        success: true,
        query: result,
      });
    })
    .catch((error) => {
      res.status(404).json({
        success: false,
        error: error,
      });
    });
});

module.exports = costumer;
