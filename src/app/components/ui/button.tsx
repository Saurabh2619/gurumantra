import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
}

export const Button: React.FC<ButtonProps> = ({ variant = "default", className, ...props }) => {
  const base = "px-4 py-2 rounded-md font-semibold transition-colors focus:outline-none"
  const variants = {
    default: "bg-[#3730A3] text-white hover:bg-[#3730A3]/90",
    outline: "border border-[#3730A3] text-[#3730A3] hover:bg-[#3730A3] hover:text-white",
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props} />
  )
}
