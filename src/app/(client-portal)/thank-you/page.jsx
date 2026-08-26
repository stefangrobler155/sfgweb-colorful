import { SITE } from "@/lib/site";

export const metadata = {
  title: "Thank You | SFGWeb",
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="mb-8">
          <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h1>
        <p className="text-xl text-gray-600 mb-8">
          Your detailed intake form has been received successfully.
        </p>

        <div className="bg-white rounded-2xl p-8 shadow-sm mb-10">
          <p className="text-gray-700 leading-relaxed">
            I will review your responses and get back to you within{" "}
            <span className="font-semibold">1-2 business days</span> to schedule a discovery call and discuss next steps.
          </p>
        </div>

        <div className="space-y-4">
          <a
            href="/"
            className="block w-full py-4 bg-[var(--accent-color-1)] text-white rounded-2xl font-medium hover:bg-[var(--accent-color-5)] transition"
          >
            Return to Homepage
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="block w-full py-4 border border-gray-300 rounded-2xl font-medium hover:bg-gray-50 transition"
          >
            Contact Me Directly
          </a>
        </div>
      </div>
    </div>
  );
}
