const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
const app = express();

// ✅ Reflect origin automatically + allow credentials
app.use(cors({
  origin: (origin, callback) => {
    callback(null, true); // Reflects request origin in Access-Control-Allow-Origin
  },
  credentials: true,
}));

app.use(express.json());
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
