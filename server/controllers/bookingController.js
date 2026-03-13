import Booking from "../models/Booking.js";
import Event from "../models/Event.js";

export const createBooking = async (req, res) => {
  try {
    const { eventId } = req.body;

    if (!eventId) {
      return res.status(400).json({ message: "Event ID is required" });
    }

    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    if (event.seatsBooked >= event.capacity)
      return res.status(400).json({ message: "Event full" });

    const booking = await Booking.create({
      userId: req.user.id,
      eventId
    });

    event.seatsBooked += 1;
    await event.save();

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const userBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user.id }).populate("eventId");
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    booking.status = "cancelled";
    await booking.save();

    res.json({ message: "Booking cancelled" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};