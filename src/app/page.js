import ColorBlocks from "@/components/ColorBlocks";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <ColorBlocks height="h-8" />
      <Services />
      <ColorBlocks height="h-8" />
      <Portfolio />
      <ColorBlocks height="h-8" />
      <Contact />
      <ColorBlocks height="h-8" />
    </main>
  );
}
