'use client';

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function MarqueeBanner() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === 'dark' : true;

  return (
    <div className={`w-full ${isDark ? 'bg-darkbg' : 'bg-darkbg/5'} py-6 overflow-hidden border-t border-b ${isDark ? 'border-teal/20' : 'border-teal/10'}`}>
      <div className="flex whitespace-nowrap">
        <motion.div
          className={`flex items-center space-x-8 ${isDark ? 'text-offwhite' : 'text-darktext'} font-semibold`}
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="text-5xl flex items-center space-x-8">
              <span className="flex items-center">
                <span className="text-teal mr-2">→</span>
                <span className={`${isDark ? 'text-offwhite/90' : 'text-darktext/90'} hover:text-teal transition-colors`}>WEB DESIGNER</span>
              </span>
              <span className="flex items-center">
                <span className="text-teal mr-2">→</span>
                <span className="block" style={{ WebkitTextStroke: '1px currentColor', WebkitTextFillColor: 'transparent' }}>FRONT-END DEVELOPER</span>
              </span>
              <span className="flex items-center">
                <span className="text-teal mr-2">→</span>
                <span className={`${isDark ? 'text-offwhite/90' : 'text-darktext/90'} hover:text-teal transition-colors`}>UI/UX DEVELOPER</span>
              </span>
              <span className="flex items-center">
                <span className="text-teal mr-2">→</span>
                <span className="block" style={{ WebkitTextStroke: '1px currentColor', WebkitTextFillColor: 'transparent' }}>FRONT-END DEVELOPER</span>
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 