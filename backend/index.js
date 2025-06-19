const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
const app = express();

// ✅ Allowed frontend origins
const allowedOrigins = [
  "http://localhost:3000",                 // Local dev
  "https://www.gurumantra.info",           // Custom domain
  "https://gurumantra.vercel.app"          // Vercel deployment
];

// ✅ CORS configuration
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like Postman) or from listed domains
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // Preflight support

// ✅ Middleware
app.use(express.json());

// ✅ Routes
app.use("/api/auth", authRoutes);

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
});
