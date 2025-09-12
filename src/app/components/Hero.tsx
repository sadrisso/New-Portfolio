"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const sidebarToggle = () => setSidebarOpen((prev) => !prev);

  const getNavbar = () => {
    return (
      <div>
        {/* Navbar */}
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          <div className="text-mg md:text-xl font-bold text-orange-400">
            Shoeb Akter Drisso
          </div>

          {/* Desktop Links */}
          <motion.ul
            className="hidden md:flex gap-8 text-gray-300"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer hover:text-white"
            >
              Home
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer hover:text-white"
            >
              About
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer hover:text-white"
            >
              Projects
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer hover:text-white"
            >
              Contact
            </motion.li>
          </motion.ul>

          {/* Mobile Hamburger (unchanged) */}
          <div className="md:hidden">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Sidebar with Motion */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setSidebarOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="fixed top-0 left-0 w-64 h-full bg-gray-900 p-6 shadow-lg z-50"
                onClick={(e) => e.stopPropagation()}
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "tween", duration: 0.3 }}
              >
                <button
                  className="text-gray-300 mb-8"
                  onClick={() => setSidebarOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <ul className="flex flex-col gap-6 text-gray-300">
                  <li
                    onClick={sidebarToggle}
                    className="hover:text-white cursor-pointer"
                  >
                    Home
                  </li>
                  <li
                    onClick={sidebarToggle}
                    className="hover:text-white cursor-pointer"
                  >
                    About
                  </li>
                  <li
                    onClick={sidebarToggle}
                    className="hover:text-white cursor-pointer"
                  >
                    Projects
                  </li>
                  <li
                    onClick={sidebarToggle}
                    className="hover:text-white cursor-pointer"
                  >
                    Contact
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white overflow-hidden">
      {getNavbar()}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Take Control of <span className="text-orange-400">Your Career</span>
            . Build the{" "}
            <span className="text-orange-400">Future You Deserve</span>.
          </h1>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            I’m Shoeb Akter Drisso, a passionate{" "}
            <span className="text-white font-semibold">
              MERN Stack Developer
            </span>{" "}
            skilled in React, Next.js, Node.js, and MongoDB. I love building
            clean, scalable, and user-focused web applications.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg shadow-lg text-lg">
              View My Work
            </button>
            <button className="border-gray-500 text-gray-300 hover:bg-gray-800 hover:text-white px-6 py-3 rounded-lg text-lg">
              Contact Me
            </button>
          </div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 lg:mt-0 relative"
        >
          <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden shadow-lg">
            <Image
              src="/images/my-image.JPG"
              alt="Shoeb Akter Drisso"
              fill
              className="object-cover scale-110"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
