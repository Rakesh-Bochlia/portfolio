"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

const navLinks = [
  { number: "01", name: "Home", href: "/" },
  { number: "02", name: "About", href: "#about" },
  { number: "03", name: "Portfolio", href: "#portfolio" },
  { number: "04", name: "Contact", href: "#contact" },
];

// Animation variants for the menu container
const menuVariants = {
  closed: {
    opacity: 0,
    clipPath: "inset(0 0 100% 0)",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
  open: {
    opacity: 1,
    clipPath: "inset(0 0 0 0)",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      staggerChildren: 0.07,
      delayChildren: 0.3,
      when: "beforeChildren",
    },
  },
};

// Animation variants for navigation links
const linkVariants = {
  closed: {
    opacity: 0,
    y: 50,
    transition: { 
      duration: 0.3,
      ease: [0.76, 0, 0.24, 1]
    }
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1]
    }
  },
};

// Animation variants for the right side content
const rightSideVariants = {
  closed: {
    opacity: 0,
    x: 50,
    transition: { 
      duration: 0.3,
      ease: [0.76, 0, 0.24, 1]
    }
  },
  open: {
    opacity: 1,
    x: 0,
    transition: { 
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.3
    }
  },
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const isDark = mounted ? resolvedTheme === 'dark' : true;

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? isDark 
              ? "bg-darkbg/95 backdrop-blur-md shadow-sm" 
              : "bg-white/95 backdrop-blur-md shadow-sm"
            : isDark 
              ? "bg-darkbg" 
              : "bg-white"
        }`}
      >
        <div className="mx-auto w-full px-6 lg:px-12">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className={`font-heading text-2xl font-bold ${isDark ? 'text-white' : 'text-darktext'}`}>
                  Rakesh Kumar
                </span>
              </Link>
            </div>

            <div className="flex items-center gap-6">
              {mounted && <ThemeToggle />}
              
              <button
                type="button"
                className={`flex items-center ${isDark ? 'text-white hover:text-teal' : 'text-darktext hover:text-teal'}`}
                onClick={toggleMenu}
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6 mr-2" />
                ) : (
                  <>
                    <div className="flex flex-col space-y-1">
                      <div className={`h-0.5 w-6 ${isDark ? 'bg-white' : 'bg-darktext'}`}></div>
                      <div className={`h-0.5 w-6 ${isDark ? 'bg-white' : 'bg-darktext'}`}></div>
                    </div>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-[100] overflow-hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className={`absolute inset-0 ${isDark ? 'bg-darkbg' : 'bg-white'}`}>
              <motion.button
                onClick={toggleMenu}
                className={`fixed top-6 right-6 p-2 ${isDark ? 'text-white hover:text-teal' : 'text-darktext hover:text-teal'} transition-colors z-[101]`}
                aria-label="Close menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <XMarkIcon className="h-8 w-8" />
              </motion.button>
              
              <div className="flex min-h-screen">
                <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
                  <nav className="space-y-8">
                    {navLinks.map((link, index) => (
                      <motion.div 
                        key={link.name}
                        variants={linkVariants}
                        custom={index}
                      >
                        <Link
                          href={link.href}
                          className={`group flex items-center text-2xl md:text-4xl font-medium ${isDark ? 'text-white hover:text-teal' : 'text-darktext hover:text-teal'} transition-colors`}
                          onClick={toggleMenu}
                        >
                          <span className="mr-4 text-sm text-teal opacity-70 group-hover:opacity-100">
                            {link.number}
                          </span>
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>
                
                <motion.div
                  className={`hidden md:flex w-1/2 p-12 flex-col justify-center ${isDark ? 'border-gray-800' : 'border-gray-200'} border-l`}
                  variants={rightSideVariants}
                >
                  <div className="space-y-12">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                    >
                      <h3 className="text-sm font-semibold text-teal mb-4">Address</h3>
                      <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
                        Village: Bareka, Teh: Fazilka,<br />
                        Dist: Fazilka, Punjab<br />
                        Pincode: 152123
                      </p>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                    >
                      <h3 className="text-sm font-semibold text-teal mb-4">Contact</h3>
                      <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm`}>+91 6280965689</p>
                      <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm`}>+91 7696957650</p>
                      <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm`}>rakeshbochlia6280@gmail.com</p>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9, duration: 0.5 }}
                    >
                      <h3 className="text-sm font-semibold text-teal mb-4">Social</h3>
                      <div className="flex flex-col space-y-2">
                        <a href="#" className={`${isDark ? 'text-gray-300 hover:text-teal' : 'text-gray-600 hover:text-teal'}`}>GitHub</a>
                        <a href="#" className={`${isDark ? 'text-gray-300 hover:text-teal' : 'text-gray-600 hover:text-teal'}`}>LinkedIn</a>
                        <a href="#" className={`${isDark ? 'text-gray-300 hover:text-teal' : 'text-gray-600 hover:text-teal'}`}>Twitter</a>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 