import {
  BadgeCheck,
  CalendarClock,
  LayoutTemplate,
  UserCheck,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  "layout-template": LayoutTemplate,
  "user-check": UserCheck,
  "badge-check": BadgeCheck,
  "calendar-clock": CalendarClock,
};

interface IconProps {
  name: string;
  className?: string;
}

export default function Icon({ name, className = "h-6 w-6" }: IconProps) {
  const LucideIconComponent = ICON_MAP[name] ?? LayoutTemplate;
  return <LucideIconComponent className={className} aria-hidden="true" />;
}
