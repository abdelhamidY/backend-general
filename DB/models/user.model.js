import { sequelize } from "../connection.js";
import { DataTypes } from "sequelize";
const userModel = sequelize.define(
  "User",
  {
    username: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(400),
    },
    phone_number: {
      type: DataTypes.STRING(20),
    },
    role: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

export default userModel;
