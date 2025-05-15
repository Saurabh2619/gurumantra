"use client"

import { useEffect, useState } from "react"
import { createClient } from "@supabase/supabase-js"
import Slider from "react-slick"
import Image from "next/image"

// Import slick styles
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

interface SliderData {
  image_url: string
}

const MainSlider = () => {
  const [sliderData, setSliderData] = useState<SliderData[]>([])

  useEffect(() => {
    const fetchSliderData = async () => {
      const { data, error } = await supabase.from("heroslider").select("image_url")

      if (error) {
        console.error("Error fetching slider data:", error)
      } else {
        setSliderData(data || [])
      }
    }

    fetchSliderData()
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  }

  return (
    <div className="w-full">
      <Slider {...settings} className="slider-container">
        {sliderData.map((slide, index) => (
          <div key={index} className="w-full aspect-[2.4/1] relative">
            <Image
              src={slide.image_url || "/placeholder.svg"}
              alt={`Slide ${index + 1}`}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              priority={index === 0}
            />
          </div>
        ))}
      </Slider>

      {/* Add custom styles to ensure dots are visible */}
      <style jsx global>{`
        .slider-container .slick-dots {
          bottom: 20px;
          z-index: 10;
        }
        
        .slider-container .slick-dots li button:before {
          color: white;
          opacity: 0.7;
          font-size: 10px;
        }
        
        .slider-container .slick-dots li.slick-active button:before {
          color: white;
          opacity: 1;
        }
      `}</style>
    </div>
  )
}

export default MainSlider
