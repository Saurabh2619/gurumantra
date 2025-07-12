"use client"

import DefaultLayout from "../defaultlayout"
import {
  MapPin,
  Building2,
  GraduationCap,
  Users,
  Star,
  ArrowRight,
  CheckCircle,
  Globe,
  Target,
  BookOpen,
} from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

type CityGroup = {
  title: string
  cities: string[]
  icon: any
  description: string
  color: string 
}

const cityGroups: CityGroup[] = [
  {
    title: "Delhi NCR Region",
    cities: ["Delhi", "Gurugram", "Ghaziabad", "Greater Noida"],
    icon: Building2,
    description: "India's educational hub with premier institutions and diverse opportunities",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Mumbai Region",
    cities: ["Mumbai", "Pune"],
    icon: Globe,
    description: "Commercial capital offering world-class education and industry connections",
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "South India",
    cities: ["Bangalore"],
    icon: Target,
    description: "Tech capital with cutting-edge institutions and innovation centers",
    color: "from-green-500 to-green-600",
  },
  {
    title: "Uttar Pradesh",
    cities: ["Kanpur", "Lucknow"],
    icon: BookOpen,
    description: "Rich educational heritage with established universities and colleges",
    color: "from-orange-500 to-orange-600",
  },
]

export default function CollegesPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <DefaultLayout>
      {/* Enhanced Hero Section */}
      <div className="relative py-20 bg-gradient-to-br from-[#0d47a1] via-[#1565c0] to-[#1976d2] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse delay-500"></div>
        </div>
        <div
          className={`container max-w-6xl mx-auto px-4 text-center relative z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 text-sm font-medium">
            <Star className="w-4 h-4 text-yellow-300" />
            <span>Discover Your Perfect College</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Explore Colleges by City
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-6 max-w-4xl mx-auto leading-relaxed">
            Find the best colleges and universities across India's major educational hubs.
          </p>
          <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto mb-8 leading-relaxed">
            From Delhi's prestigious institutions to Bangalore's tech-focused colleges, discover your ideal educational
            destination with verified information and direct connections.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group px-8 py-4 border-2 border-white/30 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-semibold flex items-center gap-2 hover:bg-white/10">
              Explore Colleges
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold backdrop-blur-sm">
              Get Guidance
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced City Groups Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6">Choose Your Educational Destination</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore colleges across India's top educational cities and find the perfect match for your academic goals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {cityGroups.map((group, index) => (
              <div key={index} className="group">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${group.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <group.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#0d47a1] transition-colors">
                      {group.title}
                    </h3>
                    <p className="text-gray-600">{group.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {group.cities.map((city) => (
                    <Link
                      key={city}
                      href={`/colleges/${city.toLowerCase().replace(/\s+/g, "-")}`}
                      className="flex items-center gap-3 p-4 rounded-lg bg-white hover:bg-blue-50 hover:text-[#0d47a1] transition-all duration-300 group/city shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200"
                    >
                      <MapPin className="w-5 h-5 text-gray-400 group-hover/city:text-[#0d47a1]" />
                      <span className="font-medium">{city}</span>
                      <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover/city:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Our College Network</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We connect you with verified institutions and provide comprehensive support throughout your admission
              journey.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Verified Institutions",
                description:
                  "All colleges in our network are thoroughly verified and accredited for quality education.",
                color: "from-green-500 to-green-600",
              },
              {
                icon: Users,
                title: "Expert Counseling",
                description: "Get personalized guidance from our experienced education counselors for the best fit.",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Star,
                title: "Direct Admissions",
                description:
                  "Skip the middlemen and connect directly with colleges for transparent admission processes.",
                color: "from-purple-500 to-purple-600",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="text-white" size={32} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#0d47a1] transition-colors">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Call to Action */}
      <div className="relative py-24 bg-gradient-to-br from-[#0d47a1] via-[#1565c0] to-[#1976d2] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        <div className="container max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Ready to Find Your Dream College?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-4xl mx-auto leading-relaxed">
            Start your journey today with personalized guidance and direct access to top colleges across India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 px-8 py-4 bg-white text-[#0d47a1] rounded-lg shadow-lg hover:shadow-xl transition-all font-semibold">
              <GraduationCap size={20} />
              <span>Get Free Counseling</span>
            </button>
            <button className="flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all font-semibold">
              <MapPin size={20} />
              <span>Explore All Cities</span>
            </button>
          </div>
          <div className="mt-12 flex justify-center items-center gap-8 text-white/80 flex-wrap">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-300" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-300" />
              <span>Verified Colleges</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-300" />
              <span>Direct Admissions</span>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}
