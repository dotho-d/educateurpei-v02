/**
 * testimonial-card.tsx
 * Composant pour afficher un témoignage client avec citation, auteur et titre
 */
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

interface TestimonialCardProps {
  /** Texte du témoignage */
  quote: string;
  /** Nom de l'auteur du témoignage */
  author: string;
  /** Titre ou description de l'auteur */
  title: string;
}

/**
 * Composant TestimonialCard
 * Affiche un témoignage client dans une carte avec citation et information sur l'auteur
 */
export default function TestimonialCard({ quote, author, title }: TestimonialCardProps) {
  return (
    <Card className="border-none shadow-sm bg-card">
      <CardContent className="pt-6">
        <QuoteIcon className="h-8 w-8 text-primary/20 mb-4" />
        <p className="typography-body-medium mb-6">{quote}</p>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="typography-body-small text-muted-foreground">{title}</p>
        </div>
      </CardContent>
    </Card>
  );
}