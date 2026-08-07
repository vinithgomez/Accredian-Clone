import { ArrowRight } from "lucide-react";
import AnimateIn from "./ui/AnimateIn";
import Button from "./ui/Button";
import Container from "./ui/Container";

export default function CtaBanner() {
  return (
    <section className="bg-gradient-to-br from-brand-600 to-brand-900 py-20">
      <Container>
        <AnimateIn className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to upskill your team?
          </h2>
          <p className="text-lg text-brand-50">
            Talk to our enterprise team about a curriculum built around your goals — no
            long-term commitment required to get started.
          </p>
          <Button href="#contact" variant="outline" size="lg">
            Talk to Us
            <ArrowRight className="h-4 w-4" />
          </Button>
        </AnimateIn>
      </Container>
    </section>
  );
}
