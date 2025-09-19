// First, install the helper library if you haven't:
// npm install react-element-to-jsx-string

import React from "react";
import jsxToString from "react-element-to-jsx-string";
import { CodeSnippet } from "@/types/code-snippet";

// Installation snippets as JSX
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
// Hero code
const heroJSX = (
  <div>
    <h1 className="text-6xl font-extrabold tracking-tight">
      Build with Confidence
    </h1>
    <p className="mt-4 text-xl text-muted-foreground">
      A consistent typography system for your design system.
    </p>
  </div>
);

export const heroCode: CodeSnippet[] = [
  {
    language: "tsx",
    filename: "Hero.tsx",
    code: jsxToString(heroJSX),
  },
];

// Headings
const headingsJSX = (
  <div className="space-y-2">
    <h1 className="text-4xl font-bold">Heading 1</h1>
    <h2 className="text-3xl font-semibold">Heading 2</h2>
    <h3 className="text-2xl font-semibold">Heading 3</h3>
    <h4 className="text-xl font-medium">Heading 4</h4>
    <h5 className="text-lg font-medium">Heading 5</h5>
    <h6 className="text-base font-medium">Heading 6</h6>
  </div>
);

export const headingCode: CodeSnippet[] = [
  {
    language: "tsx",
    filename: "Headings.tsx",
    code: jsxToString(headingsJSX),
  },
];

// Body
const bodyJSX = (
  <div className="space-y-2">
    <p className="text-base">
      Body text (base). This is the standard size for paragraphs.
    </p>
    <p className="text-sm">
      Small text. Often used for secondary content or details.
    </p>
    <p className="text-lg">
      Large text. Great for short descriptions or highlights.
    </p>
  </div>
);

export const bodyCode: CodeSnippet[] = [
  {
    language: "tsx",
    filename: "Body.tsx",
    code: jsxToString(bodyJSX),
  },
];

// Caption
const captionJSX = (
  <p className="text-sm text-muted-foreground">
    Muted or caption text. Useful for hints, notes, or labels.
  </p>
);

export const captionCode: CodeSnippet[] = [
  {
    language: "tsx",
    filename: "Caption.tsx",
    code: jsxToString(captionJSX),
  },
];
