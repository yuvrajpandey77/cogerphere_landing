"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Linkedin, Github } from "lucide-react";
import { COBENTT_URL, RRBENCH_BLOG_PATH } from "@/lib/site-content";

export const LandingFooter = () => {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 py-16">
          {/* Logo Section */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4 group">
              <Image
                src="/cogerpherelogoonly.png"
                alt="Cogerphere AI Labs"
                width={40}
                height={40}
                className="rounded-full group-hover:opacity-80 transition-opacity"
              />
              <span className="text-2xl font-bold">COGERPHERE</span>
            </Link>
            <p className="text-stone-400 text-sm max-w-xs mb-4">
              Intelligence in Motion. Knowledge in a Sphere.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/cogerphere"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-white transition-colors"
                aria-label="Cogerphere on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/cogerphere"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-white transition-colors"
                aria-label="Cogerphere on X"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://github.com/COGERPHEREAILABS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-white transition-colors"
                aria-label="Cogerphere on GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4 text-stone-300">Products</h3>
            <ul className="space-y-3 text-stone-400">
              <li>
                <a
                  href={COBENTT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Cobentt</span>
                  <ChevronRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://openbentt.cogerphere.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Openbentt</span>
                  <ChevronRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <Link href="https://cogy01.vercel.app/" className="hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Clox</span>
                  <ChevronRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href={RRBENCH_BLOG_PATH} className="hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    RRbench
                    <span className="ml-1.5 text-[10px] font-semibold uppercase text-amber-400/90">Upcoming</span>
                  </span>
                  <ChevronRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Documentation</span>
                  <ChevronRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Security</span>
                  <ChevronRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="font-semibold mb-4 text-stone-300">Learn</h3>
            <ul className="space-y-3 text-stone-400">
              <li>
                <Link href="/learn" className="hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Tutorials</span>
                  <ChevronRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/research" className="hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Research</span>
                  <ChevronRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">News</span>
                  <ChevronRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Blog</span>
                  <ChevronRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-stone-300">Company</h3>
            <ul className="space-y-3 text-stone-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">About</span>
                  <ChevronRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/people" className="hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">People</span>
                  <ChevronRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/research" className="hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Research</span>
                  <ChevronRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Careers</span>
                  <ChevronRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Contact</span>
                  <ChevronRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 py-10 mt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-stone-400">
            <p>&copy; {new Date().getFullYear()} Cogerphere AI Labs. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="hover:text-white transition-colors duration-200">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

