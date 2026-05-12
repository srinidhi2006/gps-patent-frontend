'use client';

import { Cpu } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50 py-12 relative z-10 backdrop-blur-md">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <Cpu className="w-6 h-6 text-cyan-400" />
          <span className="text-lg font-bold tracking-wider text-white">
            NAV<span className="text-cyan-400">AI</span> CORE
          </span>
        </div>
        
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} NavAI Patent Showcase. All rights reserved.
        </div>
        
        <div className="flex gap-4 text-sm text-gray-400">
          <a href="#" className="hover:text-cyan-400 transition-colors">Patent Document</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Technical Spec</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
