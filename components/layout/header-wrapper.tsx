/**
 * header-wrapper.tsx
 * Composant wrapper pour l'en-tête qui s'exécute côté client
 */
"use client";

import { usePathname } from 'next/navigation';
import Header from './header';

/**
 * Composant HeaderWrapper
 * Enveloppe le composant Header pour permettre l'utilisation de hooks React
 * Pourrait être étendu pour adapter l'en-tête en fonction du chemin
 */
export default function HeaderWrapper() {
  // On pourrait utiliser pathname pour conditionner le rendu ou le comportement de l'en-tête
  const pathname = usePathname();
  
  // Retourne toujours le Header, la logique conditionnelle pourrait être ajoutée ici si nécessaire
  return <Header />;
}