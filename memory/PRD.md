# Daribnb — PRD

## Problem statement (original)
"génère mon site internet pour ma conciergerie Daribnb, je propose également un service de loyer fixe, en fait je fais de la conciergerie airbnb et de la sous location professionnelle. Je suis expert Airbnb depuis plus de 6 années, utilisées les couleurs rouge et vert du Maroc pour le site, le rouge sera le meme rouge que celui de airbnb, tu peux t'inspirer du site internet de https://hostnfly.com/"

## User choices (Dec 2025)
- Site vitrine + simulateur de revenus (inspiration hostnfly.com)
- Couverture : tout le Maroc
- Contact : daribnb.ma@gmail.com / +212 6 46 21 84 07
- Langue : FR
- Formulaire de contact stocké en base (MongoDB)
- Couleurs : rouge Airbnb #FF5A5F + vert marocain #006233

## Personas
1. Propriétaire (Marrakech / Casa / autres villes) cherchant à rentabiliser un bien sans stress
2. Propriétaire cherchant un revenu fixe, garanti, sans s'occuper de la location

## Core requirements
- Landing FR unique, responsive, premium
- Simulateur de revenus (ville × type × chambres)
- Deux offres claires : Conciergerie (20% commission) vs Loyer Fixe (~70% du revenu estimé)
- Formulaire de contact + WhatsApp CTA flottant
- Présentation "tout le Maroc", expertise 6+ ans, témoignages, FAQ

## Architecture
- Backend: FastAPI (/api/simulate, /api/contact, /api/contacts) + MongoDB
- Frontend: React + Tailwind + shadcn/ui, Outfit (headings) + Manrope (body)
- Endpoints prefixed /api/, env-driven URLs

## Implemented (Dec 2025)
- Hero avec simulateur intégré (shadcn Select/Input)
- Sections: Services, How It Works (5 étapes), Why Us (6+ ans), Témoignages, Coverage (12 villes), Pricing (2 formules), FAQ (shadcn Accordion), Contact form, Footer vert, WhatsApp float
- Backend simulate pricing matrix pour 9 villes × 4 types, fixed_rent = 70% du monthly_avg
- Contact saved to MongoDB, id via uuid, timestamps ISO
- Tests passed 100% (backend pytest + frontend e2e via testing_agent_v3)

## Backlog
- P1: Intégration Resend/SendGrid pour recevoir les demandes de contact par email
- P1: Espace admin pour consulter /api/contacts (simple auth)
- P2: Page Blog / SEO articles (Airbnb au Maroc, fiscalité, conseils)
- P2: Version anglaise + arabe
- P2: Avis Google / Trustpilot intégré
- P2: Tracking Meta Pixel / Google Ads conversion
- P2: Upload photos propriétaire + estimation plus précise
