import express from "express";
import {
  updateDoctor,
  deleteDoctor,
  getAllDoctor,
  getSingleDoctor,
} from "../controllers/doctor.controller.js";
import { restrict, verifyToken } from "../utils/verifyToken.js";
import reviewRoutes from "../routes/review.routes.js";

const router = express.Router();

// Nested routes: /doctor/doctorId/reviews
router.use("/:doctorId/reviews", reviewRoutes);

// --------------- Update Doctor Route -----------------
router.put("/update/:id", verifyToken, restrict(["doctor"]), updateDoctor);

// --------------- Delete Doctor Route -----------------
router.delete("/delete/:id", verifyToken, restrict(["doctor"]), deleteDoctor);

// --------------- Get All Doctor Route -----------------
router.get("/", getAllDoctor);

// --------------- Get Single Doctor Route -----------------
router.get("/:id", getSingleDoctor);

export default router;
