'use client';

import { motion } from 'framer-motion';

export default function DataLine({ direction = 'right', color = 'bg-cyan-500' }: { direction?: 'right'|'left'|'up'|'down', color?: string }) {
  const horizontal = direction === 'right' || direction === 'left';
  return (
    <div className={`relative overflow-hidden ${horizontal ? 'h-[1px] w-full' : 'w-[1px] h-full'} bg-white/5`}>
      <motion.div
        className={`absolute ${color} shadow-[0_0_8px_currentColor]`}
        style={{
          width: horizontal ? '30%' : '1px',
          height: horizontal ? '1px' : '30%',
          top: direction === 'left' ? 0 : direction === 'up' ? 'auto' : 0,
          bottom: direction === 'up' ? 0 : 'auto',
          left: direction === 'right' ? 0 : direction === 'left' ? 'auto' : 0,
          right: direction === 'left' ? 0 : 'auto',
        }}
        animate={{
          [horizontal ? (direction === 'right' ? 'left' : 'right') : (direction === 'down' ? 'top' : 'bottom')]: ['-30%', '130%'],
        }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      />
    </div>
  );
}
