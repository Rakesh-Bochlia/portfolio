"use client";

import { motion } from "framer-motion";
import { CalendarIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const blogPosts = [
  {
    id: 1,
    title: "Building Accessible React Applications",
    excerpt:
      "Learn how to create React applications that are accessible to all users, including those with disabilities.",
    date: "May 15, 2023",
    image: "/blog/accessibility.jpg",
    url: "https://medium.com/@rakesh-kumar/building-accessible-react-applications",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Optimizing Performance in Next.js Applications",
    excerpt:
      "Explore techniques to improve the performance of your Next.js applications, from code splitting to image optimization.",
    date: "April 2, 2023",
    image: "/blog/performance.jpg",
    url: "https://dev.to/rakesh-kumar/optimizing-performance-in-nextjs-applications",
    readTime: "10 min read",
  },
  {
    id: 3,
    title: "State Management in 2023: Which Solution to Choose?",
    excerpt:
      "A comprehensive comparison of modern state management solutions for React applications, including Redux, Zustand, and Jotai.",
    date: "March 18, 2023",
    image: "/blog/state-management.jpg",
    url: "https://hashnode.com/@rakesh-kumar/state-management-in-2023",
    readTime: "12 min read",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Latest Blog Posts
          </h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I write about web development, frontend technologies, and best practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 w-full bg-gradient-to-br from-indigo-500 to-purple-600">
                {/* Blog image placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold p-4 text-center">
                  {post.title}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
                >
                  Read More
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://blog.rakeshkumar.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            View All Posts
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
} 