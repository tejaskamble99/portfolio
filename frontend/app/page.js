import Hero from "@/components/sections/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none"></div>
      </div>
      <div className="relative z-10">
        <Hero />
      </div>
    </main>
  );
}
