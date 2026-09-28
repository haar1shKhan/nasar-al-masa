"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ConsultationModal from "@/components/ConsultationModal";
import ScrollIndicatorRail from "@/components/ScrollIndicatorRail";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>("section").forEach((elem, index) => {
          if (index > 0) {
            gsap.fromTo(
              elem,
              { y: 24, opacity: 0.95 },
              {
                y: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: elem,
                  start: "top 85%",
                  toggleActions: "play none none none"
                }
              }
            );
          }
        });
      }, containerRef);
      return () => ctx.revert();
    }
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col w-full">
      <div className=" w-full">
        <HeroSection />
        {/* <StatsBar /> */}
        <div className="flex flex-row w-full">
          <div className="flex flex-col w-[3%] relative">
            <ScrollIndicatorRail />
          </div>
          <div className="flex flex-col w-[97%]">
            <ServicesSection />
            <AboutSection />
            <ProjectsSection />
            <CTASection />
          </div>
        </div>
      </div>
      <ScrollIndicatorRail heroId="hero" />
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultService="Turnkey HVAC & Elevators" />
    </div>
  );
}