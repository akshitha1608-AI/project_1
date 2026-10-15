# EAK International School — Modern School Website Redesign

A polished, responsive, frontend-only website for a fictional K–12 school. The site is a static HTML, CSS and vanilla JavaScript project: it has no backend, database, authentication, API integrations or live form submissions. School details, sample dates, notices, statistics and testimonials are fictional.

An optional local `.env` file contains example site metadata only. The static pages do not read it; update deployment-specific values as needed. `.env` is ignored by Git.

## Pages and files

- `index.html` — Home
- `about.html` — About the school
- `academics.html` — Learning stages and teaching approach
- `admissions.html` — Sample admissions journey, FAQs and demo enquiry form
- `facilities.html` — Illustrative facilities gallery
- `events.html` — Local sample notices with search, category filters and load more
- `contact.html` — Fictional contact details, map illustration and demo contact form
- `css/style.css` — Shared responsive design system and page styles
- `js/script.js` — Mobile menu, demo forms, image fallbacks, FAQ behavior and noticeboard
- `assets/images/README.md` — Image source notes

## Run locally

No package installation or build step is required. From this folder, start a static file server:

```powershell
py -m http.server 8000
```

Then open [http://localhost:8000/](http://localhost:8000/) in a browser. Open any page directly, for example [http://localhost:8000/admissions.html](http://localhost:8000/admissions.html). Stop the server with `Ctrl+C`.

Alternatively, use the VS Code Live Server extension and open `index.html` with Live Server.

## Test the site

There is no automated test runner or lint configuration in this static project. Manually check the following in a browser:

1. Visit each of the seven HTML pages and use the shared navigation, announcement links, footer links and page CTAs.
2. At narrow widths, open and close the menu with its button, Escape, and a navigation link.
3. On Admissions, submit the enquiry form empty, with invalid data, then with valid sample data. Confirm the browser validates required fields and a demo message appears without sending or storing entries.
4. On Contact, try the same cases with the contact form.
5. On Events & Notices, search for a known title (for example, “science”), choose categories, load more results, reset filters, and search for a phrase with no matches.
6. On Admissions, open multiple FAQs and verify only one stays open.
7. Resize the browser to 360, 390, 768, 1024 and 1440 px. Check for horizontal overflow, legible text and usable controls.
8. To exercise image fallbacks, use browser developer tools to block `images.unsplash.com` and confirm the image areas show the fallback treatment.

The site loads its typefaces and illustrative photography from Google Fonts and Unsplash. An internet connection is needed for those remote assets; local styles, content and interactions remain available offline.

## Publish to GitHub

Create an empty GitHub repository, then run these commands from this project folder, replacing the URL with your repository URL:

```powershell
git init
git add .
git commit -m "Build EAK International School website"
git branch -M main
git remote add origin https://github.com/your-account/your-repository.git
git push -u origin main
```

If this folder is already a Git repository, add a remote only if one is not already configured.

## Deploy with GitHub Pages

1. Push the site to GitHub.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, then select `main` and the repository root (`/`).
4. Save and wait for the Pages URL to appear. The site uses relative links so it works from a repository subpath.

## Deploy with Netlify

Import the GitHub repository in Netlify and set the publish directory to the repository root. No build command is needed. Alternatively, drag the project folder into Netlify Drop for a quick static preview.

## Fictional content and privacy

All school identity, contact details, policies, admissions information, event dates, testimonials, imagery descriptions and sample achievements on this site are illustrative. The map is a placeholder, not a real location. The forms perform browser validation and show demo confirmations; they prevent submission and do not transmit or persist form data.
