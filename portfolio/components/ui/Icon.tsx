import {
  ChartColumnBig,
  Cloud,
  CodeXml,
  Database,
  Server,
  Terminal,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { IconName } from "@/types";

const icons: Record<IconName, LucideIcon> = {
  database: Database,
  workflow: Workflow,
  cloud: Cloud,
  code: CodeXml,
  chart: ChartColumnBig,
  server: Server,
  terminal: Terminal,
};

export function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const LucideComponent = icons[name];
  return <LucideComponent className={className} aria-hidden />;
}
