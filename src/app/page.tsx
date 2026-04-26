"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [telemetry, setTelemetry] = useState("Ketting afgesteld");
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  useEffect(() => {
    // Telemetry Typewriter Effect
    const lines = [
      "Ketting afgesteld",
      "Banden op spanning",
      "Remmen gecontroleerd",
      "Verlichting getest",
      "Klaar voor de weg"
    ];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % lines.length;
      setTelemetry(lines[i]);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Hero Animation (Optimized for 60fps+ with force3D)
      gsap.fromTo(
        ".hero-text",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out", force3D: true }
      );
      
      gsap.fromTo(
        ".hero-bg",
        { scale: 1.1 },
        { scale: 1, duration: 2.0, ease: "power2.out", force3D: true, transformOrigin: "center center" }
      );

      // Lightweight scroll-triggered fade-up for protocol cards (no pinning = no lag)
      gsap.utils.toArray<HTMLElement>('.protocol-card').forEach((card) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            force3D: true,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-background text-foreground min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden rounded-b-[2rem] md:rounded-b-[3rem] bg-secondary">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/winkel-1.jpg"
            alt="Holtkamp Tweewielers werkplaats in Hengelo"
            fill
            className="hero-bg object-cover will-change-transform"
            priority
            sizes="100vw"
          />
          {/* Strong dark gradient: top dim, center darkest behind text, smooth fade */}
          <div className="absolute inset-0 bg-secondary/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/65 to-black/80" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 text-center">
          <div className="hero-text mb-6">
            <span className="inline-block text-sm md:text-base font-medium uppercase tracking-[0.2em] mb-6 text-white/90">
              Holtkamp Tweewielers — Sinds 1900 dé fietsenmaker van Hengelo
            </span>
          </div>
          
          <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] max-w-5xl mx-auto text-white">
            <span className="block font-sans font-bold uppercase tracking-tighter">Een passende fiets is de</span>
            <span className="block font-heading italic font-light mt-2 text-accent">enige fiets.</span>
          </h1>
          
          <div className="hero-text mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#protocol"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-medium transition-colors"
            >
              Plan een proefrit
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:0742913735"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full border border-white/40 text-white hover:bg-white/10 text-lg font-medium backdrop-blur-md transition-colors"
            >
              Bel 074-291 37 35
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Philosophy / Manifesto Section */}
      <section className="pt-32 pb-20 bg-background flex items-center">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-xs md:text-sm font-mono text-accent mb-6 uppercase tracking-[0.3em]">
            Onze filosofie
          </p>
          <p className="text-xl md:text-2xl font-sans text-muted-foreground mb-4 uppercase tracking-widest">
            De meeste fietsenwinkels verkopen een fiets.
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading italic leading-tight text-foreground">
            Wij zoeken de <span className="text-accent">juiste</span> fiets bij de juiste mens.
          </h2>
        </div>
      </section>

      {/* Protocol intro eyebrow — bridges philosophy → cards */}
      <div className="text-center pb-12">
        <p className="text-xs md:text-sm font-mono text-accent uppercase tracking-[0.3em]">
          Hoe wij werken
        </p>
        <p className="mt-3 text-base md:text-lg text-muted-foreground max-w-xl mx-auto px-6">
          Drie stappen, één doel: u op de juiste fiets.
        </p>
      </div>

      {/* Protocol (Sticky Stacking Archive) */}
      <section id="protocol" className="protocol-container relative pb-32 px-4 md:px-6">
        <div className="max-w-5xl mx-auto relative">
          
          {/* Card 1: Luisteren */}
          <div className="protocol-card w-full mb-[10vh] relative z-10">
            <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 shadow-xl border border-border">
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="w-full md:w-1/3">
                  <span className="text-accent font-mono text-sm tracking-widest uppercase">01 — Het gesprek</span>
                  <h3 className="text-4xl font-heading italic mt-4 text-foreground">We luisteren<br/>eerst.</h3>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-2xl font-sans text-foreground/80 leading-relaxed">
                    "Hoe ver fiets je? Welk terrein? Wat heb je nu? Eerst het verhaal, dan de fiets."
                  </p>
                  <div className="mt-8 flex gap-3 flex-wrap">
                    {["Luisteren", "Adviseren", "Afstemmen"].map((tag) => (
                      <span key={tag} className="px-4 py-2 rounded-full border border-foreground/15 text-foreground/80 text-sm uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Kiezen — light slate, mid-tone in the progression */}
          <div className="protocol-card w-full mb-[10vh] relative z-20">
            <div className="bg-muted text-foreground rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 shadow-xl border border-border">
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="w-full md:w-1/3">
                  <span className="text-accent font-mono text-sm tracking-widest uppercase">02 — De keuze</span>
                  <h3 className="text-4xl font-heading italic mt-4">Drie merken,<br/>één doel.</h3>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-2xl font-sans leading-relaxed text-foreground/80">
                    "Drie merken, één doel: dat jij straks niet de mooiste fiets hebt, maar de juiste."
                  </p>
                  <div className="mt-8 bg-white border border-border rounded-2xl p-6 font-mono text-sm text-muted-foreground relative overflow-hidden">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Werkplaats Status:</span>
                    </div>
                    <div className="mt-4 text-lg text-foreground">
                      &gt; {telemetry}
                      <span className="inline-block w-2 h-5 bg-foreground ml-1 animate-pulse" />
                    </div>
                  </div>
                  <div className="mt-8 flex gap-6 text-foreground/60 uppercase tracking-widest text-sm font-bold">
                    <span>Gazelle</span>
                    <span>Sparta</span>
                    <span>Batavus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Onderhouden */}
          <div className="protocol-card w-full relative z-30">
            <div className="bg-primary text-primary-foreground rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 shadow-2xl">
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="w-full md:w-1/3">
                  <span className="text-sky-300 font-mono text-sm tracking-widest uppercase">03 — Het vervolg</span>
                  <h3 className="text-4xl font-heading italic mt-4">We blijven<br/>helpen.</h3>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-2xl font-sans leading-relaxed">
                    "Wij zien onze klanten graag terug. Niet omdat de fiets stuk is — omdat ze het waarderen dat-ie blijft rijden."
                  </p>
                  
                  {/* Pseudo-calendar for Proefrit */}
                  <div className="mt-8 bg-black/20 rounded-2xl p-6 backdrop-blur-sm">
                    <h4 className="text-sm uppercase tracking-widest mb-4">Plan een proefrit</h4>
                    <div className="grid grid-cols-5 gap-2">
                      {["Di", "Wo", "Do", "Vr", "Za"].map((day) => (
                        <button 
                          key={day} 
                          onClick={() => setSelectedDay(day)}
                          className={`aspect-square rounded-xl border flex flex-col items-center justify-center transition-all duration-300 ${
                            selectedDay === day 
                              ? "bg-white text-primary border-white scale-105 shadow-lg" 
                              : "border-white/20 text-white hover:bg-white/10 hover:border-white/40"
                          }`}
                        >
                          <span className="font-bold">{day}</span>
                        </button>
                      ))}
                    </div>
                    <Link
                      href={selectedDay ? `/contact?day=${selectedDay}` : "#"}
                      className={`w-full mt-4 inline-flex items-center justify-center h-11 rounded-xl font-medium transition-all duration-300 ${
                        selectedDay
                          ? "bg-white text-primary hover:bg-white/90 shadow-lg"
                          : "bg-white/10 text-white/70 hover:bg-white/15 cursor-not-allowed"
                      }`}
                      onClick={(e) => {
                        if (!selectedDay) e.preventDefault();
                      }}
                    >
                      {selectedDay ? `Bevestig proefrit voor ${selectedDay}` : "Kies een dag"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA section — image with translucent navy overlay so shop is visible */}
      <section className="py-32 text-accent-foreground text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/winkel-1.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-accent/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        <div className="container relative z-10 mx-auto px-6">
          <p className="text-xs md:text-sm font-mono uppercase tracking-[0.3em] mb-6 text-accent-foreground/70">
            Bezoek de winkel
          </p>
          <h2 className="text-5xl md:text-7xl font-heading italic mb-6">Klaar voor de weg?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-accent-foreground/80 font-sans">
            Kom langs in onze winkel in Hengelo of plan direct een afspraak in onze werkplaats.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-full bg-white text-primary hover:scale-105 text-lg font-medium transition-all duration-300 shadow-xl"
          >
            Neem contact op
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
