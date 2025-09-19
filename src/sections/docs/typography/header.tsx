import { BodyLg, H1 } from "@/components/app/typography";

export const Header = () => {
  return (
    <header className="space-y-2">
      <H1 className="font-extrabold">Typography</H1>
      <BodyLg className="text-muted-foreground">
        A unified system of type scales, sizes, and styles for building
        consistent interfaces.
      </BodyLg>
    </header>
  );
};
