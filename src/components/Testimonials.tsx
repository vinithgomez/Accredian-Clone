import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import AnimateIn from "./ui/AnimateIn";
import Card from "./ui/Card";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Success Stories"
          title="What L&D and people leaders say about working with us"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <AnimateIn key={testimonial.name} delay={index * 0.1}>
              <Card hover={false} className="flex h-full flex-col bg-white">
                <Quote className="h-8 w-8 text-brand-200" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-xs text-slate-500">
                    {testimonial.designation}, {testimonial.company}
                  </p>
                </div>
              </Card>
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
