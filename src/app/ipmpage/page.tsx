"use client"
import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CircleDot } from "lucide-react"

// Simplified stations for mobile with shorter content
const stations = [
  {
    title: "Start",
    points: ["Begin journey", "Set goals"],
  },
  {
    title: "Class 12 Boards",
    points: ["Focus academics", "Build foundation"],
  },
  {
    title: "Take Exams",
    points: ["IPMAT Indore", "IPMAT Rohtak"],
  },
  {
    title: "Interview",
    points: ["Personal Interview", "Final Selection"],
  },
  {
    title: "IIM Success",
    points: ["5-Year Programme", "Career Start"],
  },
]

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
  const [currentSuccessStory, setCurrentSuccessStory] = useState(0)
  const [isSuccessStoryTransitioning, setIsSuccessStoryTransitioning] = useState(false)
  const [isTestimonialTransitioning, setIsTestimonialTransitioning] = useState(false)
  const [successStoryPaused, setSuccessStoryPaused] = useState(false)
  const [testimonialPaused, setTestimonialPaused] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedImageDescription, setSelectedImageDescription] = useState<string>("")
  const successStoryIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const testimonialIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const [currentStation, setCurrentStation] = useState(0)
  const [animationComplete, setAnimationComplete] = useState(false)

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
      image:
        "https://res.cloudinary.com/duyo9pzxy/image/upload/v1751618114/WhatsApp_Image_2025-07-03_at_17.59.01_lose52.jpg",
    },
    {
      name: "Deepak Kushwaha",
      role: "Master IIM Lucknow",
      role2: "Bachelors NIT Srinagar",
      image: "https://res.cloudinary.com/duyo9pzxy/image/upload/v1752493120/123_yrb1qi.jpg",
    },
    {
      name: "Dr. Swati A. Mishra",
      role: "Director Operations Lucknow Centre",
      role2: "Former Professor IIM Lucknow",
      image:
        "https://res.cloudinary.com/duyo9pzxy/image/upload/v1751618114/WhatsApp_Image_2025-07-04_at_13.54.03_qc5oxh.jpg",
    },
    {
      name: "Vikas Saxena",
      role: "IIT Roorkee",
      image:
        "https://res.cloudinary.com/duyo9pzxy/image/upload/v1753263520/DSC02342_v0gm3b.jpg",
    },
    {
      name: "Manish Dixit",
      role: "IIT BHU Alumnus",
      image:
        "https://res.cloudinary.com/duyo9pzxy/image/upload/v1752492922/WhatsApp_Image_2025-07-06_at_20.17.12_k9vbh2.jpg",
    },
    {
      name: "Rishabh Singh",
      role: "IIFM Bhopal Alumnus",
      image:
        "https://res.cloudinary.com/duyo9pzxy/image/upload/v1751618115/WhatsApp_Image_2025-07-03_at_18.01.22_ypumkp.jpg",
    },
    {
      name: "Divyansh Mishra",
      role: "IIM Raipur",
      image:
        "https://res.cloudinary.com/duyo9pzxy/image/upload/v1751618115/WhatsApp_Image_2025-07-04_at_13.56.19_o0yikq.jpg",
    },
    {
      name: "Raghav Shukla",
      role: "IIM Kozhikode",
      image:
        "https://res.cloudinary.com/duyo9pzxy/image/upload/v1751618115/WhatsApp_Image_2025-07-04_at_13.55.26_du5hkp.jpg",
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

  const successStories = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/duyo9pzxy/image/upload/v1751543724/WhatsApp_Image_2025-07-03_at_15.30.05_ehnjio.jpg",
      description: "Exceptional performance in IPMAT 2024",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/duyo9pzxy/image/upload/v1751796160/CRAUSEL_1_ykreu2.png",
      description: "Secured top rank with dedicated preparation",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/duyo9pzxy/image/upload/v1752394387/CRAUSEL_2_ngkx5r.jpg",
      description: "From preparation to selection journey",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/duyo9pzxy/image/upload/v1752394385/WhatsApp_Image_2025-07-12_at_17.47.27_xx3kgq.jpg",
      description: "Received calls from top IIMs",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/duyo9pzxy/image/upload/v1751543724/WhatsApp_Image_2025-07-03_at_15.30.05_ehnjio.jpg",
      description: "Journey from aspirant to IIM student",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/duyo9pzxy/image/upload/v1751543724/WhatsApp_Image_2025-07-03_at_15.30.05_ehnjio.jpg",
      description: "Achieved 99+ percentile in IPMAT",
    },
  ]

  const studentTestimonials = [
    {
      name: "Anurag Pratap Singh",
      college: "IIM Indore",
      review:
        "IPM Careers transformed my preparation strategy. The personalized attention and expert guidance helped me achieve my dream rank.",
      image:
        "https://res.cloudinary.com/duyo9pzxy/image/upload/v1751623861/WhatsApp_Image_2025-07-04_at_15.00.46_xdve4y.jpg",
      rating: 5,
    },
    {
      name: "Manas Gaikwad",
      college: "IIM Indore",
      review:
        "The mock tests and study material were exceptional. Faculty members were always available for doubt clearing sessions.",
      image:
        "https://res.cloudinary.com/duyo9pzxy/image/upload/v1751623862/WhatsApp_Image_2025-07-04_at_14.59.53_tvlxgb.jpg",
      rating: 5,
    },
    {
      name: "Jiya Gandhi ",
      college: "IIM Rohtak",
      review:
        "Best decision of my life! The structured approach and regular assessments kept me on track throughout my preparation.",
      image:
        "https://res.cloudinary.com/duyo9pzxy/image/upload/v1751623861/WhatsApp_Image_2025-07-04_at_15.01.10_dclsze.jpg",
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
    {
      name: "Rohit Kumar",
      college: "IIM Ranchi",
      rank: "AIR 89",
      review:
        "The faculty's dedication and comprehensive study material made all the difference in my IPMAT preparation journey.",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      name: "Priya Gupta",
      college: "IIM Indore",
      rank: "AIR 95",
      review:
        "IPM Careers provided the perfect blend of theoretical knowledge and practical application. Highly recommended!",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
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

  const resultSlides = [
    {
      title: "Our Outstanding Results",
      subtitle: "Celebrating Academic Excellence",
      image: "https://res.cloudinary.com/duyo9pzxy/image/upload/v1751973197/web-banner_3_mwrp16.jpg",
      stats: [
        { label: "Students Selected", value: "500+" },
        { label: "Success Rate", value: "95%" },
        { label: "Top Ranks", value: "50+" },
      ],
    },
    {
      title: "AIR 1",
      subtitle: "Celebrating Academic Excellence",
      image: "https://res.cloudinary.com/duyo9pzxy/image/upload/v1751973197/web-banner_2_hnwlzj.jpg",
      stats: [
        { label: "Students Selected", value: "500+" },
        { label: "Success Rate", value: "95%" },
        { label: "Top Ranks", value: "50+" },
      ],
    },
    {
      title: "Meet Our Toppers",
      subtitle: "Success Stories That Inspire",
      image: "https://res.cloudinary.com/duyo9pzxy/image/upload/v1751973197/INDORE-BANNER_oya1d3.jpg",
      stats: [
        { label: "AIR 1-10", value: "15+" },
        { label: "AIR 1-50", value: "45+" },
        { label: "IIM Selections", value: "200+" },
      ],
    },
    {
      title: "Excellence Continues",
      subtitle: "Building Future Leaders",
      image: "https://res.cloudinary.com/duyo9pzxy/image/upload/v1747075179/42-indore-_ivhcmw.jpg",
      stats: [
        { label: "Years of Excellence", value: "10+" },
        { label: "Expert Faculty", value: "25+" },
        { label: "Success Stories", value: "1000+" },
      ],
    },
    {
      title: "Dropper To Topper",
      subtitle: "Award Winning Institute",
      image: "https://res.cloudinary.com/duyo9pzxy/image/upload/v1751973505/56757678_pehnub.jpg",
      stats: [
        { label: "Awards Won", value: "15+" },
        { label: "Media Features", value: "50+" },
        { label: "Industry Partners", value: "30+" },
      ],
    },
  ]

  const mobileResultSlides = [
    {
      image:
        "https://res.cloudinary.com/duyo9pzxy/image/upload/v1752572875/WhatsApp_Image_2025-07-15_at_15.14.18_uzr2cw.jpg",
      stats: [
        { label: "Students Selected", value: "500+" },
        { label: "Success Rate", value: "95%" },
      ],
    },
    {
      image:
        "https://res.cloudinary.com/duyo9pzxy/image/upload/v1752572875/WhatsApp_Image_2025-07-15_at_15.14.41_ajf7x6.jpg",
      stats: [
        { label: "AIR 1-10", value: "15+" },
        { label: "IIM Selections", value: "200+" },
      ],
    },
    {
      image:
        "https://res.cloudinary.com/duyo9pzxy/image/upload/v1752572875/WhatsApp_Image_2025-07-15_at_15.16.23_dqv4od.jpg",
      stats: [
        { label: "AIR 1-10", value: "15+" },
        { label: "IIM Selections", value: "200+" },
      ],
    },
    {
      image:
        "https://res.cloudinary.com/duyo9pzxy/image/upload/v1752572875/WhatsApp_Image_2025-07-15_at_15.14.57_s4p6pa.jpg",
      stats: [
        { label: "AIR 1-10", value: "15+" },
        { label: "IIM Selections", value: "200+" },
      ],
    },
    {
      image:
        "https://res.cloudinary.com/duyo9pzxy/image/upload/v1752572875/WhatsApp_Image_2025-07-15_at_15.15.12_ss9ipd.jpg",
      stats: [
        { label: "AIR 1-10", value: "15+" },
        { label: "IIM Selections", value: "200+" },
      ],
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStation((prev) => {
        if (prev >= stations.length - 1) {
          return 0
        }
        return prev + 1
      })
    }, 1200)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % resultSlides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMobileSlide((prev) => (prev + 1) % mobileResultSlides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const startSuccessStoryInterval = () => {
      if (successStoryIntervalRef.current) {
        clearInterval(successStoryIntervalRef.current)
      }
      successStoryIntervalRef.current = setInterval(() => {
        if (!successStoryPaused) {
          setCurrentSuccessStory((prev) => {
            const nextIndex = prev + 1
            return nextIndex >= successStories.length ? 0 : nextIndex
          })
        }
      }, 3000)
    }
    startSuccessStoryInterval()
    return () => {
      if (successStoryIntervalRef.current) {
        clearInterval(successStoryIntervalRef.current)
      }
    }
  }, [successStoryPaused])

  useEffect(() => {
    const startTestimonialInterval = () => {
      if (testimonialIntervalRef.current) {
        clearInterval(testimonialIntervalRef.current)
      }
      testimonialIntervalRef.current = setInterval(() => {
        if (!testimonialPaused) {
          setIsTestimonialTransitioning(true)
          setTimeout(() => {
            setCurrentTestimonial((prev) => {
              const nextIndex = prev + 3
              return nextIndex >= studentTestimonials.length ? 0 : nextIndex
            })
            setIsTestimonialTransitioning(false)
          }, 150)
        }
      }, 4000)
    }
    startTestimonialInterval()
    return () => {
      if (testimonialIntervalRef.current) {
        clearInterval(testimonialIntervalRef.current)
      }
    }
  }, [testimonialPaused])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
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

  const nextSuccessStory = () => {
    setCurrentSuccessStory((prev) => {
      const nextIndex = prev + 1
      return nextIndex >= successStories.length ? 0 : nextIndex
    })
  }

  const prevSuccessStory = () => {
    setCurrentSuccessStory((prev) => {
      const prevIndex = prev - 1
      return prevIndex < 0 ? successStories.length - 1 : prevIndex
    })
  }

  const nextTestimonial = () => {
    setIsTestimonialTransitioning(true)
    setTimeout(() => {
      setCurrentTestimonial((prev) => {
        const nextIndex = prev + 3
        return nextIndex >= studentTestimonials.length ? 0 : nextIndex
      })
      setIsTestimonialTransitioning(false)
    }, 150)
  }

  const prevTestimonial = () => {
    setIsTestimonialTransitioning(true)
    setTimeout(() => {
      setCurrentTestimonial((prev) => {
        const prevIndex = prev - 3
        return prevIndex < 0 ? studentTestimonials.length - 3 : prevIndex
      })
      setIsTestimonialTransitioning(false)
    }, 150)
  }

  const getVisibleCards = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1
      if (window.innerWidth < 1024) return 2
      return 3
    }
    return 3
  }

  const [visibleCards, setVisibleCards] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards())
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleImageClick = (image: string, description: string) => {
    setSelectedImage(image)
    setSelectedImageDescription(description)
  }

  const closeModal = () => {
    setSelectedImage(null)
    setSelectedImageDescription("")
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl font-bold z-10"
            >
              ✕
            </button>
            <img
              src={selectedImage || "/placeholder.svg"}
              alt={selectedImageDescription}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 rounded-b-lg">
              <p className="text-center text-sm md:text-base">{selectedImageDescription}</p>
            </div>
          </div>
        </div>
      )}

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

      {/* 1. Enhanced Responsive Results Slider - FULL WIDTH FOR PC */}
      <section className="py-5 bg-gray-50">
        {/* Desktop/Large Screen Slider - FULL WIDTH */}
        <div className="hidden lg:block w-full">
          <div className="relative bg-white shadow-2xl overflow-hidden w-full">
            <div className="relative h-[600px]">
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
                      className="w-full h-full object-cover bg-gray-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                      <h3 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">{slide.title}</h3>
                      <p className="text-2xl text-white/90 drop-shadow-md">{slide.subtitle}</p>
                    </div>
                    <div className="absolute bottom-8 left-8 bg-[#833589]/90 backdrop-blur-sm rounded-xl p-4 text-white">
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
        <div className="lg:hidden w-full px-4 mt-8">
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
                    <img src={slide.image || "/placeholder.svg"} className="w-full h-full object-contain bg-gray-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                </div>
              ))}
              <div className="absolute inset-y-0 left-2 flex items-center z-10">
                <button
                  onClick={prevMobileSlide}
                  className="bg-white/95 hover:bg-white text-[#833589] rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>
              <div className="absolute inset-y-0 right-2 flex items-center z-10">
                <button
                  onClick={nextMobileSlide}
                  className="bg-white/95 hover:bg-white text-[#833589] rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110"
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

      {/* 2. Enquiry Form Section */}
      <section className="relative overflow-hidden py-16 bg-gradient-to-br from-[#7b2fa9] via-[#833589] to-[#471760]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ffffff1a] via-transparent to-transparent mix-blend-overlay"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 py-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Column */}
            <div className="space-y-6 text-white">
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

      {/* 3. Enhanced IIM Roadmap Section - HIDDEN ON MOBILE */}
      {/* This is the desktop roadmap */}
      <section className="hidden md:block min-h-screen bg-white p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-sm font-bold text-gray-600 tracking-wider mb-2">IPM CAREERS</div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            <span className="text-gray-800">Your Journey from </span>
            <span className="text-[#833589]">Class 12 to IIMs</span>
            <br />
            <span className="text-gray-800">Starts Here!</span>
          </h1>
          {/* Banner */}
          <div className="inline-block bg-[#E79800] text-white px-6 py-3 rounded-lg font-semibold shadow-lg mb-16">
            Board the IPM Careers Express to IIM Indore, Rohtak & Ranchi
          </div>
        </div>
        {/* Railway Section */}
        <div className="relative mt-32 w-full max-w-6xl mx-auto">
          {/* Railway Track with Cross-ties */}
          <div className="relative h-40">
            {/* Cross-ties (sleepers) */}
            <div className="absolute top-1/2 left-0 w-full flex justify-between items-center">
              {Array.from({ length: 30 }).map((_, i) => (
                <div key={i} className="w-1.5 h-10 bg-amber-900 rounded-sm transform -translate-y-1/2" />
              ))}
            </div>
            {/* Rails */}
            <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-600 rounded-full transform -translate-y-4 shadow-sm" />
            <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-600 rounded-full transform translate-y-0 shadow-sm" />
          </div>
          {/* Stations - positioned well above the train */}
          <div className="absolute -top-48 left-0 w-full">
            <div className="flex justify-between items-end relative">
              {stations.map((station, index) => (
                <div key={index} className="flex flex-col items-center w-48">
                  {/* Station info box */}
                  <motion.div
                    className="bg-white p-4 rounded-xl shadow-lg border-2 text-sm max-w-44 mb-3"
                    style={{
                      borderColor: index === currentStation ? "#833589" : "#e5e7eb",
                    }}
                    animate={{
                      scale: index === currentStation ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="font-bold text-gray-800 whitespace-pre-line text-center mb-2">{station.title}</div>
                    {station.points.length > 0 && (
                      <ul className="text-left text-gray-600 space-y-1">
                        {station.points.map((point, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-[#E79800] mr-2 font-bold">•</span>
                            <span className="text-xs">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                  {/* Station marker */}
                  <motion.div
                    className="w-5 h-5 rounded-full mb-2 border-3 border-white shadow-lg"
                    style={{
                      backgroundColor: index <= currentStation ? "#833589" : "#e5e7eb",
                    }}
                    animate={{
                      scale: index === currentStation ? 1.4 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Train Engine Only */}
          <motion.div
            className="absolute top-12 w-24 h-12"
            animate={{
              left: `${(currentStation / (stations.length - 1)) * (100 - 6)}%`,
              y: [0, -1, 0, -0.5, 0],
            }}
            transition={{
              left: {
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
              y: {
                duration: 0.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
            }}
          >
            <motion.div
              className="relative"
              style={{ transform: "scaleX(1)" }}
              animate={{
                rotate: [0, 0.3, 0, -0.3, 0],
              }}
              transition={{
                duration: 0.8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              {/* Train Engine */}
              <div className="relative w-24 h-10" style={{ transform: "scaleX(-1)" }}>
                {/* Engine Base */}
                <div className="absolute bottom-2 left-0 w-24 h-8 bg-[#833589] rounded-lg shadow-lg">
                  {/* Engine Front Nose */}
                  <div className="absolute -left-2 top-1 w-4 h-6 bg-[#833589] rounded-l-full border-r-2 border-[#E79800]" />
                  {/* Cab Windows */}
                  <div className="absolute top-0.5 left-2 w-3 h-3 bg-blue-100 rounded border-2 border-[#E79800]" />
                  <div className="absolute top-0.5 left-7 w-3 h-3 bg-blue-100 rounded border-2 border-[#E79800]" />
                  {/* Engine Details */}
                  <div className="absolute top-4 left-14 w-6 h-3 bg-[#E79800] rounded" />
                  <div className="absolute top-5 left-17 w-1.5 h-1.5 bg-white rounded-full" />
                </div>
                {/* Chimney */}
                <div className="absolute top-2 left-4 w-3 h-4 bg-[#833589] rounded-t-lg border-2 border-[#E79800]" />
              </div>
              {/* Enhanced Steam Animation - Properly positioned above chimney */}
              <motion.div
                className="absolute -top-6 left-4 flex flex-col items-center"
                animate={{
                  opacity: [0.8, 0.4, 0.8],
                  scale: [1, 1.2, 1],
                  x: [0, 1, -0.5, 0],
                }}
                transition={{
                  duration: 1.0,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="w-2 h-4 bg-gray-300 rounded-full opacity-60"
                  animate={{
                    scaleY: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="w-3 h-3 bg-gray-200 rounded-full opacity-40 -mt-1"
                  animate={{
                    scale: [1, 1.3, 1],
                    x: [0, 2, -1, 0],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="w-4 h-2 bg-gray-100 rounded-full opacity-20 -mt-0.5"
                  animate={{
                    scale: [1, 1.5, 1],
                    x: [0, 3, -2, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        {/* CTA Section */}
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#833589] text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-[#6b2a70] transition-colors duration-300"
          >
            Start Your Journey Today
          </motion.button>
          <div className="mt-4 text-gray-600 font-medium">Join thousands of students on their path to IIM success</div>
        </div>
      </section>

      {/* Mobile Roadmap Section - FIXED VERSION */}
      <section className="block md:hidden bg-white px-4 py-12 overflow-x-hidden">
  {/* Heading */}
  <div className="text-center mb-8">
    <div className="text-sm font-bold text-gray-600 mb-2">IPM CAREERS</div>
    <h2 className="text-2xl font-bold mb-3 leading-tight">
      <span className="text-gray-800">Your Journey from </span>
      <span className="text-[#833589]">Class 12 to IIMs</span>
    </h2>
    <div className="inline-block bg-[#E79800] text-white px-4 py-2 rounded-lg font-semibold shadow text-sm">
      Board the IPM Express
    </div>
  </div>

  {/* Fixed Timeline Container */}
  <div className="relative w-full max-w-sm mx-auto">
    {/* Vertical Line - Centered */}
    <div
      className="absolute left-1/2 transform -translate-x-0.5 w-1 bg-gray-300 z-0"
      style={{ height: `${stations.length * 120}px` }}
    />

    {/* Train - Positioned on the line */}
    <motion.div
      className="absolute z-30 left-1/2 transform -translate-x-1/2"
      animate={{
        top: `${currentStation * 120 + 50}px`, // Centered on the circle dot
        y: [0, -3, 0],
      }}
      transition={{
        top: { duration: 0.8, ease: "easeInOut" },
        y: { duration: 0.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
      }}
    >
      <span className="text-3xl">🚆</span>
    </motion.div>

    {/* Station Cards */}
    {stations.map((station, index) => {
      const isLeft = index % 2 === 0;
      const isActive = index === currentStation;

      return (
        <div key={index} className="relative h-30 flex items-center">
          {/* Circle Dot - Centered on line */}
          <motion.div
            className="absolute w-8 h-8 flex items-center justify-center rounded-full shadow z-20 left-1/2 transform -translate-x-1/2"
            animate={{
              backgroundColor: isActive ? "#833589" : "#d1d5db",
              scale: isActive ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <CircleDot className={`w-4 h-4 ${isActive ? "text-white" : "text-gray-600"}`} />
          </motion.div>

          {/* Info Card - Positioned to avoid overlap */}
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
              animate={{
                opacity: 1,
                x: 0,
                scale: isActive ? 1.02 : 1,
              }}
              exit={{ opacity: 0, x: isLeft ? -30 : 30 }}
              transition={{ duration: 0.4 }}
              className={`absolute w-36 p-3 rounded-xl shadow-md border bg-white z-10 ${
                isLeft ? "right-[10px]" : "left-[10px]"
              }`}
              style={{
                top: "20px",
                borderColor: isActive ? "#833589" : "#e5e7eb",
              }}
            >
              <div className="text-sm font-semibold text-gray-800 mb-2 text-center leading-tight">
                {station.title}
              </div>
              <ul className="text-xs text-gray-600 space-y-1">
                {station.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#E79800] mr-1 font-bold text-xs">•</span>
                    <span className="leading-tight">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      );
    })}
  </div>

  {/* CTA */}
  <div className="mt-12 text-center">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-[#833589] text-white px-6 py-3 rounded-full font-bold text-base shadow-xl hover:bg-[#6b2a70] transition-colors duration-300"
    >
      Start Your Journey
    </motion.button>
    <p className="mt-3 text-gray-600 text-sm font-medium px-4">
      Join thousands of students on the path to IIM success
    </p>
  </div>
</section>


      {/* Rest of the sections remain the same... */}
      {/* 4. Words by: Our Students Section */}
      <div className="container max-w-7xl mx-auto px-4">
        {/* 5. Banner Image */}
        <section className="py-8 bg-gray-50">
          <div className="w-full">
            <img
              src="https://res.cloudinary.com/duyo9pzxy/image/upload/v1753336960/IPMC_BANNER_ctwtmg.jpg"
              alt="IPMC Banner"
              className="w-full h-auto object-cover shadow-md"
            />
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Words by: Our Students</h2>
                <p className="text-base md:text-lg text-gray-600 mb-8">
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

        {/* 5. Enhanced Mentors Section with Larger Images */}
       <section id="mentors" className="bg-white py-16">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Know: Your Mentors
      </h2>
      <p className="text-lg md:text-xl text-gray-600">
        Learn from the best IIM Alumni
      </p>
    </div>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {mentors.map((mentor, index) => (
        <div
          key={index}
          className="rounded-2xl overflow-hidden border border-gray-200 shadow hover:shadow-xl transition duration-300 bg-white hover:-translate-y-1"
        >
          <img
            src={mentor.image || "/placeholder.svg"}
            alt={mentor.name}
            className="w-full h-64 object-cover hover:scale-105 transition duration-300"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-gray-800">{mentor.name}</h3>
            <p className="text-sm text-[#833589] mt-1 font-medium">{mentor.role}</p>
            {mentor.role2 && (
              <p className="text-xs text-gray-500 mt-1">{mentor.role2}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


        {/* 6. Why Choose IPM Careers */}
        <section className="py-20 bg-[#F9FAFB]">
          <div className="container mx-auto px-4">
            {/* Heading */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#1F2937] mb-4">
                Why choose: <span className="text-[#833589]">IPM Careers?</span>
              </h2>
              <p className="text-base md:text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
                Discover what makes us the preferred choice for thousands of IPMAT aspirants across India
              </p>
            </div>
            {/* Grid Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl p-6 md:p-8 text-center shadow-md hover:shadow-xl transition-all duration-500 border border-[#E5E7EB] hover:border-[#E79800]/40 transform hover:-translate-y-2"
                >
                  {/* Background hover layer */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#833589]/5 to-white rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 bg-[#833589]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#833589] transition-colors duration-500">
                      <span className="text-3xl md:text-4xl group-hover:text-white group-hover:scale-110 transition-all duration-500">
                        {item.icon}
                      </span>
                    </div>
                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-[#111827] mb-3 group-hover:text-[#833589] transition-colors duration-300">
                      {item.heading}
                    </h3>
                    {/* Description */}
                    <p className="text-[#4B5563] text-sm md:text-base leading-relaxed group-hover:text-[#374151] transition-colors duration-300">
                      {item.description}
                    </p>
                    {/* Decorative dot */}
                    <div className="absolute top-4 right-4 w-2.5 h-2.5 bg-[#E79800]/40 rounded-full group-hover:bg-[#E79800] transition-colors duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
            {/* CTA */}
            <div className="text-center mt-20">
              <div className="inline-flex items-center gap-3 bg-[#F3E8F9] px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="text-[#833589] font-semibold text-sm sm:text-lg">Ready to start your journey?</span>
                <svg className="w-5 h-5 text-[#E79800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* 7. ENHANCED Success Stories - Smooth Movement with Click to Open */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Success Stories</h2>
              <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
                Celebrating our students' achievements and their journey to success
              </p>
            </div>
            <div
              className="relative max-w-7xl mx-auto"
              onMouseEnter={() => setSuccessStoryPaused(true)}
              onMouseLeave={() => setSuccessStoryPaused(false)}
            >
              <div className="overflow-hidden">
                <motion.div
                  className={`grid gap-4 md:gap-6 ${
                    visibleCards === 1
                      ? "grid-cols-1"
                      : visibleCards === 2
                        ? "grid-cols-2"
                        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  }`}
                  key={currentSuccessStory}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  {/* Show cards based on screen size */}
                  {Array.from({ length: visibleCards }).map((_, index) => {
                    const storyIndex = (currentSuccessStory + index) % successStories.length
                    const story = successStories[storyIndex]
                    return (
                      <motion.div
                        key={`${story.id}-${index}-${currentSuccessStory}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.1,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 cursor-pointer"
                        onClick={() => handleImageClick(story.image, story.description)}
                      >
                        <div className="relative h-64 md:h-72">
                          <img
                            src={story.image || "/placeholder.svg"}
                            alt="Success Story"
                            className="w-full h-full object-cover transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                            <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                              <svg
                                className="w-6 h-6 text-[#833589]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-3 md:p-4">
                          <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{story.description}</p>
                        </div>
                      </motion.div>
                    )
                  })}
                </motion.div>
              </div>
              {/* Navigation Arrows - Hidden on mobile */}
              <div className="hidden lg:block absolute inset-y-0 left-0 flex items-center z-10 -ml-12">
                <button
                  onClick={prevSuccessStory}
                  className="bg-white hover:bg-gray-50 text-[#833589] rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>
              <div className="hidden lg:block absolute inset-y-0 right-0 flex items-center z-10 -mr-12">
                <button
                  onClick={nextSuccessStory}
                  className="bg-white hover:bg-gray-50 text-[#833589] rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              {/* Mobile Navigation Buttons */}
              <div className="lg:hidden flex justify-center mt-6 space-x-4">
                <button
                  onClick={prevSuccessStory}
                  className="bg-white hover:bg-gray-50 text-[#833589] rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSuccessStory}
                  className="bg-white hover:bg-gray-50 text-[#833589] rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            {/* Enhanced Pagination Dots - Positioned at bottom, aligned with cards */}
            <div className="flex justify-center mt-8 space-x-2">
              {successStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSuccessStory(index)
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSuccessStory === index
                      ? "bg-[#833589] scale-125 shadow-md"
                      : "bg-gray-300 hover:bg-[#E79800] hover:scale-110"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 8. Enhanced Student Testimonials - Responsive Design (Keep 3 at a time as requested) */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Student Testimonials</h2>
              <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from our successful students who achieved their IIM dreams with IPM Careers
              </p>
            </div>
            <div
              className="relative max-w-7xl mx-auto"
              onMouseEnter={() => setTestimonialPaused(true)}
              onMouseLeave={() => setTestimonialPaused(false)}
            >
              <div className="overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{
                      opacity: isTestimonialTransitioning ? 0.7 : 1,
                      x: 0,
                      scale: isTestimonialTransitioning ? 0.98 : 1,
                    }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    {studentTestimonials.slice(currentTestimonial, currentTestimonial + 3).map((testimonial, index) => (
                      <motion.div
                        key={testimonial.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                      >
                        {/* Student Image */}
                        <div className="flex items-center mb-4">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-[#833589]/20"
                          />
                          <div className="ml-3 md:ml-4">
                            <h3 className="text-base md:text-lg font-bold text-gray-800">{testimonial.name}</h3>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs md:text-sm">
                              <span className="bg-[#833589]/10 px-2 py-1 rounded-full text-[#833589] font-semibold">
                                {testimonial.college}
                              </span>
                              {testimonial.rank && (
                                <span className="bg-[#E79800]/10 px-2 py-1 rounded-full text-[#E79800] font-semibold">
                                  {testimonial.rank}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        {/* Review */}
                        <p className="text-gray-600 leading-relaxed mb-4 italic text-sm md:text-base">{`"${testimonial.review}"`}</p>
                        {/* Rating */}
                        <div className="flex justify-center space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4 md:w-5 md:h-5 text-[#E79800] fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
              {/* Navigation Arrows - Hidden on mobile */}
              <div className="hidden lg:block absolute inset-y-0 left-0 flex items-center z-10 -ml-12">
                <button
                  onClick={prevTestimonial}
                  className="bg-white hover:bg-gray-50 text-[#833589] rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>
              <div className="hidden lg:block absolute inset-y-0 right-0 flex items-center z-10 -mr-12">
                <button
                  onClick={nextTestimonial}
                  className="bg-white hover:bg-gray-50 text-[#833589] rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              {/* Mobile Navigation Buttons */}
              <div className="lg:hidden flex justify-center mt-6 space-x-4">
                <button
                  onClick={prevTestimonial}
                  className="bg-white hover:bg-gray-50 text-[#833589] rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="bg-white hover:bg-gray-50 text-[#833589] rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              {/* Enhanced Dots Indicator */}
              <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: Math.ceil(studentTestimonials.length / 3) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsTestimonialTransitioning(true)
                      setTimeout(() => {
                        setCurrentTestimonial(index * 3)
                        setIsTestimonialTransitioning(false)
                      }, 150)
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      Math.floor(currentTestimonial / 3) === index
                        ? "bg-[#833589] scale-125 shadow-md"
                        : "bg-gray-300 hover:bg-[#E79800] hover:scale-110"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 9. FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg bg-white">
                  <button
                    className="w-full text-left p-4 md:p-6 font-semibold text-gray-800 hover:bg-gray-50 flex justify-between items-center"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="text-sm md:text-base">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform text-[#833589] ${openFaq === index ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === index && (
                    <div className="px-4 md:px-6 pb-4 md:pb-6 text-gray-600 text-sm md:text-base">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-[#833589] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-8 leading-tight">
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
