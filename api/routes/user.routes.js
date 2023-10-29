import express from "express";
import {
  updateUser,
  deleteUser,
  getAllUser,
  getSingleUser,
} from "../controllers/user.controller.js";
const router = express.Router();

// --------------- Update User Route -----------------
router.put("/update/:id", updateUser);

// --------------- Delete User Route -----------------
router.delete("/delete/:id", deleteUser);

// --------------- Get All User Route -----------------
router.get("/", getAllUser);

// --------------- Get Single User Route -----------------
router.get("/:id", getSingleUser);

export default router;
