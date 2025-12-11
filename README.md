# Malek Badreddine's Portfolio

A modern, high-performance personal portfolio application built with **Next.js 15**, **React 18**, **TypeScript**, and **Tailwind CSS**. Features an interactive guestbook, smooth animations, and a complete DevOps deployment pipeline.

[![CI](https://github.com/melekbadreddine/my-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/melekbadreddine/my-portfolio/actions/workflows/ci.yml)

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, minimal design with smooth animations
- 🌓 **Dark/Light Mode** - Seamless theme switching with system preference detection
- 🔐 **Authentication** - GitHub OAuth integration with NextAuth v5
- 💬 **Interactive Guestbook** - Sign-in required to post, own messages can be deleted
- 📱 **Fully Responsive** - Mobile-first design for all screen sizes
- ⚡ **Performance Optimized** - Fast load times, optimized images, lazy loading
- 🚀 **DevOps Ready** - Complete CI/CD pipeline, production-ready deployment
- 🗄️ **Database** - Neon serverless PostgreSQL with Prisma ORM

## 🛠️ Tech Stack

**Frontend:**
- Next.js 15 (App Router, React Server Components)
- React 18
- TypeScript (strict mode)
- Tailwind CSS v4
- Lucide React (icons)
- Framer Motion (animations)
- next-themes (theme management)

**Backend & Database:**
- NextAuth v5 (Auth.js) with GitHub OAuth
- Prisma 6 (ORM)
- Neon (Serverless PostgreSQL)

**DevOps & Deployment:**
- GitHub Actions (CI/CD)
- Vercel (hosting)
- Docker (containerization ready)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/melekbadreddine/my-portfolio.git
cd my-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Copy the example file and configure it:

```bash
cp .env.example .env.local
```

Fill in your `.env.local`:

```env
# Database (Neon)
DATABASE_URL="postgresql://user:password@ep-xxx.region.aws.neon.tech/neondb?sslmode=require"
DIRECT_URL="postgresql://user:password@ep-xxx.region.aws.neon.tech/neondb?sslmode=require"

# NextAuth v5
AUTH_SECRET="your-secret-key" # Generate: openssl rand -base64 32
AUTH_URL="http://localhost:3000"

# GitHub OAuth (create app at https://github.com/settings/developers)
AUTH_GITHUB_ID="your_client_id"
AUTH_GITHUB_SECRET="your_client_secret"
```

### 4. Set Up Neon Database

1. Go to [Neon Console](https://console.neon.tech)
2. Create a new project named `portfolio`
3. Copy the connection string and paste into `DATABASE_URL` and `DIRECT_URL`
4. The `DIRECT_URL` should be the same as `DATABASE_URL`

### 5. Push Database Schema

```bash
bash -c 'set -a; source .env.local; set +a; npx prisma db push'
```

### 6. Generate Prisma Client

```bash
npx prisma generate
```

### 7. Create GitHub OAuth App

For **Development:**
1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click "New OAuth App"
3. Fill in:
   - **Application name:** Portfolio Dev
   - **Homepage URL:** `http://localhost:3000`
   - **Authorization callback URL:** `http://localhost:3000/api/auth/callback/github`
4. Copy Client ID and Client Secret to `.env.local`

For **Production:**
1. Create another OAuth App with production URLs:
   - **Homepage URL:** `https://your-domain.vercel.app`
   - **Authorization callback URL:** `https://your-domain.vercel.app/api/auth/callback/github`
2. Store these in Vercel environment variables

### 8. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

```bash
# Development
npm run dev              # Start dev server on port 3000

# Production
npm run build           # Build for production
npm start               # Start production server

# Code Quality
npm run lint            # Run ESLint
npm run type-check      # Check TypeScript types

# Database
npm run prisma:migrate  # Create migration
npm run prisma:generate # Generate Prisma Client
```

## 📂 Project Structure

```
my-portfolio/
├── app/                        # Next.js app directory
│   ├── layout.tsx             # Root layout with providers
│   ├── page.tsx               # Home page
│   ├── globals.css            # Global styles
│   ├── guestbook/
│   │   └── page.tsx           # Guestbook page
│   ├── api/auth/[...nextauth]/
│   │   └── route.ts           # NextAuth API route
│   └── actions/
│       └── guestbook.ts       # Server actions
├── components/                 # React components
│   ├── navbar.tsx             # Navigation bar
│   ├── footer.tsx             # Footer
│   ├── theme-provider.tsx     # Theme provider
│   ├── theme-toggle.tsx       # Theme toggle button
│   └── guestbook/             # Guestbook components
├── lib/
│   └── auth.ts                # Auth utilities
├── prisma/
│   ├── schema.prisma          # Prisma schema
│   └── migrations/            # Database migrations
├── .github/workflows/
│   └── ci.yml                 # CI/CD pipeline
├── auth.ts                    # NextAuth configuration
├── middleware.ts              # Next.js middleware
└── package.json               # Dependencies
```

## 🗄️ Database Schema

### User
```prisma
- id: String (unique)
- name: String?
- email: String (unique)
- emailVerified: DateTime?
- image: String?
- accounts: Account[]
- sessions: Session[]
- guestbookEntries: GuestbookEntry[]
```

### GuestbookEntry
```prisma
- id: String (unique)
- userId: String (foreign key)
- message: String (max 500 chars)
- createdAt: DateTime
- updatedAt: DateTime
```

## 🔐 Authentication Flow

1. User clicks "Sign In with GitHub" on navbar or guestbook page
2. Redirected to GitHub OAuth consent screen
3. User authorizes the app
4. GitHub redirects back with authorization code
5. NextAuth exchanges code for access token
6. User data stored in Neon database
7. Session created and user redirected

## 🚀 Deployment

### Deploy to Vercel

1. Push code to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. Go to [Vercel Dashboard](https://vercel.com/dashboard)

3. Click "Add New Project" and select your repository

4. Configure build settings:
   - **Framework:** Next.js
   - **Build Command:** `prisma generate && next build`
   - **Output Directory:** `.next`
   - **Install Command:** `npm install`

5. Add environment variables in Vercel dashboard:
   ```
   DATABASE_URL=<production-neon-url>
   DIRECT_URL=<production-neon-direct-url>
   AUTH_SECRET=<new-secret>
   AUTH_URL=https://your-domain.vercel.app
   AUTH_GITHUB_ID=<production-client-id>
   AUTH_GITHUB_SECRET=<production-client-secret>
   ```

6. Click "Deploy"

7. After successful deployment:
   - Update GitHub OAuth app callback URL
   - Run Prisma migrations in production if needed

### Custom Domain (Optional)

1. In Vercel project settings, go to "Domains"
2. Add your custom domain
3. Follow DNS configuration instructions
4. Update `AUTH_URL` in environment variables

## 📊 CI/CD Pipeline

GitHub Actions workflow runs on every push/PR:

1. **Lint & Type Check**
   - ESLint for code quality
   - TypeScript compiler for type safety

2. **Build Verification**
   - Install dependencies
   - Generate Prisma Client
   - Build application

3. **Prisma Validation**
   - Validate Prisma schema
   - Check for migration conflicts

## 🧪 Testing Checklist

Before deployment, verify:

- [ ] All TypeScript errors resolved (`npm run type-check`)
- [ ] Dark/light theme toggle works
- [ ] GitHub OAuth login works
- [ ] Can post to guestbook when authenticated
- [ ] Cannot post when not authenticated
- [ ] Can delete own guestbook entries
- [ ] Technology icons load correctly
- [ ] Responsive design on mobile (max-width: 640px)
- [ ] Responsive design on tablet (max-width: 1024px)
- [ ] No console errors
- [ ] Build succeeds (`npm run build`)

## 📈 Performance

- **Lighthouse Score:** 90+
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1

## 🐛 Troubleshooting

### Database Connection Error

```
Error: Can't reach database server at ep-xxx.neon.tech:5432
```

**Solution:**
- Verify Neon project is running
- Check connection string is correct
- Ensure `DIRECT_URL` is set properly
- Test connection: `psql $DATABASE_URL`

### GitHub OAuth Error

```
Error: [invalid_request] ...
```

**Solution:**
- Verify Client ID and Secret in `.env.local`
- Check callback URL matches in GitHub app settings
- Ensure `AUTH_URL` is correct

### Prisma Generate Error

```
Cannot find module '@prisma/client/runtime/...'
```

**Solution:**
```bash
npm install prisma@^6 @prisma/client@^6
npx prisma generate
```

### Build Fails on Vercel

```
Error: Environment variable not found: AUTH_SECRET
```

**Solution:**
- Go to Vercel project settings → Environment Variables
- Add all required variables from `.env.local`
- Redeploy the project

## 📚 Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth.js Docs](https://authjs.dev)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Vercel Deployment](https://vercel.com/docs)
- [Neon Documentation](https://neon.tech/docs)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 👤 Author

**Melek BADREDDINE**

- GitHub: [@melekbadreddine](https://github.com/melekbadreddine)
- LinkedIn: [@melekbadreddine](https://linkedin.com/in/melekbadreddine/)
- Email: badreddine.malek@enis.tn

---

Built with ❤️ using Next.js, React & Tailwind CSS

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
