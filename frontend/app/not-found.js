'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

function BrokenWires() {
  return (
    <svg
      viewBox="0 0 250 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto w-[250px] md:w-[360px] z-10"
    >
      {/* Left wire */}
      <motion.path
        d="M10 40 Q50 55 100 45"
        stroke="#38bdf8"
        strokeWidth="6"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.3, duration: 1.2, type: 'spring' }}
      />
      <motion.circle
        cx="100"
        cy="45"
        r="8"
        className="dark:fill-[#0f172a] fill-white"
        stroke="#38bdf8"
        strokeWidth="4"
        animate={{ scale: [1, 1.1, 1], opacity: [1, 0.7, 1] }}
        transition={{ repeat: Infinity, duration: 1.4 }}
      />

      {/* Right wire */}
      <motion.path
        d="M240 50 Q200 50 150 65"
        stroke="#38bdf8"
        strokeWidth="6"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.6, duration: 1.2, type: 'spring' }}
      />
      <motion.circle
        cx="150"
        cy="65"
        r="8"
        className="dark:fill-[#0f172a] fill-white"
        stroke="#38bdf8"
        strokeWidth="4"
        animate={{ scale: [1, 1.12, 1], opacity: [1, 0.5, 1] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
      />

      {/* Sparks */}
      {[...Array(4)].map((_, i) => (
        <motion.line
          key={i}
          x1={i % 2 === 0 ? 100 + i * 2 : 150 - i * 2}
          y1={i < 2 ? 45 : 65}
          x2={i % 2 === 0 ? 94 + i * 2 : 157 - i * 2}
          y2={i < 2 ? 48 : 69}
          stroke={i % 2 === 0 ? '#fbbf24' : '#f87171'}
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0] }}
          transition={{ delay: 1 + i * 0.2, repeat: Infinity, duration: 1.5 }}
        />
      ))}
    </svg>
  );
}

export default function NotFound() {
  return (
    <div className="pt-30 relative flex flex-col items-center justify-center min-h-screen bg-white dark:bg-[#0f172a] text-black dark:text-white overflow-hidden px-6">
      {/* Background floating glows */}
      <motion.div
        className="absolute w-[600px] h-[400px] bg-blue-500 blur-[100px] opacity-20 dark:opacity-30 -top-24 left-1/2 -translate-x-1/2 z-0 rounded-full"
        animate={{ scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-[400px] h-[300px] bg-purple-600 blur-[90px] opacity-10 dark:opacity-20 bottom-10 right-0 z-0 rounded-full"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Title */}
      <motion.h1
        className="text-[5rem] sm:text-[7rem] font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-600 to-sky-300 drop-shadow-xl z-10"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        404
      </motion.h1>

      <BrokenWires />

      {/* Description */}
      <motion.p
        className="mt-6 text-center text-lg sm:text-xl text-gray-600 dark:text-slate-300 max-w-xl z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <span className="font-semibold text-sky-500 dark:text-sky-400">Oh no!</span> You're lost in the static.<br />
        The signal is broken, and we couldn’t find the page.
      </motion.p>

      {/* Button */}
      <motion.div
        className="mt-10 z-10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
      </motion.div>

      {/* Footer */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-500 dark:text-slate-500 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 2 }}
      >
        &copy; {new Date().getFullYear()} PaperSenses.⚡
      </motion.div>
    </div>
  );
}
