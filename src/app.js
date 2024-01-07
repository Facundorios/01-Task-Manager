//Dependencies importations
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

//Routes importation
import authRoutes from "./routes/auth.routes.js";
import tasktsRoutes from "./routes/task.routes.js";

const app = express();

//Initializations
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", tasktsRoutes);

export default app;
