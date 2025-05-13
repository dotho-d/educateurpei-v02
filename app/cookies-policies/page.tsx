"use client";

import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function PolitiqueCookies() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex-1 flex flex-col justify-start items-center pt-32 pb-16 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="w-full max-w-4xl flex flex-col items-center">
          <div className="text-center w-full">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground gradient-text font-alegreya py-4">
              Politique de Cookies
            </h1>
          </div>
          
          <div className="w-full max-w-3xl mx-auto bg-gradient-to-br from-background to-primary/5 rounded-3xl p-6 shadow-lg mb-8">
            <ScrollArea className="h-[50vh]">
              <div className="pr-4">
                <div className="text-center mb-12">
                  <p className="text-muted-foreground font-brawler text-[17px]">En vigueur au 01/01/2025</p>
                </div>

                <div className="mb-12">
                  <p className="text-foreground/80 font-brawler text-[17px]">
                    La présente politique de cookies a pour but de vous informer sur l'utilisation des cookies sur notre site educateurpei.re et de vous permettre de gérer vos préférences.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-semibold mb-3 text-foreground font-alegreya">I. QU'EST-CE QU'UN COOKIE ?</h2>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de votre visite sur notre site. Il permet à notre site de mémoriser des informations sur votre visite, comme votre langue préférée et d'autres paramètres.
                  </p>
                  <p className="text-foreground/80 font-brawler text-[17px]">
                    Les cookies facilitent votre prochaine visite et rendent le site plus utile pour vous en mémorisant vos préférences, en suivant et en regroupant vos activités sur notre site.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-semibold mb-3 text-foreground font-alegreya">II. TYPES DE COOKIES UTILISÉS</h2>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Notre site utilise différents types de cookies :
                  </p>
                  <h3 className="text-xl font-semibold mb-2 text-foreground font-alegreya">1. Cookies strictement nécessaires</h3>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Ces cookies sont essentiels au fonctionnement du site et ne peuvent pas être désactivés. Ils permettent notamment de :
                  </p>
                  <ul className="list-disc pl-6 text-foreground/80 font-brawler text-[17px] mb-5">
                    <li className="mb-1">Mémoriser les informations que vous avez saisies dans des formulaires</li>
                    <li className="mb-1">Identifier votre session de connexion sécurisée</li>
                    <li>Assurer la sécurité du site</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-2 text-foreground font-alegreya">2. Cookies de performance et d'analyse</h3>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Ces cookies nous permettent de collecter des informations sur la façon dont les visiteurs utilisent notre site, notamment :
                  </p>
                  <ul className="list-disc pl-6 text-foreground/80 font-brawler text-[17px] mb-3">
                    <li className="mb-1">Les pages que vous consultez le plus souvent</li>
                    <li className="mb-1">Les éventuelles erreurs rencontrées</li>
                    <li>La manière dont vous naviguez sur le site</li>
                  </ul>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-5">
                    Ces cookies nous aident à améliorer le fonctionnement de notre site.
                  </p>

                  <h3 className="text-xl font-semibold mb-2 text-foreground font-alegreya">3. Cookies fonctionnels</h3>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Ces cookies permettent d'enregistrer vos préférences et de personnaliser votre expérience sur notre site, par exemple :
                  </p>
                  <ul className="list-disc pl-6 text-foreground/80 font-brawler text-[17px]">
                    <li className="mb-1">Mémoriser vos préférences de langue</li>
                    <li className="mb-1">Mémoriser votre choix de thème (clair ou sombre)</li>
                    <li>Personnaliser l'affichage des contenus</li>
                  </ul>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-semibold mb-3 text-foreground font-alegreya">III. GESTION DES COOKIES</h2>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Lors de votre première visite sur notre site, un bandeau vous informe de l'utilisation des cookies et vous propose de les accepter ou de les refuser.
                  </p>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Vous pouvez à tout moment modifier vos préférences concernant les cookies via le lien "Gestion des cookies" accessible en bas de chaque page du site.
                  </p>
                  <p className="text-foreground/80 font-brawler text-[17px]">
                    Vous pouvez également configurer votre navigateur pour qu'il vous avertisse lors de l'utilisation de cookies et pour refuser systématiquement tous les cookies ou certains d'entre eux. Nous vous rappelons toutefois que la désactivation de tous les cookies peut empêcher l'utilisation optimale du site.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-semibold mb-3 text-foreground font-alegreya">IV. DURÉE DE CONSERVATION DES COOKIES</h2>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Les cookies de session sont temporaires et sont supprimés lorsque vous fermez votre navigateur.
                  </p>
                  <p className="text-foreground/80 font-brawler text-[17px]">
                    Les cookies persistants restent sur votre appareil jusqu'à leur expiration ou jusqu'à ce que vous les supprimiez manuellement. La durée de conservation varie selon le cookie concerné et n'excède pas 13 mois.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-semibold mb-3 text-foreground font-alegreya">V. COOKIES TIERS</h2>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Nous utilisons également des cookies émis par des tiers pour :
                  </p>
                  <ul className="list-disc pl-6 text-foreground/80 font-brawler text-[17px] mb-3">
                    <li className="mb-1">Mesurer l'audience de notre site (Google Analytics)</li>
                    <li className="mb-1">Améliorer l'interactivité de notre site (boutons de partage sur les réseaux sociaux)</li>
                    <li>Personnaliser l'affichage des contenus en fonction de vos préférences</li>
                  </ul>
                  <p className="text-foreground/80 font-brawler text-[17px]">
                    Ces cookies tiers sont soumis aux politiques de confidentialité des tiers qui les émettent, sur lesquelles nous n'avons aucun contrôle.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-semibold mb-3 text-foreground font-alegreya">VI. COMMENT DÉSACTIVER LES COOKIES</h2>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Vous pouvez à tout moment désactiver les cookies en utilisant les paramètres de votre navigateur :
                  </p>
                  <ul className="list-disc pl-6 text-foreground/80 font-brawler text-[17px]">
                    <li className="mb-1">Pour Internet Explorer : menu "Outils", "Options Internet", onglet "Confidentialité"</li>
                    <li className="mb-1">Pour Firefox : menu "Outils", "Options", onglet "Vie privée"</li>
                    <li className="mb-1">Pour Chrome : menu "Paramètres", "Afficher les paramètres avancés", "Confidentialité"</li>
                    <li className="mb-1">Pour Safari : menu "Safari", "Préférences", onglet "Confidentialité"</li>
                    <li>Pour Opera : menu "Outils", "Préférences", onglet "Avancé", "Cookies"</li>
                  </ul>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-semibold mb-3 text-foreground font-alegreya">VII. MODIFICATIONS DE LA POLITIQUE DE COOKIES</h2>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Nous nous réservons le droit de modifier cette politique de cookies à tout moment. Toute modification sera publiée sur cette page et prendra effet immédiatement.
                  </p>
                  <p className="text-foreground/80 font-brawler text-[17px]">
                    Nous vous encourageons à consulter régulièrement cette page pour prendre connaissance des mises à jour.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-semibold mb-3 text-foreground font-alegreya">VIII. CONTACT</h2>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Pour toute question concernant notre politique de cookies, vous pouvez nous contacter :
                  </p>
                  <ul className="list-disc pl-6 text-foreground/80 font-brawler text-[17px]">
                    <li className="mb-1">Par email : contact@educateurpei.re</li>
                    <li>Via le formulaire de contact sur notre site</li>
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