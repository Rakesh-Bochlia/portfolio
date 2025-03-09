"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "HEADPHONES",
    category: "Production",
    image: "/projects/project.webp",
    link: "/projects/headphones"
  },
  {
    title: "DOG CHOW",
    category: "Photography & Production",
    image: "/projects/project.webp",
    link: "/projects/dog-chow"
  },
  {
    title: "OPEN RUN",
    category: "Production",
    image: "/projects/project.webp",
    link: "/projects/open-run"
  }
];

// Duplicate projects to create a smooth infinite scroll effect
const extendedProjects = [...projects, ...projects, ...projects];

export function ProjectsSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(projects.length);
  const [direction, setDirection] = useState(0);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === 'dark' : true;

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "33%" : "-33%",
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? "33%" : "-33%",
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + newDirection;
      // When reaching the end of extended projects, jump back to middle set
      if (newIndex >= extendedProjects.length - projects.length) {
        return projects.length;
      }
      // When reaching the start of extended projects, jump to middle set
      if (newIndex < projects.length) {
        return extendedProjects.length - projects.length * 2;
      }
      return newIndex;
    });
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const visibleProjects = extendedProjects.slice(currentIndex - 1, currentIndex + 2);

  return (
    <section className={`relative py-20 ${isDark ? 'bg-[#191919]' : 'bg-gray-100'} overflow-hidden`}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className={`absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,${isDark ? 'rgba(10,10,10,0.9)' : 'rgba(240,240,240,0.5)'}_0%,transparent_100%)]`} />
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 mb-16 md:flex-row md:justify-between md:items-end">
          <div>
            <div className="inline-block px-3 py-1 mb-4 text-sm font-semibold rounded-full bg-coral/10 text-coral">
              OUR WORK
            </div>
            <h2 className={`text-4xl md:text-6xl font-bold ${isDark ? 'text-white' : 'text-darktext'}`}>
              OUR LATEST<br />
              <span className="text-coral">AWESOME DESIGNS</span>
            </h2>
          </div>
          <Link 
            href="/projects"
            className={`hidden md:flex items-center space-x-2 ${isDark ? 'text-white' : 'text-darktext'} hover:text-coral transition-colors whitespace-nowrap`}
          >
            <span className="text-lg font-medium">VIEW ALL WORK</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="relative h-[480px] md:h-[500px]">
          <div className="overflow-hidden relative h-full rounded-xl">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full h-full"
              >
                <div className="grid grid-cols-1 gap-8 h-full md:grid-cols-3">
                  {visibleProjects.map((project, index) => (
                    <div key={`${project.title}-${currentIndex}-${index}`} className="relative">
                      <Link href={project.link} className="block h-full group">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                            priority
                          />
                          <div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-500 from-black/50 group-hover:opacity-100" />
                        </div>
                        <div className="mt-4">
                          <p className={`text-sm font-medium ${isDark ? 'text-coral' : 'text-coral'}`}>
                            {project.category}
                          </p>
                          <h3 className={`text-xl font-bold mt-2 ${isDark ? 'text-white' : 'text-darktext'} group-hover:text-coral transition-colors`}>
                            {project.title}
                          </h3>
                          <div className="flex items-center mt-3 text-coral">
                            <span className="text-sm font-medium">View Case</span>
                            <svg className="ml-2 w-4 h-4 transition-transform transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex absolute right-0 left-0 -bottom-12 justify-between items-center">
            <div className="flex gap-3 items-center">
              <button
                onClick={() => paginate(-1)}
                className={`flex justify-center items-center w-10 h-10 rounded-full backdrop-blur-sm transition-all bg-black/20 hover:bg-black/30 group`}
              >
                <svg className="w-5 h-5 text-white transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => paginate(1)}
                className={`flex justify-center items-center w-10 h-10 rounded-full backdrop-blur-sm transition-all bg-black/20 hover:bg-black/30 group`}
              >
                <svg className="w-5 h-5 text-white transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-1.5">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const targetIndex = index + projects.length;
                    setDirection(targetIndex > currentIndex ? 1 : -1);
                    setCurrentIndex(targetIndex);
                  }}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    (currentIndex - projects.length) % projects.length === index
                      ? 'w-6 bg-white' 
                      : 'w-3 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <Link 
          href="/projects"
          className={`flex md:hidden items-center justify-center space-x-2 mt-16 ${isDark ? 'text-white' : 'text-darktext'} hover:text-coral transition-colors`}
        >
          <span className="text-lg font-medium">VIEW ALL WORK</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
} 