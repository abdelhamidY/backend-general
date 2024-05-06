import { sequelize } from "../connection.js";
import { DataTypes } from "sequelize";

const CategoryModel = sequelize.define(
  "Category",
  {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

export default CategoryModel;
