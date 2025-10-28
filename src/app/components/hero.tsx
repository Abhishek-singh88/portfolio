"use client";

import Image from "next/image";
import { Button } from "./ui/moving-border";

export default function Hero() {
  return (
    <section>
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">

        <div className="text-left">
          <p className="inline-block bg-green-900 text-green-400 text-sm px-3 py-1 rounded-full mb-4 ">           ● Looking for opportunities
          </p>
          <h1 className="text-4xl font-bold mb-2">
            Hii, I&rsquo;m Abhishek Singh <span className="inline-block">  🧑‍💻</span>
          </h1>
          <h2 className="text-xl text-gray-400 mb-4">
            Full Stack & Blockchain developer | Tech Enthusiast
          </h2>

          <div className="flex gap-x-7">
            <Button
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border border-neutral-200 dark:border-slate-800 cursor-pointer transition-all duration-300 hover:border-indigo-400"
            >
              View Projects
            </Button>
            <Button
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border border-neutral-200 dark:border-slate-800 cursor-pointer transition-all duration-300 hover:border-indigo-400"
            >
              Contact me  →
            </Button>
          </div>
          <a
            href="https://drive.google.com/file/d/1yynMp8hM7lv0UWPidw63gCk_2gz8v3ll/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-2 rounded-full bg-slate-900 text-white font-semibold shadow-md transition duration-300 hover:bg-indigo-700 hover:scale-105"
          >
            View Resume →
          </a>


        </div>


        <div className="rounded-full overflow-hidden w-60 h-60 border-4 border-white shadow-md md:mx-5 relative">
          <Image
            src="/avatar.png"
            alt="Avatar"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
