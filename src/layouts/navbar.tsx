// @/layouts/navbar.tsx

"use client";

import Link from "next/link";
import { Github, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-background sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Brand */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          RDS
        </Link>

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
              href="https://github.com/your-username/restaurant-design-system"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="size-5" />
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
