/**
 * slideshow.tsx
 * Composant de diaporama avec animation 3D et contrôles de navigation
 * Utilisé pour présenter les domaines d'intervention sur la page d'accueil
 */
"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Accessibility, Users, Cannabis, FileText, Briefcase } from "lucide-react";

interface SlideshowProps {
  /** Éléments enfants à afficher dans le slideshow (généralement des slides) */
  children: React.ReactNode[];
  /** Indique si le défilement automatique est activé */
  autoPlay?: boolean;
  /** Intervalle de temps entre chaque défilement (en ms) */
  interval?: number;
}

/**
 * Composant Slideshow
 * Affiche un diaporama interactif avec effet 3D et navigation
 */
export function Slideshow({ children, autoPlay = true, interval = 24000 }: SlideshowProps) {
  // État pour suivre l'index de la slide active
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVerySmallScreen, setIsVerySmallScreen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  
  // Conversion des enfants en array et définition des titres avec icônes
  const slides = Array.isArray(children) ? children : [children];
  const slideTitles = ["Handicap", "Conflits familiaux et difficultés éducatives", "Addictions", 
                      "Accompagnement administratif et social", "Insertion professionnelle"];
  
  // Icônes correspondant à chaque domaine
  const slideIcons = [
    <Accessibility key="accessibility-icon" className="w-8 h-8 text-primary" />,
    <Users key="users-icon" className="w-8 h-8 text-primary" />,
    <Cannabis key="cannabis-icon" className="w-8 h-8 text-primary" />,
    <FileText key="filetext-icon" className="w-8 h-8 text-primary" />,
    <Briefcase key="briefcase-icon" className="w-8 h-8 text-primary" />
  ];

  // Effet pour gérer le défilement automatique
  useEffect(() => {
    if (!autoPlay) return;

    // Timer pour le défilement automatique
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, interval);

    // Nettoyage du timer lors du démontage du composant
    return () => clearInterval(timer);
  }, [autoPlay, interval, slides.length]);

  // Effet pour détecter les tailles d'écran avec une granularité fine
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsVerySmallScreen(width < 480);
      setIsSmallScreen(width >= 480 && width < 640);
      setIsMediumScreen(width >= 640 && width < 768);
      setIsLargeScreen(width >= 768 && width < 1024);
      setIsMobile(width < 768);
    };
    
    // Vérifier initialement
    checkScreenSize();
    
    // Ajouter un écouteur pour les changements de taille d'écran
    window.addEventListener('resize', checkScreenSize);
    
    // Nettoyer l'écouteur lors du démontage
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  /**
   * Gère le changement d'onglet en définissant l'index actuel
   * @param index Nouvel index à définir
   */
  const handleTabChange = (index: number) => {
    setCurrentIndex(index);
  };

  /**
   * Navigue vers la slide précédente
   */
  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  /**
   * Navigue vers la slide suivante
   */
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  // Rendu d'un bouton de navigation avec isolation garantie pour l'icône
  const renderNavigationButton = (onClick, direction, size, ariaLabel) => {
    const IconComponent = direction === 'left' ? ChevronLeft : ChevronRight;
    const buttonSize = size === 'small' ? 'w-8 h-8' : size === 'medium' ? 'w-10 h-10' : 'w-12 h-12';
    const iconSize = size === 'small' ? 'w-4 h-4' : size === 'medium' ? 'w-5 h-5' : 'w-6 h-6';
    const wrapperSize = size === 'small' ? 'w-5 h-5' : size === 'medium' ? 'w-6 h-6' : 'w-8 h-8';
    
    return (
      <button
        onClick={onClick}
        className={`flex-shrink-0 ${buttonSize} rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 active:bg-primary/60 transition-colors duration-200 focus:outline-none overflow-visible z-[15]`}
        aria-label={ariaLabel}
      >
        <div className={`flex items-center justify-center ${wrapperSize} text-primary`}>
          <IconComponent 
            className={iconSize}
            style={{ 
              stroke: 'currentColor', 
              strokeWidth: 3, 
              fill: 'none',
              visibility: 'visible',
              display: 'block'
            }} 
          />
        </div>
      </button>
    );
  };

  // CSS pour les écrans moyens et grands pour fixer les problèmes de largeur
  const largeScreenCSS = `
    .ClientSlideshow .slide-content-only [class*="md:w-"] {
      width: 100% !important;
      max-width: 100% !important;
    }
    .ClientSlideshow .slide-content-only [class*="md:flex-row"] {
      flex-direction: column !important;
    }
    .ClientSlideshow .slide-content-only .w-full.md\\:w-\\[48\\%\\] {
      width: 100% !important;
    }
    .ClientSlideshow .slide-content-only .w-full.md\\:w-\\[42\\%\\] {
      display: none !important;
    }
  `;

  // Version très petits écrans (<480px)
  if (isVerySmallScreen) {
    return (
      <div className="relative w-full overflow-hidden flex flex-col justify-center items-center ClientSlideshow pb-8">
        {/* Affichage du titre et du contenu simplifié pour petit écran */}
        <div className="w-full px-4 pt-4 pb-8">
          {/* Conteneur avec padding et marge supplémentaires */}
          <div className="bg-gradient-to-br from-background to-primary/5 p-6 rounded-2xl shadow-md">
            {/* Icône centrée au dessus du titre */}
            <div className="flex justify-center mb-3">
              {slideIcons[currentIndex]}
            </div>
            
            {/* Titre centré avec espacement réduit */}
            <div className="text-center mb-1">
              <h3 className="typography-slideshow-heading text-2xl">{slideTitles[currentIndex] || `Domaine ${currentIndex + 1}`}</h3>
            </div>
            
            {/* Afficher uniquement le contenu textuel - cloner les slides et masquer les images */}
            <div className="mb-6">
              {React.cloneElement(slides[currentIndex] as React.ReactElement, {
                className: "slide-content-only",
                style: { 
                  width: '100%',
                  maxWidth: '100%',
                  display: 'block'
                }
              })}
            </div>
          </div>
        </div>
        
        {/* Contrôles de navigation améliorés pour mobile */}
        <div className="flex items-center justify-center w-full">
          {renderNavigationButton(
            handlePrevious, 
            'left', 
            'small', 
            'Domaine d\'intervention précédent'
          )}
          
          {/* Indicateurs de pagination plus compacts */}
          <div className="flex justify-center items-center gap-0.5 mx-3">
            {slides.map((_, index) => (
              <button
                key={`pagination-${index}`}
                onClick={() => handleTabChange(index)}
                className="focus:outline-none px-0.5"
                aria-label={`Voir le domaine: ${slideTitles[index] || `Domaine ${index + 1}`}`}
                aria-current={index === currentIndex ? "true" : "false"}
              >
                <div
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex 
                      ? "bg-primary w-5 h-2" 
                      : "bg-primary/30 w-1.5 h-1.5 hover:bg-primary/50"
                  }`}
                />
              </button>
            ))}
          </div>
          
          {renderNavigationButton(
            handleNext, 
            'right', 
            'small', 
            'Domaine d\'intervention suivant'
          )}
        </div>
      </div>
    );
  }

  // Version petits écrans (480px-640px)
  if (isSmallScreen) {
    return (
      <div className="relative w-full overflow-hidden flex flex-col justify-center items-center ClientSlideshow pb-12">
        {/* Affichage du titre et du contenu simplifié pour petit écran */}
        <div className="w-full px-4 pt-4 pb-8">
          {/* Conteneur avec padding et marge supplémentaires */}
          <div className="bg-gradient-to-br from-background to-primary/5 p-6 rounded-2xl shadow-md">
            {/* Icône centrée au dessus du titre */}
            <div className="flex justify-center mb-3">
              {slideIcons[currentIndex]}
            </div>
            
            {/* Titre centré avec espacement réduit */}
            <div className="text-center mb-1">
              <h3 className="typography-slideshow-heading text-2xl">{slideTitles[currentIndex] || `Domaine ${currentIndex + 1}`}</h3>
            </div>
            
            {/* Afficher uniquement le contenu textuel - cloner les slides et masquer les images */}
            <div className="mb-6 w-full">
              {React.cloneElement(slides[currentIndex] as React.ReactElement, {
                className: "slide-content-only",
                style: { 
                  width: '100%',
                  maxWidth: '100%',
                  display: 'block'
                }
              })}
            </div>
          </div>
        </div>
        
        {/* Contrôles de navigation améliorés pour petit écran */}
        <div className="flex items-center justify-center w-full">
          {renderNavigationButton(
            handlePrevious, 
            'left', 
            'small', 
            'Domaine d\'intervention précédent'
          )}
          
          {/* Indicateurs de pagination plus compacts */}
          <div className="flex justify-center items-center gap-0.5 mx-3">
            {slides.map((_, index) => (
              <button
                key={`pagination-${index}`}
                onClick={() => handleTabChange(index)}
                className="focus:outline-none px-0.5"
                aria-label={`Voir le domaine: ${slideTitles[index] || `Domaine ${index + 1}`}`}
                aria-current={index === currentIndex ? "true" : "false"}
              >
                <div
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex 
                      ? "bg-primary w-5 h-2" 
                      : "bg-primary/30 w-1.5 h-1.5 hover:bg-primary/50"
                  }`}
                />
              </button>
            ))}
          </div>
          
          {renderNavigationButton(
            handleNext, 
            'right', 
            'small', 
            'Domaine d\'intervention suivant'
          )}
        </div>
      </div>
    );
  }

  // Version tablette (640px-768px) avec slides simplifiées et icône
  if (isMediumScreen) {
    return (
      <div className="relative w-full overflow-hidden flex flex-col justify-center items-center ClientSlideshow pb-16">
        {/* Injecter le CSS pour correction des largeurs */}
        <style dangerouslySetInnerHTML={{ __html: largeScreenCSS }} />
        
        {/* Conteneur pour la slide active uniquement avec padding et spacing améliorés */}
        <div className="w-full px-4 py-6">
          <div className="bg-gradient-to-br from-background to-primary/5 p-8 rounded-2xl shadow-md">
            {/* Icône centrée au dessus du titre */}
            <div className="flex justify-center mb-3">
              {slideIcons[currentIndex]}
            </div>
            
            {/* Titre avec espacement réduit */}
            <div className="text-center mb-1">
              <h3 className="typography-slideshow-heading">{slideTitles[currentIndex] || `Domaine ${currentIndex + 1}`}</h3>
            </div>
            
            {/* Afficher uniquement le contenu textuel avec style forcé de largeur 100% */}
            <div className="w-full">
              {React.cloneElement(slides[currentIndex] as React.ReactElement, {
                className: "slide-content-only",
                style: { 
                  width: '100%',
                  maxWidth: '100%',
                  display: 'block'
                }
              })}
            </div>
          </div>
        </div>
        
        {/* Contrôles de navigation améliorés pour tablette */}
        <div className="flex items-center justify-center space-x-4 mt-6">
          {renderNavigationButton(
            handlePrevious, 
            'left', 
            'medium', 
            'Domaine d\'intervention précédent'
          )}

          {/* Indicateurs de pagination plus compacts */}
          <div className="flex justify-center items-center gap-0.5 mx-3">
            {slides.map((_, index) => (
              <button
                key={`pagination-${index}`}
                onClick={() => handleTabChange(index)}
                className="focus:outline-none px-0.5"
                aria-label={`Voir le domaine: ${slideTitles[index] || `Domaine ${index + 1}`}`}
                aria-current={index === currentIndex ? "true" : "false"}
              >
                <div
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex 
                      ? "bg-primary w-5 h-2" 
                      : "bg-primary/30 w-1.5 h-1.5 hover:bg-primary/50"
                  }`}
                />
              </button>
            ))}
          </div>

          {renderNavigationButton(
            handleNext, 
            'right', 
            'medium', 
            'Domaine d\'intervention suivant'
          )}
        </div>
      </div>
    );
  }

  // Version tablette large (768px-1024px)
  if (isLargeScreen) {
    return (
      <div className="relative w-full overflow-hidden flex flex-col justify-center items-center ClientSlideshow pb-16">
        {/* Injecter le CSS personnalisé */}
        <style dangerouslySetInnerHTML={{ __html: largeScreenCSS }} />
        
        {/* Conteneur pour la slide active uniquement avec padding et spacing optimisés */}
        <div className="w-full px-6 py-8">
          <div className="bg-gradient-to-br from-background to-primary/5 p-8 rounded-2xl shadow-md max-w-4xl mx-auto">
            {/* Icône centrée au dessus du titre */}
            <div className="flex justify-center mb-4">
              {slideIcons[currentIndex]}
            </div>
            
            {/* Titre avec espacement optimisé */}
            <div className="text-center mb-3">
              <h3 className="typography-slideshow-heading text-3xl">{slideTitles[currentIndex] || `Domaine ${currentIndex + 1}`}</h3>
            </div>
            
            {/* Contenu textuel avec classe spéciale pour appliquer nos styles CSS personnalisés */}
            <div className="w-full">
              {React.cloneElement(slides[currentIndex] as React.ReactElement, {
                className: "slide-content-only w-full",
                style: { 
                  width: '100%',
                  maxWidth: '100%',
                  display: 'block'
                }
              })}
            </div>
          </div>
        </div>
        
        {/* Contrôles de navigation pour tablette large */}
        <div className="flex items-center justify-center space-x-6 mt-6">
          {renderNavigationButton(
            handlePrevious, 
            'left', 
            'medium', 
            'Domaine d\'intervention précédent'
          )}

          {/* Indicateurs de pagination optimisés */}
          <div className="flex justify-center items-center gap-1 mx-4">
            {slides.map((_, index) => (
              <button
                key={`pagination-${index}`}
                onClick={() => handleTabChange(index)}
                className="focus:outline-none px-0.5"
                aria-label={`Voir le domaine: ${slideTitles[index] || `Domaine ${index + 1}`}`}
                aria-current={index === currentIndex ? "true" : "false"}
              >
                <div
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex 
                      ? "bg-primary w-6 h-2" 
                      : "bg-primary/30 w-2 h-2 hover:bg-primary/50"
                  }`}
                />
              </button>
            ))}
          </div>

          {renderNavigationButton(
            handleNext, 
            'right', 
            'medium', 
            'Domaine d\'intervention suivant'
          )}
        </div>
      </div>
    );
  }

  // Version desktop avec effet 3D complet (>1024px) - CORRIGÉE
  // CSS pour les grands écrans qui permet d'agrandir la taille du container et d'ajuster l'affichage
  const desktopCSS = `
    /* Agrandir le container parent pour contenir tout le contenu */
    .ClientSlideshow .desktop-3d-container {
      min-height: 580px !important;
    }
    
    /* Assurer que le slide actif est opaque et a le bon fond */
    .ClientSlideshow .active-slide-container {
      background: linear-gradient(to bottom right, hsl(var(--background)), hsl(var(--primary) / 0.05));
      opacity: 1 !important;
    }
    
    /* Styles pour assurer que le contenu est bien formaté */
    .ClientSlideshow .active-slide-container .slide-content {
      padding: 10px;
      width: 100%;
    }
    
    /* Styles pour tous les slides */
    .ClientSlideshow .slide-container {
      padding: 15px;
      border-radius: 1rem;
    }
  `;

  return (
    <div className="relative w-full overflow-hidden flex flex-col justify-center items-center ClientSlideshow py-2">
      {/* Injecter le CSS pour les grands écrans */}
      <style dangerouslySetInnerHTML={{ __html: desktopCSS }} />
      
      {/* Conteneur de slides avec effet 3D - AUGMENTÉ EN TAILLE */}
      <div
        ref={containerRef}
        className="w-full relative flex items-center justify-center desktop-3d-container"
        style={{
          perspective: "2600px",
          minHeight: "580px", // Augmenté pour contenir tout le contenu
        }}
      >
        <div 
          className="w-full h-full absolute"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <div 
            className="flex justify-center items-center w-full h-full"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {slides.map((slide, index) => {
              // Calcul de la position relative à la slide actuelle
              const offset = ((index - currentIndex) % slides.length + slides.length) % slides.length;
              const adjustedOffset = offset > slides.length / 2 ? offset - slides.length : offset;
              
              // Calcul des propriétés de transformation
              const zIndex = 10 - Math.abs(adjustedOffset);
              const opacity = index === currentIndex ? 1 : Math.max(0.05, 0.25 - Math.abs(adjustedOffset) * 0.1);
              const scale = index === currentIndex ? 1 : 0.7;
              const rotateY = adjustedOffset * 12;
              const translateX = adjustedOffset * 80;
              const translateZ = index === currentIndex ? 50 : -150;

              // Déterminer si c'est le slide actif
              const isActive = index === currentIndex;

              return (
                <motion.div
                  key={`slide-${slideTitles[index] || `domain-${index}`}`}
                  className="absolute bg-transparent"
                  style={{
                    zIndex,
                    width: isActive ? "80%" : "45%", // Augmenté pour le slide actif
                    transformStyle: "preserve-3d",
                    transform: `translateX(${translateX}%) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    opacity,
                    transformOrigin: adjustedOffset < 0 ? "right center" : "left center",
                    transition: "all 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)",
                  }}
                >
                  {/* Contenu de la slide avec arrière-plan - CORRIGÉ */}
                  <div 
                    className={`w-full rounded-2xl overflow-visible shadow-md slide-container ${
                      isActive ? "active-slide-container" : "bg-background/60"
                    }`}
                    style={{
                      padding: isActive ? "20px" : "15px", // Plus de padding pour le slide actif
                    }}
                  >
                    {/* Affichage des titres uniquement pour la slide active en desktop */}
                    {isActive && (
                      <div className="text-center mb-4 pt-4 px-4">
                        <h3 className="typography-slideshow-heading text-4xl">{slideTitles[index] || `Domaine ${index + 1}`}</h3>
                      </div>
                    )}
                    
                    {/* Contenu de la slide */}
                    <div className={isActive ? "w-full slide-content" : ""}>
                      {isActive 
                        ? React.cloneElement(slide as React.ReactElement, {
                            style: { 
                              width: '100%', 
                              height: 'auto'
                            }
                          })
                        : slide
                      }
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Contrôles de navigation */}
      <div className="flex items-center justify-center space-x-4 mt-0">
        {renderNavigationButton(
          handlePrevious, 
          'left', 
          'large', 
          'Domaine d\'intervention précédent'
        )}

        {/* Indicateurs de pagination */}
        <div className="flex justify-center items-center gap-0.5 mx-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleTabChange(index)}
              className="focus:outline-none px-0.5"
              aria-label={`Voir le domaine: ${slideTitles[index] || `Domaine ${index + 1}`}`}
              aria-current={index === currentIndex ? "true" : "false"}
            >
              <div 
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex 
                    ? "bg-primary w-6 h-2" 
                    : "bg-primary/30 w-2 h-2 hover:bg-primary/50"
                }`}
              />
            </button>
          ))}
        </div>

        {renderNavigationButton(
          handleNext, 
          'right', 
          'large', 
          'Domaine d\'intervention suivant'
        )}
      </div>
    </div>
  );
}