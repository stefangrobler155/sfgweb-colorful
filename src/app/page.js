import ColorBlocks from "@/components/ColorBlocks";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />

      <ColorBlocks height="h-8" />

      <Services />
    </main>
  );
}
