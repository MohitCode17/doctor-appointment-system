import express from "express";
import {
  createReview,
  getAllReviews,
} from "../controllers/review.controller.js";
import { verifyToken, restrict } from "../utils/verifyToken.js";

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(getAllReviews)
  .post(verifyToken, restrict(["patient"]), createReview);

export default router;
