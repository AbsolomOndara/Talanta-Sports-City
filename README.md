# Talanta Sports City homepage

A responsive React recreation of the supplied Talanta Sports City homepage reference. It uses Vite and is ready to deploy as a static React site on Vercel.

## Run locally

```bash
npm install
npm run dev
```

## Build for Vercel

The included `vercel.json` sets the build command to `npm run build` and the output directory to `dist`. Import the folder or Git repository into Vercel and use the Vite preset. No backend is required for this visual homepage.

The notification form is front-end only. It validates the email field and clearly indicates that the preview does not send or store the address. Connect a form endpoint before collecting real signups.
