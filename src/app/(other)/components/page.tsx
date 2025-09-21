// app/components/page.tsx

import { H2, Hero, BodyLg } from "@/components/app-ui/typography";
import { componentsCatalog } from "@/data/components-catalog";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function ComponentsPage() {
  return (
    <main className="min-h-screen px-6 py-16 bg-background text-foreground space-y-16">
      {/* Page Header */}
      <header className="text-center space-y-4">
        <Hero>Restaurant Components</Hero>
        <BodyLg className="text-muted-foreground max-w-2xl mx-auto">
          A catalog of pre-built, restaurant-focused components you can use to
          design websites quickly and consistently.
        </BodyLg>
      </header>

      {/* Catalog Sections */}
      {componentsCatalog.map((section) => (
        <section key={section.category} className="space-y-4">
          <H2>{section.category}</H2>
          <HoverEffect items={section.items} />
        </section>
      ))}
      <BackgroundBeams />
    </main>
  );
}
