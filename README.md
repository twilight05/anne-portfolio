# Anne Usoroh — Portfolio

Personal portfolio built with **React 19**, **Vite** and **Tailwind CSS**.

## Getting started

```bash
npm install
npm run dev      # start the dev server at http://localhost:5173
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Editing content

All text, contact details, skills, projects and social links live in
[`src/data/content.js`](src/data/content.js). Add `liveUrl` / `codeUrl` to a
project, or an `href` to a social link, and the matching button/icon appears
automatically.

## Structure

```
src/
  assets/        images (profile, about, project screenshots)
  components/    Navbar, Hero, About, Skills, Projects, ProjectModal, Contact, Footer, Reveal
  data/          content.js – site copy
  hooks/         useTheme (dark mode), useScrollSpy (active nav link)
```
