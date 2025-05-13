/**
 * header.tsx
 * Composant d'en-tête principal de l'application
 * Gère la navigation, le changement de thème et le menu mobile
 */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

// Liens de navigation pour la page d'accueil
const navLinks = [
  { href: "#domaines-intervention", label: "Expertise" },
  { href: "#services", label: "Services" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#contact", label: "Contact" },
];

/**
 * Composant Header
 * Affiche l'en-tête de l'application avec le logo, la navigation et les contrôles de thème
 * Inclut une version responsive pour mobile avec menu hamburger
 */
export default function Header() {
  // États pour gérer le menu mobile et le défilement
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Effet pour gérer l'état monté et le défilement
  useEffect(() => {
    setMounted(true);
    
    // Fonction pour détecter le défilement et mettre à jour l'apparence de l'en-tête
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    // Nettoyage de l'écouteur d'événement
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Fonction pour basculer entre les thèmes clair et sombre
   */
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  /**
   * Fonction pour ouvrir/fermer le menu mobile
   */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  /**
   * Fonction pour gérer le défilement fluide vers les sections
   * @param e Événement de clic
   * @param targetId ID de la section cible
   */
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    
    // Fermer le menu mobile si ouvert
    setIsMenuOpen(false);
    
    // Sélectionner l'élément cible
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Calculer la position de l'élément cible
      const targetPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = targetPosition + window.pageYOffset - 80; // 80px pour l'en-tête
      
      // Utiliser scrollTo avec behavior: 'smooth' pour un défilement fluide
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Mettre à jour l'URL sans recharger la page
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  // Classes CSS pour l'en-tête, qui changent en fonction du défilement
  const headerClasses = `
    fixed top-0 w-full z-50 transition-all duration-300 h-20
    ${isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-background/50 backdrop-blur-sm"}
  `;

  return (
    <header className={headerClasses}>
      <div className="max-w-[90%] mx-auto px-4 flex justify-between items-center h-full">
        {/* Logo */}
        <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
          <Link href="/" className="flex items-center justify-center min-w-[200px] text-3xl sm:text-4xl font-bold whitespace-nowrap logo-text transition-colors duration-300 hover:text-primary">
            Éducateur péï
          </Link>
        </div>

        {/* Navigation sur desktop */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="typography-nav text-foreground/80 hover:text-primary transition-colors nav-link"
              onClick={(e) => handleSmoothScroll(e, link.href.substring(1))}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Boutons d'action sur desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#contact"
            className="typography-nav text-foreground hover:text-primary-foreground px-4 py-2 rounded-btn transition-all duration-300 relative group"
            onClick={(e) => handleSmoothScroll(e, 'contact')}
          >
            <span className="relative z-10">Prendre RDV</span>
            <span className="absolute inset-0 bg-primary rounded-btn opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
          
          {/* Bouton de changement de thème */}
          {mounted && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme} 
              className="btn-icon theme-switch-btn"
              aria-label={theme === "dark" ? "Passer au mode clair" : "Passer au mode sombre"}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          )}
        </div>

        {/* Contrôles mobiles */}
        <div className="flex items-center md:hidden">
          {/* Bouton de changement de thème sur mobile */}
          {mounted && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme} 
              className="mr-2 btn-icon hover:bg-primary/10 hover:text-primary"
              aria-label={theme === "dark" ? "Passer au mode clair" : "Passer au mode sombre"}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          )}
          
          {/* Bouton de menu hamburger */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu} 
            className="btn-icon hover:bg-primary/10 hover:text-primary"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-background/95 backdrop-blur-sm md:hidden z-40 animate-fadeIn">
          <div className="max-w-[80%] mx-auto px-4 py-8 flex flex-col space-y-6">
            {/* Liens de navigation sur mobile */}
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="typography-nav font-medium text-foreground/80 hover:text-primary transition-colors"
                onClick={(e) => handleSmoothScroll(e, link.href.substring(1))}
              >
                {link.label}
              </a>
            ))}
            
            {/* Boutons d'action sur mobile */}
            <div className="pt-6 space-y-4">
              <Button className="w-full typography-button rounded-btn bg-primary hover:bg-primary/90" asChild>
                <a 
                  href="#contact" 
                  onClick={(e) => handleSmoothScroll(e, 'contact')}
                >
                  Prendre RDV
                </a>
              </Button>
              <Button variant="outline" className="w-full typography-button rounded-btn border-primary text-primary hover:bg-primary/10" asChild>
                <Link href="/connexion" onClick={() => setIsMenuOpen(false)}>
                  Connexion
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}