import EnquiryForm from "@/components/forms/EnquiryForm";

export const metadata = {
  title: "Project Enquiry | SFGWeb",
  description: "Tell us about your business so we can plan the right website for you.",
  robots: { index: false, follow: false },
};

export default function ProjectEnquiryPage() {
  return <EnquiryForm />;
}
