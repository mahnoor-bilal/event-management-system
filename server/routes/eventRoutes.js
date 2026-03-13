import express from "express";
import {
  createEvent,
  getEvents,
  updateEvent,
  deleteEvent
} from "../controllers/eventController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getEvents);
router.post("/", protect, createEvent);
router.put("/:id", protect, adminOnly, updateEvent);
router.delete("/:id", protect, adminOnly, deleteEvent);

export default router;