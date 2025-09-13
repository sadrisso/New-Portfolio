"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  { name: "React", logo: "https://i.ibb.co/8gZPzhj4/reactjs.png" },
  { name: "Next.js", logo: "https://i.ibb.co.com/Pvhmq33h/next.webp" },
  { name: "TypeScript", logo: "https://i.ibb.co.com/fYtKs9RW/typ.png" },
  { name: "Tailwind CSS", logo: "https://i.ibb.co.com/R4cN27dZ/tail.png" },
  { name: "Node.js", logo: "https://i.ibb.co.com/pCnKbDZ/node.png" },
  { name: "MongoDB", logo: "https://i.ibb.co/TDNK84Vs/mongoDB.png" },
  { name: "Express.js", logo: "https://i.ibb.co.com/4wGtF4Xy/exp.webp" },
];

export default function SkillsSection() {
  return (
    <section className="bg-gray-900 py-12 px-6" id="skills">
      <h2 className="text-3xl font-bold text-orange-400 mb-10 text-center">
        My Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-7 gap-3 md:gap-6 justify-items-center px-0 md:px-24">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="w-36 h-36 bg-gray-800/50 rounded-xl shadow-md flex flex-col items-center justify-center p-4"
            whileHover={{ scale: 1.1, rotate: 5 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src={skill.logo}
              alt={skill.name}
              width={60}
              height={60}
              className="mb-2"
            />
            <span className="text-gray-300 font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
