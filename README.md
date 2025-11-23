# NYT Spelling Bee Solver Clone

A fully functional, production-ready clone of beesolver.com built with the exact same technology stack.

## 🚀 Technology Stack

- **Framework:** SvelteKit 2.0 (SSR/SSG)
- **Styling:** Tailwind CSS 3.4 + Typography plugin
- **Fonts:** Red Hat Mono & Red Hat Text
- **Deployment:** Vercel with Cloudflare CDN ready
- **Architecture:** JAMstack with static site generation

## ✨ Features

- ✅ Interactive honeycomb puzzle solver
- ✅ Spoiler-protected hints with reveal buttons
- ✅ Complete answers page with scoring
- ✅ Pangram display
- ✅ Historical puzzle archive
- ✅ Date-based puzzle routes
- ✅ **API endpoints in `__data.json` format** (compatible with beesolver.com structure)
- ✅ Fully responsive design
- ✅ SEO optimized

## 📡 API Endpoints

Your site will expose the same API structure as beesolver.com:

```
GET /hints/__data.json          - Today's hints
GET /answers/__data.json        - Today's answers  
GET /pangram/__data.json        - Today's pangram
GET /archive/__data.json        - All puzzles list
GET /{YYYY-MM-DD}/answers/__data.json - Specific date
```

All endpoints have CORS enabled and return JSON in the exact same format as beesolver.com!

## 🛠️ Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

3. **Build for production:**
```bash
npm run build
```

4. **Preview production build:**
```bash
npm run preview
```

## 📦 Project Structure

```
beesolver/
├── src/
│   ├── lib/
│   │   └── puzzleData.js         # Puzzle data and utilities
│   ├── routes/
│   │   ├── +layout.svelte        # Main layout
│   │   ├── +page.svelte          # Homepage with solver
│   │   ├── hints/                # Hints page
│   │   ├── answers/              # Answers page
│   │   ├── pangram/              # Pangram page
│   │   ├── archive/              # Archive page
│   │   └── [date]/               # Dynamic date routes
│   └── app.css                   # Global styles
├── static/                       # Static assets
├── package.json
├── svelte.config.js
├── tailwind.config.js
└── vite.config.js
```

## 🎨 Customization

### Adding New Puzzles

Edit `src/lib/puzzleData.js` and add to the `puzzleDatabase` object:

```javascript
'2025-11-15': {
  date: '2025-11-15',
  formattedDate: 'Friday, November 15, 2025',
  centerLetter: 'e',
  outerLetters: ['a', 'b', 'c', 'd', 'f', 'g'],
  letters: 'Eabcdfg',
  pangrams: ['abcdefg'],
  answers: ['ace', 'aged', 'bead', ...],
  definitions: {...}
}
```

### Styling

- Colors: Edit `tailwind.config.js`
- Fonts: Modify Google Fonts import in `src/app.css`
- Components: Tailwind classes in `src/app.css`

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy! (Zero configuration needed)

### Other Platforms

The `@sveltejs/adapter-vercel` can be swapped for:
- `@sveltejs/adapter-netlify`
- `@sveltejs/adapter-cloudflare`
- `@sveltejs/adapter-node`

## 📊 Data Sources

Currently uses sample data in `puzzleData.js`. For production:

1. **Use beesolver API** (described in `beesolver-api-documentation.md`)
2. **Build puzzle generator** with word list
3. **Manual entry** for daily puzzles

## 🔒 Legal

This is an educational clone. The puzzle data is originally from NYT Spelling Bee. For production:
- Generate your own puzzles
- Or properly attribute/license NYT data
- Consider using the beesolver.com API as your backend

## 📝 License

MIT License - Feel free to use this code for personal or commercial projects.

## 🙏 Credits

- Design inspired by beesolver.com
- Built with SvelteKit, Tailwind CSS
- Fonts: Red Hat Mono & Red Hat Text by Google Fonts

## 🐛 Issues & Contributing

Found a bug? Want to contribute? Open an issue or PR!

---

**Made with ❤️ using SvelteKit**

