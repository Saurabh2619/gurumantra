"use client";
// import MainSlider from "./components/heroslider";
import DefaultLayout from "./defaultlayout";
import { Search, MapPin, BookOpen } from 'lucide-react';
export default function Home() {
  return (
    <>
    <DefaultLayout>
      {/* <div className="">
        <MainSlider />
      </div>

      <section className="mt-3 mb-3 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl font-semibold">Saurabh Sharma</h1>
        <p>Welcome to Guru_Mantra <br />
          A 100-word paragraph should focus on a single, manageable topic and
          aim for clarity and conciseness. It typically includes an introductory
          sentence, a few supporting sentences, and a concluding sentence. Think
          of it as a mini-essay, introducing the main idea, providing some
          evidence or explanation, and then summarizing the main point. The goal
          is to convey the key information in a clear and concise way, allowing
          the reader to grasp the core concept in a few sentences.
        </p>
      </section> */}
      <div className="relative bg-gradient-to-br from-indigo-700 via-blue-800 to-blue-900 pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Animated Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -right-10 w-40 h-40 md:w-80 md:h-80 bg-cyan-500 rounded-full opacity-10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 -left-20 w-60 h-60 bg-purple-500 rounded-full opacity-10 blur-3xl animate-float"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-indigo-400 rounded-full opacity-10 blur-2xl animate-float-delay"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Main Container */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center">
          
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <span className="inline-block px-4 py-1 rounded-full bg-indigo-700/30 backdrop-blur-sm text-cyan-300 text-xl font-medium mb-6 border border-indigo-600/40 transform transition-all duration-300 hover:scale-105">
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

            <div className="mt-8 pt-6 border-t border-white/10 hidden md:block">
            </div>
          </div>

          {/* Right Side Box */}
          <div className="md:w-1/2 md:pl-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-6 border border-white/20 transform transition-all duration-500 hover:shadow-2xl">
              <h3 className="text-xl font-semibold text-white mb-4 text-center">
                Find Colleges Based on Your Profile
              </h3>

              {/* Inputs with Improved Styling */}
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

              {/* Features with Icons */}
              <div className="mt-6 pt-5 border-t border-white/20">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="group">
                    <div className="w-12 h-12 rounded-full bg-white/10 mx-auto mb-2 flex items-center justify-center transition-all group-hover:bg-cyan-500/30">
                      <BookOpen size={20} className="text-cyan-300" />
                    </div>
                    <span className="text-sm text-white/80 group-hover:text-white transition-all">500+ Colleges</span>
                  </div>
                  <div className="group">
                    <div className="w-12 h-12 rounded-full bg-white/10 mx-auto mb-2 flex items-center justify-center transition-all group-hover:bg-cyan-500/30">
                      <MapPin size={20} className="text-cyan-300" />
                    </div>
                    <span className="text-sm text-white/80 group-hover:text-white transition-all">All Locations</span>
                  </div>
                  <div className="group">
                    <div className="w-12 h-12 rounded-full bg-white/10 mx-auto mb-2 flex items-center justify-center transition-all group-hover:bg-cyan-500/30">
                      <Search size={20} className="text-cyan-300" />
                    </div>
                    <span className="text-sm text-white/80 group-hover:text-white transition-all">100+ Courses</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      </DefaultLayout>
    </>
  );
}
