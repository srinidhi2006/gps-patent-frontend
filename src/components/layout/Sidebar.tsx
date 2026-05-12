'use client';

import Link from "next/link";
import { motion } from 'framer-motion';
import {
  Home,
  Compass,
  Map,
  ShieldAlert,
  Cpu,
  Settings
} from 'lucide-react';

export default function Sidebar() {

  const links = [
    {
      icon: <Home size={20} />,
      label: 'Overview',
      href: '/dashboard',
      active: true
    },

    {
      icon: <Compass size={20} />,
      label: 'Navigation',
      href: '/architecture'
    },

    {
      icon: <Map size={20} />,
      label: 'Live Map',
      href: '/map'
    },

    {
      icon: <ShieldAlert size={20} />,
      label: 'Spoofing',
      href: '/spoofing'
    },

    {
      icon: <Cpu size={20} />,
      label: 'Learning',
      href: '/learning'
    },

    {
      icon: <Settings size={20} />,
      label: 'Settings',
      href: '/settings'
    },
  ];

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed left-0 top-20 bottom-0 w-20 hover:w-64 glass border-r-0 z-40 transition-all duration-300 overflow-hidden group flex flex-col py-6"
    >
      <div className="flex flex-col gap-2 px-3">

        {links.map((link, idx) => (

          <Link key={idx} href={link.href}>

            <button
              className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all ${
                link.active
                  ? 'bg-cyan-500/20 text-cyan-400 shadow-[inset_2px_0_0_#00E5FF]'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <div className="min-w-[20px]">
                {link.icon}
              </div>

              <span className="opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity duration-300 text-sm font-medium">
                {link.label}
              </span>

            </button>

          </Link>

        ))}

      </div>
    </motion.aside>
  );
}