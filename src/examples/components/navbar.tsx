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
} from "@/components/app/navbar";

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

// Variants example: logo only
export const logoOnlyCode = (
  <Navbar>
    <NavbarLogo src="/logo.svg" alt="Logo" name="RDS" />
  </Navbar>
);

// Variants example: links only
export const linksOnlyCode = (
  <Navbar>
    <NavbarLinks>
      <NavbarLink href="/">Home</NavbarLink>
      <NavbarLink href="/menu">Menu</NavbarLink>
      <NavbarLink href="/about">About</NavbarLink>
    </NavbarLinks>
  </Navbar>
);

// Variants example: with CTAs
export const withCTAsCode = (
  <Navbar>
    <NavbarLogo src="/logo.svg" alt="Logo" name="RDS" />
    <NavbarCTAs>
      <NavbarCTA href="/reserve">Reserve</NavbarCTA>
      <NavbarCTA href="/order" variant="outline">
        Order Online
      </NavbarCTA>
    </NavbarCTAs>
  </Navbar>
);
