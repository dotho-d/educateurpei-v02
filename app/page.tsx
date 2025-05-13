/**
 * page.tsx (home page)
 * Page d'accueil principale de l'application
 * Contient les sections: hero, domaines d'intervention, services, tarifs et CTA
 */
"use client";

import Image from 'next/image';
import { Metadata } from 'next';
import { useRef } from 'react';
import Link from "next/link";
import {
  ArrowRight,
  ArrowDown,
  Calendar,
  FileText,
  MessageSquare,
  Phone,
  Clock,
  CreditCard,
  BarChart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/home/service-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClientSlideshow } from "@/components/ui/client-slideshow";
import Header from "@/components/layout/header";

/**
 * Page d'accueil
 * Affiche le site principal avec toutes les sections
 */
export default function Home() {
  // Référence à la section hero pour pouvoir y accéder depuis d'autres composants
  const heroRef = useRef(null);

  /**
   * Fonction pour gérer le défilement fluide vers les sections
   * @param targetId ID de la section cible
   */
  const handleSmoothScroll = (targetId: string) => {
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

  return (
    <div className="flex flex-col w-full">
      {/* Header fixe */}
      <Header />

      {/* Section Hero - conserve le positionnement original du ticker */}
      <section
        ref={heroRef}
        id="hero"
        className="relative w-full overflow-hidden min-h-screen h-screen flex items-center section-bg-1"
      >
        <div className="container mx-auto max-w-[86%] xs:max-w-[86%] sm:max-w-[86%] md:max-w-[82%] lg:max-w-[76%] px-4 sm:px-6 flex flex-col lg:flex-row items-center sm:pt-4 md:pt-0">
          {/* Contenu à gauche - centré sur mobile, aligné à gauche sur desktop */}
          <div className="w-full lg:w-1/2 z-10 mb-12 lg:mb-0 text-center lg:text-left">
            <h1 className="typography-h1 mb-6 sm:mb-4 md:mb-12 mx-auto lg:mx-0">
              Résolvez vos difficultés sociales et éducatives de façon innovante
            </h1>
            <p className="typography-body text-muted-foreground mb-4 mx-auto lg:mx-0">
              Vous habitez à l&apos;Île de La Réunion ?
            </p>
            <p className="typography-body text-muted-foreground mb-4 mx-auto lg:mx-0">
              Vous êtes à la recherche d&apos;un travailleur social indépendant ?
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button
                size="lg"
                variant="default"
                className="typography-button py-4 sm:py-6 px-4 sm:px-6 rounded-btn shadow-lg gap-2"
                onClick={() => handleSmoothScroll('domaines-intervention')}
              >
                Découvrir nos services <ArrowDown className="ml-2" />
              </Button>
            </div>
          </div>

          {/* Image à droite avec cercle décoratif - ajout des classes pour ajustements */}
          <div className="w-full lg:w-1/2 relative mt-12 sm:mt-8 lg:mt-0 hero-image-container">
            {/* Conteneur centré pour les cercles - ajout classe pour ajustements */}
            <div className="hero-circles-container">
              {/* Cercle décoratif - valeurs relatives */}
              <div className="absolute rounded-full bg-gradient-to-r from-primary/20 to-primary/20 z-0" style={{
                width: 'clamp(240px, 36vw, 340px)',
                height: 'clamp(240px, 36vw, 340px)'
              }}></div>

              {/* Cercle pointillé décoratif - valeurs relatives */}
              <div
                className="absolute rounded-full z-0 animate-rotate"
                style={{
                  width: 'clamp(260px, 40vw, 360px)',
                  height: 'clamp(260px, 40vw, 360px)',
                  border: "4px dashed",
                  borderColor: "hsl(var(--primary) / 0.4)",
                  borderRadius: "50%",
                  borderSpacing: "15px"
                }}
              ></div>
            </div>

            {/* Image au premier plan - responsive */}
            <div className="flex h-full items-center justify-center">
              <div className="relative z-5 rounded-3xl shadow-xl mt-4 overflow-hidden" style={{
                width: 'clamp(225px, 60vw, 450px)',
                height: 'clamp(150px, 40vw, 300px)',
              }}>
                <Image
                  src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg"
                  alt="Éducateur spécialisé"
                  fill
                  sizes="(max-width: 480px) 30vw, (max-width: 768px) 35vw, (max-width: 1024px) 40vw, 450px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Ticker - Bande défilante - CONSERVATION DU POSITIONNEMENT ORIGINAL */}
        <div className="absolute w-full sm:pb-0" style={{ top: "92%" }}>
          <div className="ticker-wrap overflow-hidden bg-gradient-to-r from-primary/10 to-primary/10 py-3 sm:py-3 md:py-4">
            <div className="ticker flex">
              {/* Premier ensemble d'éléments (dupliqué pour assurer la continuité) */}
              <div className="ticker-content flex whitespace-nowrap">
                <span className="ticker-item flex-shrink-0 px-4 sm:px-8 text-sm sm:text-base">✦ Handicap</span>
                <span className="ticker-item flex-shrink-0 px-4 sm:px-8 text-sm sm:text-base">✦ Difficultés éducatives</span>
                <span className="ticker-item flex-shrink-0 px-4 sm:px-8 text-sm sm:text-base">✦ Difficultés administratives et sociales</span>
                <span className="ticker-item flex-shrink-0 px-4 sm:px-8 text-sm sm:text-base">✦ Addictions</span>
                <span className="ticker-item flex-shrink-0 px-4 sm:px-8 text-sm sm:text-base">✦ Insertion professionnelle</span>
                <span className="ticker-item flex-shrink-0 px-4 sm:px-8 text-sm sm:text-base">✦ Santé mentale</span>
              </div>

              {/* Deuxième ensemble (identique) pour assurer la continuité */}
              <div className="ticker-content flex whitespace-nowrap">
                <span className="ticker-item flex-shrink-0 px-4 sm:px-8 text-sm sm:text-base">✦ Handicap</span>
                <span className="ticker-item flex-shrink-0 px-4 sm:px-8 text-sm sm:text-base">✦ Difficultés éducatives</span>
                <span className="ticker-item flex-shrink-0 px-4 sm:px-8 text-sm sm:text-base">✦ Difficultés administratives et sociales</span>
                <span className="ticker-item flex-shrink-0 px-4 sm:px-8 text-sm sm:text-base">✦ Addictions</span>
                <span className="ticker-item flex-shrink-0 px-4 sm:px-8 text-sm sm:text-base">✦ Insertion professionnelle</span>
                <span className="ticker-item flex-shrink-0 px-4 sm:px-8 text-sm sm:text-base">✦ Santé mentale</span>
              </div>
            </div>
          </div>
        </div>

        {/* Formes décoratives */}
        <div className="absolute bottom-1/4 right-1/3 w-8 h-8 bg-primary/15 rounded-full"></div>
      </section>

      {/* Domaines d'intervention Section - maintient 100vh */}
      <section
        id="domaines-intervention"
        className="flex items-center justify-center section-bg-2 py-10 md:py-16"
      >
        <div className="w-full max-w-[86%] xs:max-w-[86%] sm:max-w-[86%] md:max-w-[82%] lg:max-w-[76%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-0 md:mb-0">
            <h2 className="typography-h2 mb-0">
              Nos domaines d&apos;intervention
            </h2>
          </div>

          <ClientSlideshow autoPlay={true} interval={24000}>
            {/* Slide 1: Handicap - sans titre car géré par le slideshow */}
            <div className="bg-gradient-to-br from-background to-primary/5 py-6 sm:py-8 px-4 sm:px-6 rounded-2xl shadow-md">
                <div className="flex flex-col md:flex-row justify-evenly mx-auto max-w-4xl">
                  {/* Contenu textuel - 48% sur desktop, pleine largeur sur mobile */}
                  <div className="w-full md:w-[48%] flex flex-col justify-between mb-6 md:mb-0">
                    <div>
                      <p className="typography-slideshow-description mb-4 sm:mb-5" data-slideshow-text="description">
                        Pour les personnes en situation de handicap ainsi que leurs familles.
                      </p>
                      <ul className="space-y-1 list-disc pl-4 mb-4 sm:mb-5">
                        <li className="typography-slideshow-list">Accompagnement obtention prestations sociales spécifiques au handicap</li>
                        <li className="typography-slideshow-list">Adaptation du quotidien et développement de l&apos;autonomie</li>
                        <li className="typography-slideshow-list">Soutien à l&apos;inclusion scolaire et professionnelle</li>
                        <li className="typography-slideshow-list">Liens entre les institutions et les professionnels qui gravitent autour de la situation</li>
                      </ul>
                    </div>
                    <div className="mt-2 sm:mt-3 flex justify-center w-full">
                      <Button variant="outline" asChild className="typography-button py-2 px-4 sm:px-6 rounded-btn">
                        <Link href="/services/handicap">En savoir plus</Link>
                      </Button>
                    </div>
                  </div>

                  {/* Image - 42% sur desktop, pleine largeur sur mobile */}
                  <div className="w-full md:w-[42%]">
                    <div className="h-[180px] md:h-full rounded-xl overflow-hidden bg-muted/10 flex items-center justify-center">
                      <div className="p-4 text-center">
                        <p className="typography-body-small text-muted-foreground">Contenu illustratif</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

            {/* Slide 2: Conflits familiaux et difficultés éducatives - sans titre car géré par le slideshow */}
            <div className="bg-gradient-to-br from-background to-primary/5 py-6 sm:py-8 px-4 sm:px-6 rounded-2xl shadow-md">
                <div className="flex flex-col md:flex-row justify-evenly mx-auto max-w-4xl">
                  {/* Contenu textuel - 48% sur desktop, pleine largeur sur mobile */}
                  <div className="w-full md:w-[48%] flex flex-col justify-between mb-6 md:mb-0">
                    <div>
                      <p className="typography-slideshow-description mb-4 sm:mb-5" data-slideshow-text="description">
                        Pour améliorer la communication au sein de la famille, résoudre les difficultés éducatives, et favoriser l&apos;harmonie.
                      </p>
                      <ul className="space-y-1 list-disc pl-4 mb-4 sm:mb-5">
                        <li className="typography-slideshow-list">Accompagnement à la parentalité</li>
                        <li className="typography-slideshow-list">Médiations familiales et gestion des conflits</li>
                        <li className="typography-slideshow-list">Réécriture du cadre éducatif au sein de la famille</li>
                        <li className="typography-slideshow-list">Trouvez un style éducatif adapté qui vous correspond</li>
                      </ul>
                    </div>
                    <div className="mt-2 sm:mt-3 flex justify-center w-full">
                      <Button variant="outline" asChild className="typography-button py-2 px-4 sm:px-6 rounded-btn">
                        <Link href="/services/familiales">En savoir plus</Link>
                      </Button>
                    </div>
                  </div>
                  {/* Image - 42% sur desktop, pleine largeur sur mobile */}
                  <div className="w-full md:w-[42%]">
                    <div className="h-[180px] md:h-full rounded-xl overflow-hidden bg-muted/10 flex items-center justify-center">
                      <div className="p-4 text-center">
                        <p className="typography-body-small text-muted-foreground">Contenu illustratif</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

            {/* Slide 3: Addictions - sans titre car géré par le slideshow */}
            <div className="bg-gradient-to-br from-background to-primary/5 py-6 sm:py-8 px-4 sm:px-6 rounded-2xl shadow-md">
                <div className="flex flex-col md:flex-row justify-evenly mx-auto max-w-4xl">
                  <div className="w-full md:w-[48%] flex flex-col justify-between mb-6 md:mb-0">
                    <div>
                      <p className="typography-slideshow-description mb-4 sm:mb-5" data-slideshow-text="description">
                        Pour les personnes qui se questionnent au sujet d'addictions.
                      </p>
                      <ul className="space-y-1 list-disc pl-4 mb-4 sm:mb-5">
                        <li className="typography-slideshow-list">Évaluation de la situation et des consommations</li>
                        <li className="typography-slideshow-list">Définition d&apos;objectifs pertinents et gamification du suivi</li>
                        <li className="typography-slideshow-list">Prévention théorique et solution logicielle</li>
                        <li className="typography-slideshow-list">Réécriture d&apos;un cadre de vie favorisant la réduction des consommations ou l'abstinence</li>
                        <li className="typography-slideshow-list">Liens avec structures spécialisés si besoin</li>
                      </ul>
                    </div>
                    <div className="mt-2 sm:mt-3 flex justify-center w-full">
                      <Button variant="outline" asChild className="typography-button py-2 px-4 sm:px-6 rounded-btn">
                        <Link href="/services/addictions">En savoir plus</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="w-full md:w-[42%]">
                    <div className="h-[180px] md:h-full rounded-xl overflow-hidden bg-muted/10 flex items-center justify-center">
                      <div className="p-4 text-center">
                        <p className="typography-body-small text-muted-foreground">Contenu illustratif</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

            {/* Slide 4: Accompagnement administratif et social - sans titre car géré par le slideshow */}
            <div className="bg-gradient-to-br from-background to-primary/5 py-6 sm:py-8 px-4 sm:px-6 rounded-2xl shadow-md">
                <div className="flex flex-col md:flex-row justify-evenly mx-auto max-w-4xl">
                  <div className="w-full md:w-[48%] flex flex-col justify-between mb-6 md:mb-0">
                    <div>
                      <p className="typography-slideshow-description mb-4 sm:mb-5" data-slideshow-text="description">
                        Pour vous aider dans vos démarches administratives et sociales.
                      </p>
                      <ul className="space-y-1 list-disc pl-4 mb-4 sm:mb-5">
                        <li className="typography-slideshow-list">Assistance pour les démarches administratives</li>
                        <li className="typography-slideshow-list">Orientation vers les dispositifs sociaux adaptés</li>
                        <li className="typography-slideshow-list">Médiation avec les institutions</li>
                        <li className="typography-slideshow-list">Suivi personnalisé de votre dossier</li>
                      </ul>
                    </div>
                    <div className="mt-2 sm:mt-3 flex justify-center w-full">
                      <Button variant="outline" asChild className="typography-button py-2 px-4 sm:px-6 rounded-btn">
                        <Link href="/services/administratif-social">En savoir plus</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="w-full md:w-[42%]">
                    <div className="h-[180px] md:h-full rounded-xl overflow-hidden bg-muted/10 flex items-center justify-center">
                      <div className="p-4 text-center">
                        <p className="typography-body-small text-muted-foreground">Contenu illustratif</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

            {/* Slide 5: Insertion professionnelle - sans titre car géré par le slideshow */}
            <div className="bg-gradient-to-br from-background to-primary/5 py-6 sm:py-8 px-4 sm:px-6 rounded-2xl shadow-md">
                <div className="flex flex-col md:flex-row justify-evenly mx-auto max-w-4xl">
                  <div className="w-full md:w-[48%] flex flex-col justify-between mb-6 md:mb-0">
                    <div>
                      <p className="typography-slideshow-description mb-4 sm:mb-5" data-slideshow-text="description">
                        Pour vous accompagner dans votre parcours d'insertion professionnelle.
                      </p>
                      <ul className="space-y-1 list-disc pl-4 mb-4 sm:mb-5">
                        <li className="typography-slideshow-list">Tests de personnalité et identification des compétences</li>
                        <li className="typography-slideshow-list">Orientation professionnelle et conseils</li>
                        <li className="typography-slideshow-list">Accompagnement pour l&apos;entrée en formation ou la création d&apos;entreprise</li>
                        <li className="typography-slideshow-list">Suivi personnalisé tout au long du parcours</li>
                      </ul>
                    </div>
                    <div className="mt-2 sm:mt-3 flex justify-center w-full">
                      <Button variant="outline" asChild className="typography-button py-2 px-4 sm:px-6 rounded-btn">
                        <Link href="/services/insertion-professionnelle">En savoir plus</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="w-full md:w-[42%]">
                    <div className="h-[180px] md:h-full rounded-xl overflow-hidden bg-muted/10 flex items-center justify-center">
                      <div className="p-4 text-center">
                        <p className="typography-body-small text-muted-foreground">Contenu illustratif</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </ClientSlideshow>
        </div>
      </section>

      {/* Section de services sous forme de grille avec icônes - adapté au contenu */}
      <section id="services" className="py-16 md:py-24 section-bg-1">
        <div className="max-w-[80%] xs:max-w-[72%] sm:max-w-[92%] md:max-w-[90%] lg:max-w-[76%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="typography-h2 mb-4">
              Les services proposés
            </h2>
            <p className="typography-body text-muted-foreground max-w-2xl mx-auto">
              Découvrez comment nous pouvons vous accompagner dans vos défis quotidiens
            </p>
          </div>

          {/* Grille de services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mx-auto">
            <ServiceCard
              icon={<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><MessageSquare className="w-6 h-6 text-primary" /></div>}
              title="Soutien psychologique"
              description="Écoute bienveillante pour vous aider à traverser les périodes difficiles"
            />
            <ServiceCard
              icon={<div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center"><Calendar className="w-6 h-6 text-accent" /></div>}
              title="Prise de RDV en ligne"
              description="Réservez facilement vos rendez-vous depuis notre plateforme en ligne"
            />
            <ServiceCard
              icon={<div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center"><BarChart className="w-6 h-6 text-accent" /></div>}
              title="Gamification et suivi objectif"
              description="Solution en ligne et application mobile pour suivre vos progrès et atteindre vos objectifs"
            />
            <ServiceCard
              icon={<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><CreditCard className="w-6 h-6 text-primary" /></div>}
              title="Visioconsultations"
              description="Pour les accompagnements qui ne nécessitent pas d'interactions directes, les visioconsultations sont possibles"
            />
            <ServiceCard
              icon={<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><Phone className="w-6 h-6 text-primary" /></div>}
              title="Astreinte AI + SMS / appel"
              description="Assistance SMS et appel téléphonique pendant les heures d'interventions, assistance IA, 24h / 24, 7 jours / 7"
            />
            <ServiceCard
              icon={<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><Clock className="w-6 h-6 text-primary" /></div>}
              title="Astreinte physique"
              description="Disponibilité 24h/24 et 7j/7 avec une intervention par mois (tarifée)"
            />
          </div>
        </div>
      </section>

      {/* Tarification Section - adapté au contenu */}
      <section id="tarifs" className="py-16 md:py-24 section-bg-2">
        <div className="max-w-[80%] xs:max-w-[72%] sm:max-w-[92%] md:max-w-[90%] lg:max-w-[76%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="typography-h2 mb-4">
              Nos tarifs
            </h2>
            <p className="typography-body text-muted-foreground max-w-2xl mx-auto">
              Des tarifs adaptés à vos besoins et à votre situation
            </p>
          </div>

          {/* Cartes de tarification */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mx-auto max-w-4xl mb-8 md:mb-12">
            <Card className="rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 border-0 bg-gradient-to-br from-background to-primary/5">
              <CardHeader className="pb-2 px-3 sm:px-4 pt-3 sm:pt-4">
                <CardTitle className="text-xl text-center font-alegreya">Évaluation initiale</CardTitle>
              </CardHeader>
              <CardContent className="px-3 sm:px-4 pb-3 sm:pb-4 pt-0">
                <div className="flex items-center justify-between mb-2 pb-2 border-b border-primary/10">
                  <span className="typography-body-small text-muted-foreground">1er entretien de rencontre</span>
                  <span className="price-display text-xl">Gratuit</span>
                </div>
                <div className="flex items-center justify-between mb-2 pb-2 border-b border-primary/10">
                  <span className="typography-body-small text-muted-foreground">Entretiens de rencontre complémentaires</span>
                  <span className="price-display text-2xl">15€</span>
                </div>
                <div className="flex items-center justify-between mb-2 pb-2 border-b border-primary/10">
                  <span className="typography-body-small text-muted-foreground">Analyse de la situation</span>
                  <span className="price-display text-2xl">15€</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="typography-body-small text-muted-foreground">Rédaction d'un projet éducatif personnalisé</span>
                  <span className="price-display text-2xl">15€</span>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 border-0 bg-gradient-to-br from-background to-secondary/5">
              <CardHeader className="pb-2 px-3 sm:px-4 pt-3 sm:pt-4">
                <CardTitle className="text-xl text-center font-alegreya">Accompagnement</CardTitle>
              </CardHeader>
              <CardContent className="px-3 sm:px-4 pb-3 sm:pb-4 pt-0">
                <div className="bg-secondary/10 rounded-xl p-3 mb-3">
                  <div className="text-center mb-2">
                    <span className="text-4xl font-cormorant font-semibold">36€</span>
                    <span className="text-sm text-muted-foreground ml-1">/ heure</span>
                  </div>
                  <div className="text-center text-muted-foreground">
                    <p className="typography-body-medium">Accompagnement éducatif</p>
                    <p className="typography-body-medium">Entretiens motivationnels</p>
                  </div>
                </div>
                <div className="text-center text-muted-foreground mb-3">
                  <p className="typography-body-small">
                    Idéal pour des entretiens ponctuels, en fonction du besoin.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 border-0 bg-gradient-to-br from-background to-accent/5 md:col-span-1 col-span-full">
              <CardHeader className="pb-2 px-3 sm:px-4 pt-3 sm:pt-4">
                <CardTitle className="text-xl text-center font-alegreya">Forfait</CardTitle>
                </CardHeader>
              <CardContent className="px-3 sm:px-4 pb-3 sm:pb-4 pt-0">
                <div className="bg-accent/10 rounded-xl p-3 mb-3">
                  <div className="text-center mb-2">
                    <span className="text-4xl font-cormorant font-semibold">192€</span>
                  </div>
                  <div className="text-center text-muted-foreground">
                    <p className="typography-body-medium">soit, 6 séances à <span className="font-cormorant font-medium text-[24px]">32€</span> / la séance</p>
                  </div>
                </div>
                <div className="text-center text-muted-foreground mb-3">
                  <p className="typography-body-small">
                    Idéal pour un suivi régulier et un accompagnement sur la durée.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <p className="typography-body text-muted-foreground mb-6 sm:mb-8">
              Plusieurs modes de paiement acceptés : Espèces, Virement bancaire, CB, Apple Pay, Google Pay
            </p>
            <Button variant="default" asChild className="typography-button rounded-btn py-2 px-4 sm:px-6 shadow-md inline-flex w-auto">
              <Link href="/tarifs">
                Voir tous nos tarifs <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section - hauteur adaptative plutôt que fixe */}
      <section id="contact" className="py-16 md:py-24 flex items-center justify-center section-bg-1 cta-section">
        <div className="max-w-[80%] xs:max-w-[72%] sm:max-w-[92%] md:max-w-[90%] lg:max-w-[76%] mx-auto px-4 sm:px-6 md:max-w-3xl lg:max-w-4xl">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl text-center">
            <h2 className="typography-h2 mb-4">
              Prêt à commencer ?
            </h2>
            <p className="typography-body text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8">
              Contactez-nous dès aujourd&apos;hui pour un premier entretien gratuit
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Button size="lg" variant="outline" asChild className="typography-button py-4 sm:py-6 px-4 sm:px-8 border-2 shadow-md rounded-btn">
                <Link href="/contact">
                  Prendre rendez-vous
                  <Calendar className="ml-2 sm:ml-4 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}