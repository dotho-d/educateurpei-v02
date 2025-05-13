"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, SendIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "question",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "question",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header avec dégradé */}
      <section className="pt-32 pb-16 md:pb-24 relative overflow-hidden bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-[80%] mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-background/70 p-8 rounded-3xl shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Contactez-nous
            </h1>
            <p className="text-xl text-muted-foreground">
              Une question ? Un besoin spécifique ? Contactez-nous par téléphone, email ou via le formulaire ci-dessous.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-[80%] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="rounded-3xl overflow-hidden shadow-lg border-primary/10">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 gradient-text">Envoyez-nous un message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Nom complet</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Entrez votre nom"
                          required
                          className="rounded-full mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Entrez votre email"
                          required
                          className="rounded-full mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Entrez votre numéro de téléphone"
                          className="rounded-full mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label>Sujet</Label>
                        <RadioGroup
                          value={formData.subject}
                          onValueChange={handleRadioChange}
                          className="flex flex-col space-y-2 mt-2"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="question" id="question" />
                            <Label htmlFor="question" className="cursor-pointer">Question générale</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="appointment" id="appointment" />
                            <Label htmlFor="appointment" className="cursor-pointer">Rendez-vous</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="pricing" id="pricing" />
                            <Label htmlFor="pricing" className="cursor-pointer">Informations tarifaires</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="other" id="other" />
                            <Label htmlFor="other" className="cursor-pointer">Autre</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      
                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Décrivez votre demande en détail"
                          rows={5}
                          required
                          className="rounded-xl mt-1"
                        />
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full rounded-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Envoi en cours...</>
                      ) : (
                        <>
                          Envoyer le message <SendIcon className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-3xl shadow-md">
                <h2 className="text-2xl font-bold mb-6 gradient-text">Informations de contact</h2>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Téléphone</p>
                      <p className="text-muted-foreground">+262 XXX XXX XXX</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Lundi au vendredi: 8h30 - 17h00
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">contact@educateurpei.re</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Réponse sous 24-48h ouvrées
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Adresse du cabinet</p>
                      <p className="text-muted-foreground">123 rue Example</p>
                      <p className="text-muted-foreground">97400 Saint-Denis</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Sur rendez-vous uniquement
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-background p-8 rounded-3xl shadow-md">
                <h2 className="text-2xl font-bold mb-6 gradient-text">Heures d'ouverture</h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 rounded-xl bg-primary/5">
                    <span>Lundi - Vendredi</span>
                    <span className="font-medium">8h30 - 17h00</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-primary/5">
                    <span>Samedi</span>
                    <span className="font-medium">Sur rendez-vous</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-primary/5">
                    <span>Dimanche</span>
                    <span className="font-medium">Fermé</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-accent/10 to-background p-8 rounded-3xl shadow-md">
                <h2 className="text-2xl font-bold mb-6 gradient-text">Accès rapide</h2>
                <div className="space-y-4">
                  <Button variant="default" className="w-full rounded-full" asChild>
                    <Link href="/rendez-vous">
                      Prendre rendez-vous
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full rounded-full" asChild>
                    <Link href="/tarifs">
                      Consulter nos tarifs
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full rounded-full" asChild>
                    <Link href="/faq">
                      Questions fréquentes
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}