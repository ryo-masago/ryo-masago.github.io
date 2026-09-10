# Portfolio Data

All editable portfolio content lives in this folder.

The website reads these JSON files automatically, so most personal information can be updated without changing any JavaScript or HTML.

> Note: JSON does not support comments, so field explanations are kept in this README instead.

---

## `profile.json`

Contains the main personal information used in the Hero and About sections.

### Fields

- `name` — Your full name.
- `role` — Your professional title.
- `hero.eyebrow` — Small introductory text above the main headline.
- `hero.headline` — Main Hero headline.
- `hero.description` — Short professional introduction.
- `hero.primaryCta.label` — Text shown on the primary Hero button.
- `hero.primaryCta.href` — Destination for the primary Hero button.
- `hero.secondaryCta.label` — Text shown on the secondary Hero button.
- `hero.secondaryCta.href` — Destination for the secondary Hero button.
- `about.heading` — Heading for the About section.
- `about.paragraphs` — Array of paragraphs displayed in the About section.

---

## `projects.json`

Contains all projects displayed in the Projects section.

Each project is an object with the following fields:

- `title` — Project name.
- `description` — Short description of the project.
- `tech` — Array of technologies used.
- `featured` — `true` or `false`. Featured projects are displayed more prominently and sorted first.
- `github` — URL of the GitHub repository.
- `liveDemo` — URL of the deployed application. Use `null` when there is no live demo.
- `image` — Path to the project screenshot or thumbnail.
- `imageAlt` — Accessible description of the project image.

### Example

```json
{
  "title": "Example Project",
  "description": "A short description of the project.",
  "tech": [
    "JavaScript",
    "SCSS"
  ],
  "featured": false,
  "github": "https://github.com/username/example",
  "liveDemo": null,
  "image": "/images/example-project.png",
  "imageAlt": "Screenshot of Example Project"
}
