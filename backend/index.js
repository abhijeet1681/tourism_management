import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import tourRoute from "./routes/tours.js";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import reviewRoute from "./routes/reviews.js";
import bookingRoute from "./routes/bookings.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

const corsOptions = {
  origin: true,
  credentials: true,
};

mongoose.set("strictQuery", false);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:");
    process.exit(1); // Stop server if DB connection fails
  }
};

// Middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

// Routes
// app.use("/", (req, res) => {
//   res.send("Welcome to Travel Booking API");
// });

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/booking", bookingRoute);

// Start server
try {
  app.listen(port, async() => {
    await connect();
    console.log(`Server listening on port ${port}`);
  });
  
  
} catch (error) {
  console.error("MongoDB connection failed:");
  process.exit(1); // Stop server if DB connection fails
  
}
