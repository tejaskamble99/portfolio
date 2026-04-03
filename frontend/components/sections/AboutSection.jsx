"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/assets/profile.png"
            alt="Tejas Kamble"
            className="w-72 h-72 rounded-2xl object-cover border border-white/10"
            width={288}
            height={288}
          />
        </div>

        {/* About Text */}
        <div>
          <p className="text-xs text-indigo-400 tracking-widest mb-2">
            ABOUT ME
          </p>

          <h2 className="text-4xl font-bold mb-6">Full Stack Developer</h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            Hi, I'm Tejas Kamble — a Full Stack Developer based in Mumbai. I
            specialize in building modern web applications using React, Next.js,
            Node.js, and MongoDB.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            I enjoy solving complex problems and creating scalable applications
            with clean architecture. My focus is on building production-ready
            systems and continuously learning new technologies.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "Next.js",
              "Node.js",
              "MongoDB",
              "TypeScript",
              "Docker",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
