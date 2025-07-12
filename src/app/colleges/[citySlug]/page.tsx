import { createClient } from "@supabase/supabase-js";
import { notFound } from "next/navigation";
import DefaultLayout from "../../defaultlayout";
import {
  MapPin,
  Building2,
  GraduationCap,
  Star,
  Users,
  Award,
  ExternalLink,
  Phone,
  Mail,
  Globe,
} from "lucide-react";

// ✅ Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// ✅ Disable caching while debugging (or for SSR)
export const dynamic = "force-dynamic";

// ✅ FIXED: Let Next.js infer and type `params`
export default async function CityCollegesPage({
  params,
}: {
  params: { citySlug: string };
}) {
  const citySlug = params.citySlug.toLowerCase();

  const { data: city, error: cityError } = await supabase
    .from("cities")
    .select("id, name")
    .ilike("slug", citySlug)
    .single();

  if (!city || cityError) return notFound();

  const { data: colleges, error: collegeError } = await supabase
    .from("colleges")
    .select("id, name, logo_url, image_url")
    .eq("city_id", city.id);

  return (
   <DefaultLayout>
      {/* Enhanced Hero Section */}
      <div className="relative py-20 bg-gradient-to-br from-[#0d47a1] via-[#1565c0] to-[#1976d2] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-full blur-lg animate-pulse delay-500"></div>
        </div>
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
              <Star className="w-4 h-4 text-yellow-300" />
              <span>Top Educational Destination</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-7 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Colleges in {city.name}
          </h1> 
          <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl leading-relaxed">
            Discover premier educational institutions in {city.name} with verified information and direct admission
            support.
          </p>
          <div className="flex items-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              <span>{colleges?.length || 0} Colleges Available</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              <span>Multiple Programs</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span>Verified Institutions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container max-w-7xl mx-auto px-4">
          {cityError && (
            <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
              {/* <p className="text-red-600 font-medium">Error: {cityError.message}</p> */}
            </div>
          )}

          {collegeError && (
            <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 font-medium">Error: {collegeError.message}</p>
            </div>
          )}

          {colleges && colleges.length > 0 ? (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Colleges & Universities</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Explore {colleges.length} verified institutions in {city.name} offering quality education and
                  excellent career opportunities.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {colleges.map((c) => (
                  <div
                    key={c.id}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 overflow-hidden hover:-translate-y-2"
                  >
                    {/* College Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={c.image_url ?? "/placeholder.svg?height=200&width=400"}
                        alt={c.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 right-4">
                        <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Star className="w-4 h-4 text-yellow-500" />
                        </div>
                      </div>
                    </div>

                    {/* College Info */}
                    <div className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-50 transition-colors">
                          <img
                            src={c.logo_url ?? "/placeholder.svg?height=32&width=32"}
                            alt={`${c.name} logo`}
                            className="w-8 h-8 object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#0d47a1] transition-colors mb-2">
                            {c.name}
                          </h3>
                          <div className="flex items-center gap-2 text-gray-600 mb-3">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{city.name}</span>
                          </div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <GraduationCap className="w-4 h-4 text-[#0d47a1]" />
                          <span>Multiple Programs Available</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Users className="w-4 h-4 text-[#0d47a1]" />
                          <span>Expert Faculty</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Award className="w-4 h-4 text-[#0d47a1]" />
                          <span>Accredited Institution</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <button className="flex-1 bg-gradient-to-r from-[#0d47a1] to-[#1565c0] text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-medium flex items-center justify-center gap-2">
                          <span>View Details</span>
                          <ExternalLink className="w-4 h-4" />
                        </button>
                        <button className="px-4 py-2 border-2 border-[#0d47a1] text-[#0d47a1] rounded-lg hover:bg-[#0d47a1] hover:text-white transition-all duration-300 font-medium">
                          <Phone className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Bottom Accent */}
                    <div className="h-1 bg-gradient-to-r from-[#0d47a1] to-[#1565c0] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                ))}
              </div>

              {/* Additional Info Section */}
              <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help Choosing?</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Our expert counselors can help you find the perfect college match based on your preferences, budget,
                    and career goals.
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0d47a1] to-[#1565c0] text-white rounded-lg shadow-lg hover:shadow-xl transition-all font-medium">
                    <Users className="w-5 h-5" />
                    <span>Get Free Counseling</span>
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 border-2 border-[#0d47a1] text-[#0d47a1] rounded-lg hover:bg-[#0d47a1] hover:text-white transition-all font-medium">
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-medium">
                    <Mail className="w-5 h-5" />
                    <span>Email Us</span>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No Colleges Found</h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                We couldn't find any colleges in {city.name} at the moment. Please check back later or contact us for
                assistance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0d47a1] to-[#1565c0] text-white rounded-lg shadow-lg hover:shadow-xl transition-all font-medium">
                  <Users className="w-5 h-5" />
                  <span>Contact Support</span>
                </button>
                <button className="flex items-center gap-2 px-6 py-3 border-2 border-[#0d47a1] text-[#0d47a1] rounded-lg hover:bg-[#0d47a1] hover:text-white transition-all font-medium">
                  <Globe className="w-5 h-5" />
                  <span>Explore Other Cities</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </DefaultLayout>
  );
}
