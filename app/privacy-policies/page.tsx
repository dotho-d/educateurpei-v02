"use client";

import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function PolitiqueConfidentialite() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex-1 flex flex-col justify-start items-center pt-32 pb-16 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="w-full max-w-4xl flex flex-col items-center">
          <div className="text-center w-full">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground gradient-text font-alegreya py-4">
              Politique de Confidentialité
            </h1>
          </div>
          
          <div className="w-full max-w-3xl mx-auto bg-gradient-to-br from-background to-primary/5 rounded-3xl p-6 shadow-lg mb-8">
            <ScrollArea className="h-[50vh]">
              <div className="pr-4">
                <div className="text-center mb-12">
                  <p className="text-muted-foreground font-brawler text-[17px]">En vigueur au 01/01/2025</p>
                </div>

                <div className="mb-12">
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    La présente politique de confidentialité définit et vous informe de la manière dont Éducateur péï utilise et protège les informations que vous nous transmettez lorsque vous utilisez le site accessible depuis l'URL : educateurpei.re
                  </p>

                  <p className="text-foreground/80 font-brawler text-[17px]">
                    Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, cette politique de confidentialité peut être modifiée à tout moment afin de rester en accord avec la réglementation en vigueur. Toute modification prendra effet immédiatement.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-semibold mb-3 text-foreground font-alegreya">I. DONNÉES COLLECTÉES</h2>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Nous collectons les informations que vous nous fournissez notamment quand :
                  </p>
                  <ul className="list-disc pl-6 text-foreground/80 font-brawler text-[17px] mb-3">
                    <li className="mb-1">Vous remplissez un formulaire de contact</li>
                    <li className="mb-1">Vous prenez rendez-vous en ligne</li>
                    <li className="mb-1">Vous créez un compte personnel</li>
                    <li>Vous utilisez notre service d'accompagnement</li>
                  </ul>
                  
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Les informations personnelles que nous collectons peuvent inclure :
                  </p>
                  <ul className="list-disc pl-6 text-foreground/80 font-brawler text-[17px]">
                    <li className="mb-1">Nom et prénom</li>
                    <li className="mb-1">Adresse postale</li>
                    <li className="mb-1">Adresse email</li>
                    <li className="mb-1">Numéro de téléphone</li>
                    <li className="mb-1">Informations démographiques (âge, situation familiale, etc.)</li>
                    <li className="mb-1">Informations sur votre situation sociale et financière</li>
                    <li>Historique des services utilisés</li>
                  </ul>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-semibold mb-3 text-foreground font-alegreya">II. UTILISATION DES DONNÉES</h2>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Les données personnelles collectées sont utilisées pour :
                  </p>
                  <ul className="list-disc pl-6 text-foreground/80 font-brawler text-[17px]">
                    <li className="mb-1">Fournir et améliorer nos services d'accompagnement</li>
                    <li className="mb-1">Traiter vos demandes de rendez-vous</li>
                    <li className="mb-1">Personnaliser votre expérience utilisateur</li>
                    <li className="mb-1">Communiquer avec vous concernant nos services</li>
                    <li className="mb-1">Vous envoyer des informations importantes concernant votre suivi</li>
                    <li>Respecter nos obligations légales et réglementaires</li>
                  </ul>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-semibold mb-3 text-foreground font-alegreya">III. CONFIDENTIALITÉ ET SÉCURITÉ</h2>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Nous nous engageons à assurer la sécurité et la confidentialité de vos données personnelles. Nous avons mis en place des mesures techniques et organisationnelles appropriées pour protéger vos données contre toute perte, altération, divulgation ou accès non autorisés.
                  </p>
                  <p className="text-foreground/80 font-brawler text-[17px]">
                    Seules les personnes ayant besoin de connaître vos informations dans le cadre de leur mission ont accès à vos données personnelles.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-semibold mb-3 text-foreground font-alegreya">IV. DURÉE DE CONSERVATION</h2>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Vos données personnelles sont conservées pour la durée nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées et dans le respect de la réglementation applicable.
                  </p>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Les données relatives à vos dossiers d'accompagnement sont conservées pendant une durée de 5 ans à compter de la fin de la relation d'accompagnement, sauf dispositions légales particulières.
                  </p>
                  <p className="text-foreground/80 font-brawler text-[17px]">
                    Les données relatives à votre compte utilisateur sont conservées tant que votre compte est actif ou pendant la durée nécessaire pour vous fournir nos services.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-semibold mb-3 text-foreground font-alegreya">V. VOS DROITS</h2>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Conformément à la réglementation applicable, vous disposez des droits suivants concernant vos données personnelles :
                  </p>
                  <ul className="list-disc pl-6 text-foreground/80 font-brawler text-[17px] mb-3">
                    <li className="mb-1">Droit d'accès : vous pouvez obtenir des informations concernant le traitement de vos données personnelles ainsi qu'une copie de ces données.</li>
                    <li className="mb-1">Droit de rectification : si vous estimez que vos données personnelles sont inexactes ou incomplètes, vous pouvez demander à ce qu'elles soient modifiées.</li>
                    <li className="mb-1">Droit à l'effacement : vous pouvez demander la suppression de vos données personnelles, dans la limite des obligations légales de conservation.</li>
                    <li className="mb-1">Droit à la limitation du traitement : vous pouvez demander la limitation du traitement de vos données personnelles.</li>
                    <li className="mb-1">Droit d'opposition : vous pouvez vous opposer au traitement de vos données personnelles, pour des raisons tenant à votre situation particulière.</li>
                    <li>Droit à la portabilité : vous pouvez demander à recevoir vos données personnelles dans un format structuré et courant.</li>
                  </ul>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Pour exercer ces droits, vous pouvez nous contacter :
                  </p>
                  <ul className="list-disc pl-6 text-foreground/80 font-brawler text-[17px]">
                    <li className="mb-1">Par email : contact@educateurpei.re</li>
                    <li className="mb-1">Par courrier : [Adresse postale complète]</li>
                    <li>Via le formulaire de contact sur notre site</li>
                  </ul>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-semibold mb-3 text-foreground font-alegreya">VI. PARTAGE DE VOS DONNÉES</h2>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Nous ne partageons jamais vos données personnelles avec des tiers à des fins commerciales ou de marketing.
                  </p>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Vos données peuvent être partagées avec :
                  </p>
                  <ul className="list-disc pl-6 text-foreground/80 font-brawler text-[17px]">
                    <li className="mb-1">Les professionnels intervenant dans votre accompagnement, avec votre consentement préalable</li>
                    <li className="mb-1">Nos sous-traitants techniques (hébergement, maintenance du site, etc.) qui agissent sur nos instructions</li>
                    <li>Les autorités administratives ou judiciaires, si la loi nous y oblige</li>
                  </ul>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-semibold mb-3 text-foreground font-alegreya">VII. COOKIES</h2>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Notre site utilise des cookies pour améliorer votre expérience de navigation et personnaliser les contenus qui vous sont proposés.
                  </p>
                  <p className="text-foreground/80 font-brawler text-[17px]">
                    Pour en savoir plus sur l'utilisation des cookies et gérer vos préférences, veuillez consulter notre politique de cookies accessible depuis le lien en bas de page.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-semibold mb-3 text-foreground font-alegreya">VIII. MODIFICATIONS DE LA POLITIQUE DE CONFIDENTIALITÉ</h2>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Nous nous réservons le droit de modifier la présente politique de confidentialité à tout moment. Toute modification sera effective dès sa publication sur notre site.
                  </p>
                  <p className="text-foreground/80 font-brawler text-[17px]">
                    Nous vous encourageons à consulter régulièrement cette page pour prendre connaissance de toute mise à jour ou modification.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-semibold mb-3 text-foreground font-alegreya">IX. CONTACT</h2>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Pour toute question relative à la présente politique de confidentialité ou pour toute demande concernant vos données personnelles, vous pouvez nous contacter :
                  </p>
                  <ul className="list-disc pl-6 text-foreground/80 font-brawler text-[17px]">
                    <li className="mb-1">Par email : contact@educateurpei.re</li>
                    <li className="mb-1">Par téléphone : [Numéro de téléphone]</li>
                    <li>Par courrier : [Adresse postale]</li>
                  </ul>
                </div>
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
}