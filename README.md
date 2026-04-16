## ryuu - Itachi Portfolio

Portfolio website with red-black Itachi inspired visual style, animated page transitions, and automatic project list from Vercel API.

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Setup environment:

```bash
cp .env.local.example .env.local
```

3. Fill `.env.local`:

```bash
VERCEL_TOKEN=your_vercel_api_token
VERCEL_API_BASE_URL=https://api.vercel.com
```

4. Run app:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Vercel API Integration
- API route: `/api/projects`
- Source endpoint: `https://api.vercel.com/v9/projects`
- Token used from: `VERCEL_TOKEN`
- Base URL override (optional): `VERCEL_API_BASE_URL`
- Includes loading, error, and empty state handling in `projects` page.

## Deploy to Vercel
1. Push this project to GitHub.
2. Import repository in Vercel dashboard.
3. Add `VERCEL_TOKEN` in Project Settings > Environment Variables.
4. Deploy.

## Pages
- `/` Home
- `/about` About + Skills
- `/experience` Experience
- `/projects` Project list from Vercel
- `/contact` Contact form
