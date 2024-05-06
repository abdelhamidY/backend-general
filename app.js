import express from "express";
import dotenv from "dotenv";
import { drowTables } from "./DB/connection.js";
import * as appRoutes from "./routes/index.routes.js";
import ProductModel from "./DB/models/product.model.js";
import CategoryModel from "./DB/models/category.model.js";
dotenv.config();
const app = express();
drowTables();

CategoryModel.hasOne(ProductModel, {
  onDelete: "cascade",
  onUpdate: "cascade",
});

app.use(express.json());
app.use(`${process.env.BASEURL}/auth`, appRoutes.authRoutes);
app.use(`${process.env.BASEURL}/categories`, appRoutes.categoryRoutes);
app.use(`${process.env.BASEURL}/products`, appRoutes.productRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${process.env.PORT}`);
});
