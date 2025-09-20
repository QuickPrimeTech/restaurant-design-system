// app/components/layout.tsx
import { AppSidebar } from "@/layouts/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "@/layouts/navbar";

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <SidebarProvider>
        <AppSidebar />
        {/* Main content */}
        <div className="flex-1">
          <Navbar />
          <main className="flex-1 p-6">{children}</main>
        </div>
      </SidebarProvider>
    </div>
  );
}
