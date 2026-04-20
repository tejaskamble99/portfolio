"use client"

import { useState } from "react"

const jobs = [
    {
        company: "Raino Digi Media",
        role: "Web Developer",
        duration: "Mar 2025 – Present",
        location: "Mumbai",
        desc: [
            "Building production React.js applications with optimized component architecture",
            "Developed reusable UI component libraries across multiple projects",
            "Integrated Node.js / Express APIs with real-time data",
            "Debugged and resolved critical production issues"
        ]
    },
    {
        company: "Vibrant Hive Agency",
        role: "Frontend Developer (Freelance)",
        duration: "2024 – 2025",
        location: "Mumbai",
        desc: [
            "Built vibranthiveagency.in from scratch using React.js and Vite",
            "Handled component architecture, responsive design, and client revisions",
            "Delivered post-launch updates: navigation, WhatsApp integration, animation fixes",
        ],
    },
    {
        company: "Cloud Connection",
        role: "Software Developer Intern",
        duration: "Jan 2024 – Jun 2024",
        location: "Remote",
        desc: [
            "Built responsive React.js interfaces",
            "Integrated REST APIs and optimized performance",
            "Implemented code splitting and lazy loading",
            "Participated in agile sprint planning and code reviews"
        ]
    },

]

export default function ExperienceSection() {

    const [active, setActive] = useState(0)

    return (

        <section className="max-w-6xl mx-auto px-6 py-24">

            <h2 className="text-4xl font-bold mb-12">Experience</h2>

            <div className="grid md:grid-cols-[250px_1fr] gap-10">

                {/* LEFT TAB MENU */}

                <div className="flex md:flex-col gap-4">

                    {jobs.map((job, index) => (
                        <button
                            key={index}
                            onClick={() => setActive(index)}
                            className={`text-left px-5 py-4 border-l-2 transition
${active === index
                                    ? "border-indigo-500 bg-indigo-500/10 text-indigo-400"
                                    : "border-transparent text-gray-400 hover:text-white"}
`}
                        >
                            {job.company}
                        </button>
                    ))}

                </div>


                {/* RIGHT CONTENT */}

                <div>

                    <h3 className="text-2xl font-semibold mb-1">
                        {jobs[active].role}
                    </h3>

                    <p className="text-indigo-400 mb-4">
                        {jobs[active].duration} • {jobs[active].location}
                    </p>

                    <ul className="space-y-3 text-gray-400">

                        {jobs[active].desc.map((item, i) => (
                            <li key={i} className="flex gap-3">
                                <span className="text-indigo-400">▹</span>
                                <span>{item}</span>
                            </li>
                        ))}

                    </ul>

                </div>

            </div>

        </section>

    )

}