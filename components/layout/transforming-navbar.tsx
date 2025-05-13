"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

const links = [
  { href: "/services", label: "Services" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/secteur", label: "Secteur d'intervention" },
  { href: "/contact", label: "Contact" },
];

export default function TransformingNavbar({ heroRef }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const navbarRef = useRef(null);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      if (!heroRef.current || !navbarRef.current) return;

      const heroRect = heroRef.current.getBoundingClientRect();
      
      // Vérifier si la section hero est complètement hors de la vue
      setIsSticky(heroRect.bottom <= 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Vérification initiale
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [heroRef]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Si pas sticky, ne rien afficher dans la ligne de séparation
  if (!isSticky) {
    return null;
  }

  return (
    <div 
      ref={navbarRef} 
      className="w-full fixed top-0 left-0 right-0 h-16 bg-background/95 backdrop-blur-sm z-50 shadow-md transition-all duration-300"
    >
      <div className="max-w-[95%] mx-auto px-4 h-full flex items-center">
        <div className="w-full flex items-center justify-between">
          {/* Logo - visible seulement quand transformé en navbar */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-4xl font-bold text-primary font-cormorant">
              l&apos;Éducateur Péï
            </Link>
          </div>

          {/* Navigation - visible seulement quand transformé */}
          <div className="flex items-center justify-end w-full">
            <nav className="hidden md:flex space-x-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4 ml-6">
              <Button asChild>
                <Link href="/rendez-vous">Prendre RDV</Link>
              </Button>
              {mounted && (
                <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              )}
            </div>

            {/* Bouton mobile pour le menu */}
            <div className="flex items-center md:hidden">
              {mounted && (
                <Button variant="ghost" size="icon" onClick={toggleTheme} className="mr-2 rounded-full">
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              )}
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu mobile - visible seulement quand menu est ouvert */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-background/98 md:hidden z-40 backdrop-blur-md animate-in fade-in duration-200">
          <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-6 space-y-4">
              <Button className="w-full" asChild>
                <Link href="/rendez-vous" onClick={closeMenu}>
                  Prendre RDV
                </Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/contact" onClick={closeMenu}>
                  Nous contacter
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}