# Leaning Studios Website

Current accepted website build: `0.1.0.14`

Previous accepted content build: `0.1.0.12`

Migration prep build: `0.1.0.13-prehost` - GitHub Pages Hosting Migration Prep

Local project path: `/Users/qamac/Documents/Maggios Productions/LSwebsite`

Leaning Studios is a static website for a Watson, Louisiana recording, project-finishing, artist-development, and Audio Support studio under Maggios Productions.

## Hosting

- Hosting target: GitHub Pages
- Public domain: `https://leaningstudios.com/`
- Pages source: branch `main`, folder `/root`
- Build command: none
- Publish root: repository root
- Main file: `index.html`
- Custom-domain file: `CNAME`
- GitHub Pages ignores Netlify-style `_headers`; keep that file only as legacy reference unless headers are moved to another hosting layer later.

## GitHub Pages Deployment

1. Push the accepted `main` branch to GitHub.
2. In GitHub, open `Settings` -> `Pages`.
3. Set `Source` to `Deploy from a branch`.
4. Set `Branch` to `main` and folder to `/root`.
5. Set the custom domain to `leaningstudios.com`.
6. After DNS is pointed correctly and the certificate becomes available, enable `Enforce HTTPS`.

## Local Preview

```bash
cd "/Users/qamac/Documents/Maggios Productions/LSwebsite"
python3 -m http.server 5500
```

Then open `http://localhost:5500`.

## Intake

- GitHub Pages serves static files only; Netlify Forms do not run there.
- Public intake forms post to the Leaning Studios Google Apps Script web app and should redirect to `https://leaningstudios.com/thank-you.html` after a successful submission.
- Backup contact email: `maggiosproductions@gmail.com`
- Optional file upload form: `https://forms.gle/xwPcAECceSriL2AS9`
- Preserved thank-you page: `/thank-you.html`
- Primary service lanes: Record, Finish, Build, Audio Support, plus Not sure yet routing
- Studio Support page: `studio-support.html`
- Public Studio Support packages: Remote Support starts at $50, Project Support starts at $100, In-Person Support: starts at $200, and Partner Support is quoted by scope.
- Package ladder is locked to Remote Support starts at $50, Project Support starts at $100, In-Person Support starts at $200, and Partner Support quoted by scope.
- Featured Work uses four lazy-loaded YouTube embeds plus outbound YouTube links; Community Feedback uses outbound Facebook link cards only.
- Studio photos use optimized web copies in `assets/images/studio/`; original photo sources are preserved under `assets/source/studio-photos/`.
- The homepage hero card uses a lightweight six-photo carousel; the Studio Support page keeps its smaller support photo accents.

## Release Notes

### 0.1.0.14 - Privacy + Studio Support Integration

- Added `privacy-policy.html`.
- Added Privacy Policy footer links and intake/file-handling notices.
- Updated Studio Support package ladder:
  - Remote Support - starts at $50
  - Project Support - starts at $100
  - In-Person Support - starts at $200
  - Partner Support - quoted by scope
- Updated Studio Support copy inside the existing visual layout.
- Centered the fourth Studio Support package card using a targeted CSS rule.
- Restored Apps Script frontend redirect flow using `data-apps-script-intake`, `fetch`, `no-cors`, and local redirect to `/thank-you.html`.
- Preserved GitHub Pages hosting and Google Apps Script intake.
- No checkout, booking calendar, portal, database, or backend migration was added.

## Pricing Visibility

Public site hides detailed music package pricing. Studio Support exposes only the approved public support pricing anchors and keeps the old five-package support system private.

This repository does not require backend services, payment processing, a booking calendar, or client-side dependencies.
