"use client";
import DefaultLayout from "./defaultlayout";
import {ArrowRight, Search, MapPin, BookOpen, FileText, Users, Star, Award, CheckCircle, MessageSquare, Phone,}
from "lucide-react";
import { useState, useEffect } from "react";
import Link from 'next/link';
import PartnerSlider from "./components/partener-slider";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <DefaultLayout>
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-[#0d47a1] via-[#1565c0] to-[#1976d2] pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
          {/* Decorative BG Elements */}
          <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-10 -right-10 w-40 h-40 md:w-80 md:h-80 bg-cyan-500 rounded-full opacity-10 blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-10 -left-20 w-60 h-60 bg-purple-500 rounded-full opacity-10 blur-3xl animate-float"></div>
            <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-indigo-400 rounded-full opacity-10 blur-2xl animate-float-delay"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          </div>

          {/* Animated Container */}
          <div
            className={`container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center">
              {/* Left Content */}
              <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                <span className="inline-block px-4 py-1 rounded-full bg-indigo-900/70 backdrop-blur-sm text-cyan-300 text-xl font-medium mb-6 border border-indigo-600/40 transform transition-all duration-300 hover:scale-105">
                  Find Your Academic Path
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
                  Find Your Perfect College Match
                </h1>
                <p className="text-indigo-100 text-lg md:text-xl max-w-lg md:max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed">
                  Get personalized college recommendations based on your academic profile and connect with top institutions nationwide.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <button className="bg-transparent hover:bg-white/10 text-white border-2 border-white/70 py-3 px-8 rounded-lg transition-all hover:border-white flex items-center justify-center space-x-2">
                    <span>Explore Colleges</span>
                    <MapPin size={18} />
                    <BookOpen size={18} />
                  </button>
                  <button className="bg-transparent hover:bg-white/10 text-white border-2 border-white/70 py-3 px-8 rounded-lg transition-all hover:border-white flex items-center justify-center space-x-2">
                    <span>Free Consultation</span>
                    <MapPin size={18} />
                  </button>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 hidden md:block"></div>
              </div>

              {/* Right Form Section */}
              <div className="md:w-1/2 md:pl-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-6 border border-white/90 transform transition-all duration-500 hover:shadow-2xl">
                  <h3 className="text-xl font-semibold text-white mb-4 text-center">
                    Find Colleges Based on Your Profile
                  </h3>

                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Your Percentage/Marks"
                        className="w-full p-3 pl-10 bg-white/20 backdrop-blur border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                      />
                      <div className="absolute left-3 top-3.5 text-white/60">
                        <Search size={18} />
                      </div>
                    </div>

                    <select className="w-full p-3 bg-white/20 backdrop-blur border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all appearance-none">
                      <option className="bg-indigo-900 text-white">Select course</option>
                      <option className="bg-indigo-900 text-white">Engineering</option>
                      <option className="bg-indigo-900 text-white">Medical</option>
                      <option className="bg-indigo-900 text-white">Business</option>
                      <option className="bg-indigo-900 text-white">Arts & Humanities</option>
                      <option className="bg-indigo-900 text-white">Pure Sciences</option>
                    </select>

                    <button className="w-full bg-transparent hover:bg-white/10 text-white border-2 border-white/70 py-3 px-8 rounded-lg transition-all hover:border-white flex items-center justify-center space-x-2">
                      Find Matching Colleges
                    </button>
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/20">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="group">
                        <div className="w-12 h-12 rounded-full bg-white/10 mx-auto mb-2 flex items-center justify-center transition-all group-hover:bg-cyan-500/30">
                          <BookOpen size={20} className="text-cyan-300" />
                        </div>
                        <span className="text-sm text-white/80 group-hover:text-white transition-all">
                          500+ Colleges
                        </span>
                      </div>
                      <div className="group">
                        <div className="w-12 h-12 rounded-full bg-white/10 mx-auto mb-2 flex items-center justify-center transition-all group-hover:bg-cyan-500/30">
                          <MapPin size={20} className="text-cyan-300" />
                        </div>
                        <span className="text-sm text-white/80 group-hover:text-white transition-all">
                          All Locations
                        </span>
                      </div>
                      <div className="group">
                        <div className="w-12 h-12 rounded-full bg-white/10 mx-auto mb-2 flex items-center justify-center transition-all group-hover:bg-cyan-500/30">
                          <Search size={20} className="text-cyan-300" />
                        </div>
                        <span className="text-sm text-white/80 group-hover:text-white transition-all">
                          100+ Courses
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
 {/* Hero Section End */}


      {/* Partner Slider Section */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
          Top Colleges You Can Trust
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Explore leading institutions renowned for quality education and excellent placement records. These colleges
          collaborate with us to bring exclusive opportunities and benefits to students like you.
        </p>
      </div>
      <div className="mt-10">
        <PartnerSlider />
      </div>
    </div>
    <div className="flex justify-center mb-3">
      <div className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-200/90 cursor-pointer">
       {/* <Link href="/colleges"><span>View All Partner Colleges</span></Link> */}
      </div>
    </div>

<div className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center space-y-6">
      <h2 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
        How Guru Mantra Works
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Discover a simple 3-step journey to find the right college for you—powered by technology and guided by expert insights. 
        Whether you're aiming for top-tier institutions or hidden gems, Guru Mantra helps you make informed decisions with confidence and ease.
      </p>
    </div>

    <div className="mt-12 grid md:grid-cols-3 gap-8">
      {/* Step 1 */}
      <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg border border-gray-100 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 transition-all duration-500 group-hover:bg-blue-100"></div>
        <div className="relative z-10">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0d47a1] to-[#1976d2] flex items-center justify-center mb-6 text-white">
            <FileText size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-3">Share Your Profile</h3>
          <p className="text-gray-600 mb-4">
            Enter your academic details, interests, and preferences. Our smart algorithm uses this information
            to find the best college matches for you.
          </p>
          <div className="flex items-center text-[#1565c0] font-medium">
            <span className="mr-2">Step 1</span>
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="font-bold">1</span>
            </div>
          </div>
        </div>
      </div>

      {/* Step 2 */}
      <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg border border-gray-100 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 transition-all duration-500 group-hover:bg-blue-100"></div>
        <div className="relative z-10">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0d47a1] to-[#1976d2] flex items-center justify-center mb-6 text-white">
            <Search size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-3">Get Personalized Matches</h3>
          <p className="text-gray-600 mb-4">
            Receive a curated list of colleges that match your profile, with detailed information about courses,
            fees, placements, and admission requirements.
          </p>
          <div className="flex items-center text-[#1565c0] font-medium">
            <span className="mr-2">Step 2</span>
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="font-bold">2</span>
            </div>
          </div>
        </div>
      </div>

      {/* Step 3 */}
      <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg border border-gray-100 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 transition-all duration-500 group-hover:bg-blue-100"></div>
        <div className="relative z-10">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0d47a1] to-[#1976d2] flex items-center justify-center mb-6 text-white">
            <Users size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-3">Connect & Apply</h3>
          <p className="text-gray-600 mb-4">
            Connect directly with college representatives, get application guidance, and receive exclusive
            benefits when you apply through Guru Mantra.
          </p>
          <div className="flex items-center text-[#1565c0] font-medium">
            <span className="mr-2">Step 3</span>
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="font-bold">3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/*Sucess Stories*/}
 <div className="py-16">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-4xl font-bold mb-4">Success Stories</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Hear from students who found their dream colleges through Guru Mantra and are now thriving in their
                academic journeys.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0d47a1] to-[#1976d2] flex items-center justify-center text-white font-bold text-xl">
                    A
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Test Student 1</h4>
                    <p className="text-sm text-gray-500">B.Tech, Computer Science</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                  </div>
                  <p className="text-gray-600">
                    "Guru Mantra helped me find the perfect engineering college that matched my profile. Their
                    personalized recommendations saved me so much time and stress!"
                  </p>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Award size={16} className="mr-1 text-[#1976d2]" />
                  <span>Placed at xyz with @ package</span>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0d47a1] to-[#1976d2] flex items-center justify-center text-white font-bold text-xl">
                    R
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Test Student 2</h4>
                    <p className="text-sm text-gray-500">MBA, Finance</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                  </div>
                  <p className="text-gray-600">
                    "The counselors at Guru Mantra guided me through the entire admission process. I got into my dream
                    business school with a scholarship!"
                  </p>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Award size={16} className="mr-1 text-[#1976d2]" />
                  <span>Got placed</span>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0d47a1] to-[#1976d2] flex items-center justify-center text-white font-bold text-xl">
                    P
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Test Student 3</h4>
                    <p className="text-sm text-gray-500">MBBS</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                  </div>
                  <p className="text-gray-600">
                    "Finding a good medical college seemed impossible until I used Guru Mantra. Their expert guidance
                    helped me navigate the complex admission process."
                  </p>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Award size={16} className="mr-1 text-[#1976d2]" />
                  <span>Top medical College</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-10">
              <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0d47a1] to-[#1976d2] text-white rounded-lg shadow-md hover:shadow-lg transition-all">
                <span>Read More Success Stories</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-br from-[#0d47a1] via-[#1565c0] to-[#1976d2] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-10 -right-10 w-40 h-40 md:w-80 md:h-80 bg-cyan-500 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-10 -left-20 w-60 h-60 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          </div>

          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-8 md:p-12 border border-white/20">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Get Free Expert Counseling to Find the Right College & Course.
                  </h2>
                  <p className="text-indigo-100 text-lg mb-6">
                    Personalized guidance for admissions in India & abroad — based on your marks, goals, and budget.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 bg-white text-[#0d47a1] rounded-lg shadow-md hover:shadow-lg transition-all font-medium">
                      <CheckCircle size={18} />
                      <span>Get Started Now</span>
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all">
                      <MessageSquare size={18} />
                      <span>Chat with Counselor</span>
                    </button>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-6 text-center">Schedule a Free Consultation</h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 bg-white/20 backdrop-blur border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-3 bg-white/20 backdrop-blur border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                    />
                    <input
                      type="tel"
                      placeholder="Your Phone"
                      className="w-full p-3 bg-white/20 backdrop-blur border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                    />
                    <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#0d47a1] rounded-lg shadow-md hover:shadow-lg transition-all font-medium">
                      <Phone size={18} />
                      <span>Schedule Call</span>
                    </button>
                  </div>
                  <div className="mt-4 text-center text-white/70 text-sm">We'll call you back within 24 hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
