<div align="center">

# next-app-tuto

**A full-stack Next.js playground built while completing _Mastering Next.js 13 with TypeScript_ by Code with Mosh**

![Next.js](https://img.shields.io/badge/Next.js_15-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma_7-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

</div>

---

## What's inside?

This project covers the full breadth of the Next.js App Router — from basic routing to production-ready auth.

| Area | What was built |
|---|---|
| **Routing** | Static, dynamic `[id]`, catch-all `[[...slug]]`, nested layouts |
| **API Routes** | REST endpoints for Users & Products with Zod validation |
| **Database** | MySQL + Prisma ORM, full migration history |
| **Auth** | NextAuth.js with Google OAuth + credentials (bcrypt hashed passwords) |
| **File Upload** | Cloudinary image upload via API route |
| **Email** | Transactional emails with Resend + React Email templates |
| **Middleware** | Route protection using NextAuth session tokens |
| **Error Handling** | `error.tsx`, `not-found.tsx`, `loading.tsx` at the layout level |

---

## Tech Stack

```
Next.js 15 (App Router)  ·  TypeScript (strict)  ·  Tailwind CSS v4
Prisma 7  ·  MySQL  ·  NextAuth.js  ·  Zod 4
Cloudinary  ·  Resend  ·  React Email  ·  fast-sort
```

---

## Getting Started

### 1. Clone & install

```bash
git clone https://github.com/aimanmat-hasim/next-app-tuto.git
cd next-app-tuto
npm install
```

### 2. Set up environment variables

Create a `.env` file in the root (never commit this):

```env
DATABASE_URL="mysql://user:password@localhost:3306/next-app-tuto"

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

RESEND_API_KEY=your_resend_api_key
```

### 3. Set up the database

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
app/
├── api/
│   ├── users/          # GET, POST, PUT, DELETE /api/users
│   │   └── [id]/       # Single user operations
│   │   └── products/   # GET, POST /api/users/products
│   ├── auth/           # NextAuth handler
│   └── send-email/     # Resend email route
├── users/              # User list + detail pages
├── products/           # Catch-all product pages
├── admin/              # Admin section with nested layout
├── upload/             # Cloudinary image upload page
├── register/           # Credential registration
├── auth/               # Session provider wrapper
├── components/         # Shared UI components
├── lib/prisma.ts       # Prisma singleton client
└── emails/             # React Email templates
prisma/
├── schema.prisma       # Data models: User, Product, Account, Session
└── migrations/         # Full migration history
```

---

## Data Models

```prisma
model User {
  id             String    @id @default(cuid())
  name           String?
  email          String?   @unique
  hashedPassword String?
  accounts       Account[]
  sessions       Session[]
}

model Product {
  id    Int    @id @default(autoincrement())
  name  String
  price Float
}
```

---

## Key Concepts Practiced

- **Server vs Client components** — `'use client'` only when needed
- **`async` page components** — data fetching directly in the page
- **`notFound()`** — triggering 404 from server-side logic
- **Zod `safeParse()`** — always returning `validation.error.issues` with 400
- **Prisma singleton** — avoiding connection pool exhaustion in dev
- **Middleware** — protecting routes without client-side redirects

---

<div align="center">

Built by **Mohammad Aiman bin Mat Hasim** · Certified 31 March 2026

</div>
