// @/components/app-ui/typography.tsx
import { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type TypographyProps = {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLElement>;

// Hero
export const Hero = ({ children, className, ...props }: TypographyProps) => (
  <h1
    className={cn("text-6xl font-extrabold tracking-tight", className)}
    {...props}
  >
    {children}
  </h1>
);

// Headings
export const H1 = ({ children, className, ...props }: TypographyProps) => (
  <h1 className={cn("text-4xl font-bold", className)} {...props}>
    {children}
  </h1>
);

export const H2 = ({ children, className, ...props }: TypographyProps) => (
  <h2 className={cn("text-3xl font-semibold", className)} {...props}>
    {children}
  </h2>
);

export const H3 = ({ children, className, ...props }: TypographyProps) => (
  <h3 className={cn("text-2xl font-semibold", className)} {...props}>
    {children}
  </h3>
);

export const H4 = ({ children, className, ...props }: TypographyProps) => (
  <h4 className={cn("text-xl font-medium", className)} {...props}>
    {children}
  </h4>
);

export const H5 = ({ children, className, ...props }: TypographyProps) => (
  <h5 className={cn("text-lg font-medium", className)} {...props}>
    {children}
  </h5>
);

export const H6 = ({ children, className, ...props }: TypographyProps) => (
  <h6 className={cn("text-base font-medium", className)} {...props}>
    {children}
  </h6>
);

// Body text variants
export const Body = ({ children, className, ...props }: TypographyProps) => (
  <p className={cn("text-base", className)} {...props}>
    {children}
  </p>
);

export const BodySm = ({ children, className, ...props }: TypographyProps) => (
  <p className={cn("text-sm", className)} {...props}>
    {children}
  </p>
);

export const BodyLg = ({ children, className, ...props }: TypographyProps) => (
  <p className={cn("text-lg", className)} {...props}>
    {children}
  </p>
);

// Caption / Muted
export const Caption = ({ children, className, ...props }: TypographyProps) => (
  <p className={cn("text-sm text-muted-foreground", className)} {...props}>
    {children}
  </p>
);

/* -------------------
   Add display names
------------------- */
Hero.displayName = "Hero";
H1.displayName = "H1";
H2.displayName = "H2";
H3.displayName = "H3";
H4.displayName = "H4";

H5.displayName = "H5";
H6.displayName = "H6";
Body.displayName = "Body";
BodySm.displayName = "BodySm";
BodyLg.displayName = "BodyLg";
Caption.displayName = "Caption";
