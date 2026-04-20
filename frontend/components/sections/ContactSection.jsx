"use client"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { useState } from "react"

export default function ContactSection() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const res = await fetch("https://email-service-mauve.vercel.app/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })

            if (res.ok) {
                setSuccess(true)
                setForm({ name: "", email: "", message: "" })
            }

        } catch (err) {
            console.log(err)
        }

        setLoading(false)
    }

    return (

        <section className="max-w-6xl mx-auto px-6 py-24">

           
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-3">Get In Touch</h2>
                <p className="text-gray-400">
                    Let's build something amazing together 🚀
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">

                
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                >

                    <h3 className="text-2xl font-semibold">
                        Let’s Talk
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                        I'm currently open to new opportunities, freelance work,
                        or collaboration.
                    </p>

                    <div className="space-y-4 text-gray-300">

                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-indigo-400" />
                            <span>kambletejas1999@gmail.com</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaGithub className="text-indigo-400" />
                            <a href="https://github.com/tejaskamble99" target="_blank">
                                github.com/tejaskamble99
                            </a>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaLinkedin className="text-indigo-400" />
                            <a href="https://www.linkedin.com/in/kamble-tejas99/" target="_blank">
                                linkedin.com/in/kamble-tejas99
                            </a>
                        </div>

                    </div>

                </motion.div>


               
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="bg-[#0b0b0e] border border-white/10 rounded-xl p-8 space-y-6"
                >

                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg outline-none focus:border-indigo-500"
                    />

                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg outline-none focus:border-indigo-500"
                    />

                    <textarea
                        rows="5"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        required
                        className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg outline-none focus:border-indigo-500"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-semibold transition"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>

                    {success && (
                        <p className="text-green-400 text-center">
                            Message sent successfully 🚀
                        </p>
                    )}

                </motion.form>

            </div>

        </section>
    )
}