import Image from "next/image";
import { Quote } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over ons",
  description: "De historie van Holtkamp Tweewielers. Al 4 generaties lang een vertrouwd familiebedrijf in Hengelo sinds 1900.",
};

export default function OverOns() {
  const timeline = [
    { year: "1900", title: "Oprichting", description: "Graads Holtkamp start de zaak. Naast fietsen verkoopt hij ook naaimachines en geweren om de kost te verdienen." },
    { year: "1935", title: "Tweede generatie", description: "Henk komt in de zaak. Hij wordt later ook leraar in het rijwielvak en geeft zijn passie door." },
    { year: "1980", title: "Focus op stadsfietsen", description: "Onder leiding van de 3e generatie (Tonnie & Yvonne) wordt de focus verlegd naar hoogwaardige stadsfietsen." },
    { year: "1996", title: "De eerste e-bike", description: "Holtkamp verkoopt de allereerste e-bike, een revolutionaire stap in de fietsenbranche." },
    { year: "2014", title: "Sparta dealerschap", description: "Holtkamp wordt officieel Sparta dealer, een mooie toevoeging aan het assortiment." },
    { year: "Heden", title: "Vierde generatie", description: "Martijn en Chantal runnen de zaak met dezelfde waarden als vroeger. Tonnie & Yvonne zijn nog dagelijks aanwezig, samen met vaste medewerker Wouter Freriksen." },
  ];

  const values = [
    "Betrouwbaarheid",
    "Twentse gemoedelijkheid",
    "Vakkennis",
    "Degelijkheid",
    "De kracht van een familiebedrijf",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Over Ons</h1>
          <p className="text-xl max-w-2xl mx-auto text-primary-foreground/80">
            Al 4 generaties lang uw vertrouwde fietsenmaker in Hengelo. Een historie waar we trots op zijn.
          </p>
        </div>
      </section>

      {/* Intro & Generations */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl bg-muted group">
            <Image
              src="/images/winkel-portret.jpg"
              alt="Werkplaats van Holtkamp Tweewielers"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">Een echt Twents familiebedrijf</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Het verhaal van Holtkamp Tweewielers begint in 1900. Oprichter Graads startte de zaak, maar in die tijd kon je met alleen fietsen de kost niet verdienen. Daarom verkocht hij ook naaimachines en zelfs geweren. 
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              In 1935 kwam Henk in de zaak, die zijn kennis als leraar in het rijwielvak deelde met een nieuwe generatie monteurs. Daarna namen Tonnie en Yvonne het stokje over (de 3e generatie), en zij zijn tot op de dag van vandaag nog veelvuldig in de winkel te vinden.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Vandaag de dag staat de 4e generatie aan het roer: Martijn en Chantal. Samen met onze vaste medewerker Wouter Freriksen zorgen we er elke dag voor dat onze klanten op de juiste fiets zitten.
            </p>
          </div>
        </div>
      </section>

      {/* Quotes */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm relative">
              <Quote className="absolute top-8 left-8 w-12 h-12 text-secondary/20" />
              <blockquote className="relative z-10 pt-8">
                <p className="text-xl font-serif italic text-primary mb-6">
                  "Met fietsen alleen kon Graads de kost niet verdienen. Ik heb nog een echt Holtkamp-geweer thuis."
                </p>
                <footer className="font-heading font-bold text-secondary">
                  — Tonnie Holtkamp
                </footer>
              </blockquote>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm relative">
              <Quote className="absolute top-8 left-8 w-12 h-12 text-secondary/20" />
              <blockquote className="relative z-10 pt-8">
                <p className="text-xl font-serif italic text-primary mb-6">
                  "De ene keer maak je een grapje, de andere keer blijf je serieus. Die mensenkennis doe je wel op."
                </p>
                <footer className="font-heading font-bold text-secondary">
                  — Yvonne Holtkamp
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-heading font-bold text-center text-primary mb-16">Onze Historie</h2>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-secondary/50 before:to-transparent">
            {timeline.map((item, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-secondary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-muted transition-shadow hover:shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-heading font-bold text-secondary">{item.year}</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2 text-primary">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold mb-12">Onze Kernwaarden</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {values.map((value, index) => (
              <span key={index} className="px-6 py-3 bg-primary-foreground/10 rounded-full text-lg font-medium backdrop-blur-sm border border-primary-foreground/20">
                {value}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
