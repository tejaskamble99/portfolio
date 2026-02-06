"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track scroll position for navbar effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const resumeHandler = () => {
    window.open("/assets/resume.pdf", "_blank", "noopener,noreferrer");
  };

  const navItems = [
    { href: "/about", label: "About Me" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path) => pathname === path;

  return (
    <>
      <motion.div
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
        initial={prefersReducedMotion ? false : { y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <nav
          className={`bg-black/80 backdrop-blur-md rounded-full px-6 sm:px-8 py-3 sm:py-4 flex items-center gap-4 sm:gap-8 border border-white/10 transition-all duration-300 ${
            isScrolled ? "shadow-lg shadow-indigo-500/20" : "shadow-md"
          }`}
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Desktop Links */}
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative hover:text-white transition-all group ${
                  isActive(item.href) ? "text-white" : ""
                }`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
                
                {/* Active indicator */}
                {isActive(item.href) && (
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-indigo-500 rounded-full"
                    layoutId="activeNav"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                
                {/* Hover underline */}
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-indigo-400/50 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </div>

          {/* Resume Button - Desktop */}
          <button
            onClick={resumeHandler}
            className="hidden md:block px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-full transition-all shadow-[0_0_15px_rgba(99,102,241,0.5)] hover:shadow-[0_0_25px_rgba(99,102,241,0.7)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-black"
            aria-label="View resume in new tab"
          >
            View Resume
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded-lg"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="bg-black/95 backdrop-blur-md mx-4 mt-24 rounded-2xl p-6 border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Links */}
            <div className="flex flex-col gap-4 mb-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium py-2 px-4 rounded-lg transition-all ${
                    isActive(item.href)
                      ? "bg-indigo-600/20 text-white border border-indigo-500/30"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Resume Button */}
            <button
              onClick={() => {
                resumeHandler();
                setIsMobileMenuOpen(false);
              }}
              className="w-full px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold rounded-full transition-all shadow-[0_0_15px_rgba(99,102,241,0.5)]"
            >
              View Resume
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}