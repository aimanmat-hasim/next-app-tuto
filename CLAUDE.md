# next-app-tuto

A Next.js tutorial project exploring the App Router, API routes, Prisma ORM, and Zod validation.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Database

```bash
npx prisma migrate dev --name <migration_name>   # Create and apply a migration
npx prisma generate                              # Regenerate Prisma client after schema changes
npx prisma studio                                # Open Prisma visual database browser
```

Always run both `migrate dev` and `generate` after updating `prisma/schema.prisma`.

**Connection:** MySQL via `DATABASE_URL` in `.env` (local: `localhost:3306/next-app-tuto`)

## Project Structure

```
app/
  api/users/          # REST API routes
    route.tsx         # GET /api/users, POST /api/users
    schema.ts         # Zod schema for User (name, email)
    [id]/route.tsx    # GET/PUT/DELETE /api/users/:id
    products/
      route.tsx       # GET /api/users/products, POST
      schema.ts       # Zod schema for Product (name, price)
  users/              # User pages (App Router)
  products/           # Product pages (catch-all route)
  admin/              # Admin section with its own layout
  components/         # Reusable components
  lib/prisma.ts       # Prisma singleton client
  generated/prisma/   # Auto-generated — never edit manually
prisma/
  schema.prisma       # Database models
  migrations/         # Migration history
```

## Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode)
- **Database:** MySQL + Prisma ORM 7
- **Validation:** Zod 4
- **Styling:** Tailwind CSS v4 + CSS Modules
- **Sorting:** fast-sort

## Conventions

### API Routes
- Each endpoint group gets its own `schema.ts` for Zod validation
- Always use `safeParse()` and return `validation.error.issues` with status 400
- Dynamic route params must be awaited: `const { id } = await params`
- Return 404 via `NextResponse.json({ error: '...' }, { status: 404 })` after a DB lookup
- `await` all Prisma calls and return the result — never fire-and-forget

### Prisma
- Import the singleton from `@/app/lib/prisma`
- Never instantiate `new PrismaClient()` directly in route files
- `generated/prisma/` is gitignored — always regenerate after cloning

### Components
- Server components by default; add `'use client'` only when using hooks or browser APIs
- Page-level data fetching goes directly in the `async` page component
- Use `notFound()` from `next/navigation` to trigger 404 pages

### TypeScript
- Path alias `@/` maps to the project root
- Strict mode is on — avoid `any`
