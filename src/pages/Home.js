import React from 'react';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </div>
  );
}
