"use client";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering after component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Use resolvedTheme instead of theme to get the actual applied theme
  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`flex items-center justify-center transition-colors ${
        isDark 
          ? "text-gray-300 hover:text-teal" 
          : "text-gray-600 hover:text-teal"
      }`}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <div className="flex items-center">
          <SunIcon className="h-5 w-5 mr-1" />
        </div>
      ) : (
        <div className="flex items-center">
          <MoonIcon className="h-5 w-5 mr-1" />
        </div>
      )}
    </button>
  );
} 