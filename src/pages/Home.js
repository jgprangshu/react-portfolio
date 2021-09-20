import React from 'react'
import AboutSection from '../components/AboutSection';
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import Services from '../components/Services';

export default function Home() {
    return (
        <div>
            <HeroSection />
            <AboutSection/>
            <Services/>
            <ProjectsSection/>
            <ContactBanner/>
        </div>
    )
}
