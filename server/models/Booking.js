import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event"
  },
  bookingDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ["confirmed", "cancelled"],
    default: "confirmed"
  }
});

export default mongoose.model("Booking", bookingSchema);