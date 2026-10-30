# SaNan Odontología Integral (Dental Clinic Site)

A responsive marketing site for a dental clinic, with services, testimonials, FAQ, a gallery and an appointment request modal.

## Why
Patients decide on a clinic in seconds on a phone. The site puts services, trust signals and a one-tap WhatsApp or booking path first.

## Key features
- Hero, about, services, testimonials, gallery and FAQ sections
- Appointment request modal with form validation
- Floating WhatsApp button and contact section
- Full-stack setup with Express and a Drizzle schema (appointments)

## Stack
React, TypeScript, Vite, Tailwind CSS, shadcn/ui and Radix UI, React Hook Form with Zod, Express, Drizzle ORM with Neon serverless Postgres.

## Structure
```
client/src/components/  Page sections and UI kit
server/                 Express server, routes and storage
shared/schema.ts        Drizzle schema shared by client and server
```

## How to run
```bash
npm install
npm run dev          # Express + Vite in development
npm run db:push      # push the Drizzle schema (needs DATABASE_URL)
npm run build && npm start
```

## Status
Landing page with a working front end. Clinic copy, phone numbers and testimonials are placeholders to replace with real data before going live.

Built by Monoga (https://github.com/Monoga2025)
