import { Suspense } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Neem contact op met Holtkamp Tweewielers of kom langs in onze winkel aan de Oldenzaalsestraat in Hengelo.",
};

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Contact & Route</h1>
          <p className="text-xl max-w-2xl mx-auto text-primary-foreground/80">
            Heeft u een vraag of wilt u een proefrit maken? Neem gerust contact met ons op of kom gezellig langs in de winkel.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Details */}
            <div className="lg:w-1/3 space-y-10">
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-8">Contactgegevens</h2>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <MapPin className="w-6 h-6 text-secondary shrink-0" />
                    <div>
                      <strong className="block text-primary mb-1">Adres</strong>
                      <span className="text-muted-foreground">
                        Oldenzaalsestraat 135<br />
                        7557 GJ Hengelo (Ov)
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Phone className="w-6 h-6 text-secondary shrink-0" />
                    <div>
                      <strong className="block text-primary mb-1">Telefoon</strong>
                      <a href="tel:0742913735" className="text-muted-foreground hover:text-primary transition-colors">
                        074-291 37 35
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Mail className="w-6 h-6 text-secondary shrink-0" />
                    <div>
                      <strong className="block text-primary mb-1">E-mail</strong>
                      <a href="mailto:info@holtkamptweewielers.nl" className="text-muted-foreground hover:text-primary transition-colors">
                        info@holtkamptweewielers.nl
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-6 flex items-center gap-3">
                  <Clock className="w-6 h-6 text-secondary" />
                  Openingstijden
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex justify-between border-b pb-2">
                    <span>Zondag</span>
                    <span className="text-primary font-medium">Gesloten</span>
                  </li>
                  <li className="flex justify-between border-b pb-2">
                    <span>Maandag</span>
                    <span className="text-primary font-medium">Gesloten</span>
                  </li>
                  <li className="flex justify-between border-b pb-2">
                    <span>Dinsdag t/m Vrijdag</span>
                    <span>08:00 - 18:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Zaterdag</span>
                    <span>08:00 - 16:00</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-2/3">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border">
                <h2 className="text-3xl font-heading font-bold text-primary mb-2">Stuur een bericht</h2>
                <p className="text-muted-foreground mb-8">Wij proberen uw vraag zo snel mogelijk te beantwoorden.</p>
                <Suspense fallback={<div className="h-64 flex items-center justify-center text-muted-foreground">Formulier laden...</div>}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="h-[400px] w-full relative bg-muted grayscale hover:grayscale-0 transition-all duration-700">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2441.905626938927!2d6.804107111818296!3d52.2631522550137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8120e2380f2d7%3A0xc6a80eb92dbb3dcd!2sOldenzaalsestraat%20135%2C%207557%20GJ%20Hengelo!5e0!3m2!1snl!2snl!4v1707212045612!5m2!1snl!2snl"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
          title="Holtkamp Tweewielers op Google Maps"
        />
      </section>
    </div>
  );
}
