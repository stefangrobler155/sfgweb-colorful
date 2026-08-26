import Image from "next/image";
import { SITE } from "@/lib/site";

export default function EnquiryLayout({ children }) {
  return (
    <>
      <header className="bg-[var(--secondary-color)] shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/">
            <Image
              src="/logo.png"
              alt={`${SITE.name} Logo`}
              width={160}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </a>
          <h1 className="text-xl text-[var(--text-light)] font-bold">Project Enquiry Form</h1>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
}
