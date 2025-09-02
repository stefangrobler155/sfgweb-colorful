import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import ColorBlocks from "@/components/ColorBlocks";

export const metadata = {
  title: "SFG Portfolio",
  description: "Frontend Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <ColorBlocks />
      </body>
    </html>
  );
}
