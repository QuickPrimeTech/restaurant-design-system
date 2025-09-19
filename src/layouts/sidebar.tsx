"use client";

import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const navItems = [
  {
    section: "Getting Started",
    items: [{ label: "Introduction", href: "/components" }],
  },
  {
    section: "UI Components",
    items: [
      { label: "Button", href: "/components/button" },
      { label: "Card", href: "/components/card" },
      { label: "Navbar", href: "/components/navbar" },
      { label: "Typography", href: "/components/typography" },
      { label: "Forms", href: "/components/forms" },
    ],
  },
];

export default function Sidebar({ current }: { current?: string }) {
  return (
    <div className="w-64 border-r bg-background">
      <ScrollArea className="h-screen px-4 py-6">
        <div className="space-y-8">
          {navItems.map((group) => (
            <div key={group.section} className="space-y-2">
              <h4 className="px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {group.section}
              </h4>
              <div className="flex flex-col gap-1">
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm transition-colors hover:bg-muted",
                      current === item.href
                        ? "bg-muted font-semibold text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
