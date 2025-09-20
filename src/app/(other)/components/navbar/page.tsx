// @/app/docs/navbar/page.tsx
import { DocSection } from "@/components/common/doc-section";
import { InstallSnippet } from "@/components/common/install-snippet";
import { Header, PageH1, PageParagraph } from "@/components/header";
import {
  installSnippets,
  basicNavbarCode,
  logoOnlyCode,
  linksOnlyCode,
  withCTAsCode,
} from "@/examples/components/navbar";

export default function NavbarPage() {
  return (
    <div className="space-y-16">
      {/* Page Header */}
      <Header>
        <PageH1>Navbar Component</PageH1>
        <PageParagraph>
          A responsive, modular navigation bar with logo, links,
          call-to-actions, and mobile support. Easily customizable for different
          layouts and scroll behaviors.
        </PageParagraph>
      </Header>

      {/* Install Snippet */}
      <InstallSnippet installSnippets={installSnippets} />

      {/* Sections */}
      <DocSection
        title="Basic Navbar"
        description="A complete navbar with logo, links, CTAs, and a mobile drawer."
        code={basicNavbarCode}
      />

      <DocSection
        title="Logo Only"
        description="A minimal navbar variant that only displays the brand logo."
        code={logoOnlyCode}
      />

      <DocSection
        title="Links Only"
        description="A simple navbar with just navigation links for lightweight layouts."
        code={linksOnlyCode}
      />

      <DocSection
        title="With CTAs"
        description="A navbar variant that focuses on call-to-action buttons like reservation or ordering."
        code={withCTAsCode}
      />
    </div>
  );
}
