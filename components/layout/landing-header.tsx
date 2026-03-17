"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight, Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const LandingHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isLearnOpen, setIsLearnOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled 
        ? "bg-stone-50/98 backdrop-blur-md border-b border-stone-200 shadow-sm" 
        : "bg-stone-50"
    )}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-[1fr_auto] md:grid-cols-3 h-20 items-center gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1 group shrink-0 min-w-0">
            <Image
              src="/cogerpherelogoonly.png"
              alt="Cogerphere AI Labs"
              width={50}
              height={50}
              className="rounded-full group-hover:opacity-80 transition-opacity shrink-0"
            />
            <span className="text-xl md:text-2xl font-bold text-stone-950 whitespace-nowrap overflow-hidden text-ellipsis">COGERPHERE</span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center space-x-10">
            <Link href="/research" className="text-base text-stone-600 hover:text-stone-950 transition-colors duration-200">
              Research
            </Link>
            <div 
              className="relative group"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="flex items-center text-base text-stone-600 hover:text-stone-950 transition-colors duration-200">
                Products
                <ChevronDown className="ml-1.5 h-5 w-5 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              
              {/* Products Dropdown Menu */}
              {isProductsOpen && (
                <div className="absolute top-full pt-2 left-1/2 -translate-x-1/2 w-48 z-50">
                  <div className="bg-white rounded-lg shadow-lg border border-stone-200 py-2">
                    <Link 
                      href="https://cogy01.vercel.app/" 
                      className="block px-4 py-2 text-sm text-stone-700 hover:bg-stone-100 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        Clox
                        <ChevronRight className="h-4 w-4 ml-auto" />
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div
              className="relative group"
              onMouseEnter={() => { setIsLearnOpen(true); setIsProductsOpen(false); }}
              onMouseLeave={() => setIsLearnOpen(false)}
            >
              <button className="flex items-center text-base text-stone-600 hover:text-stone-950 transition-colors duration-200">
                Learn
                <ChevronDown className={cn("ml-1.5 h-5 w-5 transition-transform duration-200", isLearnOpen && "rotate-180")} />
              </button>
              {isLearnOpen && (
                <div className="absolute top-full pt-2 left-1/2 -translate-x-1/2 w-48 z-50">
                  <div className="bg-white rounded-lg shadow-lg border border-stone-200 py-2">
                    <Link href="/learn" className="block px-4 py-2 text-sm text-stone-700 hover:bg-stone-100 transition-colors">
                      Tutorials
                    </Link>
                    <Link href="/docs" className="block px-4 py-2 text-sm text-stone-700 hover:bg-stone-100 transition-colors">
                      Documentation
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link href="/news" className="text-base text-stone-600 hover:text-stone-950 transition-colors duration-200">
              News
            </Link>
            <Link 
              href="/contact" 
              className="text-base text-stone-700 hover:text-stone-950 hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded-md px-1 -mx-1 transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA & Mobile Menu Button */}
          <div className="flex justify-end items-center">
            {/* Desktop CTA */}
            <div className="hidden md:flex bg-teal-600 rounded-xl">
              <Button 
                asChild 
                className="bg-teal-600 text-white hover:bg-teal-700 transition-all duration-200 font-bold px-8 py-3 text-lg"
              >
                <Link href="https://cogy01.vercel.app/" className="flex items-center gap-2">
                  Try Clox
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-stone-200 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-stone-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/research" 
                className="text-stone-700 hover:text-stone-950 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Research
              </Link>
              <div className="flex flex-col">
                <span className="text-stone-700 font-medium">Products</span>
                <Link 
                  href="https://cogy01.vercel.app/" 
                  className="text-stone-600 hover:text-stone-950 transition-colors pl-4 mt-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Clox
                </Link>
              </div>
              <Link href="/learn" className="text-stone-700 hover:text-stone-950 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Tutorials
              </Link>
              <Link href="/docs" className="text-stone-700 hover:text-stone-950 transition-colors pl-4" onClick={() => setIsMobileMenuOpen(false)}>
                Documentation
              </Link>
              <Link 
                href="/news" 
                className="text-stone-700 hover:text-stone-950 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                News
              </Link>
              <Link 
                href="/contact" 
                className="text-stone-700 hover:text-stone-950 hover:underline underline-offset-4 py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button 
                asChild 
                className="bg-teal-600 text-white hover:bg-teal-700 rounded-lg mt-2 font-semibold"
              >
                <Link href="https://cogy01.vercel.app/" onClick={() => setIsMobileMenuOpen(false)}>
                  Try Clox
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

