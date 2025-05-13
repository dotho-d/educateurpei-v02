"use client";

import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function MentionsLegales() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex-1 flex flex-col justify-start items-center pt-32 pb-16 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="w-full max-w-4xl flex flex-col items-center">
          <div className="text-center w-full">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground gradient-text font-alegreya py-4">
              Mentions Légales
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
                    Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004 pour la Confiance en
                    l'économie numérique, il est porté à la connaissance des utilisateurs du site
                    educateurpei.re, les présentes mentions légales.
                  </p>

                  <p className="text-foreground/80 font-brawler text-[17px]">
                    La connexion et la navigation sur le site par l'utilisateur implique acceptation intégrale et
                    sans réserve des présentes mentions légales. Ces dernières sont accessibles sur le site à la
                    rubrique "Mentions légales".
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-semibold mb-3 text-foreground font-alegreya">I. ÉDITION DU SITE</h2>
                  <p className="text-foreground/80 font-brawler text-[17px]">
                    L'édition et la direction de la publication du site est assurée par [Prénom Nom],
                    domicilié à [Adresse], dont l'adresse e-mail est contact@educateurpei.re.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-semibold mb-3 text-foreground font-alegreya">II. HÉBERGEUR</h2>
                  <p className="text-foreground/80 font-brawler text-[17px]">
                    L'hébergeur du Site est la société [Nom de l'hébergeur], dont le siège social est situé à [Adresse de l'hébergeur].
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-semibold mb-3 text-foreground font-alegreya">III. ACCÈS AU SITE</h2>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Le site est normalement accessible, à tout moment pour l'utilisateur.
                  </p>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Toutefois, l'éditeur pourra, à tout moment, suspendre, limiter ou interrompre le site afin
                    de procéder, notamment, à des mises à jour ou des modifications de son contenu.
                  </p>
                  <p className="text-foreground/80 font-brawler text-[17px]">
                    L'éditeur ne pourra en aucun cas être tenu responsable des conséquences éventuelles de
                    cette indisponibilité sur les activités de l'utilisateur.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-semibold mb-3 text-foreground font-alegreya">IV. COLLECTE DES DONNÉES</h2>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Le site assure à l'utilisateur une collecte et un traitement des données personnelles dans le
                    respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à
                    l'informatique, aux fichiers et aux libertés.
                  </p>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    En vertu de la réglementation applicable en matière de protection des données à caractère
                    personnel, l'utilisateur dispose d'un droit d'accès, de rectification, de suppression et
                    d'opposition de ses données personnelles. L'utilisateur peut exercer ce droit :
                  </p>
                  <ul className="list-disc pl-6 text-foreground/80 font-brawler text-[17px]">
                    <li className="mb-1">depuis son espace personnel ;</li>
                    <li className="mb-1">depuis le formulaire de contact ;</li>
                    <li>par mail à l'adresse email suivante : contact@educateurpei.re ;</li>
                  </ul>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-semibold mb-3 text-foreground font-alegreya">V. PROPRIÉTÉ INTELLECTUELLE</h2>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son…) font
                    l'objet d'une protection par le Code de la propriété intellectuelle et plus
                    particulièrement par le droit d'auteur.
                  </p>
                  <p className="text-foreground/80 font-brawler text-[17px]">
                    "Éducateur péï" est une marque déposée par [Prénom Nom]. Toute représentation et/ou reproduction et/ou exploitation partielle ou totale de cette
                    marque, de quelque nature que ce soit, est totalement prohibée.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-semibold mb-3 text-foreground font-alegreya">VI. INFORMATIONS COMPLÉMENTAIRES</h2>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou
                    partie du site, sans autorisation expresse de l'éditeur est prohibée et pourra entraîner des
                    actions et poursuites judiciaires telles que prévues par la réglementation en vigueur.
                  </p>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Pour plus d'informations sur les conditions d'utilisation du site, se reporter aux CGU du
                    site educateurpei.re, accessibles depuis la rubrique "CGU".
                  </p>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Pour plus d'informations en matière de protection des données à caractère personnel, se
                    reporter à la Politique de confidentialité du site educateurpei.re, accessible depuis la rubrique "Politique de confidentialité".
                  </p>
                  <p className="text-foreground/80 font-brawler text-[17px]">
                    Pour plus d'informations en matière de cookies, se reporter à la Politique de cookies du
                    site educateurpei.re, accessible à la rubrique "Politique de cookies".
                  </p>
                </div>
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
}