# Holtkamp Tweewielers Website

Dit is de repository voor de nieuwe website van Holtkamp Tweewielers, ontwikkeld in 2026.

## Technologieën
- **Framework:** Next.js 15 (App Router)
- **Taal:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Componenten:** shadcn/ui
- **Iconen:** Lucide React

## Lokaal Ontwikkelen

1. Installeer de dependencies:
   ```bash
   npm install
   ```

2. Start de ontwikkelserver:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in je browser om het resultaat te zien.

## Deployment naar Vercel

De eenvoudigste manier om deze Next.js applicatie te deployen is via Vercel (de makers van Next.js).

1. Push deze code naar een GitHub repository.
2. Ga naar [Vercel](https://vercel.com/new).
3. Importeer je GitHub repository.
4. Laat alle build settings op de standaardwaarden (Next.js preset wordt automatisch herkend).
5. Klik op **Deploy**.

## Contactformulier Todo
Het contactformulier gebruikt momenteel een Server Action (`src/app/actions/contact.ts`) die de data logt naar de console. Voor een productieomgeving moet hier nog een daadwerkelijke e-mail integratie worden gebouwd (bijvoorbeeld met [Resend](https://resend.com) of Nodemailer).
