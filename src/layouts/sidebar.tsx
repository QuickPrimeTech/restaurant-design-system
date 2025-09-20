"use client";

import {
  Home,
  SquareTerminal,
  Palette,
  Type,
  LayoutPanelLeft,
  Square,
  Layers,
  Component,
  Cog,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { componentsCatalog } from "@/data/components-catalog";

// Sidebar groups
const foundationItems = [
  { title: "Installation", url: "/docs/installation", icon: SquareTerminal },
  { title: "Typography", url: "/docs/typography", icon: Type },
  { title: "Colors", url: "/docs/colors", icon: Palette },
  { title: "Layout", url: "/docs/layout", icon: LayoutPanelLeft },
];

// A small helper so we don't repeat tooltip condition everywhere
function MaybeTooltip({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  const { state } = useSidebar(); // gives us { open, openMobile, ... }

  // Only wrap in tooltip if collapsed (icon mode)
  if (state === "collapsed") {
    return (
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side="right">{label}</TooltipContent>
      </Tooltip>
    );
  }

  return <>{children}</>;
}

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <TooltipProvider delayDuration={200}>
          {/* Foundations */}
          <SidebarGroup>
            <SidebarGroupLabel>Foundations</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {foundationItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <MaybeTooltip label={item.title}>
                      <SidebarMenuButton asChild>
                        <Link href={item.url}>
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </MaybeTooltip>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* Components */}
          {componentsCatalog.map((catalog, key) => (
            <SidebarGroup key={key}>
              <SidebarGroupLabel>{catalog.category}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {catalog.items.map((item, key) => (
                    <SidebarMenuItem key={`${key}-${key}`}>
                      <MaybeTooltip label={item.title}>
                        <SidebarMenuButton asChild>
                          <Link href={item.link}>
                            <Component className="h-4 w-4" />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </MaybeTooltip>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </TooltipProvider>
      </SidebarContent>
    </Sidebar>
  );
}
