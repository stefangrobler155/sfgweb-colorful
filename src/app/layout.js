import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: "SFGWeb | Modern Websites for Small Businesses in South Africa",
  description:
    "Professionally built, mobile-friendly websites for small businesses. Clear packages from R7,500. Based in the Free State, available across South Africa.",
  keywords: [
    "web design south africa",
    "website designer free state",
    "small business website",
    "professional website south africa",
  ],
  openGraph: {
    title: "SFGWeb — Modern websites for small businesses",
    description: "Clear packages, a straightforward process, and a site that presents your business properly.",
    images: [{ url: "/logo_icon.png" }],
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body
        className="font-sans antialiased min-h-screen bg-local md:bg-fixed bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg_fixed.webp')" }}
      >
        {children}
      </body>
    </html>
  );
}
