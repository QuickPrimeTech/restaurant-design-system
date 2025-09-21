"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { InstallSnippet as InstallSnippetType } from "@/types/install-guide";
import { BackgroundGradient } from "../ui/background-gradient";
import { Check, Copy } from "lucide-react";
import { Button } from "../ui/button";
import { H2 } from "@/components/app-ui/typography";

type InstallSnippetProps = {
  installSnippets: InstallSnippetType[];
};

const STORAGE_KEY = "install-preference";

export const InstallSnippet = ({ installSnippets }: InstallSnippetProps) => {
  const [copied, setCopied] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>(
    installSnippets[0]?.filename ?? "pnpm"
  );

  // Load preference on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && installSnippets.some((s) => s.filename === stored)) {
      setActiveTab(stored);
    }
  }, [installSnippets]);

  // Save preference when user changes tab
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    localStorage.setItem(STORAGE_KEY, value);
  };

  const handleCopy = (code: string, key: string) => {
    navigator.clipboard.writeText(code);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div>
      <H2 className="mb-2">Installation</H2>
      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className="w-full"
      >
        <div className="flex justify-between">
          <TabsList className="mb-2">
            {installSnippets.map((snippet: InstallSnippetType) => (
              <TabsTrigger key={snippet.filename} value={snippet.filename}>
                {snippet.filename}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {installSnippets.map((snippet: InstallSnippetType) => (
          <TabsContent key={snippet.filename} value={snippet.filename}>
            <BackgroundGradient className="rounded-sm flex items-center justify-between p-4 bg-background relative">
              <pre className="whitespace-pre-wrap break-words font-mono text-sm text-foreground">
                {snippet.code}
              </pre>
              <Button
                variant="ghost"
                onClick={() => handleCopy(snippet.code, snippet.filename)}
              >
                {copied === snippet.filename ? <Check /> : <Copy />}
              </Button>
            </BackgroundGradient>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
