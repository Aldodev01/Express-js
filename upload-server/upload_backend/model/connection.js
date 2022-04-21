import { Sequelize } from "sequelize";
import env from "dotenv";
env.config();

const { DB_DIALECT, DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } =
  process.env;

const sequelize = new Sequelize({
  dialect: DB_DIALECT,
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME,
  username: DB_USER,
  password: DB_PASSWORD,
});

export default sequelize;
