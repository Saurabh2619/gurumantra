"use client"

import { useState, useEffect } from "react"
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

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setPageLoaded(true)
    }, 100)

    const celebrationTimer = setTimeout(() => {
      setShowCelebration(false)
    }, 3000)

    return () => {
      clearTimeout(loadTimer)
      clearTimeout(celebrationTimer)
    }
  }, [])

  const views = [
    {
      id: 1,
      title: "The Champion",
      content: (
        <div className="flex flex-col items-center justify-center h-full py-1 px-2">
          <div className="relative mb-3">
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-[#833589] p-2 mx-auto">
              <img
                src="/placeholder.svg?height=150&width=150"
                alt="Nikhilesh"
                className="w-full h-full rounded-full object-cover border-2 border-white"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-[#f2ad00] rounded-full p-2 shadow-lg">
              <Star className="w-5 h-5 text-white" />
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#833589] mb-2 text-center font-montserrat">
            Nikhilesh Kumar
          </h2>

          <div className="bg-[#f2ad00] text-white px-4 py-2 rounded-full font-bold text-lg inline-block shadow-lg mb-3">
            🏆 AIR 1 - IPMAT 2024 🏆
          </div>

          <div className="grid grid-cols-3 gap-3 w-full max-w-sm mb-3">
            <div className="bg-[#833589] text-white p-2.5 rounded-xl text-center">
              <Trophy className="w-5 h-5 mx-auto mb-1 text-[#f2ad00]" />
              <div className="text-lg font-bold">1st</div>
              <div className="text-sm opacity-90">All India</div>
            </div>
            <div className="bg-[#f2ad00] text-white p-2.5 rounded-xl text-center">
              <Target className="w-5 h-5 mx-auto mb-1" />
              <div className="text-lg font-bold">99.9%</div>
              <div className="text-sm opacity-90">Percentile</div>
            </div>
            <div className="bg-green-500 text-white p-2.5 rounded-xl text-center">
              <Award className="w-5 h-5 mx-auto mb-1" />
              <div className="text-lg font-bold">Top</div>
              <div className="text-sm opacity-90">Performer</div>
            </div>
          </div>

          <blockquote className="text-sm text-gray-700 italic max-w-sm mx-auto bg-gray-50 p-3 rounded-xl border-l-4 border-[#833589] text-center">
            "Success is not just about reaching the destination, but about the journey of consistent effort and
            dedication."
          </blockquote>
        </div>
      ),
    },
    {
      id: 2,
      title: "Ashutosh Sir - The Mentor",
      content: (
        <div className="h-[400px] sm:h-full overflow-y-auto scrollbar-container py-2 px-2">
          <h2 className="text-2xl font-bold text-[#833589] text-center mb-3 font-montserrat">Ashutosh Sir</h2>
          <div className="w-16 h-0.5 bg-[#833589] mx-auto rounded-full mb-4"></div>

          <div className="bg-white rounded-xl p-3 shadow-lg border border-[#833589]/20 mx-auto max-w-full">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col items-center md:items-start">
                <div className="relative mb-3">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-[#833589] p-1.5 mx-auto md:mx-0">
                    <img
                      src="/placeholder.svg?height=120&width=120"
                      alt="Ashutosh Sir"
                      className="w-full h-full rounded-full object-cover border-2 border-white"
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 bg-[#f2ad00] rounded-full p-1.5 shadow-lg">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#833589] text-center md:text-left mb-1 font-montserrat">
                  Ashutosh Sir
                </h3>
                <p className="text-lg text-[#f2ad00] font-semibold text-center md:text-left mb-2">
                  Mentor & Strategic Guide
                </p>
                <div className="bg-[#833589] text-white px-3 py-1.5 rounded-full text-sm font-semibold">
                  15+ Years Experience
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-[#833589] text-white p-3 rounded-lg">
                  <h4 className="text-lg font-bold mb-2 flex items-center gap-1 font-montserrat">
                    <Target className="text-[#f2ad00] w-5 h-5" />
                    Expertise Areas
                  </h4>
                  <ul className="space-y-0.5 text-base">
                    <li>• Strategic Planning & Goal Setting</li>
                    <li>• Motivation & Mental Conditioning</li>
                    <li>• Performance Analysis</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg border-l-3 border-[#833589]">
                  <h4 className="text-lg font-bold text-[#833589] mb-1 font-montserrat">Success Mantra</h4>
                  <p className="text-gray-700 italic text-base">
                    "Every student has the potential to achieve greatness through strategic guidance."
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-[#f2ad00] text-white p-2 rounded-lg text-center">
                    <div className="text-xl font-bold">500+</div>
                    <div className="text-sm opacity-90">Students</div>
                  </div>
                  <div className="bg-green-500 text-white p-2 rounded-lg text-center">
                    <div className="text-xl font-bold">95%</div>
                    <div className="text-sm opacity-90">Success</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Nikhil Sir - QA Master",
      content: (
        <div className="h-[400px] sm:h-full overflow-y-auto scrollbar-container py-2 px-2">
          <h2 className="text-2xl font-bold text-[#f2ad00] text-center mb-3 font-montserrat">Nikhil Sir</h2>
          <div className="w-16 h-0.5 bg-[#f2ad00] mx-auto rounded-full mb-4"></div>

          <div className="bg-white rounded-xl p-3 shadow-lg border border-[#f2ad00]/20 mx-auto max-w-full">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col items-center md:items-start">
                <div className="relative mb-3">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-[#f2ad00] p-1.5 mx-auto md:mx-0">
                    <img
                      src="/placeholder.svg?height=120&width=120"
                      alt="Nikhil Sir"
                      className="w-full h-full rounded-full object-cover border-2 border-white"
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 bg-[#833589] rounded-full p-1.5 shadow-lg">
                    <Calculator className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#833589] text-center md:text-left mb-1 font-montserrat">
                  Nikhil Sir
                </h3>
                <p className="text-lg text-[#f2ad00] font-semibold text-center md:text-left mb-2">QA Faculty</p>
                <div className="bg-[#f2ad00] text-white px-3 py-1.5 rounded-full text-sm font-semibold">
                  QA Specialist
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-[#f2ad00] text-white p-3 rounded-lg">
                  <h4 className="text-lg font-bold mb-2 flex items-center gap-1 font-montserrat">
                    <Calculator className="text-white w-5 h-5" />
                    Teaching Approach
                  </h4>
                  <ul className="space-y-0.5 text-base">
                    <li>• Concept-based Learning</li>
                    <li>• Speed & Accuracy Enhancement</li>
                    <li>• Shortcut Techniques</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg border-l-3 border-[#f2ad00]">
                  <h4 className="text-lg font-bold text-[#833589] mb-1 font-montserrat">Teaching Philosophy</h4>
                  <p className="text-gray-700 italic text-base">
                    "Mathematics is about understanding patterns. Speed follows naturally."
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-[#833589] text-white p-2 rounded-lg text-center">
                    <div className="text-xl font-bold">1000+</div>
                    <div className="text-sm opacity-90">Problems</div>
                  </div>
                  <div className="bg-green-500 text-white p-2 rounded-lg text-center">
                    <div className="text-xl font-bold">98%</div>
                    <div className="text-sm opacity-90">Accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Taruna Maam - VA Expert",
      content: (
        <div className="h-[400px] sm:h-full overflow-y-auto scrollbar-container py-2 px-2">
          <h2 className="text-2xl font-bold text-[#833589] text-center mb-3 font-montserrat">Taruna Maam</h2>
          <div className="w-16 h-0.5 bg-purple-600 mx-auto rounded-full mb-4"></div>

          <div className="bg-white rounded-xl p-3 shadow-lg border border-purple-600/20 mx-auto max-w-full">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col items-center md:items-start">
                <div className="relative mb-3">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-purple-600 p-1.5 mx-auto md:mx-0">
                    <img
                      src="/placeholder.svg?height=120&width=120"
                      alt="Taruna Maam"
                      className="w-full h-full rounded-full object-cover border-2 border-white"
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 bg-purple-600 rounded-full p-1.5 shadow-lg">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#833589] text-center md:text-left mb-1 font-montserrat">
                  Taruna Maam
                </h3>
                <p className="text-lg text-[#833589] font-semibold text-center md:text-left mb-2">VA Faculty</p>
                <div className="bg-[#833589] text-white px-3 py-1.5 rounded-full text-sm font-semibold">
                  Language Expert
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-[#833589] text-white p-3 rounded-lg">
                  <h4 className="text-lg font-bold mb-2 flex items-center gap-1 font-montserrat">
                    <MessageCircle className="text-white w-5 h-5" />
                    Specializations
                  </h4>
                  <ul className="space-y-0.5 text-base">
                    <li>• Reading Comprehension</li>
                    <li>• Vocabulary Building</li>
                    <li>• Grammar & Communication</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg border-l-3 border-[#833589]">
                  <h4 className="text-lg font-bold text-[#833589] mb-1 font-montserrat">Teaching Methodology</h4>
                  <p className="text-gray-700 italic text-base">
                    "Language is the bridge between thoughts and expression."
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-[#f2ad00] text-white p-2 rounded-lg text-center">
                    <div className="text-xl font-bold">2000+</div>
                    <div className="text-sm opacity-90">Words</div>
                  </div>
                  <div className="bg-green-500 text-white p-2 rounded-lg text-center">
                    <div className="text-xl font-bold">96%</div>
                    <div className="text-sm opacity-90">Improvement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      title: "Success Journey",
      content: (
        <div className="h-[400px] sm:h-full overflow-y-auto scrollbar-container py-2 px-2">
          <h2 className="text-xl font-bold text-[#833589] text-center mb-2 flex items-center justify-center gap-2 font-montserrat">
            <TrendingUp className="text-[#f2ad00] w-5 h-5" />
            Success Blueprint
            <TrendingUp className="text-[#f2ad00] w-5 h-5" />
          </h2>
          <div className="w-20 h-0.5 bg-[#f2ad00] mx-auto rounded-full mb-3"></div>

          <div className="relative max-w-3xl mx-auto px-3">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-64 bg-[#833589] rounded-full hidden md:block"></div>

            <div className="space-y-2">
              {[
                {
                  icon: BookOpen,
                  title: "Daily Foundation",
                  description: "6 hours study + 2 hours revision",
                  bgColor: "bg-[#833589]",
                  side: "left",
                },
                {
                  icon: Zap,
                  title: "QA Mastery",
                  description: "100+ questions + concept building",
                  bgColor: "bg-[#f2ad00]",
                  side: "right",
                },
                {
                  icon: Users,
                  title: "VA Excellence",
                  description: "Daily reading + vocabulary building",
                  bgColor: "bg-purple-500",
                  side: "left",
                },
                {
                  icon: Trophy,
                  title: "Mock Mastery",
                  description: "3 tests per week + analysis",
                  bgColor: "bg-green-500",
                  side: "right",
                },
              ].map((item, index) => (
                <div key={index} className={`flex items-center ${item.side === "right" && "md:flex-row-reverse"}`}>
                  <div className={`w-full md:w-5/12 ${item.side === "right" && "md:text-right"}`}>
                    <div
                      className={`${item.bgColor} text-white p-2.5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
                    >
                      <div className={`flex items-center gap-2 mb-1 ${item.side === "right" && "md:flex-row-reverse"}`}>
                        <item.icon className="w-5 h-5" />
                        <h3 className="text-base font-bold font-montserrat">{item.title}</h3>
                      </div>
                      <p className="text-sm opacity-90">{item.description}</p>
                    </div>
                  </div>

                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className={`w-3 h-3 rounded-full ${item.bgColor} border-2 border-white shadow-lg`}></div>
                  </div>

                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>

            <div className="text-center mt-3">
              <div className="inline-flex items-center gap-2 bg-[#833589] text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                <Medal className="w-4 h-4 text-[#f2ad00]" />
                Consistency + Strategy = Success
                <Medal className="w-4 h-4 text-[#f2ad00]" />
              </div>
            </div>

            <div className="mt-2 text-center">
              <div className="bg-[#833589] text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                🎯 The Journey to Excellence 🎯
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  const nextView = () => {
    if (!isTransitioning && currentView < views.length - 1) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentView((prev) => prev + 1)
        setIsTransitioning(false)
      }, 200)
    }
  }

  const prevView = () => {
    if (!isTransitioning && currentView > 0) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentView((prev) => prev - 1)
        setIsTransitioning(false)
      }, 200)
    }
  }

  const goToView = (index: number) => {
    if (!isTransitioning && index !== currentView) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentView(index)
        setIsTransitioning(false)
      }, 200)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-yellow-100 relative overflow-hidden">
      {/* Clean Celebration Animation */}
      {showCelebration && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {/* Simple Confetti */}
          {[...Array(12)].map((_, i) => (
            <div
              key={`confetti-${i}`}
              className="absolute"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `-5%`,
                animationDelay: `${Math.random() * 1}s`,
              }}
            >
              <div
                className="w-2 h-2 rotate-45"
                style={{
                  backgroundColor: Math.random() > 0.5 ? "#833589" : "#f2ad00",
                  animation: `fall 2.5s linear infinite`,
                }}
              />
            </div>
          ))}

          {/* Corner Stars */}
          {[
            { top: "15%", left: "15%" },
            { top: "15%", right: "15%" },
          ].map((position, i) => (
            <div key={i} className="absolute" style={position}>
              <Star
                className="text-[#f2ad00] animate-pulse"
                style={{
                  width: "20px",
                  height: "20px",
                  animation: `twinkle 2s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            </div>
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 py-2 sm:py-3 relative z-10">
        {/* Compact Header */}
        <div
          className={`text-center mb-3 sm:mb-4 transition-all duration-1000 ${
            pageLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <div className="relative inline-block">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#833589] mb-2 relative">
              MILESTONE
              <span className="absolute -top-2 -right-2 text-xl sm:text-2xl">🎉</span>
            </h1>
            <div className="text-xl sm:text-3xl lg:text-4xl font-bold text-[#833589] mb-2">ACHIEVED</div>
          </div>

          <div className="bg-[#f2ad00] text-white px-4 sm:px-6 py-2 rounded-full inline-block text-sm sm:text-lg font-bold shadow-2xl hover:bg-[#f2ad00]/90 transition-colors">
            🏆 ALL INDIA RANK 1 - IPMAT 2024 🏆
          </div>

          <p className="text-gray-700 text-sm sm:text-base max-w-3xl mx-auto mt-2 sm:mt-3 leading-relaxed px-4">
            Celebrating the extraordinary journey of dedication, mentorship, and triumph.
          </p>
        </div>

        {/* Main Showcase */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            pageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-6xl mx-auto relative">
            {/* Crown positioned at top-left corner */}
            <div className="absolute -top-3 left-4 sm:left-6 z-30">
              <div className="bg-[#f2ad00] rounded-full p-2 sm:p-3 shadow-xl border-3 border-white">
                <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
            </div>

            {/* Left Arrow Button */}
            <button
              onClick={prevView}
              disabled={currentView === 0 || isTransitioning}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-3 z-20 bg-[#833589] hover:bg-[#833589]/90 disabled:opacity-30 disabled:cursor-not-allowed text-white p-2 sm:p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Right Arrow Button */}
            <button
              onClick={nextView}
              disabled={currentView === views.length - 1 || isTransitioning}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-3 z-20 bg-[#f2ad00] hover:bg-[#f2ad00]/90 disabled:opacity-30 disabled:cursor-not-allowed text-white p-2 sm:p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Content Book - Responsive Height */}
            <div className="relative">
              <div
                className={`bg-white rounded-3xl shadow-2xl border-4 border-[#833589] 
                  h-[520px] sm:h-[540px] md:h-[560px] lg:h-[580px] xl:h-[600px]
                  w-full max-w-[99%] sm:max-w-[98%] md:max-w-[95%] mx-auto
                  transition-all duration-200 ${isTransitioning ? "opacity-50 scale-95" : "opacity-100 scale-100"}`}
              >
                <div className="p-4 sm:p-6 h-full flex flex-col">
                  <div className="text-center mb-3">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#833589] font-montserrat">
                      {views[currentView].title}
                    </h2>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className={`w-full ${currentView > 0 ? "h-full" : ""}`}>{views[currentView].content}</div>
                  </div>

                  {/* Page Number */}
                  <div className="text-right">
                    <span className="text-xs text-gray-500 italic">
                      {currentView + 1}/{views.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Mobile Scroll Indicator - Only visible on mobile when on pages 2-5 */}
              {currentView > 0 && (
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 sm:hidden">
                  <div className="animate-bounce bg-[#833589]/70 text-white text-xs px-2 py-1 rounded-full">
                    Scroll for more
                  </div>
                </div>
              )}
            </div>

            {/* Page Indicators */}
            <div className="flex justify-center mt-4 sm:mt-5">
              <div className="flex space-x-2">
                {views.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToView(index)}
                    disabled={isTransitioning}
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      index === currentView
                        ? "bg-[#f2ad00] scale-125 shadow-lg"
                        : "bg-gray-300 hover:bg-gray-400 hover:scale-110"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Compact Footer */}
        <div
          className={`text-center mt-4 sm:mt-6 transition-all duration-1000 delay-500 ${
            pageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative inline-block">
            <div className="bg-[#833589] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold shadow-2xl hover:bg-[#833589]/90 transition-colors">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-[#f2ad00]" />
                <span className="text-sm sm:text-base">CONGRATULATIONS NIKHILESH!</span>
                <Trophy className="w-5 h-5 text-[#f2ad00]" />
              </div>
            </div>
            <div className="absolute -top-1 -right-1 animate-bounce">
              <Star className="w-5 h-5 text-[#f2ad00]" />
            </div>
          </div>
          <p className="mt-3 text-sm sm:text-base text-gray-600 font-semibold px-4">
            From our entire team - You've made us incredibly proud! 🌟
          </p>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
        
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }

        /* Custom scrollbar styling */
        .scrollbar-container::-webkit-scrollbar {
          width: 8px;
        }

        .scrollbar-container::-webkit-scrollbar-track {
          background: rgba(241, 241, 241, 0.5);
          border-radius: 10px;
        }

        .scrollbar-container::-webkit-scrollbar-thumb {
          background: #833589;
          border-radius: 10px;
        }

        .scrollbar-container::-webkit-scrollbar-thumb:hover {
          background: #f2ad00;
        }

        /* For Firefox */
        .scrollbar-container {
          scrollbar-width: thin;
          scrollbar-color: #833589 rgba(241, 241, 241, 0.5);
        }

        @keyframes fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.5;
            transform: scale(0.9);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  )
}
