// @/components/common/code-snippet.tsx
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
} from "@/components/ui/kibo-ui/code-block";

type NormalizedSnippet = {
  language: string; // ✅ required
  filename: string;
  code: string;
};

export const SnippetBlock = ({
  data,
  defaultValue,
}: {
  data: NormalizedSnippet[];
  defaultValue?: string;
}) => (
  <CodeBlock
    data={data}
    defaultValue={defaultValue ?? data[0].language ?? "tsx"}
  >
    <CodeBlockHeader>
      {data.some((d) => d.filename) && (
        <>
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
        </>
      )}
      <CodeBlockCopyButton />
    </CodeBlockHeader>

    <CodeBlockBody>
      {(item) => (
        <CodeBlockItem
          key={`${item.language}-${item.filename}`}
          value={item.language}
        >
          <CodeBlockContent
            language={(item.language ?? "tsx") as BundledLanguage}
          >
            {item.code}
          </CodeBlockContent>
        </CodeBlockItem>
      )}
    </CodeBlockBody>
  </CodeBlock>
);
