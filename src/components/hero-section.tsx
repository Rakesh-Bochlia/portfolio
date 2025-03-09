"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FaPlay, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Image from "next/image";

export function HeroSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === 'dark' : true;

  const socialLinks = [
    { icon: FaGithub, href: "#", label: "GitHub" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
  ];

  const skills = [
    { name: "React", position: { top: "10%", left: "-15%" } },
    { name: "Next.js", position: { top: "25%", right: "-15%" } },
    { name: "TypeScript", position: { top: "40%", left: "-15%" } },
    { name: "Tailwind", position: { top: "55%", right: "-15%" } },
  ];

  return (
    <section className={`relative min-h-[calc(100vh-5rem)] flex items-center py-12 md:py-20 ${isDark ? 'bg-sectionbg' : 'bg-gray-50'} overflow-hidden`}>
      {/* Animated background elements */}
      <div className="overflow-hidden absolute inset-0">
        <motion.div 
          className={`absolute top-[10%] left-[5%] w-[40rem] h-[40rem] rounded-full ${isDark ? 'bg-teal/5' : 'bg-teal/10'}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.div 
          className={`absolute bottom-[-20%] right-[-10%] w-[50rem] h-[50rem] rounded-full ${isDark ? 'bg-coral/5' : 'bg-coral/10'}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
        />
        <div className={`absolute inset-0 ${isDark ? 'bg-[radial-gradient(circle_at_center,transparent_0%,#131313_70%)]' : 'bg-[radial-gradient(circle_at_center,transparent_0%,#f8fafc_70%)]'}`} />
      </div>

      {/* Social links sidebar */}
      <motion.div 
        className="hidden fixed left-4 top-1/2 z-50 flex-col gap-6 -translate-y-1/2 md:left-8 md:flex"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            className={`w-10 h-10 rounded-full border ${isDark ? 'border-teal/20' : 'border-teal/30'} flex items-center justify-center text-teal hover:bg-teal hover:text-white transition-all duration-300`}
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
          >
            <social.icon className="w-4 h-4" />
          </motion.a>
        ))}
      </motion.div>
      
      <div className="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid relative z-10 grid-cols-1 gap-8 items-center pt-16 lg:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Left side - Text content */}
          <div className="order-2 text-left lg:pr-6 xl:pr-12 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`inline-flex items-center gap-2 ${isDark ? 'bg-teal/10' : 'bg-teal/5'} rounded-full px-4 py-2 text-teal mb-6`}
            >
              <span className="w-2 h-2 rounded-full animate-pulse bg-teal" />
              <span className="text-sm font-medium">Available for Work</span>
            </motion.div>
            
            <motion.h1
              className={`font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ${isDark ? 'text-offwhite' : 'text-gray-900'} mb-6 leading-tight`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="block mb-2 text-xl text-teal">Hello, I'm</span>
              RAKESH{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-coral">
                KUMAR
              </span>
            </motion.h1>
            
            <motion.p
              className={`text-lg md:text-xl ${isDark ? 'text-offwhite/70' : 'text-gray-600'} mb-8 md:mb-10 max-w-xl leading-relaxed`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I'm a creative Frontend Developer specializing in crafting high-performance, interactive, and visually stunning websites & applications.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-4 md:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                href="#contact"
                className="inline-flex overflow-hidden relative justify-center items-center px-6 py-3 text-base font-medium bg-gradient-to-r rounded-full transition-all duration-300 group md:px-8 from-teal to-coral"
              >
                <span className="absolute inset-0 transition-colors duration-300 bg-white/10 group-hover:bg-transparent" />
                <span className="relative text-white">Let's Collaborate</span>
              </Link>
              
              <button
                className={`group inline-flex items-center justify-center px-4 md:px-6 py-3 text-base font-medium ${isDark ? 'text-offwhite hover:text-teal' : 'text-gray-700 hover:text-teal'} transition-colors`}
              >
                <span className={`flex items-center justify-center w-10 h-10 rounded-full ${isDark ? 'bg-teal/10' : 'bg-teal/5'} group-hover:bg-teal/20 transition-colors duration-300 mr-3`}>
                  <FaPlay className="w-3 h-3 text-teal" />
                </span>
                Watch Showreel
              </button>
            </motion.div>
            
            {/* Experience stats */}
            <motion.div
              className="grid grid-cols-2 gap-6 mt-12 md:mt-16 sm:grid-cols-3 md:gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="relative">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="absolute"
                />
                <div className="relative">
                  <h3 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-offwhite' : 'text-gray-900'}`}>2.5+</h3>
                  <p className={`text-sm ${isDark ? 'text-offwhite/70' : 'text-gray-600'}`}>Years Experience</p>
                </div>
              </div>
              
              <div className="relative">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                  className="absolute"
                />
                <div className="relative">
                  <h3 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-offwhite' : 'text-gray-900'}`}>50+</h3>
                  <p className={`text-sm ${isDark ? 'text-offwhite/70' : 'text-gray-600'}`}>Projects Done</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Right side - Creative image showcase */}
          <motion.div
            className="relative order-1 mx-auto mb-8 max-w-md lg:mx-0 lg:max-w-lg xl:max-w-xl lg:order-2 lg:mb-0"
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative w-full pt-[100%]">
              {/* Decorative elements */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r rounded-xl opacity-20 blur-2xl from-teal to-coral"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.3, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              
              {/* Main image container with diagonal lines */}
              <div className={`absolute inset-0 rounded-2xl ${isDark ? 'bg-sectionbg' : 'bg-gray-100'}`}>
                {/* Diagonal lines */}
                <div className="absolute inset-0 z-20">
                  <div className="absolute top-0 left-0 w-full h-full">
                    <div className={`absolute top-0 left-0 w-[200%] h-[1px] ${isDark ? 'bg-teal/30' : 'bg-teal/20'} rotate-45 translate-y-1/2`} />
                    <div className={`absolute bottom-0 right-0 w-[200%] h-[1px] ${isDark ? 'bg-coral/30' : 'bg-coral/20'} rotate-45 translate-y-1/2`} />
                  </div>
                </div>
                
                {/* Profile image */}
                <Image
                  src="/images/user.png"
                  alt="Rakesh Kumar - Frontend Developer"
                  fill
                  className={`object-cover object-center ${isDark ? 'mix-blend-luminosity' : 'mix-blend-normal'} hover:mix-blend-normal transition-all duration-300`}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />
                
                {/* Floating skill badges */}
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className={`skill-badge absolute ${isDark ? 'bg-darkbg/90' : 'bg-white/90'} backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm text-teal border ${isDark ? 'border-teal/20' : 'border-teal/30'}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                    style={skill.position}
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 