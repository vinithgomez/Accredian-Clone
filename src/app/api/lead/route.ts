import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";
import type { LeadFormData } from "@/lib/types";
import { validateLeadForm } from "@/lib/validation";

interface StoredLead extends LeadFormData {
  submittedAt: string;
}

// In-memory store. Resets on every cold start / deploy — fine for a demo,
// but a real deployment should persist to Postgres/Supabase instead.
const leads: StoredLead[] = [];

const DATA_FILE = path.join(process.cwd(), "data", "leads.json");

async function persistToDisk(lead: StoredLead) {
  try {
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    let existing: StoredLead[] = [];
    try {
      const raw = await fs.readFile(DATA_FILE, "utf-8");
      existing = JSON.parse(raw) as StoredLead[];
    } catch {
      existing = [];
    }
    existing.push(lead);
    await fs.writeFile(DATA_FILE, JSON.stringify(existing, null, 2), "utf-8");
  } catch {
    // Read-only filesystem (e.g. serverless deployments) — the in-memory
    // store above still captured this submission for the current instance.
  }
}

export async function POST(request: Request) {
  let body: LeadFormData;

  try {
    body = (await request.json()) as LeadFormData;
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  const errors = validateLeadForm(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { success: false, message: "Please correct the highlighted fields." },
      { status: 400 },
    );
  }

  const lead: StoredLead = { ...body, submittedAt: new Date().toISOString() };
  leads.push(lead);
  await persistToDisk(lead);

  return NextResponse.json(
    { success: true, message: "Thanks! Our enterprise team will reach out within one business day." },
    { status: 201 },
  );
}

export async function GET() {
  return NextResponse.json({ count: leads.length, leads });
}
