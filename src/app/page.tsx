import CtaBanner from "@/components/CtaBanner";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import LeadForm from "@/components/LeadForm";
import LogoStrip from "@/components/LogoStrip";
import Programs from "@/components/Programs";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <WhyChooseUs />
      <Programs />
      <HowItWorks />
      <Testimonials />
      <Stats />
      <LeadForm />
      <CtaBanner />
    </>
  );
}
