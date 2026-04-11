"use client"

import { motion } from "framer-motion"

const projects = [
    {
        title: "E-Commerce Platform",
        image: "/projects/ecommerce.png",
        stack: "Next.js • TypeScript • Redux • Stripe",
        desc: "Production-grade ecommerce app with auth, cart, and payments.",
        github: "#",
        live: "#",
        featured: true
    },
    {
        title: "TaskFlow",
        image: "/projects/taskflow.png",
        stack: "Next.js • Socket.IO • MongoDB",
        desc: "Real-time collaborative task manager.",
        github: "#",
        live: "#"
    },
    {
        title: "Stock Prediction",
        image: "/projects/stock.png",
        stack: "Python • Django • TensorFlow",
        desc: "LSTM-based stock prediction system.",
        github: "#",
        live: "#"
    }
]

export default function ProjectsSection() {

    const featured = projects.find(p => p.featured)
    const others = projects.filter(p => !p.featured)

    return (

        <section className="max-w-7xl mx-auto px-6 py-24">

            {/* Heading */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-3">Projects</h2>
                <p className="text-gray-400">
                    Selected work showcasing my skills
                </p>
            </div>

            {/* 🔥 Featured Project */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="group relative rounded-2xl overflow-hidden mb-16 border border-white/10"
            >

                <img
                    src={featured.image}
                    className="w-full h-[400px] object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center p-6">

                    <h3 className="text-2xl font-bold mb-3">
                        {featured.title}
                    </h3>

                    <p className="text-indigo-400 mb-3">
                        {featured.stack}
                    </p>

                    <p className="text-gray-300 mb-6 max-w-lg">
                        {featured.desc}
                    </p>

                    <div className="flex gap-6">
                        <a href={featured.github} className="text-indigo-400">GitHub</a>
                        <a href={featured.live} className="text-white">Live</a>
                    </div>

                </div>

            </motion.div>


            {/* 🔥 Other Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">

                {others.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-[#0b0b0e] border border-white/10 rounded-xl overflow-hidden"
                    >

                        <img
                            src={project.image}
                            className="w-full h-52 object-cover"
                        />

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center p-4">

                            <h3 className="text-lg font-semibold">
                                {project.title}
                            </h3>

                            <p className="text-indigo-400 text-sm mb-2">
                                {project.stack}
                            </p>

                            <div className="flex gap-4 mt-2">
                                <a href={project.github} className="text-indigo-400 text-sm">
                                    GitHub
                                </a>
                                <a href={project.live} className="text-white text-sm">
                                    Live
                                </a>
                            </div>

                        </div>

                    </motion.div>
                ))}

            </div>

        </section>

    )

}