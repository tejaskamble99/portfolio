"use client";
import Link from "next/link";

export default function Navbar() {

const resumeHandeler =()=>{
  window.open("/assets/resume.pdf","_blank");
}

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 ">

      <nav className="bg-black/100 font-sans backdrop-blur-md rounded-full p-2 m-2  px-8 py-4 flex items-center gap-8">
        
        {/* Links */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
          <Link href="/projects" className="hover:text-white hover:text-glow-subtle transition-all">
            Projects
          </Link>
          <Link href="/about" className="hover:text-white hover:text-glow-subtle transition-all">
            About
          </Link>
          <Link href="/experience" className="hover:text-white hover:text-glow-subtle transition-all">
            Experience {/* Fixed spelling: Experince -> Experience */}
          </Link>
          <Link href="/contact" className="hover:text-white hover:text-glow-subtle transition-all">
            Contact
          </Link>
        </div>

        <button onClick={resumeHandeler} className="hidden md:block px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-full transition-all shadow-[0_0_15px_rgba(99,102,241,0.5)]">
          View Resume
        </button>

      </nav>
    </div>
  );
}