"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";


export default function Hero() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const sidebarToggle = () => setSidebarOpen(!sidebarOpen);

  const getNavbar = () => {
    return (
      <div>
        {/* Navbar */}
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          <div className="relative mt-4">
            {" "}
            {/* relative ensures dropdown is inside sidebar */}
            {/* Profile Icon */}
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300 hover:border-white focus:outline-none"
            >
              <Image
                src="/images/my-image.JPG"
                alt="Profile"
                width={40}
                height={40}
                className="object-cover"
              />
            </button>
            {/* Dropdown */}
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-full bg-gray-800 rounded-lg shadow-lg z-50"
                >
                  <ul className="flex flex-col">
                    <li>
                      <a
                        href="/profile"
                        className="block px-4 py-3 text-gray-200 hover:text-white rounded-t-lg"
                        onClick={() => setOpen(false)}
                      >
                        Profile
                      </a>
                    </li>
                    {/* Add more dropdown items if needed */}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
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
            <motion.a
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer hover:text-white scroll-smooth"
              href="#about"
            >
              About
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer hover:text-white"
              id="projects"
            >
              Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer hover:text-white"
              id="contact"
            >
              Contact
            </motion.a>
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
                    id="home"
                  >
                    Home
                  </li>
                  <Link
                    onClick={sidebarToggle}
                    className="hover:text-white cursor-pointer"
                    href="#about"
                  >
                    About
                  </Link>
                  <li
                    onClick={sidebarToggle}
                    className="hover:text-white cursor-pointer"
                    id="projects"
                  >
                    Projects
                  </li>
                  <li
                    onClick={sidebarToggle}
                    className="hover:text-white cursor-pointer"
                    id="contact"
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
            Hi this is{" "}
            <span className="text-orange-500">Shoeb Akter Drisso</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            A passionate{" "}
            <span className="text-white font-semibold">
              Software Developer
            </span>{" "}
            from Rangpur, Bangladesh
          </p>

          {/* CTA Buttons & Social Links */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-6">
            {/* Action Buttons */}
            <div className="flex gap-4">
              <a
                href="/shoeb-akter-drisso-software-developer-resume.pdf"
                download
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg shadow-lg text-lg transition"
              >
                Download Resume
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 text-gray-400 text-2xl">
              <a
                href="https://github.com/sadrisso"
                target="_blank"
                className="hover:text-white transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/sadrisso"
                target="_blank"
                className="hover:text-white transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:sadrisso2000@gmail.com"
                className="hover:text-white transition"
              >
                <FaEnvelope />
              </a>
            </div>
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
