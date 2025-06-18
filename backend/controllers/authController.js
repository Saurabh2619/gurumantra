const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const supabase = require("../config/supabaseClient");

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

// Register Controller
exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const { data, error } = await supabase
      .from("user")
      .insert([{ name, email, password: hashedPassword }]);

    if (error) return res.status(400).json({ error: error.message });

    return res.status(201).json({ message: "User registered successfully", data });
  } catch (err) {
    console.error("Register error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Login Controller
exports.login = async (req, res) => {
  try {
    console.log("Login Attempt with Email:", req.body.email);

    const { email, password } = req.body;

    const { data: users, error } = await supabase
      .from("user")
      .select("*")
      .eq("email", email)
      .limit(1);

    if (error) {
      console.error("❌ Supabase fetch error:", error.message);
      return res.status(400).json({ error: "Database error" });
    }

    if (!users || users.length === 0) {
      return res.status(400).json({ error: "User not found" });
    }

    const user = users[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid password" });

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "7d" });

    console.log("✅ Login successful");
    return res.status(200).json({ message: "Login successful", token, user });

  } catch (err) {
    console.error("🔥 Server error during login:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
