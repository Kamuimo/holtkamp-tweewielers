import Image from "next/image";
import Link from "next/link";
import { Check, ExternalLink, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-bikes",
  description: "Ontdek onze ruime collectie e-bikes van topmerken zoals Gazelle, Sparta en Batavus. Inclusief informatie over fietsplannen en het Gazelle Privé Plan.",
};

export default function EBikes() {
  const brands = [
    {
      name: "Gazelle",
      description: "Koninklijke Gazelle uit Dieren is marktleider in Nederland en bouwt al sinds 1892 fietsen. Ze staan garant voor innovatie, comfort en een prachtig design. Een begrip in kwaliteit.",
      url: "https://www.gazelle.nl",
      image: "/images/products/logo-gazelle.png"
    },
    {
      name: "Sparta",
      description: "Sparta uit Apeldoorn was de pionier. Zij introduceerden in 1998 de allereerste e-bike in Nederland en zijn sindsdien vaak bekroond door onder andere de Consumentenbond.",
      url: "https://www.sparta.nl",
      image: "/images/products/logo-sparta.png"
    },
    {
      name: "Batavus",
      description: "Sinds 1904 produceert Batavus in Heerenveen degelijke en betrouwbare fietsen. Extra bijzonder: ze gebruiken lak op waterbasis, wat bijdraagt aan een duurzamere wereld.",
      url: "https://www.batavus.nl",
      image: "/images/products/logo-batavus.png"
    }
  ];

  const models = [
    { brand: "Gazelle", name: "Grenoble C8 HMB", price: "Vanaf € 3.199", tag: "Populair" },
    { brand: "Sparta", name: "a-SHINE Energy", price: "Vanaf € 2.499", tag: "Comfort" },
    { brand: "Batavus", name: "Finez E-go Power", price: "Vanaf € 2.799", tag: "Actieradius" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">E-bikes</h1>
          <p className="text-xl max-w-2xl mx-auto text-primary-foreground/80 mb-8">
            De perfecte ondersteuning voor elke rit. Wij hebben een uitgebreide collectie van de beste Nederlandse merken.
          </p>
        </div>
      </section>

      {/* Brands Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-16">
            {brands.map((brand, idx) => (
              <div key={brand.name} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}>
                <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-sm bg-white border border-border group">
                  <Image
                    src={brand.image}
                    alt={`${brand.name} logo`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-contain p-12 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl font-heading font-bold text-primary mb-4">{brand.name}</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{brand.description}</p>
                  <Button variant="outline" asChild className="text-primary hover:text-primary">
                    <a href={brand.url} target="_blank" rel="noopener noreferrer">
                      Bekijk op {brand.name}.nl
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder Models */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center text-primary mb-12">Populaire Modellen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {models.map((model, idx) => (
              <Card key={idx} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white group">
                <div className="h-64 bg-white relative overflow-hidden">
                  <Image
                    src={["/images/products/gazelle-grenoble-c8-hmb.png","/images/products/sparta-a-shine-energy.webp","/images/products/batavus-finez-e-go-power.png"][idx]}
                    alt={model.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
                    {model.tag}
                  </div>
                </div>
                <CardHeader>
                  <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">{model.brand}</div>
                  <CardTitle className="text-xl text-primary">{model.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-bold text-secondary">{model.price}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline" asChild>
                    <Link href="/contact">In de winkel bekijken</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/contact">Kom proefrijden</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gazelle Privé Plan & Fietsplan */}
      <section className="py-20 bg-background border-t">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Gazelle Privé Plan */}
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-heading font-bold mb-4">Gazelle Privé Plan</h3>
                <p className="mb-6 text-primary-foreground/80">
                  Rijd een nieuwe Gazelle voor een vast, laag bedrag per maand. Alles is inbegrepen.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <Check className="text-secondary w-5 h-5 shrink-0" />
                    <span>Vanaf €54,99 per maand</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-secondary w-5 h-5 shrink-0" />
                    <span>Looptijd van 48 termijnen</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-secondary w-5 h-5 shrink-0" />
                    <span>Inclusief verzekering & pechhulp</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-secondary w-5 h-5 shrink-0" />
                    <span>Nu met €249,- pakketkorting</span>
                  </li>
                </ul>
                <Button className="bg-secondary text-primary-foreground hover:bg-secondary/90 w-full" asChild>
                  <Link href="/contact">Vraag naar de voorwaarden</Link>
                </Button>
              </div>
            </div>

            {/* Fietsplan via Werkgever */}
            <div className="bg-white rounded-2xl p-8 border shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Fietsplan via Werkgever</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Profiteer van de voordelen via uw werkgever. Steeds meer bedrijven stimuleren het gebruik van de fiets voor woon-werkverkeer.
                </p>
                <div className="bg-muted p-4 rounded-xl flex gap-4 items-start mb-6">
                  <Info className="text-secondary w-6 h-6 shrink-0 mt-1" />
                  <div className="text-sm text-muted-foreground">
                    <p className="mb-2"><strong>Wist u dat?</strong></p>
                    <p>
                      U kunt tot €0,19 per kilometer belastingvrij vergoed krijgen, plus vaak gebruikmaken van een renteloze lening vanuit de werkgever voor de aanschaf van uw nieuwe (e-)bike.
                    </p>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full text-primary" asChild>
                <Link href="/contact">Laat ons meedenken</Link>
              </Button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
