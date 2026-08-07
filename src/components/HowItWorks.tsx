import { PROCESS_STEPS } from "@/lib/constants";
import AnimateIn from "./ui/AnimateIn";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="From discovery call to certified outcomes"
          subtitle="A predictable four-step process, whether it's a single cohort or a multi-region rollout."
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-4">
          {PROCESS_STEPS.map((item, index) => (
            <AnimateIn key={item.step} delay={index * 0.1} className="relative">
              <div className="flex flex-col gap-4 lg:items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
              {index < PROCESS_STEPS.length - 1 && (
                <div
                  aria-hidden="true"
                  className="absolute top-6 left-full hidden w-10 border-t-2 border-dashed border-brand-200 lg:block"
                />
              )}
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
