import express from "express";
import dotenv from "dotenv";
import { drowTables } from "./DB/connection.js";
import * as appRoutes from "./routes/index.routes.js";
dotenv.config();
const app = express();
drowTables();

app.use(express.json());
app.use(`${process.env.BASEURL}/auth`, appRoutes.authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${process.env.PORT}`);
});
