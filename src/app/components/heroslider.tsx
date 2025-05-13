"use client"

import { useEffect, useState } from "react"
import { createClient } from "@supabase/supabase-js"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Pagination, Autoplay, Navigation } from "swiper/modules"

// Initialize Supabase client
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

const MainSlider = () => {
  const [images, setImages] = useState<string[]>([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Fetch images from Supabase on component mount
  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true)
      const { data, error } = await supabase.from("heroslider").select("*")
      if (error) {
        console.error("Error fetching images:", error)
        setIsLoading(false)
        return
      }

      setImages(data.map((item) => item.image_url.trim())) // Store image links
      setIsLoaded(true)
      setIsLoading(false)
    }

    fetchImages()
  }, [])

  if (isLoading) {
    return (
      <div className="w-full h-[30vh] md:h-[50vh] lg:h-[70vh] flex items-center justify-center bg-gray-100">
        <div className="animate-pulse text-gray-400">Loading slider...</div>
      </div>
    )
  }

  if (!isLoaded || images.length === 0) {
    return (
      <div className="w-full h-[30vh] md:h-[50vh] lg:h-[70vh] flex items-center justify-center bg-gray-100">
        <div className="text-gray-400">No images available</div>
      </div>
    )
  }

  // Add custom styles for pagination
  const customStyles = `
  .slider-custom .swiper-pagination-bullet {
    background-color: #1f2937;
    opacity: 0.7;
  }
  .slider-custom .swiper-pagination-bullet-active {
    background-color: #1f2937;
    opacity: 1;
  }
`

  return (
    <div className="relative w-full">
      <style>{customStyles}</style>
      {/* Custom navigation buttons */}
      <button className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-2 rounded-full transition-all duration-300 hidden sm:flex">
        <ChevronLeft className="h-6 w-6 text-gray-800" />
        <span className="sr-only">Previous slide</span>
      </button>

      <button className="custom-next absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-2 rounded-full transition-all duration-300 hidden sm:flex">
        <ChevronRight className="h-6 w-6 text-gray-800" />
        <span className="sr-only">Next slide</span>
      </button>

      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
          disabledClass: "opacity-30 cursor-not-allowed",
        }}
        spaceBetween={0}
        loop={images.length > 1}
        speed={700}
        slidesPerView={1}
        className="w-full slider-custom"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="w-full">
            <div className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[70vh] xl:h-[80vh]">
              <Image
                src={img || "/placeholder.svg"}
                alt={`Slide ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                className="object-contain md:object-cover"
                priority={index === 0}
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = "/default-image.jpg"
                }}
              />

              {/* Optional content overlay - uncomment if needed */}
              {/* <div className="absolute inset-0 bg-black/20 flex items-end">
                <div className="p-4 sm:p-6 md:p-8 text-white max-w-3xl">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Slide Title {index + 1}</h2>
                  <p className="mt-2 text-sm sm:text-base hidden sm:block">Optional slide description goes here</p>
                </div>
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Mobile indicator dots will be rendered by Swiper's pagination */}
    </div>
  )
}

export default MainSlider


// "use client";

// import { useEffect, useState } from "react";
// import { createClient } from "@supabase/supabase-js";
// import { Swiper, SwiperSlide } from "swiper/react";
// import Image from "next/image";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, Autoplay, Navigation } from "swiper/modules";

// // Initialize Supabase client
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );

// const MainSlider = () => {
//   const [images, setImages] = useState<string[]>([]);
//   const [isLoaded, setIsLoaded] = useState(false);

//   // Fetch images from Supabase on component mount
//   useEffect(() => {
//     const fetchImages = async () => {
//       const { data, error } = await supabase.from("heroslider").select("*");
//       if (error) {
//         console.error("Error fetching images:", error);
//         return;
//       }
//       console.log(data); // Check the fetched data in the console
//       setImages(data.map((item) => item.image_url.trim())); // Store image links
//       setIsLoaded(true); // Set loading state to false
//     };

//     fetchImages();
//   }, []);

//   if (!isLoaded) return null;

//   return (
//     <div className="relative w-full overflow-hidden">
//       <Swiper
//         modules={[Pagination, Autoplay, Navigation]}
//         pagination={{ clickable: true, dynamicBullets: true }}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
//         spaceBetween={0}
//         loop={images.length > 1}
//         speed={700}
//         slidesPerView={1}
//         className="w-full h-full"
//       >
//         {images.map((img, index) => (
//           <SwiperSlide key={index} className="flex justify-center items-center">
//             <div className="relative w-full lg:h-[85vh] aspect-[16/9] sm:aspect-[4/3] md:aspect-[16/7]">
//               <Image
//                 src={img}
//                 alt={`Slide ${index + 1}`}
//                 fill
//                 className="object-cover"
//                 priority={index === 0}
//                 onError={(e) => {
//                   const target = e.target as HTMLImageElement;  // Type casting
//                   target.src = '/default-image.jpg';            // Fallback image
//                 }}
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Navigation buttons */}
//       {/* <div className="custom-next">Next</div>
//       <div className="custom-prev">Prev</div> */}
//     </div>
//   );
// };

// export default MainSlider;
