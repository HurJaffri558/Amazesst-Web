# Deployment Guide: Amazesst on Vercel

Since your project uses **Prisma** and **SQLite**, there is one important thing to know: **Vercel does not support persistent SQLite databases.** SQLite is a local file, and Vercel's serverless functions are temporary. Every time your site redeploys or restarts, your database will be reset.

To keep your blog posts permanently, you should use a **hosted PostgreSQL database**.

## Recommended Database: Neon.tech (Free)
[Neon](https://neon.tech/) is a serverless Postgres database that works perfectly with Prisma and Vercel, and it has a great free tier.

### 1. Set Up Neon Database
1.  Go to [Neon.tech](https://neon.tech/) and create a free account.
2.  Create a new project.
3.  Copy your **Connection String** (it starts with `postgres://...`).

### 2. Update Your Project
Update your `.env` file (and Vercel environment variables) with the new connection string:
```env
# Change this in your .env
DATABASE_URL="postgres://user:password@hostname/dbname?sslmode=require"
```

Update your `prisma/schema.prisma` file:
```prisma
datasource db {
  provider = "postgresql" // Change from "sqlite" to "postgresql"
  url      = env("DATABASE_URL")
}
```

### 3. Deploy to Vercel
1.  Push your code to **GitHub**.
2.  Go to [Vercel.com](https://vercel.com/) and Import your repository.
3.  In the **Environment Variables** section, add:
    *   `DATABASE_URL`: Your Neon connection string.
    *   `NEXT_PUBLIC_SITE_URL`: `https://your-domain.vercel.app`
4.  Click **Deploy**.

## Deployment with SQLite (Not Recommended)
If you still want to use SQLite, you can deploy to a VPS (like DigitalOcean or Hetzner) instead of Vercel, or use a service like **Turso** (which is SQLite for the cloud).

> [!IMPORTANT]
> For the best experience on Vercel, use **Vercel Postgres** or **Neon**.
