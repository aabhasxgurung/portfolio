"use client";

import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm-px-6 md:max-w-5xl">
      <HeroSection />
      <About />
      <Projects />
    </main>
  );
}
