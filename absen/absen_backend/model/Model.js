import sequelize from "./connnection";
import { DataTypes } from "sequelize";

// kita akan membuat table absen
export const Absen = sequelize.define("absen", {
  // membuat kolom untuk table absen
  nama_siswa: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nim: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  mata_kuliah: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export const foto_kehadiran = sequelize.define("foto_kehadiran", {
  path: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  filename: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// relasi
Absen.hasOne(foto_kehadiran, {
  foreignKey: "absen_id",
  sourceKey: "id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

foto_kehadiran.belongsTo(Absen, {
  foreignKey: "absen_id",
});
