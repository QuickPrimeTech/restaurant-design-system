// @/sections/docs/navbar/data.tsx
"use client";

import React from "react";
import {
  Navbar,
  NavbarLogo,
  NavbarLinks,
  NavbarLink,
  NavbarCTAs,
  NavbarCTA,
  NavbarMobile,
} from "@/components/app-ui/navbar";

// Installation snippets
export const installSnippets = [
  {
    filename: "npm",
    code: `npm install @rds/navbar`,
  },
  {
    filename: "pnpm",
    code: `pnpm add @rds/navbar`,
  },
  {
    filename: "yarn",
    code: `yarn add @rds/navbar`,
  },
  {
    filename: "bun",
    code: `bun add @rds/navbar`,
  },
];

// Basic example
export const basicNavbarCode = (
  <Navbar>
    <NavbarLogo src="/logo.svg" alt="Logo" name="RDS" />

    {/* Links + CTAs grouped together */}
    <div className="flex items-center gap-6">
      <NavbarLinks>
        <NavbarLink href="/">Home</NavbarLink>
        <NavbarLink href="/menu">Menu</NavbarLink>
        <NavbarLink href="/about">About</NavbarLink>
        <NavbarLink href="/contact">Contact</NavbarLink>
      </NavbarLinks>
      <NavbarCTAs>
        <NavbarCTA href="/reserve">Reserve</NavbarCTA>
        <NavbarCTA href="/order" variant="outline">
          Order Online
        </NavbarCTA>
      </NavbarCTAs>
    </div>

    <NavbarMobile>
      <NavbarLink href="/">Home</NavbarLink>
      <NavbarLink href="/menu">Menu</NavbarLink>
      <NavbarLink href="/about">About</NavbarLink>
      <NavbarLink href="/contact">Contact</NavbarLink>
      <NavbarCTA href="/reserve">Reserve</NavbarCTA>
      <NavbarCTA href="/order" variant="outline">
        Order Online
      </NavbarCTA>
    </NavbarMobile>
  </Navbar>
);

// Links centered with logo + CTAs
export const centeredLinksNavbar = (
  <Navbar>
    {/* Logo on the left */}
    <NavbarLogo src="/logo.svg" alt="Logo" name="RDS" />

    {/* Centered links */}
    <div className="flex-1 flex justify-center">
      <NavbarLinks>
        <NavbarLink href="/">Home</NavbarLink>
        <NavbarLink href="/menu">Menu</NavbarLink>
        <NavbarLink href="/about">About</NavbarLink>
        <NavbarLink href="/contact">Contact</NavbarLink>
      </NavbarLinks>
    </div>

    {/* CTAs on the right */}
    <NavbarCTAs>
      <NavbarCTA href="/reserve">Reserve</NavbarCTA>
      <NavbarCTA href="/order" variant="outline">
        Order Online
      </NavbarCTA>
    </NavbarCTAs>
  </Navbar>
);

// Links next to Logo on the left, CTAs on the right
export const splitNavbar = (
  <Navbar>
    <div className="flex items-center gap-8">
      <NavbarLogo src="/logo.svg" alt="Logo" name="RDS" />
      <NavbarLinks>
        <NavbarLink href="/">Home</NavbarLink>
        <NavbarLink href="/menu">Menu</NavbarLink>
        <NavbarLink href="/about">About</NavbarLink>
        <NavbarLink href="/contact">Contact</NavbarLink>
      </NavbarLinks>
    </div>
    <NavbarCTAs>
      <NavbarCTA href="/reserve">Reserve</NavbarCTA>
      <NavbarCTA href="/order" variant="outline">
        Order Online
      </NavbarCTA>
    </NavbarCTAs>
  </Navbar>
);

// Underline from left
export const underlineLeftNavbar = (
  <Navbar>
    <NavbarLogo src="/logo.svg" alt="Logo" name="RDS" />
    <NavbarLinks>
      {["Home", "Menu", "About", "Contact"].map((item, i) => (
        <NavbarLink key={i} href={`/${item.toLowerCase()}`}>
          <span className="relative group">
            {item}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
          </span>
        </NavbarLink>
      ))}
    </NavbarLinks>
  </Navbar>
);

// Underline from center
export const underlineCenterNavbar = (
  <Navbar>
    <NavbarLogo src="/logo.svg" alt="Logo" name="RDS" />
    <NavbarLinks>
      {["Home", "Menu", "About", "Contact"].map((item, i) => (
        <NavbarLink key={i} href={`/${item.toLowerCase()}`}>
          <span className="relative group">
            {item}
            <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-primary transition-all group-hover:w-full group-hover:left-0" />
          </span>
        </NavbarLink>
      ))}
    </NavbarLinks>
  </Navbar>
);

// Highlight background on hover
export const highlightNavbar = (
  <Navbar>
    <NavbarLogo src="/logo.svg" alt="Logo" name="RDS" />
    <NavbarLinks>
      {["Home", "Menu", "About", "Contact"].map((item, i) => (
        <NavbarLink key={i} href={`/${item.toLowerCase()}`}>
          <span className="relative px-2 py-1 group">
            {item}
            <span className="absolute inset-0 rounded-md bg-primary/10 scale-0 group-hover:scale-100 transition-transform" />
          </span>
        </NavbarLink>
      ))}
    </NavbarLinks>
  </Navbar>
);

export const gradientUnderlineNavbar = (
  <Navbar>
    <NavbarLogo src="/logo.svg" alt="Logo" name="RDS" />
    <NavbarLinks>
      {["Home", "Menu", "About", "Contact"].map((item, i) => (
        <NavbarLink key={i} href={`/${item.toLowerCase()}`}>
          <span className="relative group">
            {item}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 transition-all group-hover:w-full" />
          </span>
        </NavbarLink>
      ))}
    </NavbarLinks>
  </Navbar>
);
