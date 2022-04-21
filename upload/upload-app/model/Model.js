// TODO: Buat schema database
import { DataTypes } from "sequelize";
import sequelize from "./connection";

// TODO: Schema table user
// *Sequelize akan otomatis membuat table bernama user
// *Dengan column yang akan kita definisikan dibawah ini
export const User = sequelize.define("user", {
  // *Membuat Column username
  username: {
    // *Mendefinisikan tipe data untuk Column username
    type: DataTypes.STRING,

    // *Column username ini tidak boleh kosong
    allowNull: false,

    // *Column harus Unik agar tidak ada data yang sama
    unique: true,
  },

  // *Membuat Column Email
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },

  // *Membuat Column Password
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
