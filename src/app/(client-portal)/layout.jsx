import Image from "next/image";

export default function EnquiryLayout({ children }) {
  return (
    <>
      <header className="bg-[var(--secondary-color)] shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Image
            src="/logo.png"
            alt="SFGWEB Logo"
            width={160}
            height={50}
            className="h-10 w-auto transition-transform group-hover:scale-105"
            priority
          />
          <h1 className="text-xl text-[var(--text-light)] font-bold">Project Enquiry Form</h1>
        </div>
      </header>

      <main>{children}</main>
    </>
  );
}