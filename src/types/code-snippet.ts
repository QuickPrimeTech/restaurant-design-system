export type CodeSnippet =
  | React.ReactNode
  | {
      language?: string;
      filename?: string;
      code: string;
    };
