import express from "express";
import * as authController from "../../controllers/auth.controller.js";
import { validateSchema } from "../../middelware/validationSchema.js";
import { loginSchema, registrationSchema } from "../../schema/auth.schema.js";
const authRoutes = express.Router();

authRoutes.post(
  "/register",
  validateSchema(registrationSchema),
  authController.signUp
);
authRoutes.post("/login", validateSchema(loginSchema), authController.signIn);
authRoutes.post("/logout", authController.logOut);

export default authRoutes;
