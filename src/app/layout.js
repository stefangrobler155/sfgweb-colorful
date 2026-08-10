
import { Inter, Manrope } from 'next/font/google';
import "./globals.css";

export const metadata = {
  metadataBase: new URL('https://sfgweb.co.za'),

  title: "SFGWeb | Professional Websites for Small Businesses in South Africa",
  description: "Fast, modern websites built for small businesses, service providers & online stores. Based in Free State. Get more customers with a professional website.",
  keywords: ["web design south africa", "website designer free state", "wordpress developer", "ecommerce website"],
  openGraph: {
    title: "SFGWeb - Professional Websites",
    description: "We build fast, high-converting websites that help businesses grow.",
    images: [{ url: "/logo_icon.png" }],
  },
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,           // Explicit is better
  adjustFontFallback: true,
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
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