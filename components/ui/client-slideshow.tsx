/**
 * client-slideshow.tsx
 * Composant client pour le slideshow utilisé pour présenter les domaines d'intervention
 * Utilise le composant Slideshow pour le rendu côté client
 */
"use client";

import { Slideshow } from "./slideshow";

interface ClientSlideshowProps {
  /** Éléments enfants à afficher dans le slideshow (généralement des slides) */
  children: React.ReactNode[];
  /** Indique si le défilement automatique est activé */
  autoPlay?: boolean;
  /** Intervalle de temps entre chaque défilement (en ms) */
  interval?: number;
}

/**
 * Composant ClientSlideshow
 * Wrapper client pour le composant Slideshow, permettant son utilisation dans un contexte client
 */
export function ClientSlideshow({ children, autoPlay, interval }: ClientSlideshowProps) {
  return (
    <Slideshow autoPlay={autoPlay} interval={interval}>
      {children}
    </Slideshow>
  );
}