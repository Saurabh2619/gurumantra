"use client"

import Image from "next/image"

export default function IPMAPage() {
  const students = [
    { id: 1, name: "Nikhelesh", isTop3: true, shimmerDelay: 0 },
    { id: 2, name: "Test XYZ 2", isTop3: true, shimmerDelay: 1 },
    { id: 3, name: "Test XYZ 3", isTop3: true, shimmerDelay: 2 },
    { id: 4, name: "Test XYZ 4", isTop3: false, shimmerDelay: 0 },
    { id: 5, name: "Test XYZ 5", isTop3: false, shimmerDelay: 0 },
    { id: 6, name: "Test XYZ 6", isTop3: false, shimmerDelay: 0 },
    { id: 7, name: "Test XYZ 7", isTop3: false, shimmerDelay: 0 },
    { id: 8, name: "Test XYZ 8", isTop3: false, shimmerDelay: 0 },
    { id: 9, name: "Test XYZ 9", isTop3: false, shimmerDelay: 0 },
    { id: 10, name: "Test XYZ 10", isTop3: false, shimmerDelay: 0 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-3 md:p-4 lg:p-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 md:mb-8 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">IPMA Student Directory</h1>
          <p className="text-gray-600 text-sm md:text-base">Top performing students in our program</p>
        </div>

        <div className="grid gap-3 md:gap-4">
          {students.map((student) => (
            <div
              key={student.id}
              className={`relative overflow-hidden rounded-xl border-0 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 cursor-pointer group bg-white ${
                student.isTop3 ? "animate-shimmer" : ""
              }`}
              style={{
                background: "#833589",
                animationDelay: student.isTop3 ? `${student.shimmerDelay}s` : "0s",
              }}
            >
              {student.isTop3 && (
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer-slide"
                  style={{
                    animationDelay: `${student.shimmerDelay}s`,
                  }}
                />
              )}

              <div className="relative p-3 md:p-4 lg:p-5">
                <div className="flex items-center gap-3 md:gap-4 lg:gap-6">
                  {/* Rank Badge */}
                  <div className="flex-shrink-0">
                    <div
                      className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base lg:text-lg border-2 border-white/30 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: "#f2ad00" }}
                    >
                      {student.id}
                    </div>
                  </div>

                  {/* Student Photo */}
                  <div className="flex-shrink-0">
                    <div className="relative w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-full overflow-hidden border-2 md:border-3 border-white/30 transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={`/placeholder.svg?height=72&width=72`}
                        alt={`${student.name} profile`}
                        width={72}
                        height={72}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Student Info - Takes up available space */}
                  <div className="flex-grow min-w-0 pr-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                      <div className="min-w-0">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-0.5 truncate transition-all duration-300 group-hover:text-yellow-100">
                          {student.name}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                          <p className="text-white/80 text-xs md:text-sm">IPMA Student • Rank #{student.id}</p>
                          {student.isTop3 && (
                            <span
                              className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium text-white w-fit transition-transform duration-300 group-hover:scale-105"
                              style={{ backgroundColor: "#f2ad00" }}
                            >
                              ⭐ Top Performer
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* View More Button */}
                  <div className="flex-shrink-0">
                    <button className="bg-white/10 border border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400">
                      View More
                    </button>
                  </div>
                </div>

                {/* Additional Info Row for larger screens */}
                <div className="hidden lg:flex mt-3 pt-3 border-t border-white/20 items-center justify-between text-white/70 text-sm">
                  <div className="flex items-center gap-4">
                    <span>📚 Course: Advanced Management</span>
                    <span>📊 Score: {95 - student.id}%</span>
                  </div>
                  <div className="text-xs">Last updated: Dec 2024</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 shadow-md text-center">
            <div className="text-2xl font-bold" style={{ color: "#833589" }}>
              10
            </div>
            <div className="text-sm text-gray-600">Total Students</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md text-center">
            <div className="text-2xl font-bold" style={{ color: "#f2ad00" }}>
              3
            </div>
            <div className="text-sm text-gray-600">Top Performers</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md text-center">
            <div className="text-2xl font-bold" style={{ color: "#833589" }}>
              92%
            </div>
            <div className="text-sm text-gray-600">Avg Score</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md text-center">
            <div className="text-2xl font-bold" style={{ color: "#f2ad00" }}>
              100%
            </div>
            <div className="text-sm text-gray-600">Completion</div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">Showing all {students.length} students in the IPMA program</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-color: #833589;
          }
          50% {
            background-color: #9d4edd;
          }
          100% {
            background-color: #833589;
          }
        }
        
        @keyframes shimmer-slide {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
        
        .animate-shimmer {
          animation: shimmer 4s ease-in-out infinite;
        }
        
        .animate-shimmer-slide {
          animation: shimmer-slide 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
