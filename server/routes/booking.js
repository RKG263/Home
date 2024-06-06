import { Router } from "express";
import Booking from "../models/Booking.js";

const router = Router();

/* CREATE BOOKING */
router.post("/create", async (req, res) => {
  try {
    const { customerId, hostId, listingId, startDate, endDate, totalPrice } = req.body;
    const newBooking = new Booking({ customerId, hostId, listingId, startDate, endDate, totalPrice });
    await newBooking.save();
    res.status(200).json(newBooking);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Failed to create a new Booking!", error: err.message });
  }
});

export default router;
