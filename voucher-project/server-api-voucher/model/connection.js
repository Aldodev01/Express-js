const { Sequelize } = require("sequelize");
require("dotenv").config();

const { DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;

const sequelize = new Sequelize({
  dialect: "mysql",
  database: DB_NAME,
  port: 3306,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  host: DB_HOST,
});

module.exports = sequelize;
