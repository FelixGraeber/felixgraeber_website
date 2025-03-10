"use client";

import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 py-12">
        {children}
      </main>
      <Footer />
    </div>
  );
}
