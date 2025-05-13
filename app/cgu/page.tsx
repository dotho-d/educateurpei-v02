"use client";

import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function CGU() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex-1 flex flex-col justify-start items-center pt-32 pb-16 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="w-full max-w-4xl flex flex-col items-center">
          <div className="text-center w-full">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground gradient-text font-alegreya py-4">
              Conditions Générales d'Utilisation
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
                    Les présentes conditions générales d'utilisation (dites « CGU ») ont pour objet l'encadrement
                    juridique des modalités de mise à disposition du site et des services par Éducateur péï et de
                    définir les conditions d'accès et d'utilisation des services par l'utilisateur.
                  </p>

                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Les présentes CGU sont accessibles sur le site à la rubrique «CGU».
                  </p>

                  <p className="text-foreground/80 font-brawler text-[17px]">
                    Toute inscription ou utilisation du site implique l'acceptation sans aucune réserve ni
                    restriction des présentes CGU par l'utilisateur.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-semibold mb-3 text-foreground font-alegreya">I. ACCÈS AU SITE</h2>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Notre site educateurpei.re permet aux utilisateurs d'accéder à des services d'accompagnement social, administratif, psychologique, financier et éducatif, notamment :
                  </p>
                  <ul className="list-disc pl-6 text-foreground/80 font-brawler text-[17px] mb-3">
                    <li className="mb-1">Information et orientation vers les services adaptés</li>
                    <li className="mb-1">Aide aux démarches administratives</li>
                    <li className="mb-1">Accompagnement social individualisé</li>
                    <li className="mb-1">Soutien éducatif et à la parentalité</li>
                    <li className="mb-1">Prise de rendez-vous en ligne</li>
                    <li>Ressources documentaires sur la santé et le bien-être</li>
                  </ul>

                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Le site est accessible en tout lieu à tout utilisateur disposant d'un accès à Internet.
                  </p>

                  <p className="text-foreground/80 font-brawler text-[17px]">
                    Tous les frais supportés par l'utilisateur pour accéder au service (matériel informatique,
                    logiciels, connexion Internet, etc.) sont à sa charge.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-semibold mb-3 text-foreground font-alegreya">II. SERVICES PROPOSÉS</h2>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Le site educateurpei.re propose les services suivants :
                  </p>
                  <ul className="list-disc pl-6 text-foreground/80 font-brawler text-[17px]">
                    <li className="mb-1">Accompagnement administratif et social</li>
                    <li className="mb-1">Soutien psychologique</li>
                    <li className="mb-1">Conseil budgétaire et financier</li>
                    <li className="mb-1">Accompagnement éducatif</li>
                    <li className="mb-1">Assistance numérique</li>
                    <li className="mb-1">Insertion professionnelle</li>
                    <li>Services d'astreinte téléphonique et physique</li>
                  </ul>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-semibold mb-3 text-foreground font-alegreya">III. COLLECTE DE DONNÉES</h2>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Le site assure à l'utilisateur une collecte et un traitement d'informations personnelles dans
                    le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à
                    l'informatique, aux fichiers et aux libertés.
                  </p>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    En vertu de la loi Informatique et Libertés, et du Règlement Général sur la Protection des Données (RGPD), l'utilisateur dispose
                    d'un droit d'accès, de rectification, de suppression et d'opposition de ses données
                    personnelles.
                  </p>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    L'utilisateur peut exercer ce droit :
                  </p>
                  <ul className="list-disc pl-6 text-foreground/80 font-brawler text-[17px]">
                    <li className="mb-1">via son espace personnel</li>
                    <li className="mb-1">via le formulaire de contact</li>
                    <li>par mail à l'adresse email contact@educateurpei.re</li>
                  </ul>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-semibold mb-3 text-foreground font-alegreya">IV. PROPRIÉTÉ INTELLECTUELLE</h2>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son…) font
                    l'objet d'une protection par le Code de la propriété intellectuelle et plus
                    particulièrement par le droit d'auteur.
                  </p>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    "Éducateur péï" est une marque déposée par [Prénom Nom].
                  </p>
                  <p className="text-foreground/80 font-brawler text-[17px]">
                    Toute représentation et/ou reproduction et/ou exploitation partielle ou totale de cette
                    marque, de quelque nature que ce soit, est totalement prohibée.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-semibold mb-3 text-foreground font-alegreya">V. RESPONSABILITÉ</h2>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Les sources des informations diffusées sur le site educateurpei.re sont réputées fiables mais
                    le site ne garantit pas qu'il soit exempt de défauts, d'erreurs ou d'omissions.
                  </p>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Les informations communiquées sont présentées à titre indicatif et général sans valeur
                    contractuelle.
                  </p>
                  <p className="text-foreground/80 font-brawler text-[17px]">
                    Malgré des mises à jour régulières, le site educateurpei.re ne peut être tenu responsable de
                    la modification des dispositions administratives et juridiques survenant après la publication.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-semibold mb-3 text-foreground font-alegreya">VI. LIENS HYPERTEXTES</h2>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Des liens hypertextes peuvent être présents sur le site. En cliquant sur ces liens, l'utilisateur sortira du site educateurpei.re.
                  </p>
                  <p className="text-foreground/80 font-brawler text-[17px]">
                    Le site ne saurait être responsable des contenus des sites ainsi accessibles et décline toute 
                    responsabilité quant au contenu de ces sites.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-semibold mb-3 text-foreground font-alegreya">VII. COOKIES</h2>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    L'utilisateur est informé que lors de ses visites sur le site, des cookies peuvent
                    s'installer automatiquement sur son navigateur.
                  </p>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    Les cookies sont de petits fichiers stockés temporairement sur le disque dur de l'ordinateur
                    de l'utilisateur par le navigateur et qui sont nécessaires à l'utilisation du site
                    educateurpei.re.
                  </p>
                  <p className="text-foreground/80 font-brawler text-[17px]">
                    Pour en savoir plus sur l'utilisation des cookies, consultez notre politique de cookies accessible 
                    depuis le lien en bas de page.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-3xl font-semibold mb-3 text-foreground font-alegreya">VIII. DROIT APPLICABLE ET JURIDICTION COMPÉTENTE</h2>
                  <p className="text-foreground/80 font-brawler text-[17px] mb-3">
                    La législation française s'applique au présent contrat. En cas d'absence de résolution
                    amiable d'un litige né entre les parties, les tribunaux français seront seuls compétents.
                  </p>
                  <p className="text-foreground/80 font-brawler text-[17px]">
                    Pour toute question relative à l'application des présentes CGU, vous pouvez joindre l'éditeur
                    aux coordonnées inscrites à la section "Édition du site" des mentions légales.
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