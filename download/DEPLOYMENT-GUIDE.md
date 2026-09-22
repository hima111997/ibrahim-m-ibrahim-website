# Deploying Your Personal Website to GitHub Pages

This guide walks you through putting the personal portfolio website you just
built onto GitHub Pages so anyone can visit it at
`https://<your-username>.github.io`.

---

## 0. What you have right now

The project is a **Next.js 16** app with:

- TypeScript + Tailwind CSS 4
- Framer Motion for animations
- A single page (`src/app/page.tsx`) composed of these sections:
  `Hero → About → Expertise → MDInsight → Publications → Teaching → Contact → Footer`

It is currently configured for the development sandbox. For GitHub Pages we
need it to **build to a static `out/` folder**. The two file changes below do
that, and the included GitHub Action deploys it automatically.

---

## 1. Download the project source

Inside this sandbox, the full project lives under:

```
/home/z/my-project/
```

You only need the **source** files — you can ignore `node_modules/`, `.next/`,
`dev.log`, `server.log`, etc. The minimum you need:

```
src/                      ← all React/TSX code
public/                   ← static assets (logo, robots.txt)
package.json
bun.lock
tsconfig.json
next.config.ts
eslint.config.mjs
postcss.config.mjs
tailwind.config.ts
components.json
prisma/schema.prisma       ← optional, only if you keep the prisma client
.github/workflows/deploy.yml  ← included in /home/z/my-project/download/
```

> Easiest path: download the whole `/home/z/my-project` folder as a `.zip`
> (it's available in the file browser), then unzip on your laptop and delete
> `node_modules`, `.next`, `dev.log`, `server.log`, `tests/`, `examples/`,
> `Caddyfile`, `mini-services/` (if present). Keep `.github/`, `src/`,
> `public/`, and the config files listed above.

---

## 2. Make the 3 small changes for static export

### 2a. Edit `next.config.ts`

Replace the contents of `next.config.ts` with:

```ts
import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Produce a fully static site in ./out
  output: "export",
  // GitHub Pages serves assets under /<repo-name> when using a project page,
  // or under / when using a user page (<username>.github.io). The CI workflow
  // passes NEXT_PUBLIC_BASE_PATH automatically.
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    // Next/Image optimization server isn't available on static hosting.
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
```

### 2b. Add a static build script in `package.json`

In the `"scripts"` block, add the new entries (keep your existing ones):

```json
"scripts": {
  "dev": "next dev -p 3000",
  "build": "next build",
  "build:static": "next build",
  "start": "next start",
  "lint": "eslint ."
}
```

### 2c. Remove the standalone-only build artifacts

If your `package.json` build script says
`"build": "next build && cp -r .next/static .next/standalone/.next/ && cp -r public .next/standalone/"`,
replace it with the simpler version above. We're switching from `output: "standalone"`
to `output: "export"`, which produces a plain static `out/` directory — no
Node.js server needed.

---

## 3. Add the GitHub Actions workflow

Create this file in your project root:

```
.github/workflows/deploy.yml
```

Use the file included at
`/home/z/my-project/download/.github/workflows/deploy.yml`.

What it does:
1. Triggers on every push to `main` (and manual dispatch).
2. Sets up Node 20 + Bun.
3. Calls `actions/configure-pages` which automatically detects whether your
   site is a **user page** (`<username>.github.io` repo → no basePath) or a
   **project page** (any other repo → basePath `/<repo-name>`) and exports it
   as `NEXT_PUBLIC_BASE_PATH`.
4. Runs `bun run build:static` — Next.js writes static files into `./out`.
5. Uploads `./out` and deploys it to GitHub Pages.

---

## 4. Create the GitHub repository

1. Go to https://github.com/new
2. Pick the repository name depending on the URL you want:
   - If you want `https://<your-username>.github.io` (your site at the root),
     name the repo **`<your-username>.github.io`** (replace `<your-username>`
     with your actual GitHub username, e.g. `ibrahim-ibrahim.github.io`).
   - If you want `https://<your-username>.github.io/portfolio` (a project
     page), name the repo anything you like, e.g. `portfolio` or
     `computational-biophysics`.
3. Set it to **Public** (free GitHub Pages is public-only on free accounts).
4. **Do not** initialize with a README, .gitignore, or license — keep it empty.

---

## 5. Push your code to GitHub

From the directory containing your project on your laptop:

```bash
# initialise git
git init
git branch -M main

# stage everything (make sure node_modules and .next are gitignored!)
cat > .gitignore <<'EOF'
node_modules
.next
out
.env
.env.local
dev.log
server.log
.DS_Store
*.tsbuildinfo
EOF

git add .
git commit -m "Initial commit — personal portfolio site"

# connect to GitHub (replace with your repo URL)
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

---

## 6. Enable GitHub Pages

1. Open your repo on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**
   (not "Deploy from a branch").
4. As soon as you push to `main`, the workflow will run. You can watch it
   under the **Actions** tab.
5. Once it finishes, the Pages settings page will show your site URL, e.g.
   `https://<your-username>.github.io/portfolio/` (for a project repo) or
   `https://<your-username>.github.io/` (for a user repo).

---

## 7. Local preview before pushing (optional)

You can build and serve the static export locally to confirm everything works
before pushing:

```bash
bun install
bun run build:static

# serve the out/ folder with any static file server, e.g.
npx serve out
# or
bunx serve out
```

Open the printed URL in your browser. It should look identical to the
preview you saw in the sandbox.

---

## 8. Custom domain (optional, recommended)

A custom domain like `ibrahimibrahim.com` looks more professional and is the
URL you should put on your CV, Scopus, ResearchGate, email signature, etc.

1. Buy a domain from any registrar (Namecheap, Cloudflare, Google Domains,
   etc.). Should cost ~$10/year for a `.com`.
2. In your GitHub repo: **Settings → Pages → Custom domain**, enter
   `ibrahimibrahim.com` (or whatever you bought). Click **Save**.
3. At your registrar's DNS settings, add these records:
   - **A records** (pointing apex domain to GitHub Pages):
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - **CNAME record** (for `www`):
     ```
     www  →  <your-username>.github.io.
     ```
4. Back in GitHub Pages settings, tick **Enforce HTTPS** once the certificate
   is issued (usually within ~15 minutes).

---

## 9. Updating the site later

Any time you want to change content (new publication, new MDInsight feature,
new video, etc.):

1. Edit the relevant file (most content lives in
   `src/components/sections/*.tsx`).
2. Commit and push:
   ```bash
   git add .
   git commit -m "Add new publication — <paper title>"
   git push
   ```
3. The Action runs automatically and your site is live in ~1–2 minutes.

---

## 10. Quick troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| Site shows 404 at `/<repo-name>/` | Missing `basePath` in `next.config.ts` | Confirm `NEXT_PUBLIC_BASE_PATH` is set by `configure-pages` step; check Action logs |
| Assets (CSS, images) 404 | `assetPrefix` not set | Re-check step 2a |
| Build fails in CI with "Cannot find module" | `bun install --frozen-lockfile` failed because lockfile out of date | Run `bun install` locally, commit updated `bun.lock`, push |
| Page is blank in browser | JavaScript error — open browser console | Usually a typo in a `.tsx` file; check the Action's build log |
| YouTube videos don't load | Browser blocking third-party iframes | Make sure no extension is blocking; GitHub Pages serves over HTTPS so YouTube embeds work fine |

---

## 11. Where to edit content

A quick map for future edits:

| Want to change… | Edit this file |
|---|---|
| Name / tagline / hero stats | `src/components/sections/hero.tsx` |
| Bio / timeline / languages | `src/components/sections/about.tsx` |
| Expertise cards | `src/components/sections/expertise.tsx` |
| MDInsight features / video / contact email | `src/components/sections/mdinsight.tsx` |
| Publications list & year filter | `src/components/sections/publications.tsx` |
| YouTube channel description / featured video | `src/components/sections/teaching.tsx` |
| Contact links / social icons | `src/components/sections/contact.tsx` |
| Site title / SEO description | `src/app/layout.tsx` |
| Theme colors / fonts | `src/app/globals.css` + `tailwind.config.ts` |

That's it — you should have a professional, modern personal website live in
under an hour.
