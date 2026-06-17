import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import PriceList from "@/components/PriceList";
import Services from "@/components/Services";
import WhyMe from "@/components/WhyMe";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <PriceList />
      <WhyMe />
      <Contact />
    </>
  );
}
