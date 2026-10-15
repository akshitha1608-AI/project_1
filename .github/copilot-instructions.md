# EAK International School

## Project shape

This is a frontend-only static website for a fictional K–12 school. The seven standalone HTML pages share the visual system in `css/style.css` and browser interactions in `js/script.js`. Keep the site deployable as static files; do not introduce a backend, database, authentication, external API, or server-side form handling.

Use relative page and asset links to preserve GitHub Pages subpath compatibility. Place page content in semantic HTML, shared styling in `css/style.css`, browser behavior in `js/script.js`, and image-source notes or local images in `assets/images/`.

## Content and behavior

- Treat all school details, addresses, contact information, admissions criteria, dates, statistics, achievements, events and testimonials as fictional examples. Keep sample or illustrative labels where appropriate.
- Admission and contact forms are demonstrations: validate in the browser, show a clear confirmation, and do not transmit or persist submitted information.
- Events and notices come from the local `notices` array in `js/script.js`; keep search, category matching, empty state, reset and load-more behavior client-side.
- Keep shared navigation and footer behavior consistent across all seven pages, and ensure visible controls lead somewhere or perform a real action.
- Images are remote Unsplash examples with a script/CSS fallback. Replace them with appropriately licensed local assets when offline operation is required. The stylesheets request DM Sans and Playfair Display from Google Fonts and retain system-font fallbacks.

## Responsive and accessible UI

- Use the established forest green (`#123D35`), ivory (`#F4E9D3`) and gold (`#D8A84E`) palette and the existing shared CSS components before adding new patterns.
- Verify layouts at 360, 390, 768, 1024 and 1440 px. Check mobile menu operation, horizontal overflow, forms, gallery cards and footer layout.
- Preserve semantic landmarks, logical heading levels, form labels, image alt text, visible keyboard focus, keyboard-operable controls and reduced-motion support.

## Run and validate

- Preview locally with `py -m http.server 8000`, then open `http://localhost:8000/`. There is no package manifest, build step, automated test runner or linter configured.
- For a focused manual check, open the relevant HTML page and verify its links and interactions; use browser developer tools at the responsive widths above.
- See `README.md` for the full manual checklist and GitHub Pages/Netlify deployment steps.
