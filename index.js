import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import authRouter from "./routers/auth/authRoutes.js";
import jobPortalRouter from "./routers/jobportal/jobPortalRoutes.js";
import allUsersRouter from "./routers/allusers/allUsersRoutes.js";
import { authenticateUser } from "./middleware/authMiddleware.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.get("/", (req, res) => {
  res.send("Welcome to community app admin");
});

app.use("/api/admin/auth", authRouter);
app.use("/api/admin/allUsers", authenticateUser, allUsersRouter);
app.use("/api/admin/jobportal", authenticateUser, jobPortalRouter);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "Not Found" });
});
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;
try {
  await mongoose.connect(process.env.MONGODB_URI);
  app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
