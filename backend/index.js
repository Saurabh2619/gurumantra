const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");

// Load environment variables from .env file
dotenv.config();

const app = express();

// ✅ Allowed origins (local + production frontend)
const allowedOrigins = [
  "http://localhost:3000",
  "https://www.gurumantra.info"
];

// ✅ CORS middleware
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
};

app.use(cors(corsOptions));

// ✅ Preflight (OPTIONS) handler for CORS (Vercel requires this)
app.options("*", cors(corsOptions));

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
});
