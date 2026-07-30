# 🎙️ EchoLabs — AI Voice Synthesis & Text-to-Speech SaaS

EchoLabs is an enterprise-ready, full-stack AI Voice Synthesis and Text-to-Speech (TTS) SaaS platform built for high-performance voice cloning, custom audio generation, and team-based audio production. Powered by modern web technologies, EchoLabs enables users and organizations to create, customize, and manage life-like AI voices with precise audio control parameters.

---

## ✨ Features

- 🗣️ **Text-to-Speech Engine**: Transform text into ultra-realistic audio output with customizable speech parameters (temperature, top-p, top-k, repetition penalty).
- 🎙️ **Voice Library & Custom Voice Cloning**: Support for both curated System voices and custom Organization-owned voice models.
- 🏷️ **Categorized Voice Directory**: Categorize voices across Audiobooks, Podcasts, Characters, Voiceovers, Corporate, Customer Service, Meditation, and more.
- 🏢 **Multi-Tenant Workspace Support**: Integrated organization switching and user session management powered by Clerk.
- ☁️ **Cloud Object Storage**: Efficient audio asset storage using Cloudflare R2 integration for reliable audio stream delivery.
- 📊 **Generation Analytics & History**: Full audit trail of past voice generations with downloadable audio tracks and metadata tracking.
- 🎨 **Modern Responsive UI**: Built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and Shadcn UI components.

---

## 🛠️ Tech Stack

| Domain | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router), [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) |
| **Authentication** | [Clerk](https://clerk.com/) (Multi-tenant & Organization Management) |
| **Database & ORM** | [PostgreSQL](https://www.postgresql.org/) / [Neon](https://neon.tech/), [Prisma ORM](https://www.prisma.io/) |
| **Styling & UI** | [Tailwind CSS v4](https://tailwindcss.com/), [Shadcn UI](https://ui.shadcn.com/), Radix UI, Base UI, Lucide Icons |
| **Form & Validation** | React Hook Form, [Zod](https://zod.dev/), `@t3-oss/env-nextjs` |
| **State & Analytics** | Recharts, Sonner (Toasts), Embla Carousel |
| **Storage** | Cloudflare R2 Object Storage |

---

## 📁 Project Structure

```text
resonance/
├── prisma/
│   ├── schema.prisma           # Prisma data models (Voice, Generation, Enums)
│   └── migrations/             # Database migration history
├── src/
│   ├── app/                    # Next.js App Router (Pages, Layouts, API Routes)
│   │   ├── (dashboard)/        # Authenticated dashboard workspace
│   │   ├── org-selection/      # Organization picker flow
│   │   ├── sign-in/            # Authentication sign-in page
│   │   └── sign-up/            # Authentication sign-up page
│   ├── features/               # Domain-driven feature modules
│   │   ├── dashboard/          # Dashboard analytics & voice overviews
│   │   └── text-to-speech/     # TTS generation tools & preview components
│   ├── components/             # Reusable UI components & primitives
│   ├── generated/              # Auto-generated Prisma client
│   └── lib/                    # Core utilities, DB client, and validated env schemas
├── public/                     # Static public assets
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (v18.17.0 or higher)
- **npm**, **yarn**, or **pnpm**
- A **PostgreSQL** database instance (e.g., [Neon DB](https://neon.tech/))
- A **Clerk** account for authentication
- A **Cloudflare R2** bucket for audio storage

---

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/echolabs.git
   cd echolabs
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory and populate it with your service credentials:

   ```env
   # Database connection
   DATABASE_URL="postgresql://user:password@localhost:5432/echolabs?schema=public"

   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
   CLERK_SECRET_KEY="sk_test_..."
   NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
   NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"

   # Cloudflare R2 Object Storage (if applicable)
   R2_ACCOUNT_ID="..."
   R2_ACCESS_KEY_ID="..."
   R2_SECRET_ACCESS_KEY="..."
   R2_BUCKET_NAME="echolabs-audio"
   ```

4. **Initialize Database Schema**:
   Run Prisma migrations and generate the client bindings:

   ```bash
   npx prisma migrate dev --name init
   npm run postinstall
   ```

5. **Start Development Server**:
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## 🗄️ Database Schema Overview

EchoLabs utilizes PostgreSQL via Prisma with the following core entities:

- **`Voice`**: Stores metadata for system presets and custom organization voices (Variant, Category, Language, Cloud R2 keys).
- **`Generation`**: Records TTS execution history, prompt text, model control hyper-parameters (`temperature`, `topP`, `topK`, `repetitionPenalty`), and linked audio keys.
- **`VoiceCategory`**: Enum supporting Audiobooks, Podcasts, Characters, Narrative, Corporate, Voiceover, Meditation, Motivational, etc.

---

## ⚙️ Build & Deployment

To build the production bundle:

```bash
npm run build
```

To start the production server locally:

```bash
npm start
```

### Deploy on Vercel

The easiest way to deploy EchoLabs is via [Vercel](https://vercel.com):
1. Push your repository to GitHub / GitLab / Bitbucket.
2. Import the project into Vercel.
3. Configure your Environment Variables in the Vercel Dashboard.
4. Deploy!

---

## 🛡️ License

Distributed under the MIT License. See `LICENSE` for more details.
