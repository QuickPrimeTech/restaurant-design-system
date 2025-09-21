// @/app/docs/colors/page.tsx
"use client";

import { BodyLg, H1 } from "@/components/app-ui/typography";
import { DocSection } from "@/components/common/doc-section";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useState } from "react";

const tokens = {
  base: [
    { name: "Background", token: "background", desc: "Main app background" },
    { name: "Foreground", token: "foreground", desc: "Default text color" },
    { name: "Border", token: "border", desc: "UI borders and dividers" },
    { name: "Input", token: "input", desc: "Input field backgrounds" },
    { name: "Ring", token: "ring", desc: "Focus ring for inputs/buttons" },
  ],
  semantic: [
    { name: "Primary", token: "primary", desc: "Brand / primary actions" },
    {
      name: "Primary Foreground",
      token: "primary-foreground",
      desc: "Text/icons on primary",
    },
    { name: "Secondary", token: "secondary", desc: "Secondary surfaces" },
    {
      name: "Secondary Foreground",
      token: "secondary-foreground",
      desc: "Text/icons on secondary",
    },
    { name: "Accent", token: "accent", desc: "Highlights & accents" },
    {
      name: "Accent Foreground",
      token: "accent-foreground",
      desc: "Text/icons on accents",
    },
    { name: "Muted", token: "muted", desc: "Subtle backgrounds" },
    {
      name: "Muted Foreground",
      token: "muted-foreground",
      desc: "Muted text / captions",
    },
    {
      name: "Destructive",
      token: "destructive",
      desc: "Errors & danger states",
    },
  ],
  surfaces: [
    { name: "Card", token: "card", desc: "Card backgrounds" },
    {
      name: "Card Foreground",
      token: "card-foreground",
      desc: "Text/icons on cards",
    },
    { name: "Popover", token: "popover", desc: "Popover / dropdowns" },
    {
      name: "Popover Foreground",
      token: "popover-foreground",
      desc: "Text/icons on popovers",
    },
  ],
  charts: [
    { name: "Chart 1", token: "chart-1", desc: "Data visualization color 1" },
    { name: "Chart 2", token: "chart-2", desc: "Data visualization color 2" },
    { name: "Chart 3", token: "chart-3", desc: "Data visualization color 3" },
    { name: "Chart 4", token: "chart-4", desc: "Data visualization color 4" },
    { name: "Chart 5", token: "chart-5", desc: "Data visualization color 5" },
  ],
  sidebar: [
    { name: "Sidebar", token: "sidebar", desc: "Sidebar background" },
    {
      name: "Sidebar Foreground",
      token: "sidebar-foreground",
      desc: "Sidebar text/icons",
    },
    {
      name: "Sidebar Primary",
      token: "sidebar-primary",
      desc: "Primary actions in sidebar",
    },
    {
      name: "Sidebar Primary Foreground",
      token: "sidebar-primary-foreground",
      desc: "Text/icons on primary",
    },
    {
      name: "Sidebar Accent",
      token: "sidebar-accent",
      desc: "Accent surfaces in sidebar",
    },
    {
      name: "Sidebar Accent Foreground",
      token: "sidebar-accent-foreground",
      desc: "Text/icons on accent",
    },
    {
      name: "Sidebar Border",
      token: "sidebar-border",
      desc: "Sidebar borders",
    },
    {
      name: "Sidebar Ring",
      token: "sidebar-ring",
      desc: "Focus rings in sidebar",
    },
  ],
};

// Simple reusable block
function ColorToken({
  name,
  token,
  desc,
}: {
  name: string;
  token: string;
  desc: string;
}) {
  const [, setCopied] = useState(false);
  const value = `var(--${token})`;

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex items-center gap-3 rounded-xl border p-3">
      {/* Color Swatch */}
      <div
        className="h-10 w-10 rounded-lg border"
        style={{ backgroundColor: value }}
      />
      <div className="flex-1">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-muted-foreground">{desc}</p>
        <code className="text-xs text-muted-foreground">--{token}</code>
      </div>
      <Button
        size="icon"
        variant="ghost"
        onClick={copyToClipboard}
        className="shrink-0"
      >
        <Copy className="h-4 w-4" />
      </Button>
    </div>
  );
}

export default function ColorsPage() {
  return (
    <div className="space-y-16">
      <header className="space-y-2">
        <H1 className="font-extrabold">Colors</H1>
        <BodyLg className="text-muted-foreground">
          Design tokens that define the visual identity of the system. Each
          token has a clear purpose: background, text, borders, accents,
          semantic states, or charts.
        </BodyLg>
      </header>

      {/* Base Colors */}
      <DocSection
        title="Base Colors"
        description="Foundational colors for backgrounds, text, borders, inputs, and focus rings."
        code={
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tokens.base.map((t) => (
              <ColorToken key={t.token} {...t} />
            ))}
          </div>
        }
      />

      {/* Semantic */}
      <DocSection
        title="Semantic Colors"
        description="Brand, secondary, accents, muted tones, and destructive states."
        code={
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tokens.semantic.map((t) => (
              <ColorToken key={t.token} {...t} />
            ))}
          </div>
        }
      />

      {/* Surfaces */}
      <DocSection
        title="Surfaces"
        description="Cards, popovers, and their foregrounds."
        code={
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tokens.surfaces.map((t) => (
              <ColorToken key={t.token} {...t} />
            ))}
          </div>
        }
      />

      {/* Charts */}
      <DocSection
        title="Chart Colors"
        description="Categorical colors for data visualizations."
        code={
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tokens.charts.map((t) => (
              <ColorToken key={t.token} {...t} />
            ))}
          </div>
        }
      />

      {/* Sidebar */}
      <DocSection
        title="Sidebar"
        description="Specialized tokens for navigation surfaces."
        code={
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tokens.sidebar.map((t) => (
              <ColorToken key={t.token} {...t} />
            ))}
          </div>
        }
      />
    </div>
  );
}
