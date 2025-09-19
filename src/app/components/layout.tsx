// app/components/layout.tsx
import Sidebar from "@/layouts/sidebar";

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-muted/40">
        <Sidebar />
      </aside>
      {/* Main content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
