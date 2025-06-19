const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
const app = express();

// ✅ Allow all origins in preflight, then restrict in real requests
const allowedOrigins = [
  "http://localhost:3000",
  "https://www.gurumantra.info",
  "https://gurumantra.vercel.app"
];

const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (allowedOrigins.includes(req.header("Origin"))) {
    corsOptions = { origin: true, credentials: true };
  } else {
    corsOptions = { origin: false }; // Block other origins
  }
  callback(null, corsOptions);
};

app.use(cors(corsOptionsDelegate));
app.use(express.json());

// ✅ Register routes after CORS setup
app.use("/api/auth", authRoutes);

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
