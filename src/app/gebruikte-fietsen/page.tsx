import Image from "next/image";
import Link from "next/link";
import { PhoneCall, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gebruikte Fietsen",
  description: "Een betrouwbare tweedehands fiets kopen? Bekijk ons wisselende aanbod nagekeken occasions.",
};

export default function GebruikteFietsen() {
  // Generate 6 placeholder used bikes
  const usedBikes = [
    { brand: "Gazelle", model: "Orange Plus", type: "Damesfiets", price: "€ 295", image: "/images/stock/bike-classic.jpg" },
    { brand: "Batavus", model: "Mambo", type: "Moederfiets", price: "€ 350", image: "/images/stock/bike-vintage.jpg" },
    { brand: "Sparta", model: "Amzone", type: "E-bike", price: "€ 895", image: "/images/stock/bike-ebike-modern.jpg" },
    { brand: "Gazelle", model: "Chamonix", type: "Herenfiets", price: "€ 325", image: "/images/stock/bike-city.jpg" },
    { brand: "Cortina", model: "U4 Transport", type: "Jongensfiets", price: "€ 250", image: "/images/stock/bike-detail.jpg" },
    { brand: "Batavus", model: "Dinsdag", type: "Damesfiets", price: "€ 450", image: "/images/stock/bike-black.jpg" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Gebruikte Fietsen</h1>
          <p className="text-xl max-w-2xl mx-auto text-primary-foreground/80 mb-8">
            Nagekeken, afgesteld en rijklaar. Ontdek onze betrouwbare occasions.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          
          <div className="bg-muted p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-center justify-between mb-12 border">
            <div className="flex gap-4 items-start">
              <RefreshCw className="w-8 h-8 text-secondary shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">Ons assortiment wisselt snel</h3>
                <p className="text-muted-foreground">
                  De onderstaande fietsen geven een indicatie van ons aanbod. Omdat goede occasions snel verkopen, raden we aan om even te bellen of langs te komen voor de meest actuele voorraad.
                </p>
              </div>
            </div>
            <Button size="lg" className="shrink-0" asChild>
              <a href="tel:0742913735">
                <PhoneCall className="mr-2 w-5 h-5" />
                Bel 074-291 37 35
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {usedBikes.map((bike, idx) => (
              <Card key={idx} className="overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-300 bg-white flex flex-col group">
                <div className="h-64 bg-white relative overflow-hidden">
                  <Image
                    src={bike.image}
                    alt={`${bike.brand} ${bike.model}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {bike.type}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">{bike.brand}</div>
                  <CardTitle className="text-xl text-primary">{bike.model}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-secondary">{bike.price}</p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button className="w-full" variant="outline" asChild>
                    <Link href="/contact">Is deze nog beschikbaar?</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
