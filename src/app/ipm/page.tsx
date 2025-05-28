"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Crown, Sparkles, Star, Zap } from "lucide-react"

export default function MilestonePage() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)
  const [showCelebration, setShowCelebration] = useState(true)
  const [pageLoaded, setPageLoaded] = useState(false)
  const [showFireworks, setShowFireworks] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    // Page load animation with proper timing
    const loadTimer = setTimeout(() => {
      setPageLoaded(true)
    }, 100)

    // Hide celebration after 4 seconds
    const celebrationTimer = setTimeout(() => {
      setShowCelebration(false)
    }, 4000)

    // Hide fireworks slightly earlier to prevent stuck animation
    const fireworksTimer = setTimeout(() => {
      setShowFireworks(false)
    }, 3500)

    return () => {
      clearTimeout(loadTimer)
      clearTimeout(celebrationTimer)
      clearTimeout(fireworksTimer)
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const pages = [
    {
      id: 1,
      content: (
        <div className="h-full flex flex-col items-center justify-center p-2 sm:p-6 lg:p-8 text-center bg-gradient-to-br from-white to-purple-50">
          <div className="w-16 h-16 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-full bg-gradient-to-br from-[#833589] to-purple-400 mb-2 sm:mb-6 flex items-center justify-center shadow-xl relative">
            <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-[#f2ad00] rounded-full p-1">
              <Star className="w-2 h-2 sm:w-4 sm:h-4 text-white" />
            </div>
            <img
              src="/placeholder.svg?height=140&width=140"
              alt="Nikhilesh"
              className="w-12 h-12 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full object-cover border-2 sm:border-3 border-white"
            />
          </div>
          <h3 className="text-sm sm:text-2xl lg:text-3xl font-bold text-[#833589] mb-1 sm:mb-4">Nikhilesh Kumar</h3>
          <div className="bg-gradient-to-r from-[#f2ad00] to-yellow-500 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full font-bold text-xs sm:text-lg mb-2 sm:mb-4">
            🏆 AIR 1 - IPMAT 2024 🏆
          </div>
          <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed italic px-1 sm:px-2">
            "Test Paragraph Here"
          </p>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="h-full flex flex-col items-center justify-center p-2 sm:p-6 lg:p-8 text-center bg-gradient-to-br from-white to-purple-50">
          <div className="w-16 h-16 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-full bg-gradient-to-br from-[#833589] to-purple-600 mb-2 sm:mb-6 flex items-center justify-center shadow-xl">
            <img
              src="/placeholder.svg?height=140&width=140"
              alt="Ashutosh Sir"
              className="w-12 h-12 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full object-cover border-2 sm:border-3 border-white"
            />
          </div>
          <h3 className="text-sm sm:text-2xl lg:text-3xl font-bold text-[#833589] mb-1 sm:mb-4">Ashutosh Sir</h3>
          <div className="bg-gradient-to-r from-[#833589] to-purple-600 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full font-semibold mb-2 sm:mb-4 text-xs sm:text-base">
            Mentor & Guide
          </div>
          <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed italic px-1 sm:px-2">
            "Test Paragraph 2 Here"
          </p>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="h-full flex flex-col items-center justify-center p-2 sm:p-6 lg:p-8 text-center bg-gradient-to-br from-white to-orange-50">
          <div className="w-16 h-16 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-full bg-gradient-to-br from-[#833589] to-orange-500 mb-2 sm:mb-6 flex items-center justify-center shadow-xl">
            <img
              src="/placeholder.svg?height=140&width=140"
              alt="Nikhil Sir"
              className="w-12 h-12 sm:w-24 lg:h-32 rounded-full object-cover border-2 sm:border-3 border-white"
            />
          </div>
          <h3 className="text-sm sm:text-2xl lg:text-3xl font-bold text-[#833589] mb-1 sm:mb-4">Nikhil Sir</h3>
          <div className="bg-gradient-to-r from-[#833589] to-orange-600 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full font-semibold mb-2 sm:mb-4 text-xs sm:text-base">
            QA Faculty
          </div>
          <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed italic px-1 sm:px-2">
            "Test Paragraph 3 Here"
          </p>
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div className="h-full flex flex-col items-center justify-center p-2 sm:p-6 lg:p-8 text-center bg-gradient-to-br from-white to-yellow-50">
          <div className="w-16 h-16 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-full bg-gradient-to-br from-[#833589] to-yellow-500 mb-2 sm:mb-6 flex items-center justify-center shadow-xl">
            <img
              src="/placeholder.svg?height=140&width=140"
              alt="Taruna Maam"
              className="w-12 h-12 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full object-cover border-2 sm:border-3 border-white"
            />
          </div>
          <h3 className="text-sm sm:text-2xl lg:text-3xl font-bold text-[#833589] mb-1 sm:mb-4">Taruna Maam</h3>
          <div className="bg-gradient-to-r from-[#833589] to-yellow-600 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full font-semibold mb-2 sm:mb-4 text-xs sm:text-base">
            VA Faculty
          </div>
          <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed italic px-1 sm:px-2">
            "Test Paragraph 4 Here"
          </p>
        </div>
      ),
    },
    {
      id: 5,
      content: (
        <div className="h-full flex flex-col justify-start p-2 sm:p-4 lg:p-6 bg-gradient-to-br from-white to-yellow-50 overflow-y-auto">
          <div className="text-center mb-3 sm:mb-4">
            <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#833589] flex items-center justify-center gap-2">
              <Zap className="text-[#f2ad00] w-4 h-4 sm:w-6 sm:h-6" />
              Success Blueprint
              <Zap className="text-[#f2ad00] w-4 h-4 sm:w-6 sm:h-6" />
            </h3>
            <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-r from-[#833589] to-[#f2ad00] mx-auto mt-2"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 flex-1">
            <div className="bg-gradient-to-br from-[#833589]/10 to-purple-50 p-2 sm:p-3 rounded-lg border border-[#833589]/20 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-1 sm:mb-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#833589] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs sm:text-sm font-bold">📚</span>
                </div>
                <h4 className="font-bold text-[#833589] text-xs sm:text-sm lg:text-base">Daily Routine</h4>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                6 hours focused study + 2 hours revision + 1 hour analysis
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#f2ad00]/10 to-yellow-50 p-2 sm:p-3 rounded-lg border border-[#f2ad00]/20 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-1 sm:mb-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#f2ad00] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs sm:text-sm font-bold">🧮</span>
                </div>
                <h4 className="font-bold text-[#f2ad00] text-xs sm:text-sm lg:text-base">QA Strategy</h4>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                100+ questions daily + concept building + speed enhancement
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#833589]/10 to-purple-50 p-2 sm:p-3 rounded-lg border border-[#833589]/20 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-1 sm:mb-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#833589] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs sm:text-sm font-bold">📖</span>
                </div>
                <h4 className="font-bold text-[#833589] text-xs sm:text-sm lg:text-base">VA Approach</h4>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Daily reading + vocabulary building + grammar mastery
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#f2ad00]/10 to-yellow-50 p-2 sm:p-3 rounded-lg border border-[#f2ad00]/20 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-1 sm:mb-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#f2ad00] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs sm:text-sm font-bold">🎯</span>
                </div>
                <h4 className="font-bold text-[#f2ad00] text-xs sm:text-sm lg:text-base">Mock Tests</h4>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                3 tests per week + detailed analysis + improvement tracking
              </p>
            </div>
          </div>

          <div className="mt-3 sm:mt-4 text-center">
            <div className="inline-flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-[#833589] to-[#f2ad00] text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
              <Star className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Consistency is Key</span>
              <Star className="w-3 h-3 sm:w-4 sm:h-4" />
            </div>
          </div>
        </div>
      ),
    },
  ]

  const nextPage = () => {
    if (currentPage < pages.length - 1 && !isFlipping) {
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage(currentPage + 1)
        setIsFlipping(false)
      }, 600)
    }
  }

  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage(currentPage - 1)
        setIsFlipping(false)
      }, 600)
    }
  }

  // Touch handlers for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && currentPage < pages.length - 1) {
      nextPage()
    }
    if (isRightSwipe && currentPage > 0) {
      prevPage()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-yellow-50 relative overflow-x-hidden">
      {/* Fireworks Animation - Fixed timing */}
      {showFireworks && (
        <div className="fixed inset-0 pointer-events-none z-40">
          {[...Array(6)].map((_, i) => (
            <div
              key={`firework-${i}`}
              className="absolute"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${10 + Math.random() * 40}%`,
                animationDelay: `${Math.random() * 1.5}s`,
              }}
            >
              <div className="firework">
                <div className="explosion">
                  {[...Array(8)].map((_, j) => (
                    <div
                      key={j}
                      className="spark"
                      style={{
                        transform: `rotate(${j * 45}deg)`,
                        backgroundColor: j % 2 === 0 ? "#833589" : "#f2ad00",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Confetti Animation - Reduced for better performance */}
      {showCelebration && (
        <div className="fixed inset-0 pointer-events-none z-30">
          {[...Array(50)].map((_, i) => (
            <div
              key={`confetti-${i}`}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              <div
                className="w-2 h-2 rotate-45 animate-bounce"
                style={{
                  backgroundColor: Math.random() > 0.5 ? "#833589" : "#f2ad00",
                  animation: `fall ${2 + Math.random() * 1}s linear infinite`,
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Cracker Burst Animation - Page Load */}
      {showCelebration && (
        <div className="fixed inset-0 pointer-events-none z-25">
          {/* Left side crackers */}
          <div className="absolute left-4 top-1/4">
            <div className="cracker-burst">
              {[...Array(12)].map((_, i) => (
                <div
                  key={`left-cracker-${i}`}
                  className="cracker-piece"
                  style={{
                    transform: `rotate(${i * 30}deg)`,
                    backgroundColor: i % 3 === 0 ? "#833589" : i % 3 === 1 ? "#f2ad00" : "#ff6b6b",
                    animationDelay: `${0.5 + i * 0.1}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right side crackers */}
          <div className="absolute right-4 top-1/3">
            <div className="cracker-burst">
              {[...Array(12)].map((_, i) => (
                <div
                  key={`right-cracker-${i}`}
                  className="cracker-piece"
                  style={{
                    transform: `rotate(${i * 30}deg)`,
                    backgroundColor: i % 3 === 0 ? "#833589" : i % 3 === 1 ? "#f2ad00" : "#4ade80",
                    animationDelay: `${0.8 + i * 0.1}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Bottom crackers */}
          <div className="absolute left-1/4 bottom-1/4">
            <div className="cracker-burst">
              {[...Array(10)].map((_, i) => (
                <div
                  key={`bottom-cracker-${i}`}
                  className="cracker-piece"
                  style={{
                    transform: `rotate(${i * 36}deg)`,
                    backgroundColor: i % 2 === 0 ? "#833589" : "#f2ad00",
                    animationDelay: `${1.2 + i * 0.08}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Top right crackers */}
          <div className="absolute right-1/4 top-1/5">
            <div className="cracker-burst">
              {[...Array(8)].map((_, i) => (
                <div
                  key={`top-cracker-${i}`}
                  className="cracker-piece"
                  style={{
                    transform: `rotate(${i * 45}deg)`,
                    backgroundColor: i % 2 === 0 ? "#f2ad00" : "#a855f7",
                    animationDelay: `${1.5 + i * 0.12}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Party Poppers - Strategic positioning */}
      {showCelebration && (
        <div className="fixed inset-0 pointer-events-none z-28">
          {/* Top left popper */}
          <div className="absolute left-8 top-16">
            <div className="party-popper-enhanced" style={{ animationDelay: "0.3s" }}>
              <div className="popper-cone bg-gradient-to-r from-[#833589] to-purple-600"></div>
              <div className="popper-burst">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={`tl-burst-${i}`}
                    className="burst-particle"
                    style={{
                      transform: `rotate(${i * 60}deg)`,
                      backgroundColor: i % 2 === 0 ? "#f2ad00" : "#833589",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Top right popper */}
          <div className="absolute right-8 top-20">
            <div className="party-popper-enhanced" style={{ animationDelay: "0.6s" }}>
              <div className="popper-cone bg-gradient-to-r from-[#f2ad00] to-yellow-600"></div>
              <div className="popper-burst">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={`tr-burst-${i}`}
                    className="burst-particle"
                    style={{
                      transform: `rotate(${i * 60}deg)`,
                      backgroundColor: i % 2 === 0 ? "#833589" : "#4ade80",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom left popper */}
          <div className="absolute left-12 bottom-20">
            <div className="party-popper-enhanced" style={{ animationDelay: "0.9s" }}>
              <div className="popper-cone bg-gradient-to-r from-[#833589] to-[#f2ad00]"></div>
              <div className="popper-burst">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={`bl-burst-${i}`}
                    className="burst-particle"
                    style={{
                      transform: `rotate(${i * 60}deg)`,
                      backgroundColor: i % 2 === 0 ? "#f2ad00" : "#ff6b6b",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom right popper */}
          <div className="absolute right-12 bottom-24">
            <div className="party-popper-enhanced" style={{ animationDelay: "1.2s" }}>
              <div className="popper-cone bg-gradient-to-r from-yellow-500 to-[#f2ad00]"></div>
              <div className="popper-burst">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={`br-burst-${i}`}
                    className="burst-particle"
                    style={{
                      transform: `rotate(${i * 60}deg)`,
                      backgroundColor: i % 2 === 0 ? "#833589" : "#a855f7",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Party Poppers - Simplified */}
      {/*{showCelebration && (
        <div className="fixed inset-0 pointer-events-none z-35">
          {[...Array(4)].map((_, i) => (
            <div
              key={`popper-${i}`}
              className="absolute"
              style={{
                left: `${15 + i * 20}%`,
                top: "15%",
                animationDelay: `${i * 0.3}s`,
              }}
            >
              <div className="party-popper">
                <Sparkles className="text-[#f2ad00] w-4 h-4 sm:w-6 sm:h-6 animate-spin" />
              </div>
            </div>
          ))}
        </div>
      )}*/}

      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-6 lg:py-8 relative z-10">
        {/* Header Section */}
        <div
          className={`text-center mb-4 sm:mb-16 lg:mb-20 transition-all duration-1000 ${pageLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
        >
          <div className="relative inline-block mb-4 sm:mb-8">
            <h1 className="text-2xl sm:text-4xl lg:text-6xl xl:text-7xl font-extrabold bg-gradient-to-r from-[#833589] via-purple-600 to-[#f2ad00] bg-clip-text text-transparent px-2">
              🎉 MILESTONE ACHIEVED 🎉
            </h1>
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 animate-bounce">
              <Star className="text-[#f2ad00] w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
            </div>
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 animate-bounce delay-300">
              <Star className="text-[#833589] w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6" />
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#833589] to-[#f2ad00] text-white px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-full inline-block mb-4 sm:mb-6 text-sm sm:text-lg lg:text-xl font-bold shadow-lg">
            🏆 ALL INDIA RANK 1 - IPMAT 2024 🏆
          </div>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed px-4">
            Hello World 123, the testing paragraph is here.
            <span className="font-bold text-[#833589]"> our champion Nikhilesh</span>! 🌟
          </p>
        </div>

        {/* Book Section - Enhanced for all screens */}
        <div
          className={`flex justify-center items-center relative transition-all duration-1000 delay-300 ${pageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="relative w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6">
            {/* Book Container - Optimized for all screens */}
            <div className="relative flex justify-center">
              {/* Crown positioned properly */}
              <div className="absolute -top-4 sm:-top-6 lg:-top-8 left-4 sm:left-8 lg:left-12 z-40">
                <div className="bg-gradient-to-br from-[#f2ad00] via-yellow-500 to-yellow-600 rounded-full p-2 sm:p-3 lg:p-4 shadow-2xl border-2 sm:border-4 border-white">
                  <Crown className="text-white w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10" />
                </div>
              </div>

              <div
                className="relative bg-gradient-to-br from-white via-[#833589]/5 to-purple-100 rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl overflow-hidden border-2 sm:border-3 lg:border-4 border-[#833589]/20"
                style={{
                  width: isMobile ? "85%" : "90%",
                  maxWidth: isMobile ? "350px" : "800px",
                  height: isMobile ? "440px" : "470px",
                  aspectRatio: isMobile ? "4/5" : "16/9",
                }}
                onTouchStart={isMobile ? onTouchStart : undefined}
                onTouchMove={isMobile ? onTouchMove : undefined}
                onTouchEnd={isMobile ? onTouchEnd : undefined}
              >
                {/* Book Spine */}
                <div className="absolute left-0 top-0 w-2 sm:w-4 lg:w-6 h-full bg-gradient-to-b from-[#833589] via-purple-600 to-[#833589] z-20 shadow-lg"></div>

                {/* Page Container */}
                <div className="ml-2 sm:ml-4 lg:ml-6 h-full relative overflow-hidden">
                  {/* Current Page */}
                  <div
                    className={`absolute inset-0 bg-white transition-all duration-600 ease-in-out transform origin-left ${
                      isFlipping ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
                    }`}
                  >
                    <div className="h-full w-full">{pages[currentPage].content}</div>
                  </div>
                </div>

                {/* Page Number */}
                <div className="absolute bottom-2 sm:bottom-4 right-3 sm:right-6 bg-[#833589] text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full font-bold text-xs sm:text-sm lg:text-base shadow-lg">
                  {currentPage + 1} / {pages.length}
                </div>

                {/* Decorative corners */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 text-[#f2ad00]">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 animate-spin" />
                </div>
                <div className="absolute bottom-2 sm:bottom-4 left-4 sm:left-8 text-[#833589]">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                </div>

                {/* Mobile swipe indicator */}
                {isMobile && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 bg-white/80 px-2 py-0.5 rounded text-center">
                    👆 Swipe to navigate
                  </div>
                )}
              </div>
            </div>

            {/* Navigation Buttons - Always show below book */}
            <div className="flex justify-center items-center gap-3 sm:gap-6 mt-4 sm:mt-6">
              <button
                onClick={prevPage}
                disabled={currentPage === 0 || isFlipping}
                className="bg-gradient-to-r from-[#833589] to-purple-600 hover:from-[#833589]/90 hover:to-purple-600/90 text-white px-3 py-1.5 sm:px-6 sm:py-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg text-xs sm:text-base font-semibold flex items-center"
              >
                <ChevronLeft className="w-3 h-3 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Previous</span>
                <span className="sm:hidden">Prev</span>
              </button>

              <button
                onClick={nextPage}
                disabled={currentPage === pages.length - 1 || isFlipping}
                className="bg-gradient-to-r from-[#f2ad00] to-yellow-600 hover:from-[#f2ad00]/90 hover:to-yellow-600/90 text-white px-3 py-1.5 sm:px-6 sm:py-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg text-xs sm:text-base font-semibold flex items-center"
              >
                <span className="hidden sm:inline">Next</span>
                <span className="sm:hidden">Next</span>
                <ChevronRight className="w-3 h-3 sm:w-5 sm:h-5 ml-1 sm:ml-2" />
              </button>
            </div>

            {/* Page Indicators */}
            <div className="flex justify-center mt-3 sm:mt-4">
              <div className="flex space-x-1.5 sm:space-x-3">
                {pages.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2.5 h-2.5 sm:w-4 sm:h-4 rounded-full transition-all duration-300 cursor-pointer ${
                      index === currentPage
                        ? "bg-gradient-to-r from-[#833589] to-[#f2ad00] scale-125 shadow-lg"
                        : "bg-gray-300 hover:bg-gray-400 hover:scale-110"
                    }`}
                    onClick={() => {
                      if (!isFlipping && index !== currentPage) {
                        setIsFlipping(true)
                        setTimeout(() => {
                          setCurrentPage(index)
                          setIsFlipping(false)
                        }, 600)
                      }
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Celebration Footer */}
        <div
          className={`text-center mt-4 sm:mt-12 lg:mt-16 transition-all duration-1000 delay-500 ${pageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#833589] via-purple-600 to-[#f2ad00] text-white px-4 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-full text-sm sm:text-lg lg:text-xl font-bold shadow-2xl">
            <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />🎊 CONGRATULATIONS NIKHILESH! 🎊
            <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
          </div>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-gray-600 font-semibold px-4">
            From our entire team - You've made us proud! 🌟
          </p>
        </div>
      </div>

      <style jsx>{`
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

        .firework {
          position: relative;
        }

        .explosion {
          position: relative;
          animation: explode 1.5s ease-out forwards;
        }

        .spark {
          position: absolute;
          width: 3px;
          height: 15px;
          border-radius: 2px;
          transform-origin: bottom;
          animation: sparkle 1.5s ease-out forwards;
        }

        @keyframes explode {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          50% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }

        @keyframes sparkle {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-80px) scale(0);
            opacity: 0;
          }
        }

        .party-popper {
          animation: popperBurst 0.8s ease-out forwards;
        }

        @keyframes popperBurst {
          0% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.2) rotate(180deg);
            opacity: 1;
          }
          100% {
            transform: scale(1) rotate(360deg);
            opacity: 0;
          }
        }

        /* New Cracker Burst Animations */
        .cracker-burst {
          position: relative;
          width: 20px;
          height: 20px;
        }

        .cracker-piece {
          position: absolute;
          width: 4px;
          height: 12px;
          border-radius: 2px;
          transform-origin: bottom center;
          animation: crackerExplode 1.5s ease-out forwards;
          opacity: 0;
        }

        @keyframes crackerExplode {
          0% {
            transform: translateY(0) scale(0);
            opacity: 0;
          }
          20% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            transform: translateY(-60px) scale(0.3);
            opacity: 0;
          }
        }

        /* Enhanced Party Popper Animations */
        .party-popper-enhanced {
          position: relative;
          animation: popperShake 0.3s ease-in-out;
        }

        .popper-cone {
          width: 12px;
          height: 20px;
          border-radius: 0 0 6px 6px;
          position: relative;
          z-index: 2;
        }

        .popper-burst {
          position: absolute;
          top: -5px;
          left: 50%;
          transform: translateX(-50%);
          animation: burstOut 1s ease-out 0.3s forwards;
          opacity: 0;
        }

        .burst-particle {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          transform-origin: center;
          animation: particleFly 1.2s ease-out forwards;
        }

        @keyframes popperShake {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
        }

        @keyframes burstOut {
          0% {
            opacity: 0;
            transform: translateX(-50%) scale(0);
          }
          30% {
            opacity: 1;
            transform: translateX(-50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateX(-50%) scale(1.5);
          }
        }

        @keyframes particleFly {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-40px) scale(0.3);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
