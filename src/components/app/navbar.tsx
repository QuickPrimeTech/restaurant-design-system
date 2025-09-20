// @/components/app/navbar.tsx

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

type NavbarContextType = {
  isScrolled: boolean;
  isHome: boolean;
};

const NavbarContext = React.createContext<NavbarContextType | null>(null);

export function useNavbar() {
  const ctx = React.useContext(NavbarContext);
  if (!ctx) throw new Error("useNavbar must be used within <Navbar>");
  return ctx;
}

export function Navbar({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const isHome =
    typeof window !== "undefined" && window.location.pathname === "/";

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavbarContext.Provider value={{ isScrolled, isHome }}>
      <nav
        className={cn(
          "sticky container px-4 mx-auto py-3 top-0 w-full z-50 transition-all duration-300",
          className
        )}
      >
        <div className="flex items-center justify-between h-16 section-x">
          {children}
        </div>
      </nav>
    </NavbarContext.Provider>
  );
}

export function NavbarLogo({
  src,
  alt,
  name,
}: {
  src: string;
  alt: string;
  name?: string;
}) {
  return (
    <Link href="/" className="flex items-center space-x-3">
      <div className="relative w-10 h-10 rounded-full ring-2 ring-primary">
        <Image fill src={src} alt={alt} className="object-cover" />
      </div>
      {name && (
        <span className="font-serif text-xl font-bold text-primary">
          {name}
        </span>
      )}
    </Link>
  );
}

export function NavbarLinks({ children }: React.PropsWithChildren) {
  return (
    <div className="hidden lg:flex items-center space-x-6">{children}</div>
  );
}

export function NavbarLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { isScrolled, isHome } = useNavbar();

  return (
    <Link
      href={href}
      className={cn(
        "hover:text-primary transition-colors font-medium",
        pathname === href && "text-primary",
        isHome && !isScrolled ? "text-white" : "text-muted-foreground"
      )}
    >
      {children}
    </Link>
  );
}

export function NavbarCTAs({ children }: React.PropsWithChildren) {
  return (
    <div className="hidden lg:flex items-center space-x-3">{children}</div>
  );
}

export function NavbarCTA({
  href,
  children,
  variant = "default",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "outline";
}) {
  return (
    <Button variant={variant} className="text-sm" asChild>
      <Link href={href}>{children}</Link>
    </Button>
  );
}

export function NavbarMobile({
  side = "right",
  children,
}: {
  side?: "left" | "right";
  children?: React.ReactNode;
}) {
  const { isScrolled, isHome } = useNavbar();

  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              isHome && !isScrolled ? "text-white" : "text-foreground",
              "focus-visible:ring-0"
            )}
          >
            <Menu className="size-6" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side={side}
          className="w-3/4 md:w-1/2 flex flex-col gap-2 px-4 pt-10 section-x section-y rounded-l-2xl"
        >
          {children}
        </SheetContent>
      </Sheet>
    </div>
  );
}

export function NavbarMobileTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { isScrolled, isHome } = useNavbar();

  return (
    <SheetTrigger asChild>
      <Button
        variant="ghost"
        size="icon"
        aria-label="Open navigation menu"
        className={cn(
          isHome && !isScrolled ? "text-white" : "text-foreground",
          "focus-visible:ring-0",
          className
        )}
        {...props}
      >
        {children ?? <Menu className="size-6" />}
      </Button>
    </SheetTrigger>
  );
}

export function NavbarMobileContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SheetContent>) {
  return (
    <SheetContent
      className={cn(
        "w-3/4 md:w-1/2 flex flex-col gap-2 px-4 pt-10 section-x section-y rounded-l-2xl",
        className
      )}
      {...props}
    >
      {children}
    </SheetContent>
  );
}

// Mobile sheet header (logo + name + optional description)
export function NavbarMobileHeader({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SheetTitle>) {
  return (
    <SheetTitle
      className={cn(
        "flex items-center gap-3 font-semibold text-lg text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </SheetTitle>
  );
}

// Optional description (subtitle under logo/name)
export function NavbarMobileDescription({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SheetDescription>) {
  return (
    <SheetDescription
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    >
      {children}
    </SheetDescription>
  );
}

/* -------------------
   Add display names
------------------- */
Navbar.displayName = "Navbar";
NavbarLogo.displayName = "NavbarLogo";
NavbarLinks.displayName = "NavbarLinks";
NavbarLink.displayName = "NavbarLink";
NavbarCTAs.displayName = "NavbarCTAs";
NavbarCTA.displayName = "NavbarCTA";
NavbarMobile.displayName = "NavbarMobile";
NavbarMobileTrigger.displayName = "NavbarMobileTrigger";
NavbarMobileContent.displayName = "NavbarMobileContent";
NavbarMobileHeader.displayName = "NavbarMobileHeader";
NavbarMobileDescription.displayName = "NavbarMobileDescription";
