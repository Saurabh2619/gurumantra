const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
const app = express();

// ✅ Global CORS Setup with allowed origins
const allowedOrigins = [
  "http://localhost:3000",
  "https://www.gurumantra.info",
  "https://gurumantra.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

// ✅ Handle preflight OPTIONS requests
app.options("*", cors());

// ✅ Parse incoming JSON
app.use(express.json());

// ✅ Define routes
app.use("/api/auth", authRoutes);

// ✅ Start server on Render
const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});
