import { Header, PageH1, PageParagraph } from "@/components/header";

export default function NavbarPage() {
  return (
    <div className="space-y-16">
      {/* Page Header */}
      <Header>
        <PageH1>Navbar Component</PageH1>
        <PageParagraph>
          Responsive navigation bar with logo, links, and CTA buttons.
        </PageParagraph>
      </Header>
    </div>
  );
}
