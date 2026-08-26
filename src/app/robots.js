import { SITE } from "@/lib/site";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/project-enquiry-form", "/thank-you"],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
