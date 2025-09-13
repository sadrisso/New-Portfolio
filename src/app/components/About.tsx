"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-black via-gray-900 to-gray-900 text-gray-200 py-20 md:py-28 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center">
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-xl ring-2 ring-orange-500/40">
            <Image
              src="/images/my-image-1.jpeg"
              alt="Shoeb Akter Drisso"
              fill
              className="object-cover opacity-90 scale-110 hover:scale-125 transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* Right - Content */}
        <div className="space-y-6">
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Hi, I’m{" "}
            <span className="text-orange-400 font-semibold">
              Shoeb Akter Drisso
            </span>
            , a passionate{" "}
            <span className="font-semibold text-white">
              MERN Stack Developer
            </span>{" "}
            from Rangpur, Bangladesh. I specialize in building modern,
            user-friendly, and scalable web applications using{" "}
            <span className="text-orange-400">
              React, Next.js, Typescript, Node.js, Express.js, and MongoDB
            </span>
            .
          </motion.p>

          <motion.p
            className="text-lg text-gray-400 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
          >
            I enjoy turning complex problems into clean, efficient solutions and
            bringing ideas to life in the browser. Outside of coding, I love
            cricket, cycling, and exploring new technologies to sharpen my
            skills.
          </motion.p>

          {/* Stats or Highlights */}
          <div className="grid grid-cols-2 gap-6 mt-8">
            <motion.div
              className="bg-gray-800/50 rounded-xl p-6 text-center hover:bg-gray-800 transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-orange-400">10+</h3>
              <p className="text-sm text-gray-400">Projects Completed</p>
            </motion.div>

            <motion.div
              className="bg-gray-800/50 rounded-xl p-6 text-center hover:bg-gray-800 transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-orange-400">1+</h3>
              <p className="text-sm text-gray-400">Years Experience</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
