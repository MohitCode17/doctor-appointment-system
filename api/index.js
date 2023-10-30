import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { config } from "dotenv";
import { connectDb } from "./db/connectDb.js";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import doctorRoutes from "./routes/doctor.routes.js";
import reviewRoutes from "./routes/review.routes.js";

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
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/doctors", doctorRoutes);
app.use("/api/v1/reviews", reviewRoutes);

// routes
app.get("/test", (req, res) => {
  res.send("Api is working fine!!");
});

app.listen(port, () => {
  connectDb();
  console.log(`Server is running on http://localhost:${port}`);
});
