"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isProjectsPage = pathname?.startsWith('/projects/');
  const isContactPage = pathname === '/contact';
  const isTransparentPage = isProjectsPage || isContactPage;

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF2E8]">
      <Header transparent={isTransparentPage} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
} 