import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ContactCTA() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden gradient-bg-primary rounded-[40px] mx-6 my-12 cta-section">
      <div 
        className="absolute inset-0 -z-20 opacity-10"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3182755/pexels-photo-3182755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="max-w-[80%] mx-auto px-4 text-center">
        <div className="bg-background/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Prêt à surmonter vos difficultés ?
          </h2>
          <p className="text-muted-foreground mb-8 font-alegreya text-[21px]">
            Contactez-nous dès aujourd&apos;hui pour un premier entretien gratuit
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild className="rounded-btn py-6 px-8 shadow-lg font-caveat">
              <Link href="/rendez-vous">
                Prendre rendez-vous
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-btn py-6 px-8 border-2 font-caveat">
              <Link href="/contact">
                Nous contacter
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}