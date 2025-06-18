const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");

// Load environment variables from .env file
dotenv.config();

const app = express();

// ✅ CORS setup updated here to allow both local and live frontend
const allowedOrigins = [
  "http://localhost:3000",            // Local development frontend
  "https://www.gurumantra.info"       // Live production frontend
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like Postman or curl), or from allowed origins
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true                  // Allow sending cookies (if any)
}));

// Middleware to parse JSON body
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
});
