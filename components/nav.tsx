"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const LINKS = [
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="paper-texture sticky top-0 z-40 border-b border-paper-line bg-leather text-cream">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-xl tracking-wide" onClick={() => setOpen(false)}>
          IAMJFABIAN
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-cream/75 md:flex">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-cream">
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-md text-cream/80 hover:bg-leather-dark"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-leather-line px-6 py-4 md:hidden animate-fade-in-up">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2.5 text-cream/80 transition-colors hover:bg-leather-dark hover:text-cream"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
