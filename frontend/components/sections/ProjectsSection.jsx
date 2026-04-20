"use client"

import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { useState } from "react"


const projects = [

  {
    id: 1,
    title: "E-Commerce Platform",
    image: "/assets/projects/ecommerce.jpg",
    description: "Production-grade full-stack e-commerce platform with authentication, cart management, order flow, and admin dashboard. Features Razorpay & Stripe checkout, coupon validation with debouncing, and RTK Query with caching and optimistic updates.",
    stack: ["Next.js", "TypeScript", "Redux Toolkit", "MongoDB", "Firebase", "Stripe", "Razorpay"],
    previewLink: "",
    githubLink: "https://github.com/tejaskamble99/mern-ecommerce-store",
    featured: true,
    accentColor: "#6366f1",
    tagline: "Production-grade full-stack store with payments",
    metrics: ["Stripe & Razorpay", "RTK Query", "Full-stack"],
  },
  {
    id: 2,
    title: "Real-Time Chat Application",
    tagline: "Full-stack group messaging with live events",
    description:
      "Built a production-ready chat platform supporting multiple users and group messaging. Architected the Socket.IO event system, designed REST APIs for auth and history, and wired the React frontend to real-time backend state — end-to-end solo.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
    githubLink: "https://github.com/tejaskamble99/Realtime-chatapp",
    previewLink: "",
    featured: true,
    accentColor: "#6366f1",
    metrics: ["Real-time events", "REST API", "Full-stack"],
  },
  {
    id: 3,
    title: "TaskFlow — Collaborative Task Manager",
    tagline: "Real-time collaborative task management",
    image: "/assets/projects/taskflow.jpg",
    description: "Full-stack real-time task management platform where updates appear instantly across all connected clients using Socket.IO. Includes JWT auth, task prioritization, and live status tracking.",
    stack: ["Next.js", "TypeScript", "Socket.IO", "Express.js", "MongoDB", "JWT"],
    previewLink: "",
    githubLink: "https://github.com/tejaskamble99/Collaborative-Task-Manager",
    featured: false,
    accentColor: "#8b5cf6",
    metrics: ["Socket.IO", "JWT Auth", "Full-stack"],
  },
  {
    id: 4,
    title: "Stock Market Prediction App",
    tagline: "LSTM neural network with Django backend",
    image: "/assets/projects/stock.jpg",
    description: "LSTM neural network for stock price prediction with a Django REST backend and JavaScript frontend, containerized using Docker.",
    stack: ["Python", "Django", "TensorFlow", "LSTM", "Docker"],
    previewLink: "",
    githubLink: "https://github.com/tejaskamble99/stock-prediction-v2",
    featured: false,
    accentColor: "#10b981",
    metrics: ["LSTM Model", "Docker", "REST API"],
  },
  {
    id: 5,
    title: "Movie Discovery App",
    tagline: "Browse, rate & explore films via external API",
    description:
      "Component-based React app consuming a third-party movie API. Focused on clean UI architecture, responsive design, and smooth UX for browsing and rating films.",
    stack: ["React", "JavaScript", "REST API"],
    previewLink: "https://movies-rate-app.netlify.app/",
    githubLink: "https://github.com/tejaskamble99/MOVIES-Rating-app",
    featured: false,
    accentColor: "#06b6d4",
    metrics: ["Live demo", "API integration", "Responsive UI"],
  },
  {
    id: 6,
    title: "Interactive Game Platform",
    tagline: "Multi-game app with state management",
    description:
      "React gaming platform demonstrating deep state management, component reusability, and a snappy user experience across multiple playable games.",
    stack: ["React", "JavaScript"],
    previewLink: "https://games-to.netlify.app/",
    githubLink: "https://github.com/tejaskamble99/games",
    featured: false,
    accentColor: "#8b5cf6",
    metrics: ["Live demo", "State management", "Multi-game"],
  },
  {
    id: 7,
    title: "To-Do List App",
    tagline: "Next.js task manager with local persistence",
    description:
      "Task management app built with Next.js, showcasing SSR concepts, local state persistence, and clean UI interactions without a backend dependency.",
    stack: ["Next.js", "React", "JavaScript"],
    previewLink: "https://todo-list-nextjs.netlify.app/",
    githubLink: "https://github.com/tejaskamble99/todo-list-nextjs",
    featured: false,
    accentColor: "#10b981",
    metrics: ["Live demo", "Next.js SSR", "Persistent state"],
  },
]


const stackColors = {
  "React": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "Node.js": "bg-green-500/10 text-green-400 border-green-500/20",
  "Express": "bg-slate-500/10 text-slate-400 border-slate-500/20",
  "MongoDB": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Socket.IO": "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  "JavaScript": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  "REST API": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Next.js": "bg-white/5 text-slate-300 border-white/10",
  "TypeScript": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "default": "bg-white/5 text-slate-400 border-white/10",
}



function getBadgeClass(tech) {
  return stackColors[tech] || stackColors["default"]
}


function FeaturedProject({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative rounded-2xl border border-white/10 bg-[#0b0b0e] overflow-hidden mb-8 group"
    >

      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: `linear-gradient(to right, transparent, ${project.accentColor}, transparent)` }}
      />

      <div className="p-8 md:p-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div>
            <span
              className="text-xs font-mono tracking-widest mb-2 block"
              style={{ color: project.accentColor }}
            >
              ✦ FEATURED PROJECT
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              {project.title}
            </h3>
            <p className="text-slate-400 mt-1">{project.tagline}</p>
          </div>


          <div className="flex gap-3 flex-shrink-0">
            {project.previewLink && (
              <a
                href={project.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white transition-all hover:scale-105"
                style={{ background: project.accentColor }}
              >
                <FaExternalLinkAlt size={12} />
                Live Demo
              </a>
            )}
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-sm font-medium text-slate-300 hover:text-white hover:border-white/30 transition-all hover:scale-105 bg-white/5"
            >
              <FaGithub size={14} />
              GitHub
            </a>
          </div>
        </div>


        <p className="text-slate-300 leading-relaxed mb-8 max-w-3xl">
          {project.description}
        </p>


        <div className="flex flex-wrap gap-2 mb-6">
          {(project.metrics ?? []).map((m) => (
            <span
              key={m}
              className="px-3 py-1 rounded-full text-xs font-mono border"
              style={{
                borderColor: `${project.accentColor}40`,
                color: project.accentColor,
                background: `${project.accentColor}10`,
              }}
            >
              {m}
            </span>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className={`px-3 py-1 rounded-full text-xs border font-medium ${getBadgeClass(tech)}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// ─── Regular card ──────────────────────────────────────────────────────────────
function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-xl border bg-[#0b0b0e] overflow-hidden flex flex-col transition-all duration-300"
      style={{
        borderColor: hovered ? `${project.accentColor}50` : "rgba(255,255,255,0.08)",
        boxShadow: hovered ? `0 0 30px ${project.accentColor}18` : "none",
      }}
    >
      {/* Top accent */}
      <div
        className="h-[2px] w-full transition-all duration-300"
        style={{
          background: hovered
            ? `linear-gradient(to right, transparent, ${project.accentColor}, transparent)`
            : "transparent",
        }}
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Title row */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-bold text-white leading-tight">
              {project.title}
            </h3>
            <p className="text-xs mt-0.5" style={{ color: project.accentColor }}>
              {project.tagline}
            </p>
          </div>
          {/* Icon links */}
          <div className="flex gap-2 ml-3 flex-shrink-0">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              title="View on GitHub"
              className="text-slate-400 hover:text-white transition-colors p-1"
            >
              <FaGithub size={18} />
            </a>
            {project.previewLink && (
              <a
                href={project.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                title="Live demo"
                className="transition-colors p-1"
                style={{ color: project.accentColor }}
              >
                <FaExternalLinkAlt size={15} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Metrics */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.metrics.map((m) => (
            <span
              key={m}
              className="px-2 py-0.5 rounded-full text-[10px] font-mono border"
              style={{
                borderColor: `${project.accentColor}30`,
                color: project.accentColor,
                background: `${project.accentColor}08`,
              }}
            >
              {m}
            </span>
          ))}
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className={`px-2.5 py-0.5 rounded-full text-xs border ${getBadgeClass(tech)}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA on hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }}
          transition={{ duration: 0.2 }}
          className="mt-4"
        >
          {project.previewLink ? (
            <a
              href={project.previewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium"
              style={{ color: project.accentColor }}
            >
              View live demo →
            </a>
          ) : (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white"
            >
              View source code →
            </a>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}

// ─── Main section ──────────────────────────────────────────────────────────────
export default function ProjectsSection() {
  const featured = projects.find((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <p className="text-xs text-indigo-400 tracking-widest font-mono mb-2">
          PROJECTS
        </p>
        <h2 className="text-4xl font-bold mb-3">Things I've Built</h2>
        <p className="text-slate-400 max-w-xl">
          A selection of real projects — all fully coded by me, with live demos
          and source available.
        </p>
      </motion.div>

      {/* Featured */}
      {featured && <FeaturedProject project={featured} />}

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-5">
        {others.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* GitHub CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center mt-14"
      >
        <p className="text-slate-500 text-sm mb-4">
          More projects and contributions on GitHub
        </p>
        <a
          href="https://github.com/tejaskamble99"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-sm text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all"
        >
          <FaGithub size={16} />
          View GitHub Profile
        </a>
      </motion.div>

    </section>
  )
}