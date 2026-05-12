'use client';

import Link from "next/link";
import { motion } from 'framer-motion';
import { Menu, Cpu } from 'lucide-react';
import GlowingButton from '../ui/GlowingButton';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10 px-6 py-4 flex items-center justify-between"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3">
        <Cpu className="w-8 h-8 text-cyan-400" />
        <span className="text-xl font-bold tracking-wider text-white">
          NAV<span className="text-cyan-400">AI</span> CORE
        </span>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">

  <Link
    href="/architecture"
    className="hover:text-cyan-400 transition-colors"
  >
    Architecture
  </Link>

  <Link
    href="/dashboard"
    className="hover:text-cyan-400 transition-colors"
  >
    Modules
  </Link>

  <Link
    href="/learning"
    className="hover:text-cyan-400 transition-colors"
  >
    Innovations
  </Link>

  <Link
    href="/map"
    className="hover:text-cyan-400 transition-colors"
  >
    Applications
  </Link>

</div>

      {/* Buttons */}
      <div className="hidden md:flex gap-4">
        <Link href="/architecture">
          <GlowingButton
            variant="outline"
            className="px-4 py-2 text-sm"
          >
            Documentation
          </GlowingButton>
        </Link>

        <Link href="/dashboard">
          <GlowingButton
            variant="primary"
            className="px-4 py-2 text-sm"
          >
            Dashboard
          </GlowingButton>
        </Link>
      </div>

      {/* Mobile Menu */}
      <button className="md:hidden text-gray-300 hover:text-white transition-colors">
        <Menu className="w-6 h-6" />
      </button>
    </motion.nav>
  );
}