import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import PriceList from "@/components/PriceList";
import Services from "@/components/Services";
import WhyMe from "@/components/WhyMe";
import RecentWork from "@/components/RecentWork";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <PriceList />
      <WhyMe />
      <Process />
      <RecentWork />
      <Testimonials />
      <Contact />
    </>
  );
}
