// app/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Utensils, Layout, Smartphone, Palette } from "lucide-react";
import Link from "next/link";

// Typography components
import {
  Hero,
  H3,
  Body,
  Caption,
  BodyLg,
} from "@/components/app-ui/typography";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-background text-foreground">
      {/* Hero Section */}
      <section className="max-w-3xl text-center space-y-6">
        <Hero>Restaurant Design System</Hero>
        <BodyLg className="text-muted-foreground">
          A modern design system for restaurant websites and apps — reusable
          components, responsive layouts, and industry-ready patterns built with
          Next.js, Tailwind, and ShadCN UI.
        </BodyLg>
        <div className="flex gap-4 justify-center">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline" asChild>
            <Link href={"/docs"}>View Components</Link>
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="mt-20 grid gap-6 sm:grid-cols-2 max-w-4xl w-full">
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6 flex flex-col items-start gap-3">
            <Utensils className="w-6 h-6 text-primary" />
            <H3>Restaurant-Ready Patterns</H3>
            <Body className="text-muted-foreground">
              Reservation forms, menu grids, galleries, and ordering flows —
              built specifically for dining experiences.
            </Body>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6 flex flex-col items-start gap-3">
            <Layout className="w-6 h-6 text-primary" />
            <H3>Reusable Components</H3>
            <Body className="text-muted-foreground">
              Navbars, cards, modals, and UI elements designed for scalability
              and speed across projects.
            </Body>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6 flex flex-col items-start gap-3">
            <Smartphone className="w-6 h-6 text-primary" />
            <H3>Responsive by Default</H3>
            <Body className="text-muted-foreground">
              Mobile-first layouts optimized for diners browsing on any device.
            </Body>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6 flex flex-col items-start gap-3">
            <Palette className="w-6 h-6 text-primary" />
            <H3>Customizable Tokens</H3>
            <Body className="text-muted-foreground">
              Tailor typography, colors, spacing, and shadows to fit your brand.
            </Body>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="mt-20">
        <Caption>
          Built with ❤️ using Next.js, Tailwind CSS, and ShadCN UI.
        </Caption>
      </footer>
    </main>
  );
}
