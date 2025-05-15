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

// Hook personnalisé pour les tailles de police
function useFontSizes() {
  const [fontSizes, setFontSizes] = useState({
    navLink: "24px",
    button: "24px"
  });
  
  useEffect(() => {
    function updateFontSizes() {
      const width = window.innerWidth;
      let navLinkSize, buttonSize;
      
      if (width < 480) {
        navLinkSize = "18px";
        buttonSize = "18px";
      } else if (width >= 480 && width < 640) {
        navLinkSize = "20px";
        buttonSize = "20px";
      } else if (width >= 640 && width < 768) {
        navLinkSize = "21px";
        buttonSize = "21px";
      } else if (width >= 768 && width < 1024) {
        navLinkSize = "22px";
        buttonSize = "22px";
      } else {
        navLinkSize = "24px";
        buttonSize = "24px";
      }
      
      setFontSizes({
        navLink: navLinkSize,
        button: buttonSize
      });
    }
    
    // Initialiser les tailles
    updateFontSizes();
    
    // Mettre à jour lors du redimensionnement
    window.addEventListener('resize', updateFontSizes);
    
    return () => {
      window.removeEventListener('resize', updateFontSizes);
    };
  }, []);
  
  return fontSizes;
}

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
  // État pour détecter la taille de l'écran
  const [isTablet, setIsTablet] = useState(false);
  // Obtenir les tailles de police correctes
  const fontSizes = useFontSizes();
  // Hauteur du header pour les calculs du menu
  const [headerHeight, setHeaderHeight] = useState('5rem');

  // Effet pour gérer l'état monté, le défilement et la taille de l'écran
  useEffect(() => {
    setMounted(true);
    
    // Fonction pour détecter le défilement et mettre à jour l'apparence de l'en-tête
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    // Fonction pour détecter la taille de l'écran
    const handleResize = () => {
      const width = window.innerWidth;
      setIsTablet(width >= 768 && width <= 1023);
      
      // Mise à jour de la hauteur du header selon le breakpoint
      if (width < 640) {
        setHeaderHeight('4rem'); // 16 * 4 = 64px
      } else if (width >= 640 && width < 768) {
        setHeaderHeight('4.5rem'); // 18 * 4 = 72px
      } else {
        setHeaderHeight('5rem'); // 20 * 4 = 80px
      }
    };
    
    // Initialisation de l'état isTablet et de la hauteur du header
    handleResize();
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    // Contrôle du défilement du body quand le menu est ouvert
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    // Nettoyage des écouteurs d'événements
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

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
  // Modification: Hauteur responsive selon les breakpoints
  const headerClasses = `
    fixed top-0 w-full z-50 transition-all duration-300 
    h-16 sm:h-18 md:h-20 lg:h-20
    ${isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-background/50 backdrop-blur-sm"}
  `;

  // Styles pour le conteneur principal - avec corrections de centrage
  const containerStyle = {
    width: '90%', // Réduit de 96% à 90% pour permettre un meilleur centrage global
    maxWidth: '1400px', // Limite la largeur maximale pour les grands écrans
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: '0.2rem', // Ajoute un padding à droite pour compenser l'asymétrie
    paddingLeft: '1rem' // Ajoute un padding équivalent à gauche pour un meilleur équilibre
  };

  // Styles pour le menu déroulant mobile - CORRECTION pour fit-content sans défilement
  const mobileMenuStyles = {
    position: 'absolute', // Changé de 'fixed' à 'absolute' pour permettre fit-content
    top: headerHeight,
    left: 0,
    right: 0, 
    backgroundColor: theme === 'dark' ? 'hsl(30, 15%, 12%)' : 'hsl(40, 38%, 95%)',
    opacity: 1,
    zIndex: 40,
    width: '100%',
    // Suppression de height/minHeight/maxHeight pour permettre au contenu de définir la hauteur
    height: 'fit-content', // Utilise fit-content pour s'adapter au contenu
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    overflow: 'visible', // Changé de 'auto' à 'visible' pour supprimer la barre de défilement
    borderBottom: '1px solid hsl(var(--border))',
    borderBottomLeftRadius: '1rem',
    borderBottomRightRadius: '1rem'
  };

  // Styles pour le conteneur du menu - optimisé pour l'adaptation au contenu
  const menuContainerStyle = {
    width: '90%',
    maxWidth: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: '2rem', // Augmenté pour plus d'espace
    paddingBottom: '2rem', // Augmenté pour plus d'espace
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem' // Augmenté pour un meilleur espacement
  };

  // Styles communs pour les liens de navigation dans le menu
  const navLinkStyle = {
    fontFamily: 'var(--font-caveat), cursive',
    fontSize: fontSizes.navLink,
    fontWeight: 500,
    color: theme === 'dark' ? 'hsl(0, 0%, 100%)' : 'hsl(20, 40%, 10%)',
    textAlign: 'center',
    transition: 'color 0.2s ease',
    padding: '0.5rem 0' // Ajoute du padding vertical pour agrandir la zone cliquable
  };

  // Styles communs pour les boutons dans le menu
  const buttonTextStyle = {
    fontFamily: 'var(--font-caveat), cursive',
    fontSize: fontSizes.button
  };

  // Styles pour le conteneur des boutons
  const buttonContainerStyle = {
    paddingTop: '1.5rem', // Augmenté pour plus d'espace
    marginTop: '1rem', // Augmenté pour plus d'espace
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.25rem', // Augmenté pour un meilleur espacement
    borderTop: `1px solid ${theme === 'dark' ? 'hsla(30, 15%, 25%, 0.3)' : 'hsla(40, 30%, 86%, 0.3)'}`,
    width: 'fit-content',
    marginLeft: 'auto',
    marginRight: 'auto'
  };

  return (
    <header className={headerClasses}>
      <div style={containerStyle}>
        {/* Logo - ajusté pour meilleur équilibre */}
        <div className="w-auto md:w-1/4 lg:w-1/4 xl:w-1/5 pl-0">
          <Link href="/" className="flex items-center text-3xl sm:text-4xl font-bold whitespace-nowrap logo-text transition-colors duration-300 hover:text-primary">
            Éducateur péï
          </Link>
        </div>

        {/* Navigation sur desktop - visible sur desktop ET SEULEMENT SI PAS EN MODE TABLETTE */}
        <nav className={`hidden ${isTablet ? 'lg:hidden' : 'md:flex'} space-x-8 absolute left-1/2 transform -translate-x-1/2`}>
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

        {/* Boutons d'action sur desktop - visible sur desktop ET SEULEMENT SI PAS EN MODE TABLETTE */}
        <div className={`hidden ${isTablet ? 'lg:hidden' : 'md:flex'} items-center space-x-4 ml-auto`}>
            <a href="#contact"
            className="typography-nav text-foreground hover:text-primary-foreground px-4 py-2 rounded-btn transition-all duration-300 relative group"
            onClick={(e) => handleSmoothScroll(e, 'contact')}
          >
            <span className="relative z-10">Prendre RDV</span>
            <span className="absolute inset-0 bg-primary rounded-btn opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
          
          {/* Bouton de changement de thème sur desktop */}
          {mounted && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme} 
              className={`hidden ${isTablet ? 'lg:hidden' : 'md:flex'} btn-icon theme-switch-btn`}
              aria-label={theme === "dark" ? "Passer au mode clair" : "Passer au mode sombre"}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          )}
        </div>

        {/* Contrôles mobiles ET TABLETTE - visible sur mobile ET SI EN MODE TABLETTE */}
        <div className={`flex items-center ${isTablet ? '' : 'md:hidden'} ml-auto`}>
          {/* Bouton de changement de thème sur mobile et tablette */}
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

      {/* Menu mobile en mode fit-content sans défilement */}
      {isMenuOpen && (
        <div 
          style={mobileMenuStyles}
          className="animate-fadeIn"
        >
          <div style={menuContainerStyle}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={navLinkStyle}
                className="hover:text-primary transition-colors block w-full text-center"
                onClick={(e) => handleSmoothScroll(e, link.href.substring(1))}
              >
                {link.label}
              </a>
            ))}
            
            <div style={buttonContainerStyle}>
              <Button className="rounded-btn bg-primary hover:bg-primary/90 w-fit py-3 px-5" asChild>
                <a 
                  href="#contact" 
                  onClick={(e) => handleSmoothScroll(e, 'contact')}
                  style={buttonTextStyle}
                >
                  Prendre RDV
                </a>
              </Button>
              <Button variant="outline" className="rounded-btn border-primary text-primary hover:bg-primary/10 w-fit py-3 px-5" asChild>
                <Link 
                  href="/connexion" 
                  onClick={() => setIsMenuOpen(false)}
                  style={buttonTextStyle}
                >
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