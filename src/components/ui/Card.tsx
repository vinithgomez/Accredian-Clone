import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ${
        hover ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand-200" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
