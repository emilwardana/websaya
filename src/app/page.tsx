"use client";

import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  const featuresRef = useRef<HTMLDivElement>(null);

  const handleShowMenu = () => {
    setShowMenu(true);
    // Wait for state update and render
    setTimeout(() => {
      featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Prevent scrolling on mobile when menu is hidden
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isMobile = window.innerWidth < 768;
      if (isMobile && !showMenu) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMenu]);

  return (
    <div className="flex flex-col flex-1">
      <Hero onShowMenu={!showMenu ? handleShowMenu : undefined} />
      <div ref={featuresRef} className={`${showMenu ? 'block' : 'hidden md:block'} flex-1 flex flex-col justify-center`}>
        <Features />
      </div>
      {/* Hide footer on mobile until menu is shown */}
      <div className={`${showMenu ? 'block' : 'hidden md:block'} mt-auto`}>
        <Footer />
      </div>
    </div>
  );
}
