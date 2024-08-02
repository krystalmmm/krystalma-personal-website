import React from 'react';
import Image from 'next/image';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col z-0 bg-gradient-to-br from-[#cc9b89] to-rose-100"> 
      <div className="container mx-auto z-10 px-12 py-8">
        <NavBar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
        <Footer />
      </div>
    </main>
  );
}
