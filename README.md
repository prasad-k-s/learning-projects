# Learning Projects

A simple, minimal React + Vite site that lists the projects I built while learning HTML, CSS and JavaScript. It has a light and dark theme, and the project list comes from a JSON file.

**🔗 Live site:** [prasad-projects.netlify.app](https://prasad-projects.netlify.app/)

## Run locally

```bash
npm install
npm run dev
```

Build for production with `npm run build`. The output goes to `dist/`.

## Add or update a project

All project data lives in **`src/data/projects.json`**. To add a project, append an object like this:

```json
{
  "id": "my-project",
  "name": "My Project",
  "description": "One or two sentences about what it does.",
  "image": "/projects/my-project.jpg",
  "skills": [
    { "name": "HTML", "icon": "/skills/html.svg" },
    { "name": "CSS", "icon": "/skills/css.svg" },
    { "name": "JavaScript", "icon": "/skills/javascript.svg" }
  ],
  "liveUrl": "https://my-project.netlify.app/",
  "githubUrl": "https://github.com/prasad-k-s/My-Project"
}
```

- **Project images** go in `public/projects/`. Use a 16:10 screenshot (for example 1280×800).
- **Skill icons** go in `public/skills/`. Available now: `html`, `css`, `javascript`, `sass`, `npm`, `leaflet`, `parcel`. For a new skill, drop an SVG into that folder (for example from [devicon.dev](https://devicon.dev)) and reference it by path.
- `id` must be unique. Cards appear in the same order as the JSON.

## Deploy to Netlify

- Build command: `npm run build`
- Publish directory: `dist`
