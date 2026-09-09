# prototypes/out

**Purpose:** Rendered *static* HTML prototypes. One self-contained `.html` per screen,
no build step, vanilla JS only. `index.html` is the gallery entry point.

---

## This directory is its own git repo — the parent is not

- Repo root is `out/` itself. Remote `https://github.com/KiBiz-Systems/zalexy-prototype.git`,
  branch `main`.
- `E:\Dev\zalexy` (the parent) is NOT a git repo. Neither is `ai-workspace/` or
  `prototypes/`. Only `out/`, `client/` and `server/` are repos. Running `git` from the
  parent or from `ai-workspace/` fails — `cd` into `out/` first.
- Consequence: `EnterWorktree` from the parent fails ("not in a git repository"); from
  inside `out/` it succeeds and creates `out/.claude/worktrees/<name>/`, which is why
  that folder exists and is now gitignored.

## Pushing publishes publicly — treat it as a release

- `.github/workflows/pages.yml` triggers `on: push: branches: [main]` and uploads
  `path: .` — the entire directory — to GitHub Pages.
- Anything committed becomes public immediately. Never commit `.claude/`, scratch
  files, or client data.
- Never push to `main` without explicit developer approval in the current conversation.

## Dependencies

- **Specs are NOT in this repo.** Design contracts live one level up, outside version
  control: `../staff/*.md`, `../client/*.md`, `../_shared/*.md`, `../README.md`. `out/`
  holds only renders. Never edit a prototype to add behaviour the spec does not
  describe — change the spec first, then re-render.
- **`_shared/scheduling-decisions.md` is the authority for scheduling screens.**
  D1–D6 (2026-09-08) and D7–D15 (2026-09-09, the whiteboard revision) override both
  scope docs. Read it before touching `booking-flow-staff.html`,
  `booking-flow-client.html` or `calendar-master.html`.
- Design tokens: `../_shared/design-system.md` (never invent a token or a hue). Output
  rules: `../_shared/html-conventions.md`. Gotchas per screen live in that screen's
  spec Anti-Patterns section — read it before redesigning anything, or you will
  regenerate a rejected design.

## Common Tasks

**To render/update a prototype:** never write a prototype file directly — render to a
temp path and move it. On 2026-09-09 an agent wrote ~90KB straight to
`booking-flow-staff.html`, hit a rate limit mid-write, and left a 211-line stub with an
empty `<script>`, destroying a working 91KB prototype. Write `<slug>.new.html`, run
`node --check` on the extracted `<script>` block, then `mv` it into place.
`*.new.html` is gitignored.

**To add a new render to the gallery:** the gallery is `index.html`, not `home.html`.
Every new render needs a card in `index.html` (audience tag, `<h4>`, 2–4 line
description, `.meta` line citing sources, an Open-prototype button,
`.card-placeholder` stays last) and a nav entry in `shared-sidebar.js`. Verify no
orphans by checking every `out/*.html` is referenced from `index.html`. Re-read
existing card descriptions after a rebuild — a stale card describes an architecture
that no longer exists, and clients read the card before clicking.

**To choose a page shell:** two conventions, not interchangeable. Admin/staff screens
inject the 220px dark sidebar from `shared-sidebar.js` and mark the current page
active. Client-portal screens (`booking-flow-client.html`, `portal-profile-tab.html`)
deliberately have NO sidebar — they use a portal top bar plus a single
`<a class="gallery-link" href="index.html">← Prototype Gallery</a>` so they are not
dead ends. Do not add the admin sidebar to a client screen; its spec forbids it.

## Testing

- **Location:** no test suite. This directory holds renders only.
- **Verification:** grep + `node --check` on extracted `<script>` blocks.
- **Browser automation does not work here.** Chrome tooling can read the page
  (`read_page`) but clicking, screenshots and `javascript_tool` all fail with "Cannot
  access a chrome-extension:// URL of different extension". `file://` URLs are
  rejected outright. To view a prototype, serve it:
  `python -m http.server 8899 --bind 127.0.0.1` then open
  `http://127.0.0.1:8899/<file>.html`. Do not spend turns retrying the extension path.
  State plainly that behaviour was not exercised in a browser.

## Notes

- `.claude/` and `*.new.html` are gitignored — see `.gitignore` in this directory for
  why.
