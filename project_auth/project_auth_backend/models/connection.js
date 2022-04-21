import { Sequelize } from "sequelize";

const sq = new Sequelize({
  dialect: "sqlite",
  storage: "../db.sqlite",
});

export default sq;
