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
import { InstallSnippet } from "@/components/common/install-snippet";

export default function TypographyPage() {
  return (
    <div className="space-y-16">
      {/* Page Header */}
      <Header />
      <InstallSnippet installSnippets={installSnippets} />

      {/* Sections */}
      <DocSection
        title="Hero Text"
        description="Large display typography for page introductions and hero sections."
        code={heroCode}
      />

      <DocSection
        title="Headings"
        description="Scalable heading styles (H1–H6) for hierarchy and structure."
        code={headingCode}
      />

      <DocSection
        title="Body Text"
        description="Default body sizes for paragraphs, descriptions, and details."
        code={bodyCode}
      />

      <DocSection
        title="Caption & Muted"
        description="Smaller, muted text for labels, hints, or captions."
        code={captionCode}
      />
    </div>
  );
}
