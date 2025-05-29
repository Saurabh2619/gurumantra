"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  ChevronLeft,
  ChevronRight,
  Crown,
  Star,
  Zap,
  Trophy,
  Target,
  Award,
  TrendingUp,
  Medal,
  Brain,
  Calculator,
  MessageCircle,
  BookOpen,
  Users,
} from "lucide-react"

export default function MilestonePage() {
  const [currentView, setCurrentView] = useState(0)
  const [showCelebration, setShowCelebration] = useState(true)
  const [pageLoaded, setPageLoaded] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const [dragStartX, setDragStartX] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const SWIPE_THRESHOLD = 50

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setPageLoaded(true)
    }, 100)

    const celebrationTimer = setTimeout(() => {
      setShowCelebration(false)
    }, 4000)

    return () => {
      document.removeEventListener("mousemove", handleDocumentMouseMove)
      document.removeEventListener("mouseup", handleDocumentMouseUp)
      clearTimeout(loadTimer)
      clearTimeout(celebrationTimer)
    }
  }, [])

  const views = [
    {
      id: 1,
      title: "The Champion",
      content: (
        <div className="h-full flex flex-col text-center">
          {/* Sticky Profile Section */}
          <div className="flex-shrink-0 z-10 bg-white pb-1 sm:pb-2">
            <div className="flex flex-col items-center justify-start">
              <div className="relative mb-1.5 sm:mb-2">
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-[#833589] p-1.5 sm:p-2 mx-auto">
                  <Image
                    src=""
                    alt="Nikhilesh Kumar"
                    width={150}
                    height={150}
                    className="w-full h-full rounded-full object-cover border-2 border-white"
                    unoptimized={true}
                  />
                </div>
                <div className="absolute -bottom-1.5 -right-1.5 sm:-bottom-2 sm:-right-2 bg-[#f2ad00] rounded-full p-1 sm:p-1.5 shadow-lg">
                  <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                </div>
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#833589] mb-1 sm:mb-1.5 font-montserrat">
                Nikhilesh Kumar
              </h2>
              <div className="bg-[#f2ad00] text-white px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full font-bold text-sm sm:text-base md:text-lg inline-block shadow-lg">
                🏆 AIR 1 - IPMAT 2024 🏆
              </div>
            </div>
          </div>
          {/* Scrollable Content Section */}
          <div className="flex-1 overflow-y-auto custom-scrollbar pt-1.5 sm:pt-2">
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 w-full max-w-[280px] sm:max-w-xs mx-auto mb-1.5 sm:mb-2">
              <div className="bg-[#833589] text-white p-1.5 sm:p-2 rounded-lg sm:rounded-xl text-center">
                <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 mx-auto mb-0.5 text-[#f2ad00]" />
                <div className="text-sm sm:text-base font-bold">1st</div>
                <div className="text-[10px] sm:text-xs opacity-90">All India</div>
              </div>
              <div className="bg-[#f2ad00] text-white p-1.5 sm:p-2 rounded-lg sm:rounded-xl text-center">
                <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 mx-auto mb-0.5" />
                <div className="text-sm sm:text-base font-bold">99.9%</div>
                <div className="text-[10px] sm:text-xs opacity-90">Percentile</div>
              </div>
              <div className="bg-green-500 text-white p-1.5 sm:p-2 rounded-lg sm:rounded-xl text-center">
                <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 mx-auto mb-0.5" />
                <div className="text-sm sm:text-base font-bold">Top</div>
                <div className="text-[10px] sm:text-xs opacity-90">Performer</div>
              </div>
            </div>
            <blockquote className="text-[11px] sm:text-xs text-gray-700 italic max-w-[280px] sm:max-w-xs mx-auto bg-gray-50 p-1.5 sm:p-2 rounded-lg sm:rounded-xl border-l-2 sm:border-l-4 border-[#833589]">
              {
                '"Success is not just about reaching the destination, but about the journey of consistent effort and dedication."'
              }
            </blockquote>
          </div>
        </div>
      ),
    },
    // Mentor Card Structure (Views 2, 3, 4)
    ...[
      {
        id: 2,
        title: "Ashutosh Sir - The Mentor",
        profile: {
          name: "Ashutosh Sir",
          imageSeed: "ashutosh_mentor",
          role: "Mentor & Strategic Guide",
          experience: "15+ Years Experience",
          icon: Brain,
          bgColor: "bg-[#833589]",
          borderColor: "border-[#833589]/20",
          accentColor: "text-[#f2ad00]",
          iconBg: "bg-[#f2ad00]",
        },
        details: {
          expertiseTitle: "Expertise Areas",
          expertiseIcon: Target,
          expertise: ["Strategic Planning & Goal Setting", "Motivation & Mental Conditioning", "Performance Analysis"],
          mantraTitle: "Success Mantra",
          mantra: "Every student has the potential to achieve greatness through strategic guidance.",
          stat1Val: "500+",
          stat1Label: "Students",
          stat1Bg: "bg-[#f2ad00]",
          stat2Val: "95%",
          stat2Label: "Success",
          stat2Bg: "bg-green-500",
        },
      },
      {
        id: 3,
        title: "Nikhil Sir - QA Master",
        profile: {
          name: "Nikhil Sir",
          imageSeed: "nikhil_mentor",
          role: "QA Faculty",
          experience: "QA Specialist",
          icon: Calculator,
          bgColor: "bg-[#f2ad00]",
          borderColor: "border-[#f2ad00]/20",
          accentColor: "text-[#833589]",
          iconBg: "bg-[#833589]",
        },
        details: {
          expertiseTitle: "Teaching Approach",
          expertiseIcon: Calculator, // Using Calculator icon for consistency
          expertise: ["Concept-based Learning", "Speed & Accuracy Enhancement", "Shortcut Techniques"],
          mantraTitle: "Teaching Philosophy",
          mantra: "Mathematics is about understanding patterns. Speed follows naturally.",
          stat1Val: "1000+",
          stat1Label: "Problems",
          stat1Bg: "bg-[#833589]",
          stat2Val: "98%",
          stat2Label: "Accuracy",
          stat2Bg: "bg-green-500",
        },
      },
      {
        id: 4,
        title: "Taruna Maam - VA Expert",
        profile: {
          name: "Taruna Maam",
          imageSeed: "taruna_mentor",
          role: "VA Faculty",
          experience: "Language Expert",
          icon: MessageCircle,
          bgColor: "bg-[#833589]", // Main color for Taruna Maam
          borderColor: "border-[#833589]/20",
          accentColor: "text-[#f2ad00]", // Accent color
          iconBg: "bg-[#f2ad00]", // Icon background with accent
        },
        details: {
          expertiseTitle: "Specializations",
          expertiseIcon: MessageCircle,
          expertise: ["Reading Comprehension", "Vocabulary Building", "Grammar & Communication"],
          mantraTitle: "Teaching Methodology",
          mantra: "Language is the bridge between thoughts and expression.",
          stat1Val: "2000+",
          stat1Label: "Words",
          stat1Bg: "bg-[#f2ad00]",
          stat2Val: "96%",
          stat2Label: "Improvement",
          stat2Bg: "bg-green-500",
        },
      },
    ].map((mentorView) => ({
      id: mentorView.id,
      title: mentorView.title,
      content: (
        <div className="h-full flex flex-col">
          <div
            className={`bg-white rounded-xl shadow-lg ${mentorView.profile.borderColor} mx-auto max-w-full 
                          flex flex-col flex-1 md:grid md:grid-cols-2 md:gap-2 lg:md:gap-3 p-1.5 sm:p-2`}
          >
            {/* Profile Section (Sticky on mobile, first grid col on desktop) */}
            <div className="flex-shrink-0 z-10 bg-white md:bg-transparent pb-1.5 md:pb-0">
              <div className="flex flex-col items-center md:items-start">
                <div className="relative mb-1.5 sm:mb-2">
                  <div
                    className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full ${mentorView.profile.bgColor} p-1 sm:p-1.5 mx-auto md:mx-0`}
                  >
                    <Image
                      src={``}
                      alt={mentorView.profile.name}
                      width={120}
                      height={120}
                      className="w-full h-full rounded-full object-cover border-2 border-white"
                      unoptimized={true}
                    />
                  </div>
                  <div
                    className={`absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 ${mentorView.profile.iconBg} rounded-full p-1 sm:p-1.5 shadow-lg`}
                  >
                    <mentorView.profile.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white" />
                  </div>
                </div>
                <h3
                  className={`text-md sm:text-lg md:text-xl font-bold ${mentorView.profile.accentColor === "text-[#f2ad00]" ? "text-[#833589]" : "text-[#f2ad00]"} text-center md:text-left mb-0.5 font-montserrat`}
                >
                  {mentorView.profile.name}
                </h3>
                <p
                  className={`text-sm sm:text-base ${mentorView.profile.accentColor} font-semibold text-center md:text-left mb-1 sm:mb-1.5`}
                >
                  {mentorView.profile.role}
                </p>
                <div
                  className={`${mentorView.profile.bgColor} text-white px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold`}
                >
                  {mentorView.profile.experience}
                </div>
              </div>
            </div>
            {/* Details Section (Scrollable on mobile, second grid col on desktop) */}
            <div className="flex-1 overflow-y-auto custom-scrollbar pt-1.5 md:pt-0">
              <div className="space-y-1.5 sm:space-y-2">
                <div className={`${mentorView.profile.bgColor} text-white p-1.5 sm:p-2 rounded-md`}>
                  <h4 className="text-sm sm:text-base font-bold mb-0.5 sm:mb-1 flex items-center gap-1 font-montserrat">
                    <mentorView.details.expertiseIcon
                      className={`${mentorView.profile.accentColor === "text-[#f2ad00]" ? "text-[#f2ad00]" : "text-white"} w-3.5 h-3.5 sm:w-4 sm:h-4`}
                    />
                    {mentorView.details.expertiseTitle}
                  </h4>
                  <ul className="space-y-0.5 text-[10px] sm:text-xs">
                    {mentorView.details.expertise.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`bg-gray-50 p-1.5 sm:p-2 rounded-md border-l-2 sm:border-l-3 ${mentorView.profile.borderColor.replace("border-", "border-l-")}`}
                >
                  <h4
                    className={`text-sm sm:text-base font-bold ${mentorView.profile.accentColor === "text-[#f2ad00]" ? "text-[#833589]" : "text-[#f2ad00]"} mb-0.5 font-montserrat`}
                  >
                    {mentorView.details.mantraTitle}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-gray-700 italic">{`"${mentorView.details.mantra}"`}</p>
                </div>
                <div className="grid grid-cols-2 gap-1 sm:gap-1.5">
                  <div className={`${mentorView.details.stat1Bg} text-white p-1 sm:p-1.5 rounded-md text-center`}>
                    <div className="text-md sm:text-lg font-bold">{mentorView.details.stat1Val}</div>
                    <div className="text-[9px] sm:text-[10px] opacity-90">{mentorView.details.stat1Label}</div>
                  </div>
                  <div className={`${mentorView.details.stat2Bg} text-white p-1 sm:p-1.5 rounded-md text-center`}>
                    <div className="text-md sm:text-lg font-bold">{mentorView.details.stat2Val}</div>
                    <div className="text-[9px] sm:text-[10px] opacity-90">{mentorView.details.stat2Label}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    })),
    {
      id: 5,
      title: "Success Journey",
      content: (
        <div className="h-full flex flex-col">
          {/* Sticky Section */}
          <div className="flex-shrink-0 z-10 bg-white pb-1.5 sm:pb-2 text-center">
            <h2 className="text-md sm:text-lg md:text-xl font-bold text-[#833589] mb-1 sm:mb-1.5 flex items-center justify-center gap-1.5 sm:gap-2 font-montserrat">
              <TrendingUp className="text-[#f2ad00] w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              Success Blueprint
              <TrendingUp className="text-[#f2ad00] w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </h2>
            <div className="w-16 sm:w-20 h-0.5 bg-[#f2ad00] mx-auto rounded-full"></div>
          </div>
          {/* Scrollable Section */}
          <div className="flex-1 overflow-y-auto custom-scrollbar pt-1.5 sm:pt-2">
            <div className="relative max-w-3xl mx-auto px-1 sm:px-2">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full top-0.5 bottom-0.5 sm:top-1 sm:bottom-1 bg-[#833589]/30 rounded-full hidden md:block"></div>
              <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
                {[
                  {
                    icon: BookOpen,
                    title: "Daily Foundation",
                    description: "6h study + 2h revision",
                    bgColor: "bg-[#833589]",
                    side: "left",
                  },
                  {
                    icon: Zap,
                    title: "QA Mastery",
                    description: "100+Q + concepts",
                    bgColor: "bg-[#f2ad00]",
                    side: "right",
                  },
                  {
                    icon: Users,
                    title: "VA Excellence",
                    description: "Reading + vocab",
                    bgColor: "bg-purple-500",
                    side: "left",
                  },
                  {
                    icon: Trophy,
                    title: "Mock Mastery",
                    description: "3 tests/wk + analysis",
                    bgColor: "bg-green-500",
                    side: "right",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-start md:items-center ${item.side === "right" ? "md:flex-row-reverse" : "md:flex-row"} relative z-10`}
                  >
                    <div
                      className={`w-full md:w-5/12 ${item.side === "right" ? "md:text-right md:pl-3" : "md:text-left md:pr-3"}`}
                    >
                      <div
                        className={`${item.bgColor} text-white p-1.5 sm:p-2 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300`}
                      >
                        <div
                          className={`flex items-center gap-1 sm:gap-1.5 mb-0.5 ${item.side === "right" ? "md:flex-row-reverse justify-end" : "justify-start"}`}
                        >
                          <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                          <h3 className="text-xs sm:text-sm font-bold font-montserrat">{item.title}</h3>
                        </div>
                        <p className="text-[10px] sm:text-xs opacity-90">{item.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex w-2/12 justify-center items-center">
                      <div
                        className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${item.bgColor} border-2 border-white shadow-lg`}
                      ></div>
                    </div>
                    <div className="hidden md:block w-5/12"></div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-1.5 sm:mt-2">
                <div className="inline-flex items-center gap-1 sm:gap-1.5 bg-[#833589] text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-full font-bold text-[10px] sm:text-xs shadow-lg">
                  <Medal className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#f2ad00]" />
                  Consistency + Strategy = Success
                  <Medal className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#f2ad00]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  const nextView = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentView((prev) => (prev < views.length - 1 ? prev + 1 : prev))
      setIsTransitioning(false)
    }, 200)
  }

  const prevView = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentView((prev) => (prev > 0 ? prev - 1 : prev))
      setIsTransitioning(false)
    }, 200)
  }

  const goToView = (index: number) => {
    if (isTransitioning || index === currentView) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentView(index)
      setIsTransitioning(false)
    }, 200)
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isTransitioning) return
    setDragStartX(e.touches[0].clientX)
    setIsDragging(true)
  }

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || dragStartX === null || isTransitioning) {
      setIsDragging(false)
      return
    }
    const clientX = e.changedTouches[0].clientX
    const deltaX = clientX - dragStartX
    if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
      if (deltaX < 0) nextView()
      else prevView()
    }
    setDragStartX(null)
    setIsDragging(false)
  }

  const handleDocumentMouseMove = (e: MouseEvent) => {}

  const handleDocumentMouseUp = (e: MouseEvent) => {
    document.removeEventListener("mousemove", handleDocumentMouseMove)
    document.removeEventListener("mouseup", handleDocumentMouseUp)
    setIsDragging(false)
    if (dragStartX === null || isTransitioning) return
    const deltaX = e.clientX - dragStartX
    if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
      if (deltaX < 0) nextView()
      else prevView()
    }
    setDragStartX(null)
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTransitioning) return
    // Allow dragging only on the book container, not its interactive children like buttons
    if ((e.target as HTMLElement).closest("button")) {
      return
    }
    e.preventDefault()
    setDragStartX(e.clientX)
    setIsDragging(true)
    document.addEventListener("mousemove", handleDocumentMouseMove)
    document.addEventListener("mouseup", handleDocumentMouseUp)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-yellow-100 relative overflow-hidden">
      {showCelebration && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(25)].map((_, i) => (
            <div
              key={`confetti-${i}`}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10%`,
                animationDelay: `${Math.random() * 2}s`,
                transform: `scale(${0.5 + Math.random() * 0.8})`,
              }}
            >
              <div
                className="w-2 h-3 opacity-80"
                style={{
                  backgroundColor: Math.random() > 0.5 ? "#833589" : "#f2ad00",
                  clipPath: Math.random() > 0.5 ? "polygon(50% 0%, 0% 100%, 100% 100%)" : "circle(50% at 50% 50%)",
                  animation: `fall ${2 + Math.random() * 2}s linear infinite`,
                }}
              />
            </div>
          ))}
          {[
            { top: "10%", left: "10%", delay: "0s" },
            { top: "15%", right: "12%", delay: "0.3s" },
            { bottom: "10%", left: "15%", delay: "0.6s" },
            { bottom: "12%", right: "10%", delay: "0.9s" },
          ].map((pos, i) => (
            <Star
              key={`star-${i}`}
              className="absolute text-[#f2ad00] opacity-0"
              style={{
                width: `${20 + Math.random() * 15}px`,
                height: `${20 + Math.random() * 15}px`,
                animation: `twinkle-pop 2.5s ease-in-out infinite ${pos.delay}`,
                ...pos,
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3 relative z-10">
        <div
          className={`text-center mb-3 sm:mb-4 transition-all duration-1000 ${
            pageLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <div className="relative inline-block">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#833589] mb-1 sm:mb-2 relative font-montserrat">
              MILESTONE
              <span className="absolute -top-2 -right-3 text-xl sm:text-3xl animate-pulse">🎉</span>
            </h1>
            <div className="text-xl sm:text-3xl lg:text-4xl font-bold text-[#833589] mb-2 font-montserrat">
              ACHIEVED
            </div>
          </div>
          <div className="bg-[#f2ad00] text-white px-4 sm:px-6 py-2 rounded-full inline-block text-sm sm:text-lg font-bold shadow-2xl hover:bg-[#f2ad00]/90 transition-colors">
            🏆 ALL INDIA RANK 1 - IPMAT 2024 🏆
          </div>
          <p className="text-gray-700 text-xs sm:text-sm md:text-base max-w-3xl mx-auto mt-2 sm:mt-3 leading-relaxed px-2 sm:px-4">
            Celebrating the extraordinary journey of dedication, mentorship, and triumph.
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${
            pageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute -top-3 left-2 sm:left-4 z-30">
              <div className="bg-[#f2ad00] rounded-full p-1.5 sm:p-2 md:p-3 shadow-xl border-2 border-white">
                <Crown className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
              </div>
            </div>
            <button
              onClick={prevView}
              disabled={currentView === 0 || isTransitioning}
              aria-label="Previous slide"
              className="absolute left-0 sm:-left-1 md:-left-2 top-1/2 transform -translate-y-1/2 z-20 bg-[#833589] hover:bg-[#833589]/90 disabled:opacity-30 disabled:cursor-not-allowed text-white p-1.5 sm:p-2 md:p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#833589] focus:ring-offset-2"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={nextView}
              disabled={currentView === views.length - 1 || isTransitioning}
              aria-label="Next slide"
              className="absolute right-0 sm:-right-1 md:-right-2 top-1/2 transform -translate-y-1/2 z-20 bg-[#f2ad00] hover:bg-[#f2ad00]/90 disabled:opacity-30 disabled:cursor-not-allowed text-white p-1.5 sm:p-2 md:p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#f2ad00] focus:ring-offset-2"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
            <div className="relative">
              <div
                className={`bg-white rounded-2xl sm:rounded-3xl shadow-2xl border-2 sm:border-4 border-[#833589] 
                h-[500px] sm:h-[520px] md:h-[540px] lg:h-[560px] 
                w-full max-w-[98%] sm:max-w-[95%] md:max-w-[90%] mx-auto 
                transition-all duration-300 ease-in-out select-none ${isTransitioning ? "opacity-50 scale-95" : "opacity-100 scale-100"}`}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                style={{ cursor: isDragging ? "grabbing" : "grab" }}
              >
                {/* Removed pointer-events-none from direct child, content itself will handle its events */}
                <div className="p-1.5 sm:p-2 md:p-3 lg:p-4 h-full flex flex-col">
                  <div className="text-center mb-1 sm:mb-1.5 md:mb-2 flex-shrink-0">
                    {" "}
                    {/* flex-shrink-0 for title */}
                    <h2 className="text-md sm:text-lg md:text-xl font-bold text-[#833589] font-montserrat">
                      {views[currentView].title}
                    </h2>
                  </div>
                  {/* This div will contain the actual view content and manage its own scrolling if necessary */}
                  <div className="flex-1 flex flex-col overflow-hidden">{views[currentView].content}</div>
                  <div className="text-right mt-1 sm:mt-1.5 flex-shrink-0">
                    {" "}
                    {/* flex-shrink-0 for page number */}
                    <span className="text-[10px] sm:text-xs text-gray-500 italic">
                      Page {currentView + 1} of {views.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-2 sm:mt-3 md:mt-4">
              <div className="flex space-x-1.5 sm:space-x-2">
                {views.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToView(index)}
                    disabled={isTransitioning}
                    aria-label={`Go to page ${index + 1}`}
                    className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-offset-1 sm:focus:ring-offset-2 ${
                      index === currentView
                        ? "bg-[#f2ad00] scale-125 shadow-md focus:ring-[#f2ad00]"
                        : "bg-gray-300 hover:bg-gray-400 hover:scale-110 focus:ring-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`text-center mt-3 sm:mt-4 md:mt-6 transition-all duration-1000 delay-500 ${
            pageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative inline-block">
            <div className="bg-[#833589] text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-bold shadow-2xl hover:bg-[#833589]/90 transition-colors">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-[#f2ad00]" />
                <span className="text-xs sm:text-sm md:text-base">CONGRATULATIONS NIKHILESH!</span>
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-[#f2ad00]" />
              </div>
            </div>
            <div className="absolute -top-1 sm:-top-1.5 -right-1 sm:-right-1.5 animate-bounce">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#f2ad00]" />
            </div>
          </div>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-gray-600 font-semibold px-2 sm:px-4">
            From our entire team - You've made us incredibly proud! 🌟
          </p>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
        
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 4px; /* Even thinner scrollbar */
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(220, 220, 220, 0.1); /* More transparent track */
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d8b4fe; /* Purple-300 for a very soft purple */
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #fde047; /* Yellow-300 for soft gold */
        }
        /* For Firefox */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #d8b4fe rgba(220, 220, 220, 0.1);
        }


        @keyframes fall {
          0% {
            transform: translateY(-10vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) rotate(720deg);
            opacity: 0;
          }
        }

        @keyframes twinkle-pop {
          0%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
          25% { opacity: 1; transform: scale(1.2) rotate(15deg); }
          50% { opacity: 0.7; transform: scale(1) rotate(-10deg); }
          75% { opacity: 1; transform: scale(1.1) rotate(5deg); }
        }
      `}</style>
    </div>
  )
}
