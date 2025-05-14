import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Toup from "./components/toup";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      
      {/* Main content */}
      <main className="pt-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        {children}
      </main>
      
      {/* Scroll-to-top button */}
      <Toup />
      
      {/* Footer */}
      <Footer />
    </>
  );
}
