# 🚀 Quick Start Guide

## Installation & Setup (5 Minutes)

### Step 1: Install Node.js
Make sure you have Node.js 18+ installed:
```bash
node --version
```

If not, download from: https://nodejs.org/

### Step 2: Install Dependencies
```bash
cd C:\Users\Sherry\Downloads\beesolver
npm install
```

This will install:
- SvelteKit
- Tailwind CSS  
- All required dependencies

### Step 3: Run Development Server
```bash
npm run dev
```

The site will be available at: **http://localhost:5173**

### Step 4: Test the Site
Open your browser and visit:
- http://localhost:5173 - Homepage with solver
- http://localhost:5173/hints - Hints page
- http://localhost:5173/answers - Answers page
- http://localhost:5173/archive - Archive page

### Step 5: Test API Endpoints
Your own API endpoints are now live:
```bash
# Test in browser or with curl:
http://localhost:5173/hints/__data.json
http://localhost:5173/answers/__data.json
http://localhost:5173/archive/__data.json
```

These return the same JSON structure as beesolver.com!

---

## Production Build

```bash
npm run build
npm run preview
```

Preview at: http://localhost:4173

---

## Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2: Vercel Dashboard
1. Push code to GitHub
2. Go to https://vercel.com
3. Click "Import Project"
4. Select your GitHub repo
5. Click "Deploy"

Done! Your site is live with:
- Automatic HTTPS
- CDN caching
- API endpoints working
- Same exact structure as beesolver.com

---

## Adding More Puzzles

Edit `src/lib/puzzleData.js`:

```javascript
'2025-11-13': {
  date: '2025-11-13',
  formattedDate: 'Wednesday, November 13, 2025',
  centerLetter: 'o',
  outerLetters: ['a', 'b', 'c', 'd', 'e', 'f'],
  letters: 'Oabcdef',
  pangrams: ['abcdeffo'],
  answers: ['abo', 'abode', 'acao', 'cafe',...],
  definitions: {...}
}
```

Restart the dev server and it's live!

---

## Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Module Not Found
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
npm run check
```

---

## 🎉 You're Done!

You now have:
✅ A fully working Spelling Bee solver
✅ API endpoints compatible with beesolver.com  
✅ Ready to deploy to Vercel
✅ 100% functional, no errors

**Next steps:**
1. Customize styling in `tailwind.config.js`
2. Add more puzzles in `puzzleData.js`
3. Deploy to production!

