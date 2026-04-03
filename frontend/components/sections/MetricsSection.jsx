"use client"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then(mod => mod.GitHubCalendar),
  { ssr: false }
)

export default function MetricsSection() {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    fetch("https://api.github.com/users/tejaskamble99")
      .then(res => res.json())
      .then(data => setProfile(data))
  }, [])

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

       
        <div className="bg-[#0b0b0e] border border-white/10 rounded-xl p-6 md:col-span-3 hover:scale-[1.02] transition-all duration-300">

          <p className="text-xs text-indigo-400 tracking-widest mb-2">
           GITHUB CONTRIBUTION INTENSITY
          </p>


          <div className="overflow-x-auto flex justify-center scale-[0.9] md:scale-100">
            <GitHubCalendar
              username="tejaskamble99"
              blockSize={12}
              blockMargin={4}
              fontSize={14}
            />
          </div>

        </div>

        {/* PROJECTS BUILT */}
        <div className="bg-[#0b0b0e] border border-white/10 rounded-xl p-6 flex flex-col justify-center items-center hover:scale-[1.02] transition-all hover:scale-[1.02] transition-all duration-300">

          <h2 className="text-5xl font-bold text-cyan-400">
            {profile?.public_repos ?? "—"}
          </h2>

          <p className="text-gray-400 mt-2 text-sm">
            PROJECTS BUILT
          </p>

        </div>

        {/* TECH STACK */}
        <div className="bg-[#0b0b0e] border border-white/10 rounded-xl p-6 hover:scale-[1.02] transition-all duration-300">

          <p className="text-xs text-cyan-400 tracking-widest mb-2">
            SPECIALIZATION
          </p>

          <h3 className="text-2xl font-bold mb-4">
            Full Stack Developer
          </h3>

          <div className="flex flex-wrap gap-3">
            {["React","Node.js","MongoDB","Next.js","Express.js"].map((tech)=>(
              <span
                key={tech}
                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>


        <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-white/10 rounded-xl p-6 flex items-center hover:scale-[1.02] transition-all duration-300">

          <p className="italic text-gray-300">
            "Every line of code I write is a software that doesn't just work, but inspires."
          </p>

        </div>

      </div>
    </section>
  )
}