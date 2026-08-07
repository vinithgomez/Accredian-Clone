import type { LeadFormData, LeadFormErrors } from "./types";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9+()\-\s]{7,20}$/;

export function validateLeadForm(data: LeadFormData): LeadFormErrors {
  const errors: LeadFormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!data.workEmail.trim()) {
    errors.workEmail = "Work email is required.";
  } else if (!EMAIL_REGEX.test(data.workEmail.trim())) {
    errors.workEmail = "Enter a valid email address.";
  }

  if (!data.companyName.trim()) {
    errors.companyName = "Company name is required.";
  }

  if (!data.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!PHONE_REGEX.test(data.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
  }

  return errors;
}
