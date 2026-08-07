"use client";

import type { FormEvent } from "react";
import Button from "./ui/Button";

export default function NewsletterForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form className="mt-4 flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        placeholder="you@company.com"
        className="w-full rounded-full border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-brand-500 focus:outline-none"
      />
      <Button type="submit" variant="secondary" size="sm" className="shrink-0">
        Subscribe
      </Button>
    </form>
  );
}
