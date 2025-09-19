// @/components/common/doc-section.tsx
"use client";
import React from "react";
import jsxToString from "react-element-to-jsx-string";
import { SnippetBlock } from "./code-snippet";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { InstallSnippet } from "./install-snippet";
import { InstallSnippet as InstallSnippetType } from "@/types/install-guide";
import { CodeSnippet } from "@/types/code-snippet";
import { Body, H2 } from "@/components/app/typography";

type DocSectionProps = {
  title: string;
  description: string;
  preview?: React.ReactNode;
  code?: CodeSnippet | null;
  installSnippets?: InstallSnippetType[];
};

export const DocSection = ({
  title,
  description,
  preview,
  code,
  installSnippets,
}: DocSectionProps) => {
  let normalizedSnippets: {
    language: string;
    filename: string;
    code: string;
  }[] = [];

  let livePreview: React.ReactNode | null = null;

  if (code && React.isValidElement(code)) {
    // Case 1: JSX
    livePreview = code;
    normalizedSnippets = [
      {
        language: "tsx",
        filename: "Example",
        code: jsxToString(code, {
          showDefaultProps: false,
          showFunctions: true,
          useBooleanShorthandSyntax: false,
        }),
      },
    ];
  } else if (code && typeof code === "object" && "code" in code) {
    // Case 2: Code object
    normalizedSnippets = [
      {
        language: "tsx", // ✅ force tsx
        filename: "Example", // ✅ force Example
        code: code.code,
      },
    ];
  }

  return (
    <section className="space-y-6">
      <div className="space-y-1.5">
        <H2 className="tracking-tight">{title}</H2>
        <Body className="text-muted-foreground">{description}</Body>
      </div>

      {installSnippets && <InstallSnippet installSnippets={installSnippets} />}

      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="preview">Live Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="space-y-4">
          <div className="border rounded-lg p-6 bg-card">
            {preview ?? livePreview ?? (
              <p className="text-muted-foreground">No preview available</p>
            )}
          </div>
        </TabsContent>

        <TabsContent value="code" className="space-y-4">
          {normalizedSnippets.length > 0 ? (
            <SnippetBlock data={normalizedSnippets} />
          ) : (
            <p className="text-muted-foreground">No code available</p>
          )}
        </TabsContent>
      </Tabs>
    </section>
  );
};
