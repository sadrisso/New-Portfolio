"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay },
    viewport: { once: true },
  });

  return (
    <section className="bg-gray-900 text-gray-200 min-h-screen px-6 md:px-12 py-20">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header with Back Button */}
        <motion.div {...fadeUp(0)} className="flex items-center juseven gap-4">
          <button
            onClick={() => router.push("/")}
            className="text-orange-400 hover:text-white transition-colors"
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h1 className="text-2xl md:text-4xl font-extrabold text-white">Profile</h1>
        </motion.div>


        {/* Profile Info */}
        <motion.div
          {...fadeUp(0.2)}
          className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12"
        >
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-xl ring-2 ring-orange-500/40">
            <Image
              src="/images/my-image-1.jpeg"
              alt="Shoeb Akter Drisso"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 space-y-2">
            <h2 className="text-4xl font-extrabold text-white">
              Shoeb Akter Drisso
            </h2>
            <p className="text-gray-400 font-medium text-lg">
              Software Developer (React, Next.js, TypeScript) | MERN Stack |
              Learning by Doing
            </p>
            <p className="text-gray-500 leading-relaxed text-xs">
              Rangpur Division, Bangladesh
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <span className="bg-gray-800/50 px-4 py-1 rounded-full text-sm text-orange-400">
                React
              </span>
              <span className="bg-gray-800/50 px-4 py-1 rounded-full text-sm text-orange-400">
                Redux
              </span>
              <span className="bg-gray-800/50 px-4 py-1 rounded-full text-sm text-orange-400">
                Next.js
              </span>
              <span className="bg-gray-800/50 px-4 py-1 rounded-full text-sm text-orange-400">
                Tailwindcss
              </span>
              <span className="bg-gray-800/50 px-4 py-1 rounded-full text-sm text-orange-400">
                TypeScript
              </span>
              <span className="bg-gray-800/50 px-4 py-1 rounded-full text-sm text-orange-400">
                Node.js
              </span>
              <span className="bg-gray-800/50 px-4 py-1 rounded-full text-sm text-orange-400">
                Express.js
              </span>
              <span className="bg-gray-800/50 px-4 py-1 rounded-full text-sm text-orange-400">
                MongoDB
              </span>
            </div>
          </div>
        </motion.div>



        {/* Education Section */}
        <motion.div {...fadeUp(0.6)}>
          <h2 className="text-3xl font-bold text-orange-400 mb-6">Education</h2>
          <div className="space-y-4">
            <div className="bg-gray-800/50 p-6 rounded-xl shadow-md hover:bg-gray-800 transition">
              <h3 className="text-xl font-semibold text-white">
                BBA - National University
              </h3>
              <p className="text-gray-300">Accounting, 4th Year Student</p>
              <span className="text-gray-400 text-sm">2020 - Present</span>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl shadow-md hover:bg-gray-800 transition">
              <h3 className="text-xl font-semibold text-white">
                HSC - Rangpur Govt City College
              </h3>
              <p className="text-gray-300">Business Studies</p>
              <span className="text-gray-400 text-sm">2018 - 2020</span>
            </div>
          </div>
        </motion.div>



        {/* Achievements / Skills Section */}
        <motion.div {...fadeUp(0.8)}>
          <h2 className="text-3xl font-bold text-orange-400 mb-6">
            Achievements & Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-xl shadow-md hover:bg-gray-800 transition">
              <h3 className="text-lg font-semibold text-white mb-2">
                Leadership
              </h3>
              <p className="text-gray-300">
                Captained district-level cricket team, managing teammates and
                strategies effectively.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl shadow-md hover:bg-gray-800 transition">
              <h3 className="text-lg font-semibold text-white mb-2">
                Teamwork & Collaboration
              </h3>
              <p className="text-gray-300">
                Learned to work efficiently in team settings, both in sports and
                coding projects.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl shadow-md hover:bg-gray-800 transition">
              <h3 className="text-lg font-semibold text-white mb-2">
                Time Management
              </h3>
              <p className="text-gray-300">
                Balanced studies, coding, and extracurricular activities
                effectively.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl shadow-md hover:bg-gray-800 transition">
              <h3 className="text-lg font-semibold text-white mb-2">
                Technical Skills
              </h3>
              <p className="text-gray-300">
                MERN Stack, React, Redux, Next.js, Node.js, Express.js, MongoDB,
                TypeScript.
              </p>
            </div>
          </div>
        </motion.div>



        {/* Experience Section */}
        <motion.div {...fadeUp(0.4)}>
          <h2 className="text-3xl font-bold text-orange-400 mb-6">
            Experience
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-800/50 p-6 rounded-xl shadow-md hover:bg-gray-800 transition">
              <h3 className="text-xl font-semibold text-white">
                District Cricket Team - Captain
              </h3>
              <p className="text-gray-300">
                Led the district cricket team, enhancing leadership, teamwork,
                and time management skills.
              </p>
              <span className="text-gray-400 text-sm">2018 - 2020</span>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl shadow-md hover:bg-gray-800 transition">
              <h3 className="text-xl font-semibold text-white">
                Divisional Cricket Team - Player
              </h3>
              <p className="text-gray-300">
                Represented the division in competitive cricket, building
                discipline, focus, and collaboration skills.
              </p>
              <span className="text-gray-400 text-sm">2020 - 2023</span>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div {...fadeUp(1)} className="text-center mt-10">
          <a
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg border-2 border-orange-500 text-orange-500 font-medium text-lg transition-colors duration-300 hover:bg-orange-500 hover:text-white"
          >
            Connect with Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
