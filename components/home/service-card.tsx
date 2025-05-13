/**
 * service-card.tsx
 * Composant réutilisable pour afficher une carte de service avec icône, titre et description
 * Utilisé principalement dans la section services de la page d'accueil
 */
import { ReactNode } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ServiceCardProps {
  /** Icône à afficher en haut de la carte */
  icon: ReactNode;
  /** Titre du service */
  title: string;
  /** Description détaillée du service */
  description: string;
}

/**
 * Composant ServiceCard
 * Affiche une carte de service avec une icône, un titre et une description
 * Inclut des effets de survol pour améliorer l'interactivité
 */
export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card className="ServiceCard rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-0 bg-gradient-to-br from-background to-primary/5">
      <CardHeader className="pb-2 px-3 sm:px-4 pt-4 sm:pt-6">
        <div className="flex justify-center mb-4">
          {icon}
        </div>
        <h3 className="typography-card-title text-xl font-semibold mb-2 text-center">
          {title}
        </h3>
      </CardHeader>
      <CardContent className="px-3 sm:px-4 pb-4 sm:pb-6">
        <p className="typography-body-small text-muted-foreground text-center">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}