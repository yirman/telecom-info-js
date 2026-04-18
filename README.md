# telecom-info-js

Minimal Next.js project prepared for static HTML export.

Quick start

1. Install dependencies:

```
npm install
```

2. Build and export to static HTML (`out/`):

```
npm run export
```

3. Open the exported HTML: open `out/index.html` in your browser, or serve `out/` with a static server.

Notes

- The project uses `next`'s static export mode (`output: 'export'` in `next.config.js`).
- Edit `pages/index.js` to customize content before exporting.
