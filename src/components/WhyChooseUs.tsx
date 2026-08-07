import { VALUE_PROPS } from "@/lib/constants";
import AnimateIn from "./ui/AnimateIn";
import Card from "./ui/Card";
import Container from "./ui/Container";
import Icon from "./ui/Icon";
import SectionHeading from "./ui/SectionHeading";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Enterprise L&D, without the enterprise friction"
          subtitle="We handle curriculum design, delivery, and reporting so your team can focus on outcomes, not vendor management."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUE_PROPS.map((prop, index) => (
            <AnimateIn key={prop.title} delay={index * 0.08}>
              <Card className="h-full">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={prop.icon} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{prop.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{prop.description}</p>
              </Card>
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
