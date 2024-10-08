import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import productRoutes from "./routes/products.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json()); //Convierte los req.body en formato json
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", productRoutes);

export default app;
