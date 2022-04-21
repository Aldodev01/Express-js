import { Sequelize } from "sequelize";
import env from "dotenv";
env.config();

const {
  PORT,
  DB_NAME,
  DB_DIALECT,
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  SECRET_KEY,
} = process.env;

console.log(PORT);

//TODO: Alias
const sequelize = new Sequelize({
  dialect: DB_DIALECT,
  database: DB_NAME,
  port: DB_PORT,
  host: DB_HOST,
  username: DB_USERNAME,
  password: "",
});

export default sequelize;
