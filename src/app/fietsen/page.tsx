import Image from "next/image";
import Link from "next/link";
import { ExternalLink, KeyRound, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stadsfietsen",
  description: "Robuuste, degelijke stadsfietsen van Gazelle, Batavus en Sparta. Bekijk ons aanbod en lees onze tips voor fietsbeveiliging.",
};

export default function Fietsen() {
  const brands = [
    {
      name: "Gazelle",
      description: "Gazelle stadsfietsen zijn al generaties lang een icoon in het Nederlandse straatbeeld. Lichtgewicht, extreem comfortabel en vrijwel onderhoudsvrij.",
      url: "https://www.gazelle.nl",
      image: "/images/products/logo-gazelle.png"
    },
    {
      name: "Batavus",
      description: "Een Batavus stadsfiets is gemaakt voor het Hollandse weer. Robuust, betrouwbaar en voorzien van slimme, veilige verlichting. Perfect voor dagelijks gebruik.",
      url: "https://www.batavus.nl",
      image: "/images/products/logo-batavus.png"
    },
    {
      name: "Sparta",
      description: "Naast e-bikes blinkt Sparta ook uit in stevige transportfietsen en stoere stadsfietsen. Ideaal voor het zware werk, zoals boodschappen of schooltassen.",
      url: "https://www.sparta.nl",
      image: "/images/products/logo-sparta.png"
    }
  ];

  const models = [
    { brand: "Gazelle", name: "Esprit C7", price: "Vanaf € 749", tag: "Schoolfiets" },
    { brand: "Batavus", name: "Dinsdag", price: "Vanaf € 899", tag: "Sportief" },
    { brand: "Sparta", name: "Pick-Up", price: "Vanaf € 699", tag: "Transport" },
  ];

  const securityTips = [
    "Slot bij ventiel plaatsen (moeilijker open te breken zonder de band/het ventiel te beschadigen)",
    "Gebruik altijd een ART- of Vaefakta-goedgekeurd slot",
    "Maak de fiets vast aan een nagelvast object (paal, hek, fietsenrek)",
    "Plaats de fiets op een overzichtelijke plek (bijv. tegenover een bushalte of in het zicht)",
    "Gebruik altijd twee verschillende soorten sloten (ringslot + kettingslot)",
    "Bevestig het kettingslot aan het frame of achterwiel, en zo hoog mogelijk (minder kracht met een betonschaar vanaf de grond)",
    "Lekke band? Haal de fiets zo snel mogelijk op",
    "Zet de fiets ook op slot als deze in een bergruimte staat",
    "Noteer codes en framenummers van de fiets en sloten",
    "Doe bij diefstal altijd direct aangifte",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Stadsfietsen</h1>
          <p className="text-xl max-w-2xl mx-auto text-primary-foreground/80 mb-8">
            De onverwoestbare klassiekers voor dagelijks gebruik. Ontdek de kwaliteit van Gazelle, Batavus en Sparta.
          </p>
        </div>
      </section>

      {/* Brands */}
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
          <h2 className="text-3xl font-heading font-bold text-center text-primary mb-12">Uitgelichte Stadsfietsen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {models.map((model, idx) => (
              <Card key={idx} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white group">
                <div className="h-64 bg-white relative overflow-hidden">
                  <Image
                    src={["/images/products/gazelle-esprit-c7.png","/images/products/batavus-dinsdag.png","/images/products/sparta-pickup.png"][idx]}
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
        </div>
      </section>

      {/* Sleutelservice & Beveiliging */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
            <div className="flex flex-col md:flex-row gap-12">
              
              <div className="md:w-1/3">
                <div className="bg-white p-6 rounded-2xl shadow-sm text-center border">
                  <KeyRound className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-heading font-bold text-primary mb-2">Sleutel Verloren?</h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Geen zorgen, wij kunnen vaak snel een originele reservesleutel voor u bestellen of het slot vervangen.
                  </p>
                  <Button className="w-full bg-primary" asChild>
                    <a href="tel:0742913735">Bel 074-291 37 35</a>
                  </Button>
                </div>
              </div>

              <div className="md:w-2/3">
                <div className="flex items-center gap-3 mb-6">
                  <ShieldCheck className="text-secondary w-8 h-8" />
                  <h3 className="text-2xl font-heading font-bold text-primary">Fietsbeveiliging Tips</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Een goede fiets is gewild. Zorg dat uw fiets veilig geparkeerd staat met deze tips van onze experts:
                </p>
                <ul className="space-y-4">
                  {securityTips.map((tip, idx) => (
                    <li key={idx} className="flex gap-3 text-muted-foreground">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0 text-sm font-bold mt-0.5">
                        {idx + 1}
                      </div>
                      <span className="leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
