// @/app/docs/typography/page.tsx
"use client";

import { DocSection } from "@/components/common/doc-section";
import { Header } from "@/sections/docs/typography/header";
import {
  installSnippets,
  heroCode,
  headingCode,
  bodyCode,
  captionCode,
} from "@/sections/docs/typography/data";

export default function TypographyPage() {
  return (
    <div className="space-y-16">
      {/* Page Header */}
      <Header />

      {/* Sections */}
      <DocSection
        title="Hero Text"
        description="Large display typography for page introductions and hero sections."
        preview={
          <div>
            <h1 className="text-6xl font-extrabold tracking-tight">
              Build with Confidence
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              A consistent typography system for your design system.
            </p>
          </div>
        }
        installSnippets={installSnippets}
        code={heroCode}
      />

      <DocSection
        title="Headings"
        installSnippets={installSnippets}
        description="Scalable heading styles (H1–H6) for hierarchy and structure."
        preview={
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Heading 1</h1>
            <h2 className="text-3xl font-semibold">Heading 2</h2>
            <h3 className="text-2xl font-semibold">Heading 3</h3>
            <h4 className="text-xl font-medium">Heading 4</h4>
            <h5 className="text-lg font-medium">Heading 5</h5>
            <h6 className="text-base font-medium">Heading 6</h6>
          </div>
        }
        code={headingCode}
      />

      <DocSection
        title="Body Text"
        installSnippets={installSnippets}
        description="Default body sizes for paragraphs, descriptions, and details."
        preview={
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
        }
        code={bodyCode}
      />

      <DocSection
        title="Caption & Muted"
        installSnippets={installSnippets}
        description="Smaller, muted text for labels, hints, or captions."
        preview={
          <p className="text-sm text-muted-foreground">
            Muted or caption text. Useful for hints, notes, or labels.
          </p>
        }
        code={captionCode}
      />
    </div>
  );
}
