import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ContactCTA from "@/components/home/contact-cta";

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header avec dégradé */}
      <section className="pt-32 pb-16 md:pb-24 relative overflow-hidden bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-[80%] mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-background/70 p-8 rounded-3xl shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Nos services d'assistance sociale
            </h1>
            <p className="text-xl text-muted-foreground">
              Découvrez comment nous pouvons vous accompagner dans la résolution de vos difficultés administratives, sociales, psychologiques, financières et éducatives.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="max-w-[80%] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Aide administrative"
              description="Assistance pour vos démarches administratives, rédaction de courriers, et médiation avec les institutions."
              features={[
                "Constitution de dossiers administratifs",
                "Aide à la rédaction de courriers officiels",
                "Médiation avec les administrations",
                "Suivi des démarches en cours",
              ]}
              link="/services/administratif"
              color="primary"
            />
            
            <ServiceCard 
              title="Accompagnement social"
              description="Soutien et orientation vers les dispositifs sociaux adaptés à votre situation."
              features={[
                "Évaluation de votre situation sociale",
                "Information sur vos droits",
                "Orientation vers les dispositifs adaptés",
                "Accompagnement dans les démarches d'accès aux droits",
              ]}
              link="/services/social"
              color="secondary"
            />
            
            <ServiceCard 
              title="Soutien psychologique"
              description="Écoute et conseil pour vous aider à traverser les périodes difficiles."
              features={[
                "Espace d'écoute confidentiel",
                "Soutien en situation de crise",
                "Orientation vers des professionnels spécialisés",
                "Techniques de gestion du stress",
              ]}
              link="/services/psychologique"
              color="accent"
            />
            
            <ServiceCard 
              title="Conseil budgétaire"
              description="Aide à la gestion de votre budget et solutions pour sortir des difficultés financières."
              features={[
                "Analyse de votre situation financière",
                "Création d'un budget équilibré",
                "Négociation avec les créanciers",
                "Prévention du surendettement",
              ]}
              link="/services/financier"
              color="primary"
            />
            
            <ServiceCard 
              title="Accompagnement éducatif"
              description="Soutien à la parentalité et aide à la résolution des problèmes éducatifs."
              features={[
                "Conseils en matière d'éducation",
                "Médiation familiale",
                "Soutien à la parentalité",
                "Accompagnement des jeunes en difficulté",
              ]}
              link="/services/educatif"
              color="secondary"
            />
            
            <ServiceCard 
              title="Assistance numérique"
              description="Aide à l'utilisation des outils numériques pour vos démarches en ligne."
              features={[
                "Initiation aux outils numériques",
                "Assistance pour les démarches en ligne",
                "Création et gestion d'identités numériques",
                "Sécurisation de vos données personnelles",
              ]}
              link="/services/numerique"
              color="accent"
            />
            
            <ServiceCard 
              title="Insertion professionnelle"
              description="Accompagnement personnalisé pour votre retour à l'emploi ou votre évolution professionnelle."
              features={[
                "Tests de personnalité et bilan de compétences",
                "Orientation professionnelle",
                "Accompagnement pour l'entrée en formation",
                "Suivi pour la création d'entreprise",
              ]}
              link="/services/insertion-professionnelle"
              color="primary"
            />
            
            <ServiceCard 
              title="Astreinte téléphonique AI"
              description="Assistance à distance triée et gérée par notre système d'intelligence artificielle."
              features={[
                "Disponibilité pendant les heures d'intervention",
                "Tri et sélection des appels par IA",
                "Réponse rapide par SMS ou appel",
                "Tarif de 16€ par intervention",
              ]}
              link="/services/astreinte-ai"
              color="secondary"
            />
            
            <ServiceCard 
              title="Astreinte physique 24/7"
              description="Service d'intervention physique disponible 24h/24 et 7j/7 pour les situations urgentes."
              features={[
                "Disponibilité permanente",
                "Une intervention physique par mois",
                "Réponse rapide en cas d'urgence",
                "Tarif de 36€ par mois",
              ]}
              link="/services/astreinte-physique"
              color="accent"
            />
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-[40px] mx-6">
        <div className="max-w-[80%] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6 gradient-text">L'innovation au service du travail social</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Notre approche combine l'expertise humaine avec les avantages de la technologie pour un service plus accessible et efficace.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start bg-background p-4 rounded-xl shadow-sm">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <span>Disponibilité 24/7 grâce à notre assistant IA spécialisé</span>
                </li>
                <li className="flex items-start bg-background p-4 rounded-xl shadow-sm">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <span>Prise de rendez-vous en ligne pour plus de flexibilité</span>
                </li>
                <li className="flex items-start bg-background p-4 rounded-xl shadow-sm">
                  <div className="bg-secondary/10 p-2 rounded-full mr-3">
                    <Check className="h-5 w-5 text-secondary" />
                  </div>
                  <span>Espace personnel sécurisé pour le suivi de votre dossier</span>
                </li>
                <li className="flex items-start bg-background p-4 rounded-xl shadow-sm">
                  <div className="bg-secondary/10 p-2 rounded-full mr-3">
                    <Check className="h-5 w-5 text-secondary" />
                  </div>
                  <span>Échange de documents simplifié et sécurisé</span>
                </li>
              </ul>
              <Button variant="default" asChild className="rounded-full shadow-md">
                <Link href="/innovation" className="flex items-center">
                  Découvrir nos innovations <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/7947452/pexels-photo-7947452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="L'innovation dans le travail social"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options Section */}
      <section className="py-16 bg-gradient-to-r from-accent/10 to-background rounded-[40px] mx-6 my-16">
        <div className="max-w-[80%] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 gradient-text">
              Options de paiement flexibles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nous vous proposons plusieurs moyens de paiement pour faciliter vos démarches
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            <div className="bg-background rounded-xl p-4 shadow-md flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="font-medium">Espèces</p>
            </div>
            
            <div className="bg-background rounded-xl p-4 shadow-md flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <p className="font-medium">Virement</p>
            </div>
            
            <div className="bg-background rounded-xl p-4 shadow-md flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <p className="font-medium">Carte bancaire</p>
            </div>
            
            <div className="bg-background rounded-xl p-4 shadow-md flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <p className="font-medium">Apple Pay</p>
            </div>
            
            <div className="bg-background rounded-xl p-4 shadow-md flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <p className="font-medium">Google Pay</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10 mt-16 rounded-[40px] mx-6">
        <div className="max-w-[80%] mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Prêt à surmonter vos difficultés ?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Prenez rendez-vous dès maintenant ou contactez-nous pour discuter de vos besoins spécifiques. Nous sommes là pour vous aider.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild className="rounded-full py-6 px-8 shadow-lg">
              <Link href="/rendez-vous">
                Prendre rendez-vous
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full py-6 px-8 border-2">
              <Link href="/contact">
                Nous contacter
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  link: string;
  color: "primary" | "secondary" | "accent";
}

function ServiceCard({ title, description, features, link, color }: ServiceCardProps) {
  const colorClasses = {
    primary: "from-primary/10 to-primary/5",
    secondary: "from-secondary/10 to-secondary/5",
    accent: "from-accent/10 to-accent/5"
  };

  const iconColorClasses = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    accent: "bg-accent/10 text-accent"
  };

  return (
    <Card className="rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] border-0">
      <div className={`bg-gradient-to-br ${colorClasses[color]} p-6`}>
        <CardHeader className="p-0 mb-3">
          <CardTitle>{title}</CardTitle>
          <CardDescription className="mt-2">{description}</CardDescription>
        </CardHeader>
        <CardContent className="p-0 space-y-6">
          <ul className="space-y-2 mt-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className={`${iconColorClasses[color]} p-2 rounded-full mr-2 shrink-0 mt-0.5`}>
                  <Check className="h-4 w-4" />
                </div>
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </div>
      <div className="p-4 bg-background">
        <Button variant="default" asChild className="w-full rounded-full">
          <Link href={link} className="flex items-center justify-center">
            En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Card>
  );
}