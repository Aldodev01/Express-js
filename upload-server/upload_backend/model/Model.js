import sequelize from "./connection";
import { DataTypes } from "sequelize";

// create table user
export const User = sequelize.define("user", {
  // membuat kolom untuk table user
  username: {
    // tipedata
    type: DataTypes.STRING,

    // not null / tidak boleh kosong
    allowNull: false,

    // unique, / tidak boleh ada yang sama
    unique: true,
  },

  email: {
    // tipedata
    type: DataTypes.STRING,

    // not null / tidak boleh kosong
    allowNull: false,

    // unique, / tidak boleh ada yang sama
    unique: true,

    // data yang masuk harus berupa email
    validate: {
      isEmail: true,
    },
  },
  password: {
    // tipedata
    type: DataTypes.STRING,

    // not null / tidak boleh kosong
    allowNull: false,
    // password harus lebih 6 dan kurang dari 50
    validate: {
      len: {
        args: [6, 50],
        msg: "Password harus minimal 6 dan maksimal 50",
      },
    },
  },
});

// create table avatar
export const Avatar = sequelize.define("avatar", {
  path: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  filename: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mime: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
  },
});

// relasi database
User.hasOne(Avatar, {
  foreignKey: "user_id",
  sourceKey: "id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Avatar.belongsTo(User, {
  foreignKey: "user_id",
});
