import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Toolkit from "@/components/Toolkit";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text-main">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Toolkit />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
