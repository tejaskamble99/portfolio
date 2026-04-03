"use client"

import { motion } from "framer-motion"

const techStack = [
  { name: "HTML5", icon: "devicon-html5-plain colored" },
  { name: "CSS3", icon: "devicon-css3-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Next.js", icon: "devicon-nextjs-original" },
  { name: "Redux", icon: "devicon-redux-original colored" },
  { name: "Tailwind", icon: "devicon-tailwindcss-original colored" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Express", icon: "devicon-express-original" },
  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
  { name: "MySQL", icon: "devicon-mysql-plain colored" },
]

const tools = [
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "GitHub", icon: "devicon-github-original" },
  { name: "Docker", icon: "devicon-docker-plain colored" },
  { name: "VS Code", icon: "devicon-vscode-plain colored" },
  { name: "Firebase", icon: "devicon-firebase-plain colored" },
]

export default function TechStackSection() {

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-2">Tech Stack</h2>
        <p className="text-gray-400">
          Technologies I've been working with recently
        </p>
      </div>

      {/* Tech Stack Grid */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-10 justify-items-center mb-20">

        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.2 }}
            className="flex flex-col items-center gap-3"
          >
            <i className={`${tech.icon} text-6xl`}></i>
            <span className="text-sm text-gray-400">{tech.name}</span>
          </motion.div>
        ))}

      </div>

      {/* Tools */}
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold">Tools</h3>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-5 gap-10 justify-items-center">

        {tools.map((tool, index) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.2 }}
            className="flex flex-col items-center gap-3"
          >
            <i className={`${tool.icon} text-6xl`}></i>
            <span className="text-sm text-gray-400">{tool.name}</span>
          </motion.div>
        ))}

      </div>

    </section>
  )
}