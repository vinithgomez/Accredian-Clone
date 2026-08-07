export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLinkColumn {
  heading: string;
  links: NavLink[];
}

export interface ValueProp {
  icon: string;
  title: string;
  description: string;
}

export interface Program {
  title: string;
  description: string;
  duration: string;
  format: string;
  href: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  company: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface CompanyLogo {
  name: string;
}

export interface LeadFormData {
  name: string;
  workEmail: string;
  companyName: string;
  phone: string;
  message: string;
}

export type LeadFormErrors = Partial<Record<keyof LeadFormData, string>>;

export interface LeadApiResponse {
  success: boolean;
  message: string;
}
