"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-[#111827] border border-border rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
            >
              {/* Left section (Logo + Text) */}
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {exp.role}
                  </h3>
                  <p className="text-blue-400 font-medium text-sm sm:text-base">
                    {exp.company}
                  </p>
                </div>
              </div>

              {/* Duration (right side on desktop, below on mobile) */}
              <p className="text-gray-400 text-sm sm:text-right sm:min-w-[150px]">
                {exp.duration}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
