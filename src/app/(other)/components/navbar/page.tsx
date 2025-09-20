// @/app/docs/navbar/page.tsx
import { DocSection } from "@/components/common/doc-section";
import { InstallSnippet } from "@/components/common/install-snippet";
import { Header, PageH1, PageParagraph } from "@/components/header";
import {
  installSnippets,
  basicNavbarCode,
  centeredLinksNavbar,
  splitNavbar,
  underlineLeftNavbar,
  underlineCenterNavbar,
  highlightNavbar,
  gradientUnderlineNavbar,
} from "@/examples/components/navbar";

export default function NavbarPage() {
  return (
    <div className="space-y-16">
      {/* Page Header */}
      <Header>
        <PageH1>Navbar Component</PageH1>
        <PageParagraph>
          A responsive, modular navigation bar with logo, links,
          call-to-actions, and mobile support. Explore different layout patterns
          and hover effects built on top of the base components.
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
        title="Centered Links"
        description="Center your navigation links with spacers on each side."
        code={centeredLinksNavbar}
      />

      <DocSection
        title="Split Layout"
        description="Keep links aligned left while placing CTAs on the right."
        code={splitNavbar}
      />

      <DocSection
        title="Underline From Left"
        description="A hover effect where underline grows from the left side."
        code={underlineLeftNavbar}
      />

      <DocSection
        title="Underline From Center"
        description="A hover effect where underline expands from the center outward."
        code={underlineCenterNavbar}
      />

      <DocSection
        title="Highlight Background"
        description="A hover effect where the link is highlighted with a subtle background."
        code={highlightNavbar}
      />

      <DocSection
        title="Gradient Underline"
        description="An animated gradient underline hover effect."
        code={gradientUnderlineNavbar}
      />
    </div>
  );
}
