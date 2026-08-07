"use client";

import { CheckCircle2, Loader2, ShieldCheck } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { submitLead } from "@/lib/api";
import type { LeadFormData, LeadFormErrors } from "@/lib/types";
import { validateLeadForm } from "@/lib/validation";
import AnimateIn from "./ui/AnimateIn";
import Button from "./ui/Button";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

const INITIAL_FORM: LeadFormData = {
  name: "",
  workEmail: "",
  companyName: "",
  phone: "",
  message: "",
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

const FIELD_LABELS: Record<keyof Omit<LeadFormData, "message">, string> = {
  name: "Full Name",
  workEmail: "Work Email",
  companyName: "Company Name",
  phone: "Phone Number",
};

export default function LeadForm() {
  const [formData, setFormData] = useState<LeadFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<LeadFormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof LeadFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validationErrors = validateLeadForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    setErrors({});

    try {
      const response = await submitLead(formData);
      setStatus("success");
      setStatusMessage(response.message);
      setFormData(INITIAL_FORM);
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <section id="contact" className="py-20 sm:py-28">
        <Container>
          <div className="mx-auto flex max-w-lg flex-col items-center gap-4 rounded-2xl border border-green-100 bg-green-50 p-10 text-center">
            <CheckCircle2 className="h-12 w-12 text-green-600" />
            <h2 className="text-xl font-semibold text-slate-900">Request received</h2>
            <p className="text-sm text-slate-600">{statusMessage}</p>
            <Button variant="secondary" size="sm" onClick={() => setStatus("idle")}>
              Submit another request
            </Button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <AnimateIn>
            <SectionHeading
              align="left"
              eyebrow="Contact"
              title="Talk to our enterprise team"
              subtitle="Tell us about your team's goals and we'll come back with a proposed curriculum and timeline within one business day."
            />
            <div className="mt-8 flex items-center gap-3 text-sm text-slate-500">
              <ShieldCheck className="h-5 w-5 text-brand-600" />
              We never share your details with third parties.
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              {(Object.keys(FIELD_LABELS) as Array<keyof typeof FIELD_LABELS>).map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="text-sm font-medium text-slate-700">
                    {FIELD_LABELS[field]}
                  </label>
                  <input
                    id={field}
                    name={field}
                    type={field === "workEmail" ? "email" : field === "phone" ? "tel" : "text"}
                    value={formData[field]}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors[field])}
                    aria-describedby={errors[field] ? `${field}-error` : undefined}
                    className={`mt-1.5 w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 ${
                      errors[field] ? "border-red-400" : "border-slate-300 focus:border-brand-500"
                    }`}
                  />
                  {errors[field] && (
                    <p id={`${field}-error`} className="mt-1.5 text-xs text-red-600">
                      {errors[field]}
                    </p>
                  )}
                </div>
              ))}

              <div>
                <label htmlFor="message" className="text-sm font-medium text-slate-700">
                  Message / Requirement <span className="text-slate-400">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Team size, skills you're targeting, timeline..."
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
                />
              </div>

              {status === "error" && (
                <p role="alert" className="text-sm text-red-600">
                  {statusMessage}
                </p>
              )}

              <Button type="submit" size="lg" disabled={status === "loading"} className="w-full">
                {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
                {status === "loading" ? "Submitting..." : "Request a Demo"}
              </Button>
            </form>
          </AnimateIn>
        </div>
      </Container>
    </section>
  );
}
