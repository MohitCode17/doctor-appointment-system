import express from "express";
import {
  updateUser,
  deleteUser,
  getAllUser,
  getSingleUser,
} from "../controllers/user.controller.js";
import { restrict, verifyToken } from "../utils/verifyToken.js";
const router = express.Router();

// --------------- Update User Route -----------------
router.put("/update/:id", verifyToken, restrict(["patient"]), updateUser);

// --------------- Delete User Route -----------------
router.delete("/delete/:id", verifyToken, restrict(["patient"]), deleteUser);

// --------------- Get All User Route -----------------
router.get("/", verifyToken, restrict(["admin"]), getAllUser);

// --------------- Get Single User Route -----------------
router.get("/:id", verifyToken, restrict(["patient"]), getSingleUser);

export default router;
