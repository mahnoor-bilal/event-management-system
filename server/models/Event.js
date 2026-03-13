import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  capacity: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    default: "other"
  },
  price: {
    type: Number,
    default: 0
  },
  image: {
    type: String,
    default: null
  },
  seatsBooked: {
    type: Number,
    default: 0
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Event", eventSchema);