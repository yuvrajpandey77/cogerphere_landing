"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type ReadMoreProps = {
  total: number;
  limit?: number;
  className?: string;
  children: (visibleCount: number) => React.ReactNode;
};

export function ReadMore({ total, limit = 2, className, children }: ReadMoreProps) {
  const [expanded, setExpanded] = useState(false);
  const needsToggle = total > limit;
  const visibleCount = expanded || !needsToggle ? total : limit;

  return (
    <div className={className}>
      {children(visibleCount)}
      {needsToggle && (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800 transition-colors"
        >
          {expanded ? "Show less" : "Read more"}
          <ChevronDown
            className={cn("h-4 w-4 transition-transform duration-200", expanded && "rotate-180")}
          />
        </button>
      )}
    </div>
  );
}
