"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/expertise", label: "Expertise" },
  { href: "/client-stories", label: "Client Stories" },
  { href: "/connect", label: "Connect" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/40 backdrop-blur-xl border-b border-white/20 shadow-sm transition-all duration-500 hover:backdrop-blur-3xl">
      <div className="flex justify-between items-center px-mobile-margin md:px-container-padding h-20 w-full max-w-[1440px] mx-auto">
        
        {/* Branding */}
        <Link href="/" className="font-manrope font-medium text-2xl tracking-tighter text-primary">
          Rewan Zakaria
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.href} 
                href={link.href}
                className={`font-hanken text-[16px] transition-all duration-300 relative pb-1 ${
                  isActive 
                    ? "text-primary font-bold border-b-2 border-secondary"
                    : "text-on-surface-variant hover:text-secondary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="hidden md:flex items-center">
          <Link href="/connect"
            className="bg-primary text-on-primary font-hanken px-6 py-3 rounded-full transition-transform duration-300 hover:scale-105 inline-block text-xs font-semibold tracking-widest uppercase">
            Consult Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary p-2 focus:outline-none" 
          onClick={() => setMobileOpen(!mobileOpen)} 
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-[28px]">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden glass-panel border-t border-white/20 px-mobile-margin py-8 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.href} 
                href={link.href} 
                onClick={() => setMobileOpen(false)}
                className={`font-hanken text-[18px] transition-colors duration-300 py-2 border-b border-transparent ${
                  isActive 
                    ? "text-primary font-bold border-secondary"
                    : "text-on-surface-variant hover:text-secondary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link 
            href="/connect" 
            onClick={() => setMobileOpen(false)}
            className="bg-primary text-on-primary font-hanken px-6 py-4 rounded-full text-center mt-4 transition-transform active:scale-95 text-xs font-semibold uppercase tracking-widest"
          >
            Consult Now
          </Link>
        </div>
      )}
    </nav>
  );
}