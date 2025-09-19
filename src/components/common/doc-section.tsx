"use client";

import { SnippetBlock } from "./code-snippet";
import { CodeSnippet } from "@/types/code-snippet";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { InstallSnippet } from "./install-guide";
import { InstallSnippet as InstallSnippetType } from "@/types/install-guide";
import { LiveProvider, LivePreview } from "react-live";

type DocSectionProps = {
  title: string;
  description: string;
  preview?: React.ReactNode;
  code: CodeSnippet[];
  installSnippets: InstallSnippetType[];
};

// Main DocSection component
export const DocSection = ({
  title,
  description,
  preview,
  code,
  installSnippets,
}: DocSectionProps) => (
  <section className="space-y-6">
    <div>
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      <p className="text-muted-foreground">{description}</p>
    </div>
    {/* Installation */}
    <InstallSnippet installSnippets={installSnippets} />

    <Tabs defaultValue="code" className="w-full">
      <TabsList className="mb-4">
        <TabsTrigger value="code">Code Preview</TabsTrigger>
        <TabsTrigger value="preview">Live Preview</TabsTrigger>
      </TabsList>

      {/* Live Preview (only if passed) */}
      <TabsContent value="preview" className="space-y-4">
        <div className="border rounded-lg p-6 bg-card">
          {preview ? (
            preview
          ) : (
            <LiveProvider code={code[0].code}>
              <LivePreview />
            </LiveProvider>
          )}
        </div>
      </TabsContent>

      {/* Code Preview */}
      <TabsContent value="code" className="space-y-4">
        <SnippetBlock data={code} />
      </TabsContent>
    </Tabs>
  </section>
);
