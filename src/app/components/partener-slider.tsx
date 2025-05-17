"use client"

import { useEffect, useState } from "react"
import { createClient } from "@supabase/supabase-js"
import Slider from "react-slick"
import Image from "next/image"
import { ChevronLeft, ChevronRight, MapPin, Star } from "lucide-react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

interface College {
  id: number
  name: string
  location: string
  college_logo: string
  college_image: string
  details_url: string
  apply_url: string
  placement: string
  courses: string
  rating: number
}

// Custom arrow components with responsive design
const PrevArrow = (props: any) => {
  const { onClick } = props
  return (
    <button
      className="absolute left-0 top-1/2 z-10 -translate-y-1/2 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/90 shadow-md text-gray-700 hover:bg-white focus:outline-none transition-all duration-300 border border-gray-100 sm:left-2 md:left-4 lg:left-6"
      onClick={onClick}
      aria-label="Previous slide"
    >
      <ChevronLeft className="w-5 h-5" />
    </button>
  )
}

const NextArrow = (props: any) => {
  const { onClick } = props
  return (
    <button
      className="absolute right-0 top-1/2 z-10 -translate-y-1/2 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/90 shadow-md text-gray-700 hover:bg-white focus:outline-none transition-all duration-300 border border-gray-100 sm:right-2 md:right-4 lg:right-6"
      onClick={onClick}
      aria-label="Next slide"
    >
      <ChevronRight className="w-5 h-5" />
    </button>
  )
}

const PartnerSlider = () => {
  const [colleges, setColleges] = useState<College[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchColleges = async () => {
      setLoading(true)
      const { data, error } = await supabase.from("partner-slider").select("*")

      if (error) {
        console.error("Error fetching colleges:", error)
      } else {
        setColleges(data || [])
      }
      setLoading(false)
    }

    fetchColleges()
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "cubic-bezier(0.45, 0, 0.55, 1)",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
    dotsClass: "slick-dots custom-dots",
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-0">
        <div className="flex justify-center items-center h-[300px]">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-xl bg-gray-200 h-[300px] w-full md:w-[600px]"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-0 relative">
      <div className="slider-container">
        <Slider {...settings}>
          {colleges.map((college) => (
            <div key={college.id} className="p-3 outline-none focus:outline-none">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100 hover:border-gray-200 group">
                {/* Card layout matching the image design */}
                <div className="flex flex-col">
                  {/* Image section with gradient overlay */}
                  <div className="relative w-full h-[200px] sm:h-[220px] md:h-[240px] overflow-hidden">
                    <Image
                      src={college.college_image || "/placeholder.svg"}
                      alt={college.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Subtle gradient overlay at the bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60"></div>
                  </div>

                  {/* Content section */}
                  <div className="p-4 sm:p-5">
                    <div className="flex items-start gap-3">
                      {/* Logo with enhanced styling */}
                      <div className="w-[45px] h-[45px] relative flex-shrink-0 mt-1 rounded-md overflow-hidden border border-gray-100 bg-white p-1 shadow-sm">
                        <Image
                          src={college.college_logo || "/placeholder.svg"}
                          alt="Logo"
                          fill
                          className="object-contain"
                        />
                      </div>

                      {/* College details with improved typography */}
                      <div className="flex-1">
                        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 line-clamp-2">
                          {college.name}
                        </h2>

                        <div className="flex items-center text-gray-600 mb-2">
                          <MapPin className="w-4 h-4 mr-1 text-gray-400 flex-shrink-0" />
                          <span className="text-sm line-clamp-1">{college.location}</span>
                        </div>

                        {/* Rating with enhanced styling */}
                        <div className="flex items-center mb-3">
                          <div className="flex items-center bg-yellow-50 px-2 py-0.5 rounded-md">
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            <span className="ml-1 font-medium text-sm text-yellow-700">{college.rating}</span>
                            <span className="text-yellow-600 text-xs ml-0.5">/ 5</span>
                          </div>
                        </div>

                        {/* Courses with improved styling */}
                        <div className="flex flex-wrap gap-1.5 mb-4 max-h-[60px] overflow-y-auto scrollbar-thin">
                          {college.courses.split(",").map((course, i) => (
                            <span
                              key={i}
                              className="bg-indigo-50 text-indigo-700 text-xs px-3 py-1 rounded-full border border-indigo-100 whitespace-nowrap"
                            >
                              {course.trim()}
                            </span>
                          ))}
                        </div>

                        {/* Action buttons with improved styling */}
                        <div className="flex gap-3 mt-3">
                          <a
                            href={college.apply_url}
                            className="flex-1 bg-indigo-600 text-white py-2.5 text-center rounded-lg text-sm font-medium transition-all duration-300 hover:bg-indigo-700 hover:shadow-md shadow-sm"
                          >
                            Apply Now
                          </a>
                          <a
                            href={college.details_url}
                            className="flex-1 bg-white border border-indigo-200 text-indigo-600 py-2.5 text-center rounded-lg text-sm font-medium transition-all duration-300 hover:bg-indigo-50 hover:border-indigo-300"
                          >
                            View Details
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PartnerSlider
