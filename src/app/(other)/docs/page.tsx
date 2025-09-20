// app/components/button/page.tsx

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ButtonPage() {
  return (
    <section className="space-y-10">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Button</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Buttons are used to trigger actions. They support different styles,
          variants, and sizes for various use cases.
        </p>
      </div>

      <Separator />

      {/* Examples */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">Examples</h2>

        {/* Default Buttons */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base font-medium">
              Button Variants
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </CardContent>
        </Card>

        {/* Sizes */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base font-medium">
              Button Sizes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
