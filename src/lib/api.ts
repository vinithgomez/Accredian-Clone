import type { LeadApiResponse, LeadFormData } from "./types";

export async function submitLead(data: LeadFormData): Promise<LeadApiResponse> {
  const res = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const body = (await res.json()) as LeadApiResponse;

  if (!res.ok) {
    throw new Error(body.message || "Something went wrong. Please try again.");
  }

  return body;
}
