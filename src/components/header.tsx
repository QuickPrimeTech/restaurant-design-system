import { ReactNode } from "react";
import { BodyLg, H1 } from "./app/typography";

interface ChildrenProps {
  children: ReactNode;
}

export const Header = ({ children }: ChildrenProps) => {
  return <header className="space-y-2">{children}</header>;
};

export const PageH1 = ({ children }: ChildrenProps) => {
  return <H1 className="font-extrabold">{children}</H1>;
};

export const PageParagraph = ({ children }: ChildrenProps) => {
  return <BodyLg className="text-muted-foreground">{children}</BodyLg>;
};
