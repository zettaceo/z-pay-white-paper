import { cn } from "@/lib/utils";

interface ChipProps {
  children: React.ReactNode;
  className?: string;
}

export function Chip({ children, className }: ChipProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-[7px] text-[11px] font-black tracking-[.13em] uppercase mb-2.5",
        className
      )}
      style={{ color: "var(--color-accent)" }}
    >
      <span
        className="block w-4 h-px"
        style={{ background: "var(--color-accent)" }}
      />
      {children}
    </div>
  );
}
