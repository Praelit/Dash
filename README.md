# 🦢 Black Swan Monitor

Cross-asset risk & allocation console — a colorful multi-page dashboard with live crypto data, historical black-swan comparison, and asset allocation suggestions.

แดชบอร์ดมอนิเตอร์ความเสี่ยงและจัดสรรสินทรัพย์แบบหลายหน้า พร้อมข้อมูลคริปโต live เทียบกับเหตุการณ์ black swan ในอดีต และคำแนะนำการโยกพอร์ต

---

## ✨ Features

| # | Page | What it shows |
|---|------|---------------|
| 1 | ⚠️ Black Swan Alert | Composite risk score (0-100) with 7 weighted sub-indicators (VIX, yield curve, credit spreads, breadth, dollar liquidity, crypto F&G, geopolitical) |
| 2 | 💸 Global Money Flow | Cross-asset inflow/outflow (7D), YTD returns, live tickers |
| 3 | 📜 Historical Compare | 1987 · 2000 · 2008 · 2020 · 2022 with similarity score vs today |
| 4 | 🎯 Asset Allocation | Defensive vs risk-on pie chart with rationale per asset class |
| 5 | 🔄 Market Cycle | Current cycle phase vs past tops (2000/2007/2021) with signal checklist |

**Keyboard shortcuts:** `1`–`5` · `← →` arrow keys · each page fits the viewport (no scroll)

---

## 🚀 Two ways to run

### A) Quickest — open the standalone HTML (EN / TH)

The `standalone.html` file is fully self-contained. It pulls React, Recharts, Tailwind, and Babel from public CDNs, so just double-click to open in a browser.

`standalone.html` ใช้ได้ทันที — เปิดในเบราว์เซอร์ได้เลย ไม่ต้องติดตั้งอะไรเพิ่ม (ใช้ React/Recharts/Tailwind ผ่าน CDN)

```bash
# Just open it
open standalone.html        # macOS
xdg-open standalone.html    # Linux
start standalone.html       # Windows
```

> To deploy to **GitHub Pages** with zero config: rename/copy `standalone.html` → `index.html` and enable Pages on the `main` branch, root folder.
>
> วิธีขึ้น GitHub Pages ง่ายสุด: เปลี่ยนชื่อ `standalone.html` → `index.html` แล้วเปิด GitHub Pages จาก branch `main` / root

### B) Full Vite + React project (recommended for development)

```bash
npm install
npm run dev        # development at http://localhost:5173
npm run build      # production bundle in ./dist
npm run preview    # preview the build
```

**Deploy the built version** to GitHub Pages:

```bash
# Option 1: use the gh-pages branch
npm run deploy     # pushes ./dist to gh-pages branch

# Option 2: use GitHub Actions (see below)
```

---

## 📦 Deploying to GitHub Pages

### 1. Create the repo

```bash
cd black-swan-monitor
git init -b main
git add .
git commit -m "Initial commit: Black Swan Monitor dashboard"
git remote add origin https://github.com/<your-username>/black-swan-monitor.git
git push -u origin main
```

### 2. Enable Pages

On GitHub → **Settings** → **Pages** → Source: `Deploy from a branch` → Branch: `main` / `/` (root) — this serves `index.html` at `https://<your-username>.github.io/black-swan-monitor/`.

> If you're deploying the Vite build, set `base: "/black-swan-monitor/"` in `vite.config.js` first, then `npm run deploy`.

---

## 🔌 Data sources

Currently wired (LIVE, no API key needed):

- **CoinGecko** — BTC/ETH price, global crypto market cap · <https://www.coingecko.com/en/api/documentation>
- **Alternative.me Fear & Greed** — crypto sentiment index · <https://alternative.me/crypto/fear-and-greed-index/>

To fill in (you need to sign up for a free key):

| Source | Covers | Sign up |
|---|---|---|
| [FRED (St. Louis Fed)](https://fred.stlouisfed.org/docs/api/api_key.html) | Yield curve, CPI, unemployment, M2 | Free, unlimited |
| [Alpha Vantage](https://www.alphavantage.co/support/#api-key) | S&P 500, VIX, FX, Gold | Free 25 calls/day |
| [Financial Modeling Prep](https://site.financialmodelingprep.com/developer/docs) | Stocks, bonds, ETF flows | Free tier limited |
| [Polygon.io](https://polygon.io/) | Stocks, options flow | Free 5 calls/min |

> **Yahoo Finance** is blocked by CORS from browsers — needs a proxy server. Consider running a small serverless function if you want historical OHLC data.

### Adding keys

Create a `.env` file at the project root:

```bash
VITE_FRED_KEY=your_fred_key_here
VITE_ALPHA_VANTAGE_KEY=your_av_key_here
```

Then edit `src/BlackSwanDashboard.jsx` `useEffect` and add the corresponding fetches:

```js
const fred = await fetch(
  `https://api.stlouisfed.org/fred/series/observations?series_id=DGS10&api_key=${import.meta.env.VITE_FRED_KEY}&file_type=json`
).then(r => r.json());
```

---

## 🗂 Project structure

```
black-swan-monitor/
├── standalone.html              ← self-contained, open in browser
├── index.html                   ← Vite entry
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
├── README.md
└── src/
    ├── main.jsx
    ├── BlackSwanDashboard.jsx   ← all 5 pages
    └── index.css
```

---

## ⚠️ Disclaimer

ข้อมูลและคำแนะนำในแดชบอร์ดเป็น **framework** เชิงการศึกษาเท่านั้น ไม่ใช่คำแนะนำการลงทุนเฉพาะบุคคล ตัวเลขบางส่วนเป็น mock/illustrative data เพื่อแสดงแนวคิด ผู้ใช้ควรปรึกษานักลงทุนมืออาชีพและใช้วิจารณญาณก่อนตัดสินใจ

The numbers and advice shown are an **educational framework only, not personalized investment advice.** Some values are mock/illustrative data used to demonstrate the layout. Please consult a professional and do your own research before making decisions.

---

## 📄 License

MIT — do whatever you want, but attribution is appreciated.
