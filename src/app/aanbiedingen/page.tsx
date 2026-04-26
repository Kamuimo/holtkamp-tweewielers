import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aanbiedingen",
  description: "Profiteer van onze scherpe aanbiedingen op nieuwe fietsen en e-bikes. Op = op!",
};

export default function Aanbiedingen() {
  const offers = [
    {
      brand: "Gazelle",
      name: "Chamonix C7 HMS",
      oldPrice: "€ 2.899",
      newPrice: "€ 2.599",
      image: "/images/products/gazelle-chamonix-c7-hms.png",
      badge: "Korting",
      description: "Sportieve e-bike met krachtige Shimano Steps middenmotor."
    },
    {
      brand: "Sparta",
      name: "c-GRID Fit",
      oldPrice: "€ 2.399",
      newPrice: "€ 2.099",
      image: "/images/products/sparta-c-grid-fit.webp",
      badge: "Laatste modellen",
      description: "Zeer comfortabele stads-e-bike met Bosch Active Line Plus motor."
    },
    {
      brand: "Batavus",
      name: "PackD",
      oldPrice: "€ 849",
      newPrice: "€ 749",
      image: "/images/products/batavus-packd.webp",
      badge: "Actie",
      description: "De ideale transportfiets voor dagelijks gebruik, inclusief voordrager."
    },
    {
      brand: "Gazelle",
      name: "Orange C8 HMB",
      oldPrice: "€ 3.099",
      newPrice: "€ 2.849",
      image: "/images/products/gazelle-orange-c8-hmb.png",
      badge: "Korting",
      description: "De meest comfortabele allround e-bike van Nederland."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Actuele Aanbiedingen</h1>
          <p className="text-xl max-w-2xl mx-auto text-primary-foreground/80">
            Bekijk onze scherpe acties op topmodellen. Wees er snel bij, want op = op!
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offers.map((offer, idx) => (
              <Card key={idx} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white flex flex-col group hover:-translate-y-1">
                <div className="h-64 bg-white relative overflow-hidden">
                  <Image
                    src={offer.image}
                    alt={offer.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                    <Tag className="w-3 h-3" />
                    {offer.badge}
                  </div>
                </div>
                <CardHeader className="flex-none">
                  <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">{offer.brand}</div>
                  <CardTitle className="text-xl text-primary">{offer.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{offer.description}</p>
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground line-through decoration-destructive text-sm">{offer.oldPrice}</span>
                    <span className="text-2xl font-bold text-secondary">{offer.newPrice}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex-none">
                  <Button className="w-full group" variant="outline" asChild>
                    <Link href="/contact">
                      Vraag ernaar in de winkel
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center max-w-2xl mx-auto bg-muted p-8 rounded-2xl">
            <h3 className="text-xl font-heading font-bold text-primary mb-2">Zit uw fiets er niet tussen?</h3>
            <p className="text-muted-foreground mb-6">
              Kom langs in de winkel. We hebben regelmatig wisselende acties en uitlopende modellen voor een scherpe prijs.
            </p>
            <Button asChild>
              <Link href="/contact">Bekijk adres en openingstijden</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
