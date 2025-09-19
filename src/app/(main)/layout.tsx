import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "@/layouts/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SidebarProvider className="min-h-fit w-full border-b bg-background sticky top-0 z-50">
        <Navbar />
      </SidebarProvider>
      {children}
    </>
  );
}
