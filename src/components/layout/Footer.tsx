import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading font-bold text-2xl mb-4 text-secondary">
              Holtkamp Tweewielers
            </h3>
            <p className="mb-2">Oldenzaalsestraat 135</p>
            <p className="mb-4">7557 GJ Hengelo (Ov)</p>
            <p className="mb-1">
              Tel.: <a href="tel:0742913735" className="hover:text-secondary transition-colors">074-291 37 35</a>
            </p>
            <p>
              E-mail:{' '}
              <a
                href="mailto:info@holtkamptweewielers.nl"
                className="hover:text-secondary transition-colors"
              >
                info@holtkamptweewielers.nl
              </a>
            </p>
          </div>
          <div>
            <h4 className="font-heading font-bold text-lg mb-4 text-secondary">
              Openingstijden
            </h4>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Zondag & Maandag</span>
                <span className="text-primary-foreground/70">Gesloten</span>
              </li>
              <li className="flex justify-between">
                <span>Dinsdag t/m Vrijdag</span>
                <span>08.00 - 18.00</span>
              </li>
              <li className="flex justify-between">
                <span>Zaterdag</span>
                <span>08.00 - 16.00</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-lg mb-4 text-secondary">
              Snel naar
            </h4>
            <ul className="space-y-2 flex flex-col">
              <li>
                <Link href="/over-ons" className="hover:text-secondary transition-colors">Over ons</Link>
              </li>
              <li>
                <Link href="/e-bikes" className="hover:text-secondary transition-colors">E-bikes</Link>
              </li>
              <li>
                <Link href="/fietsen" className="hover:text-secondary transition-colors">Stadsfietsen</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/70">
          <p>© 2026 Holtkamp Tweewielers Hengelo. Alle rechten voorbehouden.</p>
          <p className="mt-2 md:mt-0">BTW nr.: NL 801961543B01</p>
        </div>
      </div>
    </footer>
  );
}
