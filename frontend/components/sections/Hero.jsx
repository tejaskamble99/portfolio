"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const codeParts = [
    { text: "const", color: "text-indigo-400" },
    { text: " ", color: "text-slate-300" },
    { text: "role", color: "text-slate-100" },
    { text: " ", color: "text-slate-300" },
    { text: "=", color: "text-slate-300" },
    { text: " ", color: "text-slate-300" },
    { text: '"', color: "text-emerald-400" },
    { text: "Full Stack Developer", color: "text-emerald-400" },
    { text: '";', color: "text-emerald-400" },
  ];

  const flatText = codeParts.flatMap((part) =>
    part.text.split("").map((char) => ({ char, color: part.color })),
  );

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center px-4 z-10 pointer-events-none">
      {/* Container with the '-mt-24' fix to pull it up slightly */}
      <div className="flex flex-col items-center text-center max-w-4xl pointer-events-auto ">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-mono mb-8 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          OPEN TO WORK
        </motion.div>

        <div className="text-6xl sm:text-8xl font-bold text-slate-100 mb-4">
          <h1 className="text-glow-strong">Tejas Kamble</h1>
        </div>
        <br />

        <div className="font-mono text-sm sm:text-lg text-slate-400 mb-10 flex items-center gap-3 bg-black/30 px-6 py-3 rounded-lg border border-white/5 backdrop-blur-sm shadow-2xl">
          <span className="text-indigo-500 hidden sm:inline select-none">
            &gt;
          </span>

          <div className="flex ">
            {flatText.map((item, index) => (
              <motion.span
                key={index}
                className={item.color}
                initial={{ opacity: 0, display: "none" }}
                animate={{ opacity: 1, display: "inline" }}
                transition={{
                  duration: 0,
                  delay: index * 0.05,
                }}
              >
                {item.char === " " ? "\u00A0" : item.char}
              </motion.span>
            ))}
          </div>

          {/* Blinking Cursor */}
          <motion.span
            className="w-2px h-20px bg-indigo-500"
            animate={{ opacity: [1, 0, 1] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.5 }} // Appears after typing finishes
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/projects"
            className="h-12 px-8 flex items-center justify-center bg-white text-black font-bold text-sm tracking-wide hover:bg-indigo-50 transition-all hover:scale-105 rounded-full"
          >
            VIEW PROJECTS
          </Link>

          <Link
            href="/contact"
            className="h-12 px-8 flex items-center justify-center border border-slate-700 hover:border-indigo-500/50 hover:bg-indigo-500/10 text-slate-300 font-medium text-sm tracking-wide transition-all rounded-full"
          >
            CONTACT ME
          </Link>
        </motion.div>

        <div className="flex gap-6 mt-6 text-2xl text-slate-400">
          <a
            href="https://github.com/tejaskamble99"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/kamble-tejas99/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
