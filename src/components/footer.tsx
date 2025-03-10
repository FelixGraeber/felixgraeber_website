import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="w-full py-8 px-4 md:px-8 mt-auto">
      <Separator className="mb-6" />
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-neutral-500">
          © {new Date().getFullYear()} Felix Graeber. All rights reserved.
        </div>
        <div className="flex gap-6">
          <Link 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            LinkedIn
          </Link>
          <Link 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            GitHub
          </Link>
          <Link 
            href="mailto:contact@example.com"
            className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
