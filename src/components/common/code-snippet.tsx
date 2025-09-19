import type { BundledLanguage } from "@/components/ui/kibo-ui/code-block";
import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockFiles,
  CodeBlockHeader,
  CodeBlockItem,
  CodeBlockSelect,
  CodeBlockSelectContent,
  CodeBlockSelectItem,
  CodeBlockSelectTrigger,
  CodeBlockSelectValue,
} from "@/components/ui/kibo-ui/code-block";
import { CodeSnippet } from "@/types/code-snippet";

// Reusable block for code snippets
export const SnippetBlock = ({
  data,
  defaultValue,
}: {
  data: CodeSnippet[];
  defaultValue?: string;
}) => (
  <CodeBlock data={data} defaultValue={defaultValue ?? data[0].language}>
    <CodeBlockHeader>
      <CodeBlockFiles>
        {(item) => (
          <CodeBlockFilename
            key={`${item.language}-${item.filename}`}
            value={item.language}
          >
            {item.filename}
          </CodeBlockFilename>
        )}
      </CodeBlockFiles>
      <CodeBlockSelect>
        <CodeBlockSelectTrigger>
          <CodeBlockSelectValue />
        </CodeBlockSelectTrigger>
        <CodeBlockSelectContent>
          {(item) => (
            <CodeBlockSelectItem
              key={`${item.language}-${item.filename}`}
              value={item.language}
            >
              {item.filename}
            </CodeBlockSelectItem>
          )}
        </CodeBlockSelectContent>
      </CodeBlockSelect>
      <CodeBlockCopyButton />
    </CodeBlockHeader>
    <CodeBlockBody>
      {(item) => (
        <CodeBlockItem
          key={`${item.language}-${item.filename}`}
          value={item.language}
        >
          <CodeBlockContent language={item.language as BundledLanguage}>
            {item.code}
          </CodeBlockContent>
        </CodeBlockItem>
      )}
    </CodeBlockBody>
  </CodeBlock>
);
