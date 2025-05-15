"use client";
// import MainSlider from "./components/heroslider";
import DefaultLayout from "./defaultlayout";
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
      <div className="relative bg-gradient-to-r from-indigo-900 to-blue-800 pt-20 pb-16 md:pt-32 md:pb-24 ">
  {/* Decorative Blur Circles */}
  <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none">
    <div className="absolute -top-10 -right-10 w-40 h-40 md:w-80 md:h-80 bg-indigo-600 rounded-full opacity-20 blur-3xl"></div>
    <div className="absolute bottom-10 -left-20 w-60 h-60 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
  </div>

  {/* Main Container */}
  <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:px-6 relative z-10 ">
    <div className="flex flex-col md:flex-row md:items-center">
      
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 ">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
          Find Your <span className="text-yellow-400">Perfect College</span> Match
        </h1>
        <p className="text-indigo-100 text-lg md:text-xl max-w-lg md:max-w-xl mx-auto md:mx-0 mb-8">
          Get personalized college recommendations based on your academic profile and connect with top institutions nationwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-yellow-500 hover:bg-yellow-400 text-indigo-900 font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105">
            Explore Colleges
          </button>
          <button className="bg-transparent hover:bg-indigo-700/30 text-white border-2 border-white py-3 px-8 rounded-lg transition-all">
            Free Consultation
          </button>
        </div>
      </div>

      {/* Right Side Box */}
      <div className="md:w-1/2 md:pl-8">
        <div className="bg-white rounded-xl shadow-xl p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Find Colleges Based on Your Profile
          </h3>

          {/* Placeholder for Inputs */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Percentage/Marks"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <select className="w-full p-3 border border-gray-300 rounded-lg">
              <option>Select course</option>
              <option>Engineering</option>
              <option>Medical</option>
              <option>Business</option>
              <option>Arts & Humanities</option>
              <option>Pure Sciences</option>
            </select>
            <button className="w-full bg-indigo-800 text-white py-3 px-4 rounded-lg">
              Find Matching Colleges
            </button>
          </div>

          {/* Features */}
          <div className="mt-6 pt-5 border-t border-gray-200">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <div className="w-10 h-10 rounded-full bg-indigo-100 mx-auto mb-2"></div>
                <span className="text-xs text-gray-600">500+ Colleges</span>
              </div>
              <div>
                <div className="w-10 h-10 rounded-full bg-indigo-100 mx-auto mb-2"></div>
                <span className="text-xs text-gray-600">All Locations</span>
              </div>
              <div>
                <div className="w-10 h-10 rounded-full bg-indigo-100 mx-auto mb-2"></div>
                <span className="text-xs text-gray-600">100+ Courses</span>
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
