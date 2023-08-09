import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import vehiclesRoute from "./routes/vehicles.js";
import reservationsRoute from "./routes/reservations.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import cookieParser from "cookie-parser";
import restaurantRoute from "./routes/Restaurant.js";
import roomsRoute from "./routes/rooms.js";
import SportBookingRoutes from "./routes/SportBookingsRoutes.js";
import SportEventRoutes from "./routes/SportEventsRoutes.js";
import * as path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);
var imageDir = path.join(__dirname, "/images");

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

//middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.static(imageDir));

// Travel
app.use("/api/auth", authRoute);
app.use("/api/reservations", reservationsRoute);
app.use("/api/vehicles", vehiclesRoute);
app.use("/api/users", usersRoute);
app.use("/sportbooking", SportBookingRoutes);
app.use("/sportevent", SportEventRoutes);

//hotel
app.use("/api/rooms", roomsRoute);
app.use("/api/hotels", hotelsRoute);

// Restaurant
app.use("/api/restaurant", restaurantRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  connect();
  console.log("Connected to backend!");
});
