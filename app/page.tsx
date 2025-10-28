"use client";

import Link from "next/link";
import { ChevronRight, Shield, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LandingHeader } from "@/components/layout/landing-header";
import { LandingFooter } from "@/components/layout/landing-footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif' }}>
      {/* Header */}
      <LandingHeader />

      {/* Hero Section - Centered */}
      <section className="py-16 md:py-32 px-6 sm:px-8 lg:px-12 bg-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large gradient orb - top right */}
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-40 animate-pulse"></div>
          {/* Medium gradient orb - bottom left */}
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
          {/* Small gradient orb - center */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full blur-3xl opacity-20 animate-pulse delay-500"></div>
        </div>
        
        <div className="mx-auto max-w-6xl relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-[1.3] text-black tracking-tight">
              Building the Future Where AI<br className="hidden sm:block" /> and Web3 Evolve Together
          </h1>
            <p className="text-lg md:text-xl text-black mb-12 leading-relaxed max-w-3xl mx-auto">
              Cogerphere is a research-driven company crafting intelligent systems and next-generation Web3 applications — advancing how AI integrates with the decentralized world while ensuring innovation remains transparent, secure, and human-aligned.
            </p>
            
            {/* Creative animated grid and floating elements */}
            <div className="mt-20 relative">
              {/* Subtle grid pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100" viewBox="0 0 1000 100" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
              
              {/* Floating animated dots */}
              <div className="flex items-center justify-center gap-16 flex-wrap px-4 py-8">
                <div className="relative group">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 animate-pulse shadow-lg"></div>
                  <div className="absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 animate-ping opacity-75"></div>
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-sm font-semibold text-black/70 whitespace-nowrap">
                    AI Research
                  </div>
                </div>
                
                <div className="relative group">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 animate-pulse delay-300 shadow-lg"></div>
                  <div className="absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 animate-ping opacity-75 delay-300"></div>
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-sm font-semibold text-black/70 whitespace-nowrap">
                    Security
                  </div>
                </div>
                
                <div className="relative group">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 animate-pulse delay-700 shadow-lg"></div>
                  <div className="absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 animate-ping opacity-75 delay-700"></div>
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-sm font-semibold text-black/70 whitespace-nowrap">
                    Web3
                  </div>
                </div>
                
                <div className="relative group">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 animate-pulse delay-1000 shadow-lg"></div>
                  <div className="absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 animate-ping opacity-75 delay-1000"></div>
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-sm font-semibold text-black/70 whitespace-nowrap">
                    Innovation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Contract Builder Section - Redesigned */}
      <section className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="mx-auto w-full">
          <div className="bg-black rounded-2xl p-10 md:p-14 text-white">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-semibold text-white border border-white/20">
                    Smart Contract Builder
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight">
                  Generate production-ready smart contracts with AI
                </h2>
                <p className="text-lg text-white/80 mb-8 leading-relaxed">
                  Introducing the most secure and reliable smart contract generation system. Built with failproof architecture and comprehensive testing frameworks to ensure your contracts are production-ready.
                </p>
                <Button 
                  asChild 
                  className="bg-white text-black hover:bg-black/90 hover:text-white rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 font-bold border- border-white text-base px-8 py-3.5"
                >
                  <Link href="https://cogy01.vercel.app/" className="flex items-center gap-2">
                    Try Clox <ChevronRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
              
              {/* Right side - Feature list */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Secure by Default</h3>
                    <p className="text-white/70">Built-in security best practices and automated vulnerability scanning</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">AI-Powered</h3>
                    <p className="text-white/70">Generate contracts from natural language with intelligent automation</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Multi-Chain Support</h3>
                    <p className="text-white/70">Deploy to Ethereum, Polygon, Base, and more</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-28 px-6 sm:px-8 lg:px-12">
        <div className="mx-auto w-full">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-black tracking-tight">
              Our Core Principles
            </h2>
            <p className="text-lg md:text-2xl text-black max-w-4xl leading-relaxed">
              Intelligence in Motion. Knowledge in a Sphere. Cogerphere builds intelligent systems and tools that push the boundaries of how AI integrates into everyday technology. From research to real-world applications, we expand the sphere of knowledge through innovation, transparency, and human-centered design.
            </p>
          </div>

          {/* Three Cards - Custom Illustration Style */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 - Security First */}
            <div className="rounded-2xl p-8 bg-gradient-to-br from-orange-100 to-amber-100 transition-all duration-200 hover:shadow-lg">
              <div className="mb-8 h-48 flex items-center justify-center">
                {/* Custom illustration - Security shield with hand */}
                <svg width="120" height="120" viewBox="0 0 120 120" className="text-black">
                  <circle cx="60" cy="60" r="50" fill="#fef3c7" stroke="currentColor" strokeWidth="2"/>
                  <path d="M60 20 L75 45 L60 50 L45 45 Z" fill="currentColor" opacity="0.7"/>
                  <path d="M50 55 L60 70 L70 55" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <rect x="55" y="35" width="10" height="20" rx="2" fill="currentColor" opacity="0.5"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">
                Security First
                <br />
                AI Safety
              </h3>
            </div>

            {/* Card 2 - AI Research */}
            <div className="rounded-2xl p-8 bg-gradient-to-br from-blue-100 to-teal-100 transition-all duration-200 hover:shadow-lg">
              <div className="mb-8 h-48 flex items-center justify-center">
                {/* Custom illustration - AI research with blocks */}
                <svg width="120" height="120" viewBox="0 0 120 120" className="text-black">
                  <rect x="20" y="40" width="25" height="35" rx="3" fill="white" stroke="currentColor" strokeWidth="2"/>
                  <rect x="47" y="30" width="25" height="45" rx="3" fill="white" stroke="currentColor" strokeWidth="2"/>
                  <rect x="74" y="40" width="25" height="35" rx="3" fill="white" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="38" cy="25" r="8" fill="currentColor" opacity="0.6"/>
                  <circle cx="60" cy="20" r="8" fill="currentColor" opacity="0.6"/>
                  <circle cx="81" cy="25" r="8" fill="currentColor" opacity="0.6"/>
                  <line x1="35" y1="50" x2="30" y2="60" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="85" y1="50" x2="90" y2="60" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">
                AI Research &
                <br />
                Innovation
              </h3>
            </div>

            {/* Card 3 - Web3 Integration */}
            <div className="rounded-2xl p-8 bg-gradient-to-br from-violet-100 to-purple-100 transition-all duration-200 hover:shadow-lg">
              <div className="mb-8 h-48 flex items-center justify-center">
                {/* Custom illustration - Web3 network structure */}
                <svg width="120" height="120" viewBox="0 0 120 120" className="text-black">
                  {/* Base structure */}
                  <rect x="40" y="60" width="40" height="15" rx="2" fill="white" stroke="currentColor" strokeWidth="2"/>
                  <rect x="30" y="70" width="60" height="15" rx="2" fill="white" stroke="currentColor" strokeWidth="2"/>
                  <rect x="20" y="80" width="80" height="15" rx="2" fill="white" stroke="currentColor" strokeWidth="2"/>
                  {/* Top structure */}
                  <rect x="50" y="45" width="20" height="12" rx="2" fill="white" stroke="currentColor" strokeWidth="2"/>
                  <rect x="50" y="28" width="20" height="12" rx="2" fill="white" stroke="currentColor" strokeWidth="2"/>
                  <rect x="50" y="11" width="20" height="12" rx="2" fill="white" stroke="currentColor" strokeWidth="2"/>
                  {/* Connecting lines */}
                  <circle cx="35" cy="52" r="4" fill="currentColor"/>
                  <circle cx="60" cy="40" r="4" fill="currentColor"/>
                  <circle cx="85" cy="52" r="4" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">
                Web3 & Blockchain
                <br />
                Integration
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 md:py-40 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="mx-auto w-full max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-10 text-black tracking-tight">
            Ready to build the next
            <br />
            generation of Web3?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-black text-white border-2 border-black rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 font-bold text-lg px-10 py-4">
              <Link href="https://cogy01.vercel.app/">Get Started</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-black border-2 border-black rounded-lg transition-all duration-200 hover:bg-black hover:text-white hover:scale-105 active:scale-95 font-bold text-lg px-10 py-4">
              <Link href="/docs">View Documentation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <LandingFooter />
    </div>
  );
}
