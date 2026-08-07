import { ArrowRight, Clock, Users } from "lucide-react";
import { PROGRAMS } from "@/lib/constants";
import AnimateIn from "./ui/AnimateIn";
import Card from "./ui/Card";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

export default function Programs() {
  return (
    <section id="programs" className="bg-slate-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Programs & Solutions"
          title="Training tracks built around real business outcomes"
          subtitle="Every track is customizable — use it as-is or as a starting point for a curriculum mapped to your tech stack."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROGRAMS.map((program, index) => (
            <AnimateIn key={program.title} delay={index * 0.08}>
              <Card className="flex h-full flex-col">
                <h3 className="text-xl font-semibold text-slate-900">{program.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {program.description}
                </p>
                <div className="mt-6 flex items-center gap-4 text-xs font-medium text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {program.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5" />
                    {program.format}
                  </span>
                </div>
                <a
                  href={program.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Card>
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
