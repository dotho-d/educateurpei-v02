/**
 * footer.tsx
 * Pied de page de l'application avec informations de contact, liens rapides et zone d'intervention
 * Version optimisée pour la responsivité
 */
import Link from "next/link";
import { Mail, Phone, MapPin, Fuel, Facebook, Twitter, Instagram } from "lucide-react";

/**
 * Composant Footer
 * Affiche le pied de page de l'application avec sections pour les informations, les liens et la zone d'intervention
 * Responsive : s'adapte aux écrans mobile, tablette et desktop
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-bg-footer py-4 flex flex-col justify-center rounded-t-[50px] mt-4">
      <div className="container mx-auto px-4 flex flex-col">
        {/* Contenu du footer adapté pour petits écrans (xs) - version visible et améliorée */}
        <div className="block sm:hidden md:hidden lg:hidden xl:hidden">
          <div className="space-y-10 py-6">
            {/* Logo et réseaux sociaux */}
            <div className="text-center mb-2">
              <h3 className="footer-brand text-3xl font-bold mb-4 font-annie">Éducateur péï</h3>
              <p className="footer-text mb-4 text-muted-foreground font-brawler text-[15px] max-w-[90%] mx-auto">
                Services d&apos;assistance sociale, administratifs, psychologiques, financiers et éducatifs.
              </p>
              <div className="flex justify-center space-x-4 mb-4">
                <Link href="#" className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary/20 transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary/20 transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary/20 transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>
            
            {/* Zone d'intervention - compact pour mobile */}
            <div className="bg-background/50 rounded-xl p-4 w-fit mx-auto">
              <h3 className="footer-title text-xl font-semibold mb-4 text-center">Zone d&apos;intervention</h3>
              <div className="space-y-4 flex flex-col items-start">
                <div className="flex items-start justify-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-[15px] font-alegreya">Secteur de base</p>
                    <p className="footer-small text-sm font-brawler text-[14px] text-muted-foreground">Le Tampon, Saint-Pierre, Petite-Île</p>
                  </div>
                </div>
                <div className="flex items-start justify-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <Fuel className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-[15px] font-alegreya">Hors secteur</p>
                    <p className="footer-small text-sm font-brawler text-[14px] text-muted-foreground">Tarif de base + 0,54€/km</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Section Liens rapides */}
            <div className="mb-10">
              <h3 className="footer-title text-xl font-semibold mb-3 text-center">Liens rapides</h3>
              <div className="flex flex-wrap justify-center -mx-1 -my-1">
                <div className="w-1/2 px-1 py-1">
                  <Link href="/services" className="footer-link text-center text-muted-foreground hover:text-primary transition-colors flex flex-col items-center justify-center text-[14px] bg-background/30 p-2 rounded-lg h-full">
                    <span>Domaines d&apos;interventions</span>
                  </Link>
                </div>
                <div className="w-1/2 px-1 py-1">
                  <Link href="/contact" className="footer-link text-center text-muted-foreground hover:text-primary transition-colors flex flex-col items-center justify-center text-[14px] bg-background/30 p-2 rounded-lg h-full">
                    <span>Modalités d&apos;interventions</span>
                  </Link>
                </div>
                <div className="w-1/2 px-1 py-1">
                  <Link href="/tarifs" className="footer-link text-center text-muted-foreground hover:text-primary transition-colors flex flex-col items-center justify-center text-[14px] bg-background/30 p-2 rounded-lg h-full">
                    <span>Tarifs</span>
                  </Link>
                </div>
                <div className="w-1/2 px-1 py-1">
                  <Link href="/contact" className="footer-link text-center text-muted-foreground hover:text-primary transition-colors flex flex-col items-center justify-center text-[14px] bg-background/30 p-2 rounded-lg h-full">
                    <span>Contact</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Section Informations légales */}
            <div>
              <h3 className="footer-title text-xl font-semibold mb-3 text-center">Informations légales</h3>
              <div className="flex flex-wrap justify-center -mx-1 -my-1">
                <div className="w-1/2 px-1 py-1">
                  <Link href="/services" className="footer-link text-center text-muted-foreground hover:text-primary transition-colors flex flex-col items-center justify-center text-[14px] bg-background/30 p-2 rounded-lg h-full">
                    <span>Mentions légales</span>
                  </Link>
                </div>
                <div className="w-1/2 px-1 py-1">
                  <Link href="/contact" className="footer-link text-center text-muted-foreground hover:text-primary transition-colors flex flex-col items-center justify-center text-[14px] bg-background/30 p-2 rounded-lg h-full">
                    <span>Confidentialité</span>
                  </Link>
                </div>
                <div className="w-1/2 px-1 py-1">
                  <Link href="/tarifs" className="footer-link text-center text-muted-foreground hover:text-primary transition-colors flex flex-col items-center justify-center text-[14px] bg-background/30 p-2 rounded-lg h-full">
                    <span>CGU</span>
                  </Link>
                </div>
                <div className="w-1/2 px-1 py-1">
                  <Link href="/contact" className="footer-link text-center text-muted-foreground hover:text-primary transition-colors flex flex-col items-center justify-center text-[14px] bg-background/30 p-2 rounded-lg h-full">
                    <span>Cookies</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contenu du footer pour tablettes - version 2 colonnes */}
        <div className="hidden xs:hidden sm:block md:block lg:hidden xl:hidden">
          <div className="grid grid-cols-1 gap-10 py-8">
            {/* Colonne 1 : Logo et info */}
            <div>
              <h3 className="footer-brand text-3xl font-bold mb-4 font-annie">Éducateur péï</h3>
              <p className="footer-text mb-4 text-muted-foreground font-brawler text-[16px]">
                Services d&apos;assistance sociale, administratifs, psychologiques, financiers et éducatifs.
              </p>
              <div className="flex space-x-4 mb-6">
                <Link href="#" className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary/20 transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary/20 transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary/20 transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>
            
            {/* Colonne droite : Zone d'intervention */}
            <div>
              <h3 className="footer-title text-xl font-semibold mb-4">Zone d&apos;intervention</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-[16px] font-alegreya">Secteur de base</p>
                    <p className="footer-small text-sm font-brawler text-[14px] text-muted-foreground">Le Tampon, Saint-Pierre, Petite-Île</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <Fuel className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-[16px] font-alegreya">Interventions hors secteur</p>
                    <p className="footer-small text-sm font-brawler text-[14px] text-muted-foreground">Tarif de base + 0,54€/km</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Conteneur pour les liens et la zone d'intervention */}
            <div className="grid grid-cols-2 gap-10">
              {/* Colonne gauche : Liens */}
              <div>
                <div className="mb-8">
                  <h3 className="footer-title text-xl font-semibold mb-3">Liens rapides</h3>
                  <ul className="space-y-2 font-brawler font-light">
                    <li>
                      <Link href="/services" className="footer-link text-muted-foreground hover:text-primary transition-colors flex items-center text-[14px]">
                        <span className="bg-primary/10 h-2 w-2 rounded-full mr-2"></span>
                        Domaines d&apos;intervention
                      </Link>
                    </li>
                    <li>
                      <Link href="/tarifs" className="footer-link text-muted-foreground hover:text-primary transition-colors flex items-center text-[14px]">
                        <span className="bg-primary/10 h-2 w-2 rounded-full mr-2"></span>
                        Modalités d&apos;intervention
                      </Link>
                    </li>
                    <li>
                      <Link href="/secteur" className="footer-link text-muted-foreground hover:text-primary transition-colors flex items-center text-[14px]">
                        <span className="bg-primary/10 h-2 w-2 rounded-full mr-2"></span>
                        Tarifs
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="footer-link text-muted-foreground hover:text-primary transition-colors flex items-center text-[14px]">
                        <span className="bg-primary/10 h-2 w-2 rounded-full mr-2"></span>
                        Contacts
                      </Link>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="footer-title text-xl font-semibold mb-3">Informations légales</h3>
                  <ul className="space-y-2 font-brawler font-light">
                    <li>
                      <Link href="/legal-mentions" className="footer-link text-muted-foreground hover:text-primary transition-colors flex items-center text-[14px]">
                        <span className="bg-primary/10 h-2 w-2 rounded-full mr-2"></span>
                        Mentions légales
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy-policies" className="footer-link text-muted-foreground hover:text-primary transition-colors flex items-center text-[14px]">
                        <span className="bg-primary/10 h-2 w-2 rounded-full mr-2"></span>
                        Politique de confidentialité
                      </Link>
                    </li>
                    <li>
                      <Link href="/cgu" className="footer-link text-muted-foreground hover:text-primary transition-colors flex items-center text-[14px]">
                        <span className="bg-primary/10 h-2 w-2 rounded-full mr-2"></span>
                        Conditions d&apos;utilisation
                      </Link>
                    </li>
                    <li>
                      <Link href="/cookies-policies" className="footer-link text-muted-foreground hover:text-primary transition-colors flex items-center text-[14px]">
                        <span className="bg-primary/10 h-2 w-2 rounded-full mr-2"></span>
                        Politique de cookies
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contenu du footer pour desktop - version 4 colonnes originale */}
        <div className="hidden sm:hidden md:hidden lg:block xl:block py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Colonne d'information */}
            <div>
              <h3 className="footer-brand text-3xl font-bold mb-6 font-annie">Éducateur péï</h3>
              <p className="footer-text mb-6 text-muted-foreground font-brawler text-[17px]">
                Services d&apos;assistance sociale, administratifs, psychologiques, financiers et éducatifs.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary/20 transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary/20 transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary/20 transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Colonne de liens rapides */}
            <div>
              <h3 className="footer-title text-xl font-semibold mb-6 font-alegreya">Liens rapides</h3>
              <ul className="space-y-3 font-brawler font-light">
                <li>
                  <Link href="/services" className="footer-link text-muted-foreground hover:text-primary transition-colors flex items-center text-[14px]">
                    <span className="bg-primary/10 h-2 w-2 rounded-full mr-2"></span>
                    Domaines d&apos;intervention
                  </Link>
                </li>
                <li>
                  <Link href="/tarifs" className="footer-link text-muted-foreground hover:text-primary transition-colors flex items-center text-[14px]">
                    <span className="bg-primary/10 h-2 w-2 rounded-full mr-2"></span>
                    Modalités d&apos;intervention
                  </Link>
                </li>
                <li>
                  <Link href="/secteur" className="footer-link text-muted-foreground hover:text-primary transition-colors flex items-center text-[14px]">
                    <span className="bg-primary/10 h-2 w-2 rounded-full mr-2"></span>
                    Tarifs
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="footer-link text-muted-foreground hover:text-primary transition-colors flex items-center text-[14px]">
                    <span className="bg-primary/10 h-2 w-2 rounded-full mr-2"></span>
                    Contacts
                  </Link>
                </li>
              </ul>
            </div>

            {/* Colonne des informations légales */}
            <div>
              <h3 className="footer-title text-xl font-semibold mb-6 font-alegreya">Informations légales</h3>
              <ul className="space-y-3 font-brawler font-light">
                <li>
                  <Link href="/legal-mentions" className="footer-link text-muted-foreground hover:text-primary transition-colors flex items-center text-[14px]">
                    <span className="bg-primary/10 h-2 w-2 rounded-full mr-2"></span>
                    Mentions légales
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policies" className="footer-link text-muted-foreground hover:text-primary transition-colors flex items-center text-[14px]">
                    <span className="bg-primary/10 h-2 w-2 rounded-full mr-2"></span>
                    Politique de confidentialité
                  </Link>
                </li>
                <li>
                  <Link href="/cgu" className="footer-link text-muted-foreground hover:text-primary transition-colors flex items-center text-[14px]">
                    <span className="bg-primary/10 h-2 w-2 rounded-full mr-2"></span>
                    Conditions d&apos;utilisation (CGU)
                  </Link>
                </li>
                <li>
                  <Link href="/cookies-policies" className="footer-link text-muted-foreground hover:text-primary transition-colors flex items-center text-[14px]">
                    <span className="bg-primary/10 h-2 w-2 rounded-full mr-2"></span>
                    Politique de cookies
                  </Link>
                </li>
              </ul>
            </div>

            {/* Colonne de zone d'intervention */}
            <div>
              <h3 className="footer-title text-xl font-semibold mb-6 font-alegreya">Zone d&apos;intervention</h3>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-[17px] font-alegreya">Secteur de base</p>
                    <p className="footer-small text-sm font-brawler text-[14px] text-muted-foreground">Le Tampon, Saint-Pierre, Petite-Île</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Fuel className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-[17px] font-alegreya">Interventions hors secteur</p>
                    <p className="footer-small text-sm font-brawler text-[14px] text-muted-foreground">Tarif de base + 0,54€/km</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Barre de séparation et copyright - commune à toutes les versions */}
        <div className="mt-auto pt-4 border-t border-border">
          <p className="footer-small text-center text-sm font-brawler text-[14px] text-muted-foreground">
            © {currentYear} Éducateur Péï. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}