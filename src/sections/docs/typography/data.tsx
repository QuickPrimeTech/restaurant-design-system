// @/sections/docs/typography/data.tsx
import React from "react";
import {
  Hero,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Body,
  BodySm,
  BodyLg,
  Caption,
} from "@/components/app/typography";

// Installation snippets
export const installSnippets = [
  {
    filename: "npm",
    code: `npm install @rds/typography`,
  },
  {
    filename: "pnpm",
    code: `pnpm add @rds/typography`,
  },
  {
    filename: "yarn",
    code: `yarn add @rds/typography`,
  },
  {
    filename: "bun",
    code: `bun add @rds/typography`,
  },
];

// Hero example
export const heroCode = (
  <div>
    <Hero>Build with Confidence</Hero>
    <BodyLg className="mt-4 text-muted-foreground">
      A consistent typography system for your design system.
    </BodyLg>
  </div>
);

// Headings example
export const headingCode = (
  <div className="space-y-2">
    <H1>Heading 1</H1>
    <H2>Heading 2</H2>
    <H3>Heading 3</H3>
    <H4>Heading 4</H4>
    <H5>Heading 5</H5>
    <H6>Heading 6</H6>
  </div>
);

// Body example
export const bodyCode = (
  <div className="space-y-2">
    <Body>Body text (base). This is the standard size for paragraphs.</Body>
    <BodySm>Small text. Often used for secondary content or details.</BodySm>
    <BodyLg>Large text. Great for short descriptions or highlights.</BodyLg>
  </div>
);

// Caption example
export const captionCode = (
  <Caption>Muted or caption text. Useful for hints, notes, or labels.</Caption>
);
