const { DataTypes } = require("sequelize");
const sequelize = require("./connection");

// Buat table costumer
const Costumer = sequelize.define("costumer", {
  nama_depan: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nama_belakang: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  alamat: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  usia: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  jenis_kelamin: {
    type: DataTypes.ENUM(["pria", "wanita"]),
  },
  store_location_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  voucher_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  photo_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = { Costumer };
