const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
const app = express();

// ✅ Global CORS Setup
app.use(cors({
  origin: function (origin, callback) {
    const allowedOrigins = [
      "http://localhost:3000",
      "https://www.gurumantra.info",
      "https://gurumantra.vercel.app"
    ];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

app.use(express.json());
app.use("/api/auth", authRoutes);

// ✅ Required for Render: bind to 0.0.0.0
const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});
