"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 85 },
  { name: "JAVASCRIPT", level: 65 },
  { name: "BOOTSTRAP", level: 90 },
  { name: "TAILWIND CSS", level: 80 },
  { name: "REACT JS", level: 70 },
  { name: "NEXT JS", level: 70 },
  { name: "WORDPRESS", level: 85 },
  { name: "SHOPIFY", level: 75 },
  { name: "WEBFLOW", level: 78 },
  { name: "WIX", level: 60 },
  { name: "SQUARESPACE", level: 40 },
];

export function SkillsSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === 'dark' : true;

  return (
    <section className={`relative py-20 ${isDark ? 'bg-darkbg' : 'bg-gray-100'} overflow-hidden`}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className={`absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,${isDark ? 'rgba(10,10,10,0.9)' : 'rgba(240,240,240,0.5)'}_0%,transparent_100%)]`} />
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-block px-3 py-1 mb-4 text-sm font-semibold rounded-full bg-coral/10 text-coral">
            PROFESSIONAL SKILL
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-darktext'}`}>
            Innovative Solution to <span className="text-teal">Enhance</span>.
          </h2>
          <p className={`mt-4 text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Innovative Solutions to Boost your Creative Project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex justify-between items-center mb-3">
                <span className={`text-base font-medium ${isDark ? 'text-white' : 'text-darktext'}`}>
                  {skill.name}
                </span>
                <span className={`text-base font-medium ${isDark ? 'text-teal' : 'text-teal'}`}>
                  {skill.level}%
                </span>
              </div>
              <div className={`h-2.5 w-full ${isDark ? 'bg-[#1A1A1A]' : 'bg-teal-200'} rounded-full overflow-hidden`}>
                <motion.div
                  className="h-full rounded-full bg-teal"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 