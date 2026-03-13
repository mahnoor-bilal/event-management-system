import express from "express";
import {
  createBooking,
  userBookings,
  cancelBooking
} from "../controllers/bookingController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createBooking);
router.get("/user", protect, userBookings);
router.delete("/:id", protect, cancelBooking);

export default router;