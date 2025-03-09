"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    position: "Product Manager at TechCorp",
    image: "/testimonials/testimonial-1.jpg",
    text: "Rakesh is an exceptional frontend developer who consistently delivers high-quality work. His attention to detail and ability to translate designs into functional interfaces is impressive. He's also great at communicating and meeting deadlines.",
  },
  {
    id: 2,
    name: "Amit Patel",
    position: "CTO at StartupX",
    image: "/testimonials/testimonial-2.jpg",
    text: "Working with Rakesh was a pleasure. He quickly understood our requirements and delivered a beautiful, responsive website that exceeded our expectations. His technical skills and problem-solving abilities are top-notch.",
  },
  {
    id: 3,
    name: "Neha Gupta",
    position: "UI/UX Designer at DesignHub",
    image: "/testimonials/testimonial-3.jpg",
    text: "As a designer, I appreciate developers who can bring my designs to life exactly as envisioned. Rakesh does this flawlessly. His attention to detail and commitment to pixel-perfect implementation make him a designer's dream developer.",
  },
  {
    id: 4,
    name: "Rajesh Verma",
    position: "Project Lead at WebSolutions",
    image: "/testimonials/testimonial-4.jpg",
    text: "Rakesh is not just a skilled developer but also a great team player. He's always willing to help others, share knowledge, and contribute ideas to improve the project. His positive attitude and technical expertise make him an asset to any team.",
  },
  {
    id: 5,
    name: "Ananya Singh",
    position: "Founder of EduTech",
    image: "/testimonials/testimonial-5.jpg",
    text: "We hired Rakesh to build our educational platform's frontend, and he delivered beyond our expectations. The interface is intuitive, responsive, and performs excellently. He also provided valuable suggestions that improved the overall user experience.",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Testimonials
          </h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            What clients and colleagues say about working with me.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Desktop view - 3 cards */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              currentIndex,
              (currentIndex + 1) % testimonials.length,
              (currentIndex + 2) % testimonials.length,
            ].map((index) => {
              const testimonial = testimonials[index];
              return (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                >
                  <FaQuoteLeft className="text-blue-500 dark:text-blue-400 text-3xl mb-4" />
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile view - single card with navigation */}
          <div className="md:hidden">
            <motion.div
              key={testimonials[currentIndex].id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <FaQuoteLeft className="text-blue-500 dark:text-blue-400 text-3xl mb-4" />
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {testimonials[currentIndex].text}
              </p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonials[currentIndex].position}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 