import Navbar from "@/components/Navbar";
import "./globals.css";

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
      </body>
    </html>
  );
}
