'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, Phone } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';

const routes = [
  { href: '/', label: 'Home' },
  { href: '/over-ons', label: 'Over ons' },
  { href: '/e-bikes', label: 'E-bikes' },
  { href: '/fietsen', label: 'Fietsen' },
  { href: '/aanbiedingen', label: 'Aanbiedingen' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-heading font-bold text-2xl tracking-tight text-primary">
            Holtkamp
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === route.href
                  ? 'text-primary font-semibold'
                  : 'text-muted-foreground'
              }`}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-primary font-semibold">
            <Phone className="h-4 w-4" />
            <span>074-291 37 35</span>
          </div>
          <Button asChild>
            <Link href="/contact">Bezoek de winkel</Link>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="flex items-center space-x-4 lg:hidden">
          <a
            href="tel:0742913735"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary"
            aria-label="Bel ons"
          >
            <Phone className="h-5 w-5" />
          </a>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-foreground hover:bg-foreground/10 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="sr-only">Navigatie Menu</SheetTitle>
              <nav className="flex flex-col gap-4 mt-8">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-2 py-1 text-lg font-medium transition-colors hover:text-primary ${
                      pathname === route.href
                        ? 'text-primary'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {route.label}
                  </Link>
                ))}
                <div className="mt-8 flex flex-col gap-4 px-2">
                  <div className="flex items-center space-x-2 text-primary font-semibold">
                    <Phone className="h-5 w-5" />
                    <a href="tel:0742913735">074-291 37 35</a>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Bezoek de winkel
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
