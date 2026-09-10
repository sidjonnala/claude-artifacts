# claude-artifacts

HTML copies of selected Patagonia Health delivery artifacts, kept so they stay reachable outside
the conversation that produced them.

`index.html` is a self-contained index page that lists every artifact with search and tag
filtering. The repo is laid out so GitHub Pages can serve it as-is, but **Pages is intentionally
not enabled**. Read [Publishing with GitHub Pages](#publishing-with-github-pages) before turning
it on.

## Contents

| File / folder | Purpose |
|---|---|
| `index.html` | The index page. Renders whatever is listed in `artifacts.js`. No build step. |
| `artifacts.js` | The manifest. The only file you edit when adding an artifact. |
| `artifacts/` | One HTML file per artifact, stored verbatim as exported. |
| `.nojekyll` | Tells GitHub Pages to serve files as-is instead of running Jekyll. |

Artifacts are stored **verbatim**, with no injected navigation or edits. That way a later export of
the same artifact overwrites the file cleanly and nothing local is lost. Navigation lives entirely
in `index.html`.

## Viewing it

Without Pages, clone the repo and open `index.html` in a browser. `artifacts.js` loads via a
`<script src>` tag rather than `fetch`, so the index works over `file://` with no local server.

```bash
git clone https://github.com/<your-username>/claude-artifacts.git
cd claude-artifacts
open index.html          # macOS
start index.html         # Windows
```

## Adding an artifact

Two steps, no build.

1. Save the artifact's HTML to `artifacts/<slug>.html`. Use a kebab-case slug that matches the
   title, for example `aks-migration-tracker.html`.
2. Add one entry to the `window.ARTIFACTS` array in `artifacts.js`:

```js
{
  slug: "aks-migration-tracker",
  title: "AKS Migration Tracker",
  file: "artifacts/aks-migration-tracker.html",
  summary: "One or two sentences. Shown on the index card.",
  tags: ["infrastructure", "migration"],
  status: "Live",
  updated: "2026-09-08",
  source: "https://claude.ai/code/artifact/<uuid>"
}
```

Field reference:

| Field | Notes |
|---|---|
| `slug` | Kebab-case id. Must match the filename in `artifacts/`. |
| `title` | As shown on the index and in the artifact's own `<title>`. |
| `file` | Path relative to the repo root. |
| `summary` | One or two sentences. Keep it about what the artifact answers. |
| `tags` | Lowercase. Reuse existing tags so filtering stays useful. |
| `status` | Short label: `Proposal`, `Live`, `Reference`, `Superseded`. |
| `updated` | `YYYY-MM-DD`. The index sorts on this, newest first. |
| `source` | Optional link back to the live artifact. |

Order in the array does not matter. The index sorts by `updated` descending and derives the tag
filter row from the data, so nothing else needs touching.

To **update** an artifact, overwrite its file in `artifacts/` and bump `updated` in the manifest.
To **retire** one, set `status: "Superseded"` rather than deleting it, so links keep working.

## Publishing with GitHub Pages

The repo is Pages-ready: static files, no build step, `.nojekyll` present, no server-side
dependencies. Enabling Pages is a separate decision, and for this content it is not a small one.

### The visibility problem

Based on GitHub's current documentation:

- Pages from a **private** repository requires a paid plan (GitHub Pro, Team, Enterprise Cloud, or
  Enterprise Server). It is not available for private repos on GitHub Free.
- **Access control for a Pages site requires GitHub Enterprise Cloud**, and applies only to
  project sites published from a private or internal repository **owned by an organization**.
  GitHub's wording: "To publish a GitHub Pages site privately, your organization must use GitHub
  Enterprise Cloud."

The consequence for this repo: it is private and owned by a personal account, so a Pages site
published from it would be **reachable by anyone with the URL**, whether or not the repository
stays private. The artifacts here contain unreleased release dates, internal disagreements,
named colleagues, and customer-priority discussion. Do not enable Pages on a personal-account
private repo and assume the site is private, because it is not.

Verify the above against GitHub's docs before acting on it. Plan features change.

### Options

| Option | Result |
|---|---|
| **Leave Pages off** (current state) | Content stays behind GitHub repo permissions. Clone and open `index.html` locally. Recommended for this content. |
| **Move to a Patagonia Health org on GitHub Enterprise Cloud, then enable Pages with access control** | Real private hosting: only people with repo read access can load the site. Requires org ownership and an Enterprise Cloud plan. |
| **Enable Pages as-is** | The site is public on the internet. Only appropriate for artifacts reviewed and cleared for public release. |

### If you do enable it

Settings > Pages > Build and deployment > Source: **Deploy from a branch**, branch `main`,
folder `/ (root)`. The site appears at `https://<username>.github.io/claude-artifacts/` within a
few minutes.

`index.html` carries `<meta name="robots" content="noindex,nofollow">` as a small extra guard.
That discourages search engines. It is not access control and should not be treated as any.

## Handling

- Keep the repository private.
- Review artifact content before granting anyone access, and before any Pages decision.
- Artifacts are added here only when specifically requested, not automatically for everything
  produced in a session.
- No PHI. These are process and delivery documents. If an artifact would carry patient data, it
  does not belong in this repo.

Internal Patagonia Health material. Not licensed for distribution.
