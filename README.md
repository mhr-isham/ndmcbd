NDMC (Notre Dame Math Club) Website

## Features

- Vite + React 18 SPA with fast HMR
- Material UI (MUI) theming, custom theme options, and global styles
- Recoil state for theme mode and app-level atoms
- React Router v6 for client-side routing
- SEO support via react-helmet-async
- Notifications via notistack with custom design
- Firebase Auth integration (Google/Facebook providers)
- Forms and validation with react-hook-form
- Network layer using axios with environment-based API URL
- Media/gallery support (lightGallery, Swiper)
- File upload UX (react-dropzone, cropper)
- Festival registration (solo/team) and Campus Ambassador (CA) flows

## Tech Stack

- Language: JavaScript (ES Modules)
- Bundler/Dev Server: Vite 4
- UI: React 18, MUI v5, Emotion
- State: Recoil
- Routing: react-router-dom v6
- Forms: react-hook-form
- Notifications: notistack
- HTTP: axios
- Media/UX: lightgallery, swiper, react-dropzone, react-cropper
- Auth/Backend services: Firebase (Auth), custom REST API

## Monorepo/Project Layout

Key files and folders:

- `index.html` – Vite entry HTML
- `vite.config.js` – Vite configuration (dev server on port 3000)
- `public/_redirects` – SPA redirect rule for Netlify/static hosts
- `src/` – Application source
	- `main.jsx` – App bootstrap (Router, Recoil, Helmet, MUI baseline)
	- `app/App.jsx` – App shell: theme provider, layout, header/footer, routes
	- `routes/index.jsx` – Route map (React Router v6)
	- `pages/` – Page modules (Home, About, Events, Gallery, Executives, Contact, Developers, Fest Registration, Dashboard, etc.)
	- `components/` – Reusable UI, styles, loaders, inputs, cards, etc.
	- `api/` – API helpers for CA login/verify, registration, newsletter, gallery fetch, search, leaderboard, contact form
	- `services/` – Client services for auth, events, uploader, registration, URL config
	- `firebase/` – Firebase app init and auth helpers
	- `hooks/` – Custom hooks (events, forms, institutions, login, page title)
	- `theme/` – Theme options and color palettes
	- `store/` – Recoil atoms/selectors
	- `static-data/` – JSON datasets (executives, sectors, events)
	- `utils/` – Registration utilities (solo/team)

## Environment Variables

Create a `.env` (or `.env.local`) at the project root to configure runtime variables:

```
# Backend API base URL used by axios
VITE_URL=https://api.example.com

# Firebase / Facebook auth values used in src/firebase/firebaseConfig.js
VITE_FACEBOOK_API_KEY=your_firebase_api_key
VITE_FACEBOOK_APP_ID=your_firebase_app_id
```

Notes:
- Prefix must be `VITE_` for Vite to expose envs to the client.
- Do not commit secrets to the repository. Use deployment provider secret stores.

## Getting Started

Prerequisites:
- Node.js 18+ (recommended)
- npm 9+ (or pnpm/yarn if you prefer; scripts assume npm)

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

By default the app runs at http://localhost:3000.

### Build & Preview

```bash
npm run build
npm run preview
```

Build output goes to `dist/` and `npm run preview` serves the built site locally.

### Linting

```bash
npm run lint
```

## Routing Overview

Defined in `src/routes/index.jsx`:

- `/` – Home
- `/about` – About
- `/events` – Events
- `/gallery` – Gallery
- `/executives` – Executives
- `/developers` – Developer profiles
- `/contact` – Contact
- `/dashboard` – Dashboard (guarding/role logic can be integrated as needed)
- `/nmf` – Festival landing
- `/nmf/register` – Solo registration
- `/nmf/register/:ca_ref` – Solo registration with CA referral
- `/nmf/treasure` – Team registration
- `/nmf/ca` – Campus Ambassador
- `/nmf/frame` – Frame utility
- `*` – 404 Not Found

## State, Theme, and UI

- Global theme is created in `App.jsx` using MUI and a custom `themeOptions`. The current mode is stored in Recoil and persisted to `localStorage`.
- Global styles are provided via `components/styles/Global.style.jsx`.
- Notifications use notistack with a custom design component in `components/ui/notificationDesign`.

## Data and API Layer

- `src/services/url.js` exposes `url` from `VITE_URL` and is used by services.
- `src/services/authenticationServices.js` includes `checkLogin` which posts to `${url}/_auth/login`.
- `src/api/*` contains focused API helpers: CA login/verify, festival registration, newsletter, gallery fetch, contact form, institution search, leaderboard.
- Axios is the HTTP client. Consider adding interceptors (e.g., for auth tokens, error handling) if needed.

## Firebase Auth

- Firebase app is initialized in `src/firebase/firebaseConfig.js` using env values for API key and app ID.
- Auth helpers (Google/Facebook) live in `src/firebase/firebase.js`.
- Ensure your Firebase project is configured for the providers you enable.

## Deployment

This app is designed to deploy to any static host. A `_redirects` file is included for SPA routing compatibility.

General steps (Netlify example):
1. Build: `npm run build`
2. Deploy the `dist/` directory.
3. Add environment variables in the hosting dashboard (`VITE_URL`, `VITE_FACEBOOK_API_KEY`, `VITE_FACEBOOK_APP_ID`).
4. Ensure the SPA redirect rule is applied (Netlify auto-detects `public/_redirects`).

Other hosts (Vercel, GitHub Pages, Cloudflare Pages) are supported; configure SPA rewrites accordingly.

## Development Tips

- Scroll restoration is handled by a small `ScrollToTop` component in `main.jsx`.
- Keep components focused. Shared primitives live under `components/` and styles in `components/styles/`.
- Use `hooks/` to encapsulate page-specific logic (e.g., `useEvents`, `usePageTitle`).
- Prefer colocated component styles via Emotion/MUI styled APIs.
- For heavy media (gallery), prefer CDN hosting and lazy-loading.

## Contributing

1. Create a feature branch from `main`.
2. Add or update tests/docs where helpful.
3. Run `npm run lint` and ensure the app builds.
4. Open a PR with a clear description and screenshots if UI changes.

Coding standards:
- Follow ESLint recommendations and React hooks rules.
- Keep components small and typed via JSDoc/TS if introduced in the future.

## Troubleshooting

- Blank page or 404 on refresh in production: verify the SPA redirect rule is present and your host supports it.
- Env vars not applied: ensure names are prefixed with `VITE_` and re-run the build.
- Firebase auth popups blocked: check provider configuration and allowed domains in Firebase Console.
- CORS/API errors: update your backend CORS policy to include the app’s deployed origin.

## Acknowledgements

- Developers: Md. Arafat Hossain, Md. Hasib Khan, Soumya Mahbub


