import express from "express";
import * as categoryController from "../../controllers/categories.controller.js";
import { validateSchema } from "../../middelware/validationSchema.js";
import { categorySchema } from "../../schema/category.schema.js";
const categoryRoutes = express.Router();

categoryRoutes.get("/", categoryController.getCategories);
categoryRoutes.post(
  "/",
  validateSchema(categorySchema),
  categoryController.createCategory
);
categoryRoutes.put(
  "/:id",
  validateSchema(categorySchema),
  categoryController.updateCategory
);
categoryRoutes.delete("/:id", categoryController.deleteCategory);

export default categoryRoutes;
