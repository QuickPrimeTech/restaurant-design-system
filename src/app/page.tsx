// app/page.tsx

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Utensils, Layout, Smartphone, Palette } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-background text-foreground">
      {/* Hero Section */}
      <section className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Restaurant Design System
        </h1>
        <p className="text-lg text-muted-foreground">
          A modern design system for restaurant websites and apps — reusable
          components, responsive layouts, and industry-ready patterns built with
          Next.js, Tailwind, and ShadCN UI.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">
            View Components
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="mt-20 grid gap-6 sm:grid-cols-2 max-w-4xl w-full">
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6 flex flex-col items-start gap-3">
            <Utensils className="w-6 h-6 text-primary" />
            <h3 className="font-semibold text-xl">Restaurant-Ready Patterns</h3>
            <p className="text-muted-foreground">
              Reservation forms, menu grids, galleries, and ordering flows —
              built specifically for dining experiences.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6 flex flex-col items-start gap-3">
            <Layout className="w-6 h-6 text-primary" />
            <h3 className="font-semibold text-xl">Reusable Components</h3>
            <p className="text-muted-foreground">
              Navbars, cards, modals, and UI elements designed for scalability
              and speed across projects.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6 flex flex-col items-start gap-3">
            <Smartphone className="w-6 h-6 text-primary" />
            <h3 className="font-semibold text-xl">Responsive by Default</h3>
            <p className="text-muted-foreground">
              Mobile-first layouts optimized for diners browsing on any device.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6 flex flex-col items-start gap-3">
            <Palette className="w-6 h-6 text-primary" />
            <h3 className="font-semibold text-xl">Customizable Tokens</h3>
            <p className="text-muted-foreground">
              Tailor typography, colors, spacing, and shadows to fit your brand.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-sm text-muted-foreground">
        Built with ❤️ using Next.js, Tailwind CSS, and ShadCN UI.
      </footer>
    </main>
  );
}
