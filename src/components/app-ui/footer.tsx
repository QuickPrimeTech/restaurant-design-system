// @/components/app-ui/footer.tsx
"use client";

import { cn } from "@/lib/utils";

//
// Root
//
export function Footer({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <footer className={cn("bg-card border-t border-border", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </footer>
  );
}
Footer.displayName = "Footer";

//
// Sections
//
export function FooterSection({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return <div className={cn("py-16", className)}>{children}</div>;
}
FooterSection.displayName = "FooterSection";

export function FooterGrid({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn("grid gap-12 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {children}
    </div>
  );
}
FooterGrid.displayName = "FooterGrid";

//
// Brand
//
export function FooterBrand({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return <div className={cn(className)}>{children}</div>;
}
FooterBrand.displayName = "FooterBrand";

//
// Heading
//
export function FooterHeading({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <h3
      className={cn(
        "font-cinzel font-semibold text-foreground mb-6",
        className
      )}
    >
      {children}
    </h3>
  );
}
FooterHeading.displayName = "FooterHeading";

//
// Links
//
export function FooterLinks({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return <ul className={cn("space-y-3", className)}>{children}</ul>;
}
FooterLinks.displayName = "FooterLinks";

export function FooterLink({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <li
      className={cn(
        "text-muted-foreground hover:text-primary transition-colors font-chivo",
        className
      )}
    >
      {children}
    </li>
  );
}
FooterLink.displayName = "FooterLink";

//
// QR Code / Card wrapper
//
export function FooterCard({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        "bg-background border border-border rounded-lg p-4 text-center",
        className
      )}
    >
      {children}
    </div>
  );
}
FooterCard.displayName = "FooterCard";

//
// Newsletter / CTA
//
export function FooterCTA({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn("text-center border-t border-border py-12", className)}>
      {children}
    </div>
  );
}
FooterCTA.displayName = "FooterCTA";

//
// Bottom Row
//
export function FooterBottom({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        "border-t border-border py-8 flex flex-col md:flex-row justify-between items-center gap-6",
        className
      )}
    >
      {children}
    </div>
  );
}
FooterBottom.displayName = "FooterBottom";

export function FooterLegal({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return <div className={cn("flex space-x-6", className)}>{children}</div>;
}
FooterLegal.displayName = "FooterLegal";

export function FooterSocial({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return <div className={cn("flex space-x-4", className)}>{children}</div>;
}
FooterSocial.displayName = "FooterSocial";
