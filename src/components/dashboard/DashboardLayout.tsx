'use client';

import { ReactNode } from 'react';
import Sidebar from '../layout/Sidebar';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#050816] flex text-white overflow-hidden">
      <Sidebar />
      <main className="flex-1 ml-20 p-6 h-screen overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
