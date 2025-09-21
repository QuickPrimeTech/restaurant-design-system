// @/app/docs/footer/page.tsx
import { DocSection } from "@/components/common/doc-section";
import { InstallSnippet } from "@/components/common/install-snippet";
import { Header, PageH1, PageParagraph } from "@/components/header";
import {
  installSnippets,
  basicFooter,
  // footerWithQrCard,
  // footerWithCTA,
  // footerWithBottomRow,
} from "@/examples/components/footer";

export default function FooterPage() {
  return (
    <div className="space-y-16">
      {/* Page Header */}
      <Header>
        <PageH1>Footer Component</PageH1>
        <PageParagraph>
          A flexible footer built from composable building blocks such as brand,
          links, QR code cards, newsletter CTAs, and bottom legal rows. Mix and
          match these primitives to create footers tailored to your restaurant
          website.
        </PageParagraph>
      </Header>

      {/* Install Snippet */}
      <InstallSnippet installSnippets={installSnippets} />

      {/* Sections */}
      <DocSection
        title="Basic Footer"
        description="A simple footer with brand and navigation links."
        code={basicFooter}
      />
      {/* 
      <DocSection
        title="Footer with QR Card"
        description="Add a QR card to promote instant access to your menu."
        code={footerWithQrCard}
      />

      <DocSection
        title="Footer with Newsletter CTA"
        description="Include a newsletter or subscription call-to-action."
        code={footerWithCTA}
      />

      <DocSection
        title="Footer Bottom Row"
        description="A bottom section with social icons, legal links, and credits."
        code={footerWithBottomRow}
      /> */}
    </div>
  );
}
