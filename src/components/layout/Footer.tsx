'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if werkplaats is geopend
    // Di-Vr 08:00 - 18:00, Za 08:00 - 16:00
    const checkOpen = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();

      if (day >= 2 && day <= 5) {
        if (hour >= 8 && hour < 18) setIsOpen(true);
        else setIsOpen(false);
      } else if (day === 6) {
        if (hour >= 8 && hour < 16) setIsOpen(true);
        else setIsOpen(false);
      } else {
        setIsOpen(false);
      }
    };
    checkOpen();
    const interval = setInterval(checkOpen, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-background text-foreground border-t border-border/40 py-12 px-6">
      <div className="container mx-auto flex flex-col items-center text-center space-y-6">
        
        <h3 className="font-heading italic font-bold text-3xl tracking-tight text-foreground">
          Holtkamp
        </h3>
        
        <div className="font-sans text-sm text-foreground/80 space-y-2">
          <p>Holtkamp Tweewielers · Oldenzaalsestraat 135, 7557 GJ Hengelo (Ov)</p>
          <p>
            <a href="tel:0742913735" className="hover:text-primary transition-colors">074-291 37 35</a> · 
            <a href="mailto:info@holtkamptweewielers.nl" className="hover:text-primary transition-colors ml-1">info@holtkamptweewielers.nl</a>
          </p>
          <p className="text-foreground/60">Di–Vr 08.00–18.00 · Za 08.00–16.00 · Zo & Ma gesloten</p>
        </div>

        <div className="flex items-center gap-3 mt-4 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20">
          <div className={`w-2.5 h-2.5 rounded-full ${isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
          <span className="font-mono text-xs uppercase tracking-widest text-foreground/80">
            {isOpen ? 'Werkplaats geopend' : 'Werkplaats gesloten'}
          </span>
        </div>

      </div>
    </footer>
  );
}
