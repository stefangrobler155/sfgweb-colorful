import ColorBlocks from "@/components/ColorBlocks";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import PriceList from "@/components/PriceList";
import Services from "@/components/Services";
import WhyMe from "@/components/WhyMe";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <ColorBlocks height="h-8" /> */}
      <Services />
      {/* <ColorBlocks height="h-8" /> */}
      <PriceList />
      <WhyMe />
      {/* <ColorBlocks height="h-8" /> */}
      {/* <Portfolio /> */}
      {/* <ColorBlocks height="h-8" /> */}
      <Contact />
      {/* <ColorBlocks height="h-8" /> */}
    </>
  );
}
