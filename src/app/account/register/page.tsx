"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Registration successful");
        console.log("Registered user:", data);
        setName("");
        setEmail("");
        setPassword("");
      } else {
        alert(data.error || "Registration failed");
      }
    } catch (error) {
      alert("❌ Error during registration");
      console.error("Registration error:", error);
    }
  };

  return (
    <form
      onSubmit={handleRegister}
      className="space-y-4 max-w-md mx-auto mt-10 p-4 border rounded-md"
    >
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full rounded"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full rounded"
        required
      />
      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white p-2 w-full rounded"
      >
        Register
      </button>
    </form>
  );
}
