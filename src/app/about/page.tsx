"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function AboutMe() {
  const router = useRouter();

  // Animation helper
  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay },
    viewport: { once: true },
  });

  return (
    <section className="bg-gray-900 text-gray-200 min-h-screen px-6 md:px-12 py-20">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Intro with Back Button */}
        <motion.div
          {...fadeUp(0)}
          className="flex items-center justify-between"
        >
          {/* Back Arrow */}
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

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-white ml-4">
            About Me
          </h1>

          {/* Empty space to balance flex */}
          <div className="w-6" />
        </motion.div>

        {/* Intro Paragraph */}
        <motion.p
          {...fadeUp(0.1)}
          className="text-lg md:text-xl text-gray-300 leading-relaxed"
        >
          Hi, I’m{" "}
          <span className="text-orange-400 font-semibold">
            Shoeb Akter Drisso
          </span>
          , a passionate MERN Stack Developer from Rangpur, Bangladesh. I love
          building modern, user-friendly, and scalable web applications. Outside
          coding, I enjoy sports, biking, and exploring new technologies.
        </motion.p>



        {/* Education */}
        <motion.div {...fadeUp(0.3)}>
          <h2 className="text-3xl font-bold text-orange-400 mb-4">Education</h2>
          <div className="space-y-4">
            <div className="bg-gray-800/50 p-6 rounded-xl shadow-md hover:bg-gray-800 transition">
              <h3 className="text-xl font-semibold">
                BBA - National University
              </h3>
              <p className="text-gray-400">
                Accounting, 4th Year Student, Rangpur
              </p>
              <span className="text-sm text-gray-500">2020 - Present</span>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl shadow-md hover:bg-gray-800 transition">
              <h3 className="text-xl font-semibold">
                HSC - Rangpur Govt City College
              </h3>
              <p className="text-gray-400">Business Studies</p>
              <span className="text-sm text-gray-500">2018 - 2020</span>
            </div>
          </div>
        </motion.div>



        {/* Future Goals */}
        <motion.div {...fadeUp(0.7)}>
          <h2 className="text-3xl font-bold text-orange-400 mb-4">
            Future Goals (Next 5 Years)
          </h2>
          <div className="bg-gray-800/50 p-6 rounded-xl shadow-md hover:bg-gray-800 transition space-y-2">
            <p className="text-gray-300 text-lg">
              In the next 5 years, I aim to work remotely for a big tech
              company, take on challenging projects, and grow into a leadership
              role where I can guide and mentor a development team.
            </p>
            <p className="text-gray-300 text-lg">
              I want to continuously improve my skills, contribute to impactful
              projects, and stay on top of emerging web technologies.
            </p>
          </div>
        </motion.div>



        {/* Extracurricular Activities */}
        <motion.div {...fadeUp(0.6)}>
          <h2 className="text-3xl font-bold text-orange-400 mb-4">
            Extracurricular Activities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Cricket Achievement Card */}
            <div className="bg-gray-800/50 p-6 rounded-xl shadow-md hover:bg-gray-800 transition">
              <h3 className="text-xl font-semibold text-white mb-2">
                Cricket – District & Divisional Teams
              </h3>
              <p className="text-gray-300 mb-2">
                Represented my district and divisional cricket teams. Proud to
                have served as the **captain** at the district level.
              </p>
              <p className="text-gray-400">
                Through this experience, I developed key skills such as:
              </p>
              <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                <li>Leadership & Team Management</li>
                <li>Teamwork & Collaboration</li>
                <li>Time Management & Discipline</li>
                <li>Decision Making under Pressure</li>
              </ul>
              <p className="text-gray-300 mt-2">
                I believe these skills significantly contribute to my
                professional growth and enhance my ability to work in
                team-oriented environments.
              </p>
            </div>

            {/* Optional: Add Another Activity Card */}
            <div className="bg-gray-800/50 p-6 rounded-xl shadow-md hover:bg-gray-800 transition">
              <h3 className="text-xl font-semibold text-white mb-2">
                Other Activities
              </h3>
              <p className="text-gray-300">
                I actively participate in community events, sports, and tech
                meetups. These activities help me build networking skills,
                improve adaptability, and stay motivated in both personal and
                professional life.
              </p>
            </div>
          </div>
        </motion.div>



        {/* Hobbies */}
        <motion.div {...fadeUp(0.5)}>
          <h2 className="text-3xl font-bold text-orange-400 mb-4">Hobbies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Cricket", "Cycling", "Traveling", "Programming"].map(
              (hobby, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800/50 p-4 rounded-xl shadow-md text-center hover:bg-gray-800 transition"
                >
                  <p className="text-gray-300 font-medium">{hobby}</p>
                </div>
              )
            )}
          </div>
        </motion.div>



        {/* Call to Action */}
        <motion.div {...fadeUp(0.9)} className="text-center mt-10">
          <a
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg border-2 border-orange-500 text-orange-500 font-medium text-lg transition-colors duration-300 hover:bg-orange-500 hover:text-white"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
