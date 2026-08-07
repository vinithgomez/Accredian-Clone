import { TRUSTED_BY_LOGOS } from "@/lib/constants";
import Container from "./ui/Container";

export default function LogoStrip() {
  return (
    <section className="border-y border-slate-100 bg-white py-10">
      <Container>
        <p className="text-center text-sm font-semibold uppercase tracking-wide text-slate-400">
          Trusted by learning teams at
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {TRUSTED_BY_LOGOS.map((logo) => (
            <span
              key={logo.name}
              className="text-xl font-bold text-slate-300 grayscale transition-colors hover:text-slate-500"
            >
              {logo.name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
