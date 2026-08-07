import { IMPACT_STATS } from "@/lib/constants";
import AnimateIn from "./ui/AnimateIn";
import Container from "./ui/Container";

export default function Stats() {
  return (
    <section className="bg-brand-900 py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {IMPACT_STATS.map((stat, index) => (
            <AnimateIn key={stat.label} delay={index * 0.08} className="text-center">
              <p className="text-3xl font-bold text-white sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-brand-100">{stat.label}</p>
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
