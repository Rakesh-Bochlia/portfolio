"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";

export function AboutSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === 'dark' : true;

  return (
    <section id="about" className={`relative py-20 ${isDark ? 'bg-[#191919]' : 'bg-lightbg'} overflow-hidden`}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className={`absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,${isDark ? 'rgba(20,20,20,0.5)' : 'rgba(240,240,240,0.5)'}_0%,transparent_100%)]`} />
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2 lg:gap-20">
          {/* Left side - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 className={`text-7xl lg:text-8xl font-bold mb-8 ${isDark ? 'text-white' : 'text-darktext'}`}>
              <span className="block text-center" style={{ WebkitTextStroke: '1px currentColor', WebkitTextFillColor: 'transparent' }}>INNOVATIVE</span>
              <span className="block mt-2 text-center lg:text-end">CODE</span>
              <span className="block mt-2 text-center lg:text-start">TRANSFORM</span>
            </h2>

            <div className={`space-y-6 text-lg text-center lg:text-end ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>
                We are a passionate team of designers, developers, and strategists dedicated to crafting cutting-edge digital solutions. Our approach combines creativity, technology, and data-driven insights to create web experiences that not only look great but also drive meaningful results.
              </p>
              <p>
                With expertise in modern frameworks and UI/UX best practices, we help brands establish a strong online presence by delivering high-performance, interactive, and scalable web applications.
              </p>
            </div>

          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="relative aspect-square">
              <Image
                src="/images/about-us.webp"
                alt="Creative workspace with coffee"
                fill
                className={`object-cover rounded-lg ${isDark ? 'brightness-90' : 'brightness-100'}`}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className={`absolute inset-0 rounded-lg ${isDark ? 'bg-gradient-to-tr to-transparent from-darkbg/50' : 'bg-gradient-to-tr to-transparent from-lightbg/30'}`} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 