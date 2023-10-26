import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { config } from "dotenv";
import { connectDb } from "./db/connectDb.js";
import authRoutes from "./routes/auth.routes.js";

// .env configuration
config();

const app = express();
const port = process.env.PORT || 8000;

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: true,
  })
);
app.use("/api/v1/auth", authRoutes);

// routes
app.get("/test", (req, res) => {
  res.send("Api is working fine!!");
});

app.listen(port, () => {
  connectDb();
  console.log(`Server is running on http://localhost:${port}`);
});
