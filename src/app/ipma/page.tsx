"use client"

import Image from "next/image"

export default function IPMADirectoryPage() {
  const students = [
    { id: 1, name: "Nikhelesh", isTop3: true, shimmerDelay: 0 },
    { id: 2, name: "ABX XYZ 2", isTop3: true, shimmerDelay: 0.8 },
    { id: 3, name: "ABX XYZ 3", isTop3: true, shimmerDelay: 1.6 },
    { id: 4, name: "ABX XYZ 4", isTop3: false, shimmerDelay: 0 },
    { id: 5, name: "ABX XYZ 5", isTop3: false, shimmerDelay: 0 },
    { id: 6, name: "ABX XYZ 6", isTop3: false, shimmerDelay: 0 },
    { id: 7, name: "ABX XYZ 7", isTop3: false, shimmerDelay: 0 },
    { id: 8, name: "ABX XYZ 8", isTop3: false, shimmerDelay: 0 },
    { id: 9, name: "ABX XYZ 9", isTop3: false, shimmerDelay: 0 },
    { id: 10, name: "ABX XYZ 10", isTop3: false, shimmerDelay: 0 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4 sm:p-6 md:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 md:mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">IPMA Student Directory</h1>
          <p className="text-gray-600 text-base sm:text-lg">Discover our program's top-performing students.</p>
        </div>

        <div className="grid gap-4 md:gap-6">
          {students.map((student) => (
            <div
              key={student.id}
              className={`relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1 group cursor-pointer
              ${student.isTop3 ? "animate-shimmer" : "bg-purple-700"}`}
              style={
                student.isTop3
                  ? {
                      backgroundImage: "linear-gradient(110deg, #6b21a8, #833589, #7b2cbf, #833589, #6b21a8)", 
                      backgroundSize: "250% 200%", 
                      animationDelay: `${student.shimmerDelay}s`,
                    }
                  : {}
              }
            >
              {student.isTop3 && (
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-shimmer-slide mix-blend-overlay" 
                  style={{
                    animationDelay: `${student.shimmerDelay + 0.4}s`, 
                  }}
                />
              )}

              <div className="relative p-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Rank Badge */}
                  <div className="flex-shrink-0">
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base border-2 border-white/30 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: "#f2ad00" }} 
                    >
                      {student.id}
                    </div>
                  </div>

                  {/* Student Photo */}
                  <div className="flex-shrink-0">
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-[4.5rem] lg:h-[4.5rem] rounded-full overflow-hidden border-2 sm:border-3 border-white/30 transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={``}
                        alt={`${student.name} profile`}
                        width={72}
                        height={72}
                        className="w-full h-full object-cover"
                        unoptimized={true}
                      />
                    </div>
                  </div>

                  {/* Student Info */}
                  <div className="flex-grow min-w-0 pr-2">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-0.5 truncate transition-colors duration-300 group-hover:text-yellow-300">
                      {student.name}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-x-3 gap-y-1">
                      <p className="text-white/80 text-xs sm:text-sm">IPMA Student • Rank #{student.id}</p>
                      {student.isTop3 && (
                        <span
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-white w-fit transition-transform duration-300 group-hover:scale-105"
                          style={{ backgroundColor: "#f2ad00" }} // Gold color
                        >
                          ⭐ Top Performer
                        </span>
                      )}
                    </div>
                  </div>

                  {/* View More Button */}
                  <div className="flex-shrink-0 ml-auto">
                    <button className="bg-white/10 border border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 focus:ring-offset-purple-700">
                      View More
                    </button>
                  </div>
                </div>

                {/* Additional Info Row for larger screens */}
                <div className="hidden lg:flex mt-4 pt-4 border-t border-white/20 items-center justify-between text-white/70 text-sm">
                  <div className="flex items-center gap-x-4">
                    <span>📚 Course: Advanced Management</span>
                    <span>📊 Score: {95 - student.id + Math.floor(Math.random() * 5)}%</span>{" "}
                    {/* Randomized score slightly */}
                  </div>
                  <div className="text-xs">Last updated: May 2025</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-10 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { label: "Total Students", value: students.length, color: "#833589" },
            { label: "Top Performers", value: students.filter((s) => s.isTop3).length, color: "#f2ad00" },
            { label: "Avg Score", value: "92%", color: "#833589" },
            { label: "Completion", value: "100%", color: "#f2ad00" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-10 md:mt-16 text-center">
          <p className="text-gray-600 text-sm sm:text-base">
            Showing all {students.length} students in the IPMA program. © 2025 IPMA Institute.
          </p>
        </div>
      </div>

      <style jsx>{`
      @keyframes shimmer {
        0% {
          background-position: 0% center;
        }
        100% {
          background-position: 250% center; /* Match backgroundSize */
        }
      }
      
      @keyframes shimmer-slide {
        0% {
          transform: translateX(-100%) skewX(-15deg);
          opacity: 0;
        }
        50% {
          opacity: 1; /* Overlay is via-white/15, so full opacity is subtle */
        }
        100% {
          transform: translateX(100%) skewX(-15deg);
          opacity: 0;
        }
      }
      
      .animate-shimmer {
        animation: shimmer 5s linear infinite alternate; /* Alternate direction for smoother loop */
      }
      
      .animate-shimmer-slide {
        animation: shimmer-slide 3s ease-out infinite;
      }
    `}</style>
    </div>
  )
}
