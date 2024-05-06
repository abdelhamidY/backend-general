import express from "express";
import * as productController from "../../controllers/product.controller.js";
import { validateSchema } from "../../middelware/validationSchema.js";
import { productSchema } from "../../schema/product.schema.js";
const productRoutes = express.Router();

productRoutes.get("/", productController.getProducts);
productRoutes.post(
  "/",
  validateSchema(productSchema),
  productController.createProduct
);
productRoutes.put(
  "/:id",
  validateSchema(productSchema),
  productController.updateProduct
);
productRoutes.delete("/:id", productController.deleteProduct);

productRoutes.get("/category/:id", productController.getProductsByCategory);

export default productRoutes;
