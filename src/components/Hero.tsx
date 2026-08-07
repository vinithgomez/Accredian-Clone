import { ArrowRight, PlayCircle } from "lucide-react";
import { HERO_STATS } from "@/lib/constants";
import AnimateIn from "./ui/AnimateIn";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import Container from "./ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 to-white pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-brand-100/60 blur-3xl"
      />
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <AnimateIn>
            <Badge>For L&D and People Leaders</Badge>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Upskill your workforce with programs built for{" "}
              <span className="text-brand-600">your business</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-600">
              Accredian Enterprise partners with L&D teams to design cohort-based training
              in data, AI, product, and leadership — mapped to the skills gaps that matter
              to your roadmap, not a generic syllabus.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="#contact" size="lg">
                Request a Demo
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#how-it-works" variant="ghost" size="lg">
                <PlayCircle className="h-4 w-4" />
                See How It Works
              </Button>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-slate-200 pt-8">
              {HERO_STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-2xl font-bold text-slate-900 sm:text-3xl">{stat.value}</dd>
                  <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
                </div>
              ))}
            </dl>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <div className="relative mx-auto aspect-4/3 w-full max-w-lg overflow-hidden rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-600 to-brand-900 shadow-2xl shadow-brand-900/20">
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white">
                    Cohort Dashboard
                  </span>
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                </div>
                <div className="space-y-3">
                  <div className="h-2.5 w-3/4 rounded-full bg-white/25" />
                  <div className="h-2.5 w-1/2 rounded-full bg-white/25" />
                  <div className="h-2.5 w-2/3 rounded-full bg-white/25" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {["94%", "12wk", "A+"].map((value) => (
                    <div key={value} className="rounded-xl bg-white/10 p-3 text-center">
                      <p className="text-lg font-bold text-white">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </Container>
    </section>
  );
}
