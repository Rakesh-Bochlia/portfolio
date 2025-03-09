"use client";

import { motion } from "framer-motion";
import { BriefcaseIcon, CalendarIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const experiences = [
  {
    id: 1,
    company: "TechInnovate Solutions",
    position: "Senior Frontend Developer",
    duration: "Jan 2022 - Present",
    location: "Bangalore, India",
    description: [
      "Lead a team of 5 frontend developers in building and maintaining multiple web applications using React and Next.js.",
      "Implemented responsive designs and improved website performance by 40% through code optimization and lazy loading techniques.",
      "Collaborated with UX/UI designers to create intuitive user interfaces and seamless user experiences.",
      "Mentored junior developers and conducted code reviews to ensure code quality and best practices.",
    ],
  },
  {
    id: 2,
    company: "WebSphere Digital",
    position: "Frontend Developer",
    duration: "Mar 2020 - Dec 2021",
    location: "Bangalore, India",
    description: [
      "Developed and maintained client websites using React, Redux, and Tailwind CSS.",
      "Built reusable components and libraries for future use, reducing development time by 30%.",
      "Integrated RESTful APIs and GraphQL endpoints to fetch and display data.",
      "Implemented automated testing using Jest and React Testing Library, achieving 85% code coverage.",
    ],
  },
  {
    id: 3,
    company: "CreativeTech Studios",
    position: "Web Developer",
    duration: "Jun 2018 - Feb 2020",
    location: "Pune, India",
    description: [
      "Developed responsive websites for clients across various industries using HTML, CSS, JavaScript, and WordPress.",
      "Created custom WordPress themes and plugins to meet specific client requirements.",
      "Optimized website performance and implemented SEO best practices.",
      "Collaborated with the design team to implement pixel-perfect designs.",
    ],
  },
  {
    id: 4,
    company: "Digital Innovations",
    position: "Frontend Intern",
    duration: "Jan 2018 - May 2018",
    location: "Pune, India",
    description: [
      "Assisted in developing and maintaining client websites using HTML, CSS, and JavaScript.",
      "Learned and implemented modern frontend frameworks like React.",
      "Participated in team meetings and contributed ideas for improving user experience.",
      "Gained hands-on experience with version control systems and collaborative development workflows.",
    ],
  },
];

export function ExperienceSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === 'dark' : true;

  return (
    <section className={`relative min-h-screen py-20 ${isDark ? 'bg-sectionbg' : 'bg-gray-100'} overflow-hidden`}>
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
            WORK EXPERIENCE
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-darktext'}`}>
            Professional <span className="text-teal">Journey</span>
          </h2>
          <p className={`mt-4 text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            My career path in web development and design
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className={`absolute left-[15px] md:left-1/2 h-[calc(100%-2rem)] w-0.5 transform md:-translate-x-[calc(50%-7px)] ${
              isDark ? 'bg-teal/20' : 'bg-teal/30'
            } top-[30px]`}
          />

          {/* Experience items */}
          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <motion.div 
                  className={`absolute left-[10px] md:left-1/2 w-[14px] h-[14px] rounded-full bg-teal z-10 
                    transform md:-translate-x-1/2 top-[30px] md:top-7
                    ${isDark ? 'shadow-[0_0_15px_rgba(20,184,166,0.3)]' : 'shadow-[0_0_15px_rgba(20,184,166,0.2)]'}`}
                  whileInView={{
                    scale: [1, 1.2, 1],
                    transition: { duration: 1, repeat: Infinity }
                  }}
                  viewport={{ once: true }}
                />

                <div className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-start`}>
                  {/* Content */}
                  <div className={`w-full pl-8 md:pl-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                  }`}>
                    <div className={`p-6 md:p-8 rounded-xl ${
                      isDark 
                        ? 'bg-darkbg/50 shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-white/5' 
                        : 'bg-white/80 shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-black/5'
                    } backdrop-blur-sm border hover:border-teal/20 transition-colors duration-300`}>
                      <div className="flex flex-col gap-3 mb-6 sm:flex-row sm:items-center sm:justify-between">
                        <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-darktext'}`}>
                          {exp.position}
                        </h3>
                        <span className={`inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-full ${
                          isDark ? 'bg-teal/10 text-teal' : 'bg-teal/20 text-teal'
                        } whitespace-nowrap`}>
                          <CalendarIcon className="w-4 h-4 mr-1.5" />
                          {exp.duration}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-3 items-center mb-6">
                        <div className="flex items-center">
                          <BriefcaseIcon className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'} mr-2`} />
                          <span className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            {exp.company}
                          </span>
                        </div>
                        <span className={`text-sm text-gray-400`}>•</span>
                        <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {exp.location}
                        </span>
                      </div>

                      <ul className={`space-y-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className={`mr-2 text-lg leading-tight text-teal`}>•</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Empty div for layout */}
                  <div className="hidden w-1/2 md:block" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 