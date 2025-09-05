import { createClient } from "@supabase/supabase-js";
import { notFound } from "next/navigation";
import DefaultLayout from "../../../defaultlayout";

// Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const dynamic = "force-dynamic";

// Define the shape of college_data rows
interface CollegeData {
  id: number;
  course: string;
  clg_fees: string;
  specialization: string;
  highest_placement: string;
  college_id: number;
  year: number;
}

export default async function CollegePage({
  params,
}: {
  params: Promise<{ citySlug?: string; collegeSlug?: string }>;
}) {
  const { citySlug, collegeSlug } = await params;

  if (!citySlug || !collegeSlug) return notFound();

  // 1. Get city
  const { data: city } = await supabase
    .from("cities")
    .select("id, name, slug")
    .ilike("slug", citySlug)
    .single();

  if (!city) return notFound();

  // 2. Get college
  const { data: college } = await supabase
    .from("colleges")
    .select("id, name, slug")
    .eq("slug", collegeSlug)
    .eq("city_id", city.id)
    .single();

  if (!college) return notFound();

  // 3. Get college details from college_data table
  const { data: collegeData, error: dataError } = await supabase
    .from("college_data")
    .select("id, course, clg_fees, specialization, highest_placement, college_id, year")
    .eq("college_id", college.id);

  if (dataError) {
    console.error(dataError);
    return notFound();
  }

  return (
    <DefaultLayout>
      <div className="container max-w-5xl mx-auto py-12 px-4">
        {/* College heading */}
        <h1 className="text-3xl font-bold mb-2 text-[#0d47a1]">{college.name}</h1>
        <p className="text-gray-600 mb-10 text-lg">
          Located in <span className="font-medium">{city.name}</span>. Explore
          course details, fees, and placement records.
        </p>

        {/* Courses Section */}
        <div className="space-y-8">
          {collegeData && collegeData.length > 0 ? (
            collegeData.map((row: CollegeData) => (
              <div
                key={row.id}
                className="w-full p-6 bg-white shadow-lg hover:shadow-xl transition-shadow rounded-2xl border border-gray-100"
              >
                <h2 className="text-xl font-semibold text-[#0d47a1] mb-3">
                  Courses:  {row.course}
                </h2>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Established Year:</span>{" "}
                  {row.year}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Specialization:</span>{" "}
                  {row.specialization}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Fees:</span> {row.clg_fees}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Highest Placement:</span>{" "}
                  {row.highest_placement}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No course data available.</p>
          )}
        </div>
      </div>
    </DefaultLayout>
  );
}
