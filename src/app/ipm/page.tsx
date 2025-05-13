"use client"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

export default function IPM() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 2

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentSlide])

  return (
    <div className="font-sans overflow-x-hidden">
      {/* Header with contact info */}
      <div className="bg-[#833589] text-white p-3 flex items-center justify-end">
        <div className="container mx-auto px-4 max-w-7xl flex justify-end">
          <div className="flex items-center">
            <span>For Enquiry: </span>
            <a href="tel:+919816383524" className="flex items-center ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +919816383524
            </a>
          </div>
        </div>
      </div>

      {/* Image Slider */}
      <div className="relative w-full overflow-hidden" style={{ height: "auto" }}>
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {[0, 1].map((index) => (
            <div key={index} className="min-w-full relative">
              <Image
                src="https://res.cloudinary.com/duyo9pzxy/image/upload/v1747075177/IIM_KOZHIKODE_BMS_2_dcrkrk.png"
                alt="IIM Kozhikode BMS"
                width={1200}
                height={600}
                className="w-full h-auto object-contain"
                style={{ backgroundColor: "#f5f5f5" }}
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#833589]/70 hover:bg-[#833589] rounded-full p-3 z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#833589]/70 hover:bg-[#833589] rounded-full p-3 z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-[#F3B51A] scale-110" : "bg-white/70 hover:bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Course Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#833589]">
            Course <span className="text-[#F3B51A]">Overview</span>
          </h2>
          <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-xl shadow-lg">
            <p className="text-gray-700 leading-relaxed mb-6">
              The Indian Institute of Management Kozhikode (IIMK), one of India's most respected and forward-thinking
              business schools, is now launching its first-ever full-time undergraduate degree programme—the Bachelor of
              Management Studies (Honours with Research). This pioneering four-year programme will be delivered at the
              Institute's Kochi Campus and is aimed at preparing a new generation of responsible, globally minded and
              innovation-driven leaders for all sectors of industry and commerce. This programme provides new choices
              for aspiring students to explore and master interesting combinations of contemporary and classical
              subjects and make them prepared for multiple careers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The programme, commencing in the 2025–26 academic year, combines the rigour of management education with
              the richness of interdisciplinary learning. In addition to a Major in Management, students can opt for
              stackable Minors in fields such as Economics and Public Policy, Artificial Intelligence and Machine
              Learning, Psychology and Behavioural Sciences, Finance and Big Data, Liberal Studies, and more. With
              exchange semesters, research opportunities, and internships, the programme reflects IIMK's commitment to
              progressive and inclusive higher education.
            </p>
          </div>
        </div>
      </section>

      {/* Online Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#833589]">
            Our Online <span className="text-[#F3B51A]">Courses</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {/* IPMAT 2025 Course */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 max-w-sm w-full">
              <div className="relative h-auto aspect-square overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/duyo9pzxy/image/upload/v1747123983/WhatsApp_Image_2025-05-13_at_13.41.10_e54o1z.jpg"
                  alt="IPMAT 2025 Online Course"
                  width={1080}
                  height={1080}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#833589] mb-4">IIM K BMS</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#833589] mr-2">»</span>
                    <span>250+ hours of live interactive sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#833589] mr-2">»</span>
                    <span>Access to all recorded sessions anytime, anywhere</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#833589] mr-2">»</span>
                    <span>Dedicated IPMAT Books and Modules</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#833589] mr-2">»</span>
                    <span>10+ Hash Mocks and 100+ Concept wise tests</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#833589] mr-2">»</span>
                    <span>Regular one-on-one or group doubt-clearing sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#833589] mr-2">»</span>
                    <span>Detailed Analysis to track your Progress</span>
                  </li>
                </ul>
                <div className="mt-6 text-right">
                  <span className="inline-block bg-[#833589] text-white text-xl font-bold py-2 px-6 rounded-full shadow-md">
                    ₹25,000
                  </span>
                </div>
              </div>
            </div>

            {/* IPMAT 2026 Course */}
            {/* <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 max-w-sm w-full">
              <div className="relative h-auto aspect-square overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/duyo9pzxy/image/upload/v1747124808/WhatsApp_Image_2025-05-13_at_13.54.06_vlta8g.jpg"
                  alt="IPMAT 2026 Online Course"
                  width={1080}
                  height={1080}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#833589] mb-4">PI Prepration Kit</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#833589] mr-2">»</span>
                    <span>Mentorship by alumni from IIMs, IITs & top global universities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#833589] mr-2">»</span>
                    <span>Real-time mock interviews</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#833589] mr-2">»</span>
                    <span>Profile grooming & answer structuring</span>
                  </li>
                </ul>
                <div className="mt-6 text-right">
                  <span className="inline-block bg-[#833589] text-white text-xl font-bold py-2 px-6 rounded-full shadow-md">
                    ₹70,000
                  </span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Words by our students */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#833589]">
            Words By Our <span className="text-[#F3B51A]">Students</span>
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Our students are our biggest advocates. Hear directly from them about their experience with IPM Careers and
            how our coaching helped them achieve their dreams.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute -top-5 left-8 text-6xl text-[#833589]/10">"</div>
              <p className="text-gray-600 mb-6 relative z-10">
                "IPM Careers helped me crack IPMAT with their structured approach and dedicated mentorship. The faculty
                is extremely knowledgeable and always available to clear doubts. I couldn't have made it to IIM Indore
                without their guidance."
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-[#833589] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  RS
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-lg">Parth Goyal</h4>
                  <p className="text-sm text-gray-500">IIM Indore, Batch of 2024</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute -top-5 left-8 text-6xl text-[#833589]/10">"</div>
              <p className="text-gray-600 mb-6 relative z-10">
                "The mock tests and interview preparation at IPM Careers were spot on. They simulate the actual exam
                environment which helped me manage my time better during the actual exam. Their personalized feedback
                after each mock was invaluable."
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-[#833589] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  AP
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-lg">Ananya Bansal</h4>
                  <p className="text-sm text-gray-500">IIM Indore, Batch of 2024</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute -top-5 left-8 text-6xl text-[#833589]/10">"</div>
              <p className="text-gray-600 mb-6 relative z-10">
                "What sets IPM Careers apart is their focus on conceptual clarity rather than rote learning. The faculty
                ensures that you understand the fundamentals which helps not just in clearing the entrance but also in
                excelling in the program."
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-[#833589] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  VK
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-lg">Om Thakre</h4>
                  <p className="text-sm text-gray-500">IIM Indore, Batch of 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#833589]">
            Watch Our <span className="text-[#F3B51A]">Success Stories</span>
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
            Our students share their journey from preparation to success. Listen to their experiences, challenges, and
            how IPM Careers helped them achieve their dreams of getting into prestigious IIMs. These testimonials
            reflect our commitment to excellence and personalized coaching.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div className="aspect-video w-full shadow-xl rounded-xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/HK-uySxC2vw?feature=shared"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-[#833589]">
                <h3 className="text-xl font-bold text-[#833589] mb-2">Real Success Stories</h3>
                <p className="text-gray-600">
                  Watch our students share their authentic experiences and how they cracked the IPMAT with our guidance.
                  These are not just testimonials but roadmaps for your own success.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-[#F3B51A]">
                <h3 className="text-xl font-bold text-[#833589] mb-2">Proven Strategies</h3>
                <p className="text-gray-600">
                  Learn about the strategies and techniques that helped our students excel in their IPMAT preparation
                  and secure admissions in top IIMs.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-[#833589]">
                <h3 className="text-xl font-bold text-[#833589] mb-2">Inspiration & Motivation</h3>
                <p className="text-gray-600">
                  Get inspired by the journey of our successful students and find the motivation to pursue your own path
                  to success with determination and guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose IPM Careers */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#833589]">
            Why Choose <span className="text-[#F3B51A]">IPM Careers</span>
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We offer a comprehensive approach to IPMAT preparation that focuses on conceptual clarity, regular practice,
            and personalized attention to help you achieve your dream of studying at IIMs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-b-4 border-[#833589]">
              <div className="w-16 h-16 bg-[#833589] rounded-full flex items-center justify-center text-white mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-[#833589]">Expert Faculty</h3>
              <p className="text-gray-600 text-center">
                Learn from IIM alumni and industry experts who understand the exam pattern and requirements thoroughly.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-b-4 border-[#F3B51A]">
              <div className="w-16 h-16 bg-[#833589] rounded-full flex items-center justify-center text-white mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-[#833589]">Comprehensive Study Material</h3>
              <p className="text-gray-600 text-center">
                Access to well-researched study materials, practice questions, and mock tests designed to match the
                actual exam.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-b-4 border-[#833589]">
              <div className="w-16 h-16 bg-[#833589] rounded-full flex items-center justify-center text-white mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-[#833589]">Personalized Attention</h3>
              <p className="text-gray-600 text-center">
                Small batch sizes ensure individual attention and personalized feedback to help you improve
                continuously.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-b-4 border-[#F3B51A]">
              <div className="w-16 h-16 bg-[#833589] rounded-full flex items-center justify-center text-white mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-[#833589]">Regular Mock Tests</h3>
              <p className="text-gray-600 text-center">
                Regular mock tests and analysis sessions to track your progress and identify areas for improvement.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-b-4 border-[#833589]">
              <div className="w-16 h-16 bg-[#833589] rounded-full flex items-center justify-center text-white mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-[#833589]">Interview Preparation</h3>
              <p className="text-gray-600 text-center">
                Comprehensive interview preparation with mock interviews and feedback from experienced mentors.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-b-4 border-[#F3B51A]">
              <div className="w-16 h-16 bg-[#833589] rounded-full flex items-center justify-center text-white mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-[#833589]">Proven Track Record</h3>
              <p className="text-gray-600 text-center">
                Consistent results with students securing admissions in top IIMs and other prestigious management
                institutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promising Results */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#833589]">
            Our Promising <span className="text-[#F3B51A]">Results</span>
          </h2>
          <div className="mb-12">
            <div className="relative w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://res.cloudinary.com/duyo9pzxy/image/upload/v1747075179/42-indore-_ivhcmw.jpg"
                alt="IIM Indore Results"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#833589]/80 to-transparent flex items-end">
                <div className="p-4 md:p-8 text-white">
                  <h3 className="text-xl md:text-3xl font-bold mb-2">42 Selections in IIM Indore</h3>
                  <p className="text-sm md:text-xl">
                    Our students have secured 42 seats in IIM Indore in 2024, making us one of the leading coaching
                    institutes for IPMAT preparation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg border-t-4 border-[#833589] hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl font-bold text-[#F3B51A] mb-4">100+</div>
              <h3 className="text-2xl font-bold text-[#833589] mb-2">Selections in Top IIMs</h3>
              <p className="text-gray-600">
                With over 100 selections across all IIMs, our students have consistently performed exceptionally well in
                the IPMAT exams.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-lg border-t-4 border-[#F3B51A] hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl font-bold text-[#833589] mb-4">80%</div>
              <h3 className="text-2xl font-bold text-[#833589] mb-2">Success Rate</h3>
              <p className="text-gray-600">
                We pride ourselves on maintaining the highest success rate in the industry, with over 80% of our
                students securing admissions in top management institutes.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-lg border-t-4 border-[#833589] hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl font-bold text-[#F3B51A] mb-4">5+</div>
              <h3 className="text-2xl font-bold text-[#833589] mb-2">Years of Excellence</h3>
              <p className="text-gray-600">
                With over 5 years of experience in IPMAT coaching, we have established ourselves as the premier
                institute for IPM aspirants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* India's Premium IPMAT Coaching */}
      <section className="py-16 bg-[#833589] text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">India's Premium IPMAT Coaching</h2>
            <p className="text-xl mb-8">Join now to grab the opportunity to learn from our experts</p>
            <button className="bg-[#F3B51A] hover:bg-[#e5a918] text-[#833589] font-bold py-4 px-10 rounded-md text-lg transition duration-300 shadow-lg transform hover:scale-105">
              TRUSTED BY THOUSANDS OF STUDENTS
            </button>
            <div className="mt-10 flex items-center justify-center">
              <a
                href="https://wa.me/919816383524"
                className="flex items-center bg-white text-[#833589] py-3 px-6 rounded-md hover:bg-gray-100 transition duration-300 font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="#25D366" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Connect on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#833589] text-white py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-bold">IPM Careers</h3>
              <p className="text-sm mt-1">RUN BY IIM ALUMNI</p>
              <p className="mt-4 max-w-md text-white/80">
                India's leading coaching institute for IPMAT and other management entrance exams. Helping students
                achieve their dreams since 2018.
              </p>
            </div>
            <div className="text-center md:text-right">
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mb-6">
                <div>
                  <h4 className="font-semibold mb-3 text-[#F3B51A]">Quick Links</h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="hover:text-[#F3B51A] transition-colors">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-[#F3B51A] transition-colors">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-[#F3B51A] transition-colors">
                        Courses
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-[#F3B51A] transition-colors">
                        Results
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-[#F3B51A]">Contact Us</h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="tel:+919816383524" className="hover:text-[#F3B51A] transition-colors">
                        +91 9816383524
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@ipmcareers.com" className="hover:text-[#F3B51A] transition-colors">
                        info@ipmcareers.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-white/20 pt-6">
                <p>© {new Date().getFullYear()} IPM Careers. All Rights Reserved.</p>
                <div className="mt-2 flex justify-center md:justify-end space-x-4">
                  <a href="#" className="hover:text-[#F3B51A] transition-colors">
                    Privacy Policy
                  </a>
                  <a href="#" className="hover:text-[#F3B51A] transition-colors">
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
