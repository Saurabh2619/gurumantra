"use client";
import MainSlider from "./components/heroslider";
import { Montserrat} from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export default function Home() {
  return (
    <>
      {/* Make slider full width by cancelling layout padding */}
      <div className="-mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 xl:-mx-20">
        <MainSlider />
      </div>

      {/* Written content stays aligned within layout padding */}
      <section className="mt-6">
        {/* <h1 className="text-xl font-semibold">{`Saurabh Sharma Testing ${montserrat.className}`}</h1> */}
        <h1 className="text-xl font-semibold">Saurabh Sharma</h1>
        <p className="mt-2">
          Welcome to Guru Mantra <br />
          A 100-word paragraph should focus on a single, manageable topic and
          aim for clarity and conciseness. It typically includes an introductory
          sentence, a few supporting sentences, and a concluding sentence. Think
          of it as a mini-essay, introducing the main idea, providing some
          evidence or explanation, and then summarizing the main point. The goal
          is to convey the key information in a clear and concise way, allowing
          the reader to grasp the core concept in a few sentences.
        </p>
      </section>
    </>
  );
}
