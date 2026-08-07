import type { SVGProps } from "react";
import { FOOTER_LINKS, SITE_NAME } from "@/lib/constants";
import Container from "./ui/Container";
import NewsletterForm from "./NewsletterForm";

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1 1.84-2.06 3.79-2.06 4.06 0 4.81 2.67 4.81 6.14V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9Z" />
    </svg>
  );
}

function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.4 7.1c.01.18.01.36.01.54 0 5.48-4.17 11.8-11.8 11.8-2.35 0-4.53-.68-6.36-1.87.33.04.65.05.99.05a8.32 8.32 0 0 0 5.15-1.77 4.16 4.16 0 0 1-3.88-2.88c.26.04.52.07.79.07.38 0 .75-.05 1.1-.14a4.15 4.15 0 0 1-3.33-4.07v-.05c.56.31 1.2.5 1.88.52a4.14 4.14 0 0 1-1.85-3.46c0-.76.2-1.47.56-2.08a11.8 11.8 0 0 0 8.55 4.34 4.68 4.68 0 0 1-.1-.95 4.15 4.15 0 0 1 7.18-2.84 8.16 8.16 0 0 0 2.63-1 4.16 4.16 0 0 1-1.82 2.3 8.3 8.3 0 0 0 2.39-.65 8.9 8.9 0 0 1-2.09 2.14Z" />
    </svg>
  );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5H16l.5-3.5h-3V7.9c0-1 .3-1.7 1.7-1.7H16.6V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.7H7v3.5h2.9V21h3.6Z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { icon: LinkedinIcon, label: "LinkedIn", href: "#" },
  { icon: TwitterIcon, label: "Twitter", href: "#" },
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: InstagramIcon, label: "Instagram", href: "#" },
];

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-slate-800 bg-slate-900 text-slate-300">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-6">
          <div className="sm:col-span-2 lg:col-span-2">
            <a href="#" className="flex items-center gap-2 text-lg font-bold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-sm text-white">
                A
              </span>
              {SITE_NAME}
            </a>
            <p className="mt-4 max-w-xs text-sm text-slate-400">
              Corporate upskilling programs that turn learning into measurable business
              outcomes, delivered in partnership with your L&D team.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map(({ icon: SocialIcon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-colors hover:border-brand-500 hover:text-brand-500"
                >
                  <SocialIcon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {FOOTER_LINKS.map((column) => (
            <div
              key={column.heading}
              id={column.heading === "Resources" ? "resources" : undefined}
            >
              <h3 className="text-sm font-semibold text-white">{column.heading}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-sm font-semibold text-white">Stay in the loop</h3>
            <p className="mt-4 text-sm text-slate-400">
              Occasional updates on new programs and enterprise L&D research. No spam.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">Built as a technical assignment submission.</p>
        </div>
      </Container>
    </footer>
  );
}
