// @/layouts/navbar.tsx
"use client";

import Link from "next/link";
import { Github, Search, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { useSidebar } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Navbar() {
  const pathname = usePathname();

  // Only true when inside /docs routes
  const isDocsPage = pathname.startsWith("/docs");
  // Only call useSidebar if we are on /docs
  const { toggleSidebar, state } = useSidebar();

  const isCollapsed = state === "collapsed";

  return (
    <nav className="w-full border-b bg-background sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex gap-6 items-center">
          {/* Sidebar Trigger (only on /docs routes) */}
          {isDocsPage && (
            <TooltipProvider delayDuration={200}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    onClick={toggleSidebar}
                    aria-label="Toggle sidebar"
                  >
                    {isCollapsed ? (
                      <PanelLeftOpen className="h-5 w-5" />
                    ) : (
                      <PanelLeftClose className="h-5 w-5" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  {isCollapsed ? "Open sidebar" : "Close sidebar"}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}

          {/* Logo / Brand */}
          <Link href="/" className="text-xl font-bold tracking-tight">
            RDS
          </Link>
        </div>

        {/* Links */}
        <div className="hidden sm:flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link
            href="/components"
            className="hover:text-primary transition-colors"
          >
            Components
          </Link>
          <Link href="/docs" className="hover:text-primary transition-colors">
            Docs
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full"
            aria-label="Search"
          >
            <Search className="size-5" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full"
            asChild
            aria-label="GitHub Repository"
          >
            <Link
              href="https://github.com/QuickPrimeTech/restaurant-design-system"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="size-5" />
            </Link>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
