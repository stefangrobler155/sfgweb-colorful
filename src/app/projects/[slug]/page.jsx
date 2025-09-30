import Image from "next/image";
import { notFound } from "next/navigation";
import TechDetailsToggle from "@/components/TechDetailsToggle"; // Create this client component
import { projects } from "@/data/projects";
import ColorBlocks from "@/components/ColorBlocks";
import BackButton from "@/components/BackButton";

export default async function ProjectPage({ params }) {
  const { slug } = await params; // Next.js handles params as an object in async functions
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="relative pt-16 bg-[var(--primary-color)]">
        <ColorBlocks />
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-8 text-center">{project.title}</h1>
        <div className="relative w-full h-96 mb-8">
          <Image
            src={project.fullImage}
            alt={project.title}
            fill
            className="object-cover rounded-2xl object-top"
          />
        </div>
        <div className="text-[var(--text-color)] mb-8">
          <p className="mb-4">
            {project.description.split(" ").slice(0, 30).join(" ") + "..."}
          </p>
          <p className="mb-4">
            This project showcases a seamless integration of modern web technologies to deliver a high-quality user experience. Key features include responsive design, optimized performance, and dynamic content management. The site has been praised for its speed and visual appeal, making it a standout portfolio piece.
          </p>
          <p>
            Visit the live site to explore the full functionality and see how it serves its audience effectively.
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm rounded-full bg-[var(--accent-color-3)] text-[var(--text-color)]"
              >
                {t}
              </span>
            ))}
          </div>
          <TechDetailsToggle project={project} /> {/* Use the client component here */}
        </div>
        <div className="space-y-4 text-center">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 rounded-xl bg-[var(--accent-color-1)] text-white font-medium transition"
          >
            Live Demo
          </a>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 rounded-xl bg-[var(--accent-color-3)] text-[var(--text-color)] font-medium transition ml-4"
            >
              Code on GitHub
            </a>
          )}
        </div>
        <BackButton />
      </div>
      <ColorBlocks />
    </section>
  );
}