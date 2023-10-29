import express from "express";
import {
  updateDoctor,
  deleteDoctor,
  getAllDoctor,
  getSingleDoctor,
} from "../controllers/doctor.controller.js";
const router = express.Router();

// --------------- Update Doctor Route -----------------
router.put("/update/:id", updateDoctor);

// --------------- Delete Doctor Route -----------------
router.delete("/delete/:id", deleteDoctor);

// --------------- Get All Doctor Route -----------------
router.get("/", getAllDoctor);

// --------------- Get Single Doctor Route -----------------
router.get("/:id", getSingleDoctor);

export default router;
