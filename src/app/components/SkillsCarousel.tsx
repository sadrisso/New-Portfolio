"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  { name: "React", logo: "https://i.ibb.co/8gZPzhj4/reactjs.png" },
  { name: "Next.js", logo: "/skills/nextjs.png" },
  { name: "Node.js", logo: "https://i.ibb.co/T9SGfrY/nodejs.png" },
  { name: "MongoDB", logo: "https://i.ibb.co/TDNK84Vs/mongoDB.png" },
  { name: "Express.js", logo: "https://i.ibb.co/kg8Zgsg1/express-JS.png" },
  { name: "TypeScript", logo: "/skills/typescript.png" },
  { name: "Tailwind CSS", logo: "/skills/tailwind.png" },
];

export default function SkillsSection() {
  return (
    <section className="bg-gray-900 py-12 px-6">
      <h2 className="text-3xl font-bold text-orange-400 mb-10 text-center">
        My Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="w-36 h-36 bg-gray-800/50 rounded-xl shadow-md flex flex-col items-center justify-center p-4"
            whileHover={{ scale: 1.1, rotate: 5 }}
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
