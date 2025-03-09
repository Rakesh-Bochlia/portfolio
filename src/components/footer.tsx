"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export function Footer() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === 'dark' : true;
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${isDark ? 'bg-darkbg text-offwhite' : 'text-gray-900 bg-white'}`}>
      {/* Main CTA Section */}
      <div className="container px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${isDark ? 'text-offwhite' : 'text-gray-900'}`}>
            LET&apos;S BUILD SOMETHING
            <br />
            <span className="italic">AMAZING</span> TOGETHER
          </h2>
          <Link
            href="#contact"
            className="inline-flex gap-2 items-center mt-8 text-lg font-medium transition-colors text-teal hover:text-teal/80"
          >
            <span>START A PROJECT</span>
            <span className="text-2xl">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {/* Logo and Social Links */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold font-heading">
                Rakesh Kumar
              </span>
            </Link>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className={`w-10 h-10 rounded-full border ${isDark ? 'border-white/10 hover:bg-teal hover:border-teal' : 'border-gray-200 hover:bg-teal hover:border-teal'} flex items-center justify-center transition-colors group`}
                aria-label="Facebook"
              >
                <FaFacebookF className={`w-4 h-4 ${isDark ? 'text-offwhite' : 'text-gray-600'} group-hover:text-white`} />
              </a>
              <a
                href="#"
                className={`w-10 h-10 rounded-full border ${isDark ? 'border-white/10 hover:bg-teal hover:border-teal' : 'border-gray-200 hover:bg-teal hover:border-teal'} flex items-center justify-center transition-colors group`}
                aria-label="Twitter"
              >
                <FaTwitter className={`w-4 h-4 ${isDark ? 'text-offwhite' : 'text-gray-600'} group-hover:text-white`} />
              </a>
              <a
                href="#"
                className={`w-10 h-10 rounded-full border ${isDark ? 'border-white/10 hover:bg-teal hover:border-teal' : 'border-gray-200 hover:bg-teal hover:border-teal'} flex items-center justify-center transition-colors group`}
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className={`w-4 h-4 ${isDark ? 'text-offwhite' : 'text-gray-600'} group-hover:text-white`} />
              </a>
              <a
                href="#"
                className={`w-10 h-10 rounded-full border ${isDark ? 'border-white/10 hover:bg-teal hover:border-teal' : 'border-gray-200 hover:bg-teal hover:border-teal'} flex items-center justify-center transition-colors group`}
                aria-label="Instagram"
              >
                <FaInstagram className={`w-4 h-4 ${isDark ? 'text-offwhite' : 'text-gray-600'} group-hover:text-white`} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isDark ? 'text-offwhite' : 'text-gray-900'}`}>
              NAVIGATION
            </h3>
            <ul className="space-y-3">
              {["HOME", "ABOUT", "PORTFOLIO",  "CONTACT"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className={`${isDark ? 'text-offwhite/70 hover:text-teal' : 'text-gray-600 hover:text-teal'} transition-colors`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isDark ? 'text-offwhite' : 'text-gray-900'}`}>
              CONTACT
            </h3>
            <ul className="space-y-3">
              <li>
                <span className={`${isDark ? 'text-offwhite/70' : 'text-gray-600'}`}>M : </span>
                <a
                  href="tel:+6280965689"
                  className={`${isDark ? 'text-offwhite hover:text-teal' : 'text-gray-900 hover:text-teal'} transition-colors`}
                >
                  +91 6280965689
                </a>
              </li>
              <li>
                <span className={`${isDark ? 'text-offwhite/70' : 'text-gray-600'}`}>T : </span>
                <span className={`${isDark ? 'text-offwhite' : 'text-gray-900'}`}>+91 7696957650</span>
              </li>
              <li>
                <span className={`${isDark ? 'text-offwhite/70' : 'text-gray-600'}`}>E : </span>
                <a
                  href="mailto:rakeshbochlia6280@gmail.com"
                  className={`${isDark ? 'text-offwhite hover:text-teal' : 'text-gray-900 hover:text-teal'} transition-colors`}
                >
                  rakeshbochlia6280@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isDark ? 'text-offwhite' : 'text-gray-900'}`}>
              ADDRESS
            </h3>
            <address className={`not-italic ${isDark ? 'text-offwhite/70' : 'text-gray-600'}`}>
              <p>Village: Bareka, Teh: Fazilka, Dist: Fazilka, Punjab</p>
              <p>Pincode: 152123</p>
            </address>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={`border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
        <div className="container px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <p className={`text-sm text-center ${isDark ? 'text-offwhite/70' : 'text-gray-600'}`}>
            © {currentYear} All Rights Reserved | Designed & Developed by{" "}
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`text-sm transition-colors hover:text-teal/80`}
            >
              Rakesh Kumar
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
} 