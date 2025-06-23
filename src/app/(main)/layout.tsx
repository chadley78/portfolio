"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isProjectsPage = pathname?.startsWith('/projects/');
  const isContactPage = pathname === '/contact';
  const isTransparentPage = isProjectsPage || isContactPage;

  // Scroll to top when pathname changes with a small delay to ensure animations trigger
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [pathname]);

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