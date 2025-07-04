"use client"
import DefaultLayout from "../defaultlayout"
import { Mail, Phone, MapPin, Send, User, MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", form)
    // You can integrate Supabase/API/Formspree here
  }

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <div className="relative py-28 md:py-36 bg-gradient-to-br from-[#0d47a1] via-[#1565c0] to-[#1976d2] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10 z-0" />
        <div
          className={`container max-w-6xl mx-auto px-4 text-center relative z-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent mb-4">
            Get in Touch with Guru Mantra
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Have questions? Need career guidance? Contact our team for support and assistance.
          </p>
        </div>
      </div>

      {/* Rest of the page (Contact Info & Form) remains unchanged */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          {/* Info Panel */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Let’s Talk</h2>
              <p className="text-gray-600 text-lg">
                Whether you have questions about colleges, exams, or the admission process – we’re here to help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[#e3f2fd] text-[#0d47a1]">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Phone</p>
                  <p className="text-gray-600">+91 91258 00871</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[#ede7f6] text-[#673ab7]">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Email</p>
                  <p className="text-gray-600">gurumantra871@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[#e8f5e9] text-[#2e7d32]">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Location</p>
                  <p className="text-gray-600">Pan India • Online Counseling Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/60 backdrop-blur-xl border border-gray-200 shadow-xl rounded-2xl p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1976d2] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1976d2] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-3 text-gray-400" size={18} />
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Type your message"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1976d2] outline-none resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0d47a1] to-[#1565c0] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </DefaultLayout>
  )
}
