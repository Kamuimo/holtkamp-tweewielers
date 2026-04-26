import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const trustSignals = [
    "Sinds 1900 een begrip",
    "4e generatie familiebedrijf",
    "Dealer van Gazelle, Sparta & Batavus",
  ];

  const reasons = [
    {
      title: "Persoonlijke benadering",
      description: "Wij nemen de tijd om u te leren kennen en de perfecte fiets voor uw situatie te vinden.",
    },
    {
      title: "Korte communicatielijnen",
      description: "Geen keuzemenu aan de telefoon, u krijgt direct iemand aan de lijn met vakkennis.",
    },
    {
      title: "Doen wat we zeggen",
      description: "Zeggen wat we doen. Bij ons weet u altijd precies waar u aan toe bent.",
    },
    {
      title: "Altijd degelijk werk",
      description: "We streven naar perfectie in onderhoud en reparatie. We zien u graag tevreden terug.",
    },
    {
      title: "Meer dan 100 jaar ervaring",
      description: "Een vertrouwd gezicht in Hengelo met een rijke historie en moderne vakkennis.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1559124436-eb526a63dfcc?q=80&w=2000&auto=format&fit=crop"
            alt="Moderne Nederlandse e-bike in de stad"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <div className="inline-flex gap-4 mb-8 text-sm md:text-base font-medium text-white/80 uppercase tracking-wider flex-wrap justify-center">
            {trustSignals.map((signal, idx) => (
              <span key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                {signal}
              </span>
            ))}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tight leading-tight max-w-4xl mx-auto">
            Al onze klanten op de <span className="text-secondary">juiste fiets</span>.
          </h1>
          <p className="text-xl md:text-2xl font-light mb-10 text-white/90">
            Een passende fiets. Niets anders.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-secondary text-primary-foreground hover:bg-secondary/90 text-lg h-14 px-8" asChild>
              <Link href="/contact">
                Kom langs in de winkel
                <MapPin className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-primary hover:text-primary border-white bg-white hover:bg-white/90 text-lg h-14 px-8" asChild>
              <a href="tel:0742913735">
                Bel ons direct
                <Phone className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-8">
            Officieel dealer van topmerken
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Using text placeholders since we don't have SVG logos */}
            <span className="text-3xl font-heading font-bold">Gazelle</span>
            <span className="text-3xl font-heading font-bold">Sparta</span>
            <span className="text-3xl font-heading font-bold">Batavus</span>
          </div>
        </div>
      </section>

      {/* Waarom Holtkamp Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary">
              Daarom Holtkamp Tweewielers
            </h2>
            <p className="text-lg text-muted-foreground">
              Al meer dan een eeuw zijn wij het vertrouwde adres in Hengelo voor aankoop, onderhoud en eerlijk advies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <Card key={index} className="border-none shadow-md bg-white hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 px-6 pb-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary font-bold text-xl">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-primary">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">Klaar voor een proefrit?</h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Kom langs in onze ruime winkel aan de Oldenzaalsestraat en ervaar zelf het comfort van onze nieuwste fietsen.
          </p>
          <Button size="lg" className="bg-secondary text-primary-foreground hover:bg-secondary/90 text-lg h-14 px-8" asChild>
            <Link href="/contact">
              Bekijk openingstijden
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
