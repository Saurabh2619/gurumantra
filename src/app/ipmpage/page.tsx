"use client"

import type React from "react"
import { useState, useEffect } from "react"

export default function IPMCareersLanding() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    city: "",
    year: "",
  })
  const [studentsEnrolled, setStudentsEnrolled] = useState(5355)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentFeature, setCurrentFeature] = useState(0)
  const [activePopup, setActivePopup] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [notification, setNotification] = useState("")
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentMobileSlide, setCurrentMobileSlide] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const features = [
    "Best & Promising IPMAT Results",
    "Mentoring by IIM Alumni",
    "Awarded #1 by ZEE News",
    "Gained Media Exposure for Excellent Academic Performance",
  ]

  const mentors = [
    {
      name: "Ashutosh Mishra",
      role: "Master IIM Ahmedabad",
      role2: "Bachelors Thapar University",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Deepak Kushwaha",
      role: "Master IIM Lucknow",
      role2: "Bachelors NIT Srinagar",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Taruna Khanna",
      role: "GCC UCLA Extension",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Dr. Swati A. Mishra",
      role: "Director Operations Lucknow Centre",
      role2: "Former Professor IIM Lucknow",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Manish Dixit",
      role: "IIT BHU Alumnus",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Rishabh Singh",
      role: "IIFM Bhopal Alumnus",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Divyansh Mishra",
      role: "IIM Raipur",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Rishita Gupta",
      role: "Multiple IIMs Call Getter",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const testimonials = [
    {
      icon: "🏆",
      heading: "Best IPMAT Results",
      description: "Proven track record with highest success rates in IPMAT examinations across all IIMs.",
    },
    {
      icon: "👨‍🏫",
      heading: "Best IITs - IIMs Faculties",
      description: "Learn from experienced faculty members who are alumni of premier institutions.",
    },
    {
      icon: "📚",
      heading: "Excellent Study Material",
      description: "Comprehensive and updated study materials designed specifically for IPMAT preparation.",
    },
    {
      icon: "🤖",
      heading: "AI based Test Series",
      description: "Advanced AI-powered mock tests that adapt to your learning pace and identify weak areas.",
    },
    {
      icon: "👥",
      heading: "One-on-One Mentorship",
      description: "Personal guidance from IIM graduates to help you achieve your academic goals.",
    },
    {
      icon: "❓",
      heading: "Doubt Clearing Sessions",
      description: "Regular one-on-one sessions to clear all your doubts and strengthen concepts.",
    },
  ]

  const reviews = [
    {
      name: "Rahul Sharma",
      college: "IIM Indore",
      title: "Excellent Coaching Experience",
      review:
        "The faculty at IPM Careers is exceptional. Their teaching methodology and personalized attention helped me crack IPMAT with flying colors.",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Priya Singh",
      college: "IIM Rohtak",
      title: "Best Decision Ever",
      review:
        "Joining IPM Careers was the best decision I made for my IPMAT preparation. The mock tests and study material are top-notch.",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Arjun Patel",
      college: "IIM Indore",
      title: "Highly Recommended",
      review:
        "The one-on-one mentorship sessions were incredibly helpful. The faculty genuinely cares about student success.",
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  const faqs = [
    {
      question: "How will this IPMAT preparation help me?",
      answer:
        "Practicing IPMAT Mock Tests will help improve your time-management skills and build your confidence levels. So, it is advised to take up mock tests regularly and try to analyze your performance after completing each mock test.",
    },
    {
      question: "How many exams are covered under this preparation?",
      answer:
        "IPM BBA/BMS prep cover aptitude tests conducted by IIM Indore (IPMAT – Indore), IIM Rohtak (IPMAT – Rohtak), IIM Bodh Gaya and IIM Jammu (JIPMAT) for their 5-year integrated programs. The test prep program also cover entrance tests conducted by DU (DU JAT), NMIMS (NPAT), Symbiosis (SET), Christ University (CUET), IP University (IPUCET) and St. Xavier's College – Mumbai for their BMS program",
    },
    {
      question: "Can I avail one on one clearing doubt sessions?",
      answer:
        "Students should contact their IPM Careers center to book a one-on-one doubt clearing session with a mentor.",
    },
    {
      question: "How do I access live classes?",
      answer:
        "On successful completion of enrolment process, students receive a IPM Careers Zoom id & password to join IPM Careers live platform and to attend live, online classes.",
    },
    {
      question: "Is Fee Refundable?",
      answer: "Fee is neither Refundable nor transferable",
    },
    {
      question: "Is there any contact number to reach you?",
      answer: "For any queries contact @8299470392.",
    },
  ]

  // Desktop/Large Screen Results
  const resultSlides = [
    {
      title: "Our Outstanding Results",
      subtitle: "Celebrating Academic Excellence",
      image:
        "https://res.cloudinary.com/duyo9pzxy/image/upload/v1750847982/WhatsApp_Image_2025-06-23_at_15.40.13_gxiowp.jpg",
      stats: [
        { label: "Students Selected", value: "500+" },
        { label: "Success Rate", value: "95%" },
        { label: "Top Ranks", value: "50+" },
      ],
    },
    {
      title: "Meet Our Toppers",
      subtitle: "Success Stories That Inspire",
      image: "https://res.cloudinary.com/duyo9pzxy/image/upload/v1747075179/42-indore-_ivhcmw.jpg",
      stats: [
        { label: "AIR 1-10", value: "15+" },
        { label: "AIR 1-50", value: "45+" },
        { label: "IIM Selections", value: "200+" },
      ],
    },
    {
      title: "Excellence Continues",
      subtitle: "Building Future Leaders",
      image: "/placeholder.svg?height=600&width=800",
      stats: [
        { label: "Years of Excellence", value: "10+" },
        { label: "Expert Faculty", value: "25+" },
        { label: "Success Stories", value: "1000+" },
      ],
    },
    {
      title: "National Recognition",
      subtitle: "Award Winning Institute",
      image: "/placeholder.svg?height=600&width=800",
      stats: [
        { label: "Awards Won", value: "15+" },
        { label: "Media Features", value: "50+" },
        { label: "Industry Partners", value: "30+" },
      ],
    },
  ]

  // Mobile/Small Screen Results
  const mobileResultSlides = [
    {
      title: "Outstanding Results",
      subtitle: "Academic Excellence",
      image: "https://res.cloudinary.com/duyo9pzxy/image/upload/v1751015341/a_zrjadn.jpg",
      stats: [
        { label: "Students Selected", value: "500+" },
        { label: "Success Rate", value: "95%" },
      ],
    },
    {
      title: "Our Toppers",
      subtitle: "Success Stories",
      image: "https://res.cloudinary.com/duyo9pzxy/image/upload/v1751015353/b_mq3edw.jpg",
      stats: [
        { label: "AIR 1-10", value: "15+" },
        { label: "IIM Selections", value: "200+" },
      ],
    },
  ]

  // Student Testimonials for Slider
  const studentTestimonials = [
    {
      name: "Aarav Sharma",
      college: "IIM Indore",
      rank: "AIR 15",
      review:
        "IPM Careers transformed my preparation strategy. The personalized attention and expert guidance helped me achieve my dream rank.",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      name: "Sneha Patel",
      college: "IIM Rohtak",
      rank: "AIR 28",
      review:
        "The mock tests and study material were exceptional. Faculty members were always available for doubt clearing sessions.",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      name: "Karthik Reddy",
      college: "IIM Indore",
      rank: "AIR 42",
      review:
        "Best decision of my life! The structured approach and regular assessments kept me on track throughout my preparation.",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      name: "Ananya Singh",
      college: "IIM Jammu",
      rank: "AIR 67",
      review:
        "The AI-based test series helped identify my weak areas. The one-on-one mentorship was incredibly valuable.",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setStudentsEnrolled((prev) => prev + 1)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setActivePopup(true)
    }, 5000)
  }, [])

  // Desktop slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % resultSlides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Mobile slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMobileSlide((prev) => (prev + 1) % mobileResultSlides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Student testimonials slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % studentTestimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    if (!formData.fullname || formData.fullname.trim() === "") {
      setNotification("Fullname field is empty")
      return
    }
    if (!formData.email || formData.email.trim() === "") {
      setNotification("Email field is empty")
      return
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if (!emailRegex.test(formData.email)) {
      setNotification("Email is not valid")
      return
    }
    if (!formData.phone || formData.phone.trim() === "") {
      setNotification("Phone field is empty")
      return
    }
    const phoneRegex = /^[0-9]{10}$/
    if (!phoneRegex.test(formData.phone)) {
      setNotification("Phone number is not valid")
      return
    }
    if (!formData.city || formData.city.trim() === "") {
      setNotification("City field is empty")
      return
    }

    setIsSubmitted(true)
    console.log("Form submitted:", formData)
  }

  const formProgress = Object.values(formData).filter((value) => value.trim() !== "").length * 20

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return re.test(email)
  }

  const validatePhone = (phone: string) => {
    const re = /^[0-9]{10}$/
    return re.test(phone)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % resultSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + resultSlides.length) % resultSlides.length)
  }

  const nextMobileSlide = () => {
    setCurrentMobileSlide((prev) => (prev + 1) % mobileResultSlides.length)
  }

  const prevMobileSlide = () => {
    setCurrentMobileSlide((prev) => (prev - 1 + mobileResultSlides.length) % mobileResultSlides.length)
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % studentTestimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + studentTestimonials.length) % studentTestimonials.length)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Notification */}
      {notification && (
        <div className="fixed top-20 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          {notification}
          <button onClick={() => setNotification("")} className="ml-4 text-white hover:text-gray-200">
            ×
          </button>
        </div>
      )}

      {/* Success Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank You !!</h2>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Choosing Us today is the best decision you could have made yet.
            </h3>
            <p className="text-gray-600 mb-2">{"We've received your details"}</p>
            <p className="text-gray-600 mb-4">Our Executive will get back to you shortly.</p>
            <p className="text-gray-600 mb-6">
              For Quick Assistance you can call us on:
              <a href="tel:+919616383524" className="text-[#833589] font-semibold">
                {" "}
                +91 96163 83524
              </a>
            </p>
            <div className="space-y-3">
              <a
                href="https://ipmcareer.com/courses"
                className="block w-full bg-[#833589] text-white py-3 px-6 rounded-lg hover:bg-[#6b2a70] transition-colors"
              >
                Explore Our Courses
              </a>
              <a
                href="https://ipmcareer.com"
                className="block w-full bg-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Visit Our Website
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Fixed Contact Bar */}
      <div className="fixed top-0 left-0 right-0 bg-[#833589] text-white py-2 px-4 text-sm z-40 flex items-center justify-center gap-2">
        <span>For Enquiry:</span>
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.75 2A2.25 2.25 0 0 1 18 4.25v15.5A2.25 2.25 0 0 1 15.75 22h-7.5A2.25 2.25 0 0 1 6 19.75V4.25A2.25 2.25 0 0 1 8.25 2h7.5Zm0 1.5h-7.5a.75.75 0 0 0-.75.75v15.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75V4.25a.75.75 0 0 0-.75-.75Zm-2.501 14a.75.75 0 0 1 .002 1.5l-2.5.004a.75.75 0 0 1-.002-1.5l2.5-.004Z" />
        </svg>
        <a href="tel:+919616383524" className="hover:underline">
          +91 96163 83524
        </a>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-lg mt-10 sticky top-10 z-30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#833589] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">I</span>
              </div>
              <span className="text-2xl font-bold text-[#833589]">IPM Careers</span>
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-[#833589] transition-colors">
                About
              </a>
              <a href="#courses" className="text-gray-700 hover:text-[#833589] transition-colors">
                Courses
              </a>
              <a href="#mentors" className="text-gray-700 hover:text-[#833589] transition-colors">
                Mentors
              </a>
              <a href="#results" className="text-gray-700 hover:text-[#833589] transition-colors">
                Results
              </a>
              <a href="#contact" className="text-gray-700 hover:text-[#833589] transition-colors">
                Contact
              </a>
            </div>

            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a href="#about" className="block text-gray-700 hover:text-[#833589]">
              About
            </a>
            <a href="#courses" className="block text-gray-700 hover:text-[#833589]">
              Courses
            </a>
            <a href="#mentors" className="block text-gray-700 hover:text-[#833589]">
              Mentors
            </a>
            <a href="#results" className="block text-gray-700 hover:text-[#833589]">
              Results
            </a>
            <a href="#contact" className="block text-gray-700 hover:text-[#833589]">
              Contact
            </a>
          </div>
        </div>
      )}

      {/* Hero Section with Gradient */}
      <section className="relative overflow-hidden py-8">
        {/* Background Gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#7b2fa9] via-[#833589] to-[#471760]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ffffff1a] via-transparent to-transparent mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 mx-auto px-4 py-10 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Column */}
            <div className="space-y-6 max-w-xl text-white">
              <span className="inline-block bg-[#E79800] text-black px-4 py-1.5 rounded-full text-xs font-semibold">
                TRUSTED BY THOUSANDS OF STUDENTS
              </span>

              <h1 className="text-3xl md:text-5xl font-bold">{"India's Premium IPMAT Coaching"}</h1>
              <p className="text-lg text-purple-100">Join now to grab the opportunity to learn from our experts</p>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <h3 className="text-xl font-bold text-center">
                  <span className="text-[#E79800]">✨</span> {features[currentFeature]}
                </h3>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-2xl font-bold text-[#E79800]">{studentsEnrolled.toLocaleString()}</div>
                  <div className="text-sm text-purple-200">Students Enrolled</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-2xl font-bold text-[#E79800]">{(studentsEnrolled * 2).toLocaleString()}</div>
                  <div className="text-sm text-purple-200">Classes Completed</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-2xl font-bold text-[#E79800]">{(studentsEnrolled * 33).toLocaleString()}</div>
                  <div className="text-sm text-purple-200">Hours Taught</div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-white rounded-xl p-6 shadow-xl w-full max-w-sm mx-auto text-gray-800">
              <h2 className="text-xl font-bold mb-4 text-center">Schedule FREE 1‑1 Consultation with an Expert</h2>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="bg-gray-200 rounded-full h-2 mb-1">
                  <div
                    className="bg-[#833589] h-2 rounded-full transition-all duration-300 flex items-center justify-end pr-1"
                    style={{ width: `${formProgress}%` }}
                  >
                    {formProgress > 0 && (
                      <span className="text-[10px] text-white font-semibold">
                        {formProgress === 100 ? "Done" : `${formProgress}%`}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-xs text-gray-600 text-center">Form Progress: {formProgress}%</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  className="w-full h-10 px-3 border border-gray-300 rounded-md text-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#833589]"
                  placeholder="Full Name"
                  value={formData.fullname}
                  onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                />
                <input
                  type="email"
                  className={`w-full h-10 px-3 border rounded-md text-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#833589] ${
                    formData.email && !validateEmail(formData.email) ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <input
                  className={`w-full h-10 px-3 border rounded-md text-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#833589] ${
                    formData.phone && !validatePhone(formData.phone) ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <input
                  className="w-full h-10 px-3 border border-gray-300 rounded-md text-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#833589]"
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                />

                {formProgress < 100 && <p className="text-xs text-red-500 text-center">Please fill all the fields</p>}

                <button
                  type="submit"
                  className="w-full h-10 bg-[#833589] hover:bg-[#6b2a70] text-white font-semibold rounded-md text-sm transition-transform hover:scale-105"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Responsive Results Slider */}
      <section className="py-0 bg-gray-50">
        <div className="text-center py-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Promising Results</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Celebrating exceptional achievements and success stories of our students across premier institutions
          </p>
        </div>

        {/* Desktop/Large Screen Slider */}
        <div className="hidden lg:block w-full">
          <div className="relative bg-white shadow-2xl overflow-hidden max-w-6xl mx-auto rounded-2xl">
            <div className="relative h-[500px]">
              {resultSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    currentSlide === index
                      ? "opacity-100 translate-x-0"
                      : index < currentSlide
                        ? "opacity-0 -translate-x-full"
                        : "opacity-0 translate-x-full"
                  }`}
                >
                  <div className="w-full h-full relative">
                    <img
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      className="w-full h-full object-contain bg-gray-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                    <div className="absolute bottom-6 left-8 right-8 text-center">
                      <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">{slide.title}</h3>
                      <p className="text-xl text-white/90 drop-shadow-md">{slide.subtitle}</p>
                    </div>

                    <div className="absolute bottom-6 left-8 bg-[#833589]/90 backdrop-blur-sm rounded-xl p-4 text-white">
                      <div className="font-bold text-2xl">{String(currentSlide + 1).padStart(2, "0")}</div>
                      <div className="text-xs opacity-80">of {String(resultSlides.length).padStart(2, "0")}</div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="absolute inset-y-0 left-0 flex items-center z-10">
                <button
                  onClick={prevSlide}
                  className="ml-6 bg-white/95 hover:bg-white text-[#833589] rounded-full p-4 shadow-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm group"
                >
                  <svg
                    className="w-6 h-6 group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center z-10">
                <button
                  onClick={nextSlide}
                  className="mr-6 bg-white/95 hover:bg-white text-[#833589] rounded-full p-4 shadow-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm group"
                >
                  <svg
                    className="w-6 h-6 group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="bg-white p-8 border-t">
              <div className="flex justify-center items-center space-x-8">
                <div className="flex space-x-3">
                  {resultSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        currentSlide === index
                          ? "bg-[#833589] scale-125 shadow-lg"
                          : "bg-gray-300 hover:bg-[#E79800] hover:scale-110"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex gap-3">
                  {resultSlides.map((slide, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                        currentSlide === index
                          ? "bg-[#833589] text-white shadow-lg"
                          : "bg-gray-100 text-gray-600 hover:bg-[#E79800] hover:text-white"
                      }`}
                    >
                      {slide.title.split(" ").slice(0, 2).join(" ")}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Slider */}
        <div className="lg:hidden w-full px-4">
          <div className="relative bg-white shadow-2xl overflow-hidden rounded-2xl">
            <div className="relative h-[350px] sm:h-[400px]">
              {mobileResultSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    currentMobileSlide === index
                      ? "opacity-100 translate-x-0"
                      : index < currentMobileSlide
                        ? "opacity-0 -translate-x-full"
                        : "opacity-0 translate-x-full"
                  }`}
                >
                  <div className="w-full h-full relative">
                    <img
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      className="w-full h-full object-contain bg-gray-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 drop-shadow-lg">{slide.title}</h3>
                      <p className="text-sm sm:text-base text-white/90 drop-shadow-md">{slide.subtitle}</p>
                    </div>

                    <div className="absolute bottom-4 left-4 bg-[#833589]/90 backdrop-blur-sm rounded-lg p-2 text-white text-sm">
                      <div className="font-bold">{String(currentMobileSlide + 1).padStart(2, "0")}</div>
                      <div className="text-xs opacity-80">of {String(mobileResultSlides.length).padStart(2, "0")}</div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="absolute inset-y-0 left-0 flex items-center z-10">
                <button
                  onClick={prevMobileSlide}
                  className="ml-3 bg-white/95 hover:bg-white text-[#833589] rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center z-10">
                <button
                  onClick={nextMobileSlide}
                  className="mr-3 bg-white/95 hover:bg-white text-[#833589] rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="bg-white p-4 border-t">
              <div className="flex justify-center items-center space-x-4">
                <div className="flex space-x-2">
                  {mobileResultSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentMobileSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentMobileSlide === index ? "bg-[#833589] scale-125" : "bg-gray-300 hover:bg-[#E79800]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Student Testimonials Video */}
        <section className="py-10">
          <div className="w-full">
            <img
              src="https://res.cloudinary.com/duyo9pzxy/image/upload/v1751011010/IPMC_BANNER_12_ebilrk.jpg"
              alt="IPMC Banner"
              className="w-full h-auto object-cover rounded-b-2xl shadow-md"
            />
          </div>
          <div className="container mx-auto py-10 px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Words by: Our Students</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Listen what our students have to say about us. Our students are thrilled with the classes that we
                  offer. They consistently express their satisfaction with the quality of the instruction, the engaging
                  curriculum, and the supportive learning environment. They appreciate the individualized attention that
                  they receive from our dedicated teachers, and they are making steady progress in their studies.
                </p>
              </div>
              <div className="relative">
                <div className="bg-[#833589] rounded-2xl p-2 shadow-2xl">
                  <iframe
                    className="w-full h-64 md:h-80 rounded-xl"
                    src="https://www.youtube.com/embed/GguKjh6un0U?si=QpSuGjUyZNJrtbCb"
                    title="Student Testimonials - IPM Careers"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Student Testimonials Slider */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from our successful students who achieved their IIM dreams with IPM Careers
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="relative h-[400px] sm:h-[450px]">
                  {studentTestimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                        currentTestimonial === index
                          ? "opacity-100 translate-x-0"
                          : index < currentTestimonial
                            ? "opacity-0 -translate-x-full"
                            : "opacity-0 translate-x-full"
                      }`}
                    >
                      <div className="h-full flex flex-col justify-center p-8 sm:p-12 text-center">
                        {/* Student Image */}
                        <div className="mb-6">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto object-cover border-4 border-[#833589]/20"
                          />
                        </div>

                        {/* Student Info */}
                        <div className="mb-6">
                          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">{testimonial.name}</h3>
                          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-[#833589] font-semibold">
                            <span className="bg-[#833589]/10 px-3 py-1 rounded-full text-sm">
                              {testimonial.college}
                            </span>
                            <span className="bg-[#E79800]/10 px-3 py-1 rounded-full text-sm text-[#E79800]">
                              {testimonial.rank}
                            </span>
                          </div>
                        </div>

                        {/* Review */}
                        <div className="mb-6">
                          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed italic max-w-2xl mx-auto">
                            {`"${testimonial.review}"`}
                          </p>
                        </div>

                        {/* Rating */}
                        <div className="flex justify-center space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg key={i} className="w-6 h-6 text-[#E79800] fill-current" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          ))}
                        </div>

                        {/* Slide Counter */}
                        <div className="absolute top-6 right-6 bg-[#833589]/10 backdrop-blur-sm rounded-xl p-3 text-[#833589]">
                          <div className="font-bold text-lg">{String(currentTestimonial + 1).padStart(2, "0")}</div>
                          <div className="text-xs opacity-70">
                            of {String(studentTestimonials.length).padStart(2, "0")}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Navigation Arrows */}
                  <div className="absolute inset-y-0 left-0 flex items-center z-10">
                    <button
                      onClick={prevTestimonial}
                      className="ml-4 bg-white/95 hover:bg-white text-[#833589] rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm group"
                    >
                      <svg
                        className="w-5 h-5 group-hover:scale-110 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                  </div>

                  <div className="absolute inset-y-0 right-0 flex items-center z-10">
                    <button
                      onClick={nextTestimonial}
                      className="mr-4 bg-white/95 hover:bg-white text-[#833589] rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm group"
                    >
                      <svg
                        className="w-5 h-5 group-hover:scale-110 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="bg-gray-50 p-6 border-t">
                  <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
                    {/* Dots */}
                    <div className="flex space-x-2">
                      {studentTestimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentTestimonial(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            currentTestimonial === index
                              ? "bg-[#833589] scale-125 shadow-lg"
                              : "bg-gray-300 hover:bg-[#E79800] hover:scale-110"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-[#833589] h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${((currentTestimonial + 1) / studentTestimonials.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mentors Section */}
        <section id="mentors" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Know: Your Mentors</h2>
              <p className="text-xl text-gray-600">Learn from the best IIM Alumni</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mentors.map((mentor, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48 bg-[#833589]">
                    <div className="absolute inset-0 bg-[#833589]/20"></div>
                    <img
                      src={mentor.image || "/placeholder.svg"}
                      alt={mentor.name}
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full border-4 border-white object-cover"
                    />
                  </div>
                  <div className="pt-20 pb-6 px-6 text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{mentor.name}</h3>
                    <p className="text-[#833589] font-semibold mb-1">{mentor.role}</p>
                    {mentor.role2 && <p className="text-gray-600 text-sm">{mentor.role2}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Why Choose IPM Careers */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Why choose: IPM Careers?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover what makes us the preferred choice for thousands of IPMAT aspirants across India
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#E79800]/30 transform hover:-translate-y-3"
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-[#833589]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className="w-20 h-20 mx-auto mb-6 bg-[#833589]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#833589] transition-colors duration-500">
                      <span className="text-4xl group-hover:scale-110 transition-transform duration-500">
                        {item.icon}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[#833589] transition-colors duration-300">
                      {item.heading}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {item.description}
                    </p>

                    {/* Decorative Element */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-[#E79800]/30 rounded-full group-hover:bg-[#E79800] transition-colors duration-500"></div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#E79800]/30 transition-colors duration-500"></div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center space-x-2 bg-[#833589]/10 px-6 py-3 rounded-full">
                <span className="text-[#833589] font-semibold">Ready to start your journey?</span>
                <svg className="w-5 h-5 text-[#E79800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Student Reviews */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Testimonials</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={review.image || "/placeholder.svg"}
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-gray-800">{review.name}</h4>
                      <p className="text-[#833589] text-sm">{review.college}</p>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">{review.title}</h5>
                    <p className="text-gray-600 mb-4">{review.review}</p>
                  </div>
                  <div className="flex text-[#E79800]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    className="w-full text-left p-6 font-semibold text-gray-800 hover:bg-gray-50 flex justify-between items-center"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    {faq.question}
                    <svg
                      className={`w-5 h-5 transform transition-transform text-[#833589] ${openFaq === index ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === index && <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Join IPMAT Coaching */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Why you should join a dedicated IPMAT Coaching?</h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-8 text-center">
                {
                  "That's a great decision if you're an IPMAT aspirant. Joining a dedicated IPMAT coaching program can provide you with structured preparation, expert guidance, and a competitive edge in your preparation for the IPMAT (Integrated Program in Management Aptitude Test)."
                }
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#E79800] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Research Coaching Institutes</h4>
                      <p className="text-gray-600">
                        Look for coaching institutes that offer specialized courses for IPMAT with proven track records.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#E79800] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Expert Faculty</h4>
                      <p className="text-gray-600">
                        Ensure experienced and qualified faculty who can guide you through the IPMAT syllabus.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#E79800] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Comprehensive Study Material</h4>
                      <p className="text-gray-600">Good study material is crucial for your preparation and success.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#E79800] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Regular Mock Tests</h4>
                      <p className="text-gray-600">
                        Frequent mock tests and practice papers are essential for IPMAT preparation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#E79800] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Personalized Attention</h4>
                      <p className="text-gray-600">
                        Smaller batch sizes often mean more personalized attention and better results.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#E79800] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Flexible Learning</h4>
                      <p className="text-gray-600">
                        Choose between online and offline classes based on your preferences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-[#833589] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
              {"India's Premium IPMAT Coaching"} <br />
              for True IPMAT Aspirants
            </h2>
            <a
              href="#form"
              className="inline-block bg-[#E79800] text-black font-bold py-4 px-8 rounded-full text-lg hover:bg-[#d18700] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      {activePopup && (
        <a
          href="https://wa.me/919616383524?text=Hi%20%2C%20Connected%20Here%20via%20Connect%20Button%20on%20Website"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 flex items-center space-x-2"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
          <span className="hidden md:block">Connect on WhatsApp</span>
        </a>
      )}
    </div>
  )
}
