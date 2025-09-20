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

import {
  Navbar,
  NavbarLogo,
  NavbarLinks,
  NavbarLink,
  NavbarCTAs,
  NavbarMobile,
  NavbarMobileTrigger,
  NavbarMobileContent,
  NavbarMobileHeader,
  NavbarMobileDescription,
} from "@/components/app/navbar";
import { Card } from "@/components/ui/card";

export default function AppNavbar() {
  const pathname = usePathname();
  const showSidebarTrigger = pathname !== "/";

  // only safe to call if inside /docs
  const { toggleSidebar, state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Navbar className="border-b bg-background">
      <div className="flex items-center gap-6">
        {/* Sidebar Trigger (only on /docs routes) */}
        {showSidebarTrigger && (
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
                    <PanelLeftOpen className="size-5" />
                  ) : (
                    <PanelLeftClose className="size-5" />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                {isCollapsed ? "Open sidebar" : "Close sidebar"}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}

        {/* Logo */}
        <NavbarLogo
          src="/logo.svg"
          alt="Restaurant Design System Logo"
          name="RDS"
        />
      </div>

      {/* Desktop Links */}
      <NavbarLinks>
        <NavbarLink href="/">Home</NavbarLink>
        <NavbarLink href="/components">Components</NavbarLink>
        <NavbarLink href="/docs">Docs</NavbarLink>
      </NavbarLinks>

      {/* CTAs */}
      <NavbarCTAs>
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
      </NavbarCTAs>

      {/* Mobile Menu */}
      <NavbarMobile>
        <NavbarMobileTrigger />
        <NavbarMobileContent>
          <NavbarMobileHeader>
            <NavbarLogo
              src="/logo.svg"
              alt="Restaurant Design System Logo"
              name="RDS"
            />
          </NavbarMobileHeader>
          <NavbarMobileDescription>
            A modular restaurant design system.
          </NavbarMobileDescription>

          <div className="flex flex-col gap-2 mt-6">
            <NavbarLink href="/">Home</NavbarLink>
            <NavbarLink href="/components">Components</NavbarLink>
            <NavbarLink href="/docs">Docs</NavbarLink>
          </div>

          <Card className="flex gap-2 mt-6">
            <Button
              asChild
              variant="secondary"
              size="icon"
              className="rounded-full"
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
          </Card>
        </NavbarMobileContent>
      </NavbarMobile>
    </Navbar>
  );
}
