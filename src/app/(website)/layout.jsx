import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function WebsiteLayout({ children }) {
  return (
    <>
      <Navbar />

      <main className="flex flex-col pt-24 md:pt-16">
        {children}
      </main>

      <Footer />
    </>
  );
}