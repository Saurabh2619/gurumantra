const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
const app = express();

// ✅ Allowed Origins
const allowedOrigins = [
  "http://localhost:3000",
  "https://www.gurumantra.info",
  "https://gurumantra.vercel.app"
];

// ✅ Global CORS Setup
app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

// ✅ Handle preflight requests
app.options("*", cors({
  origin: allowedOrigins,
  credentials: true
}));

// ✅ Parse incoming JSON
app.use(express.json());

// ✅ Define routes
app.use("/api/auth", authRoutes);

// ✅ Start server (for Render hosting)
const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});
