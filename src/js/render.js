import profile from '../data/profile.json'
import projects from '../data/projects.json'
import skills from '../data/skills.json'
import education from '../data/education.json'
import socials from '../data/socials.json'

const icons = {
  github: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49
        0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49
        -.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85
        .09-.66.35-1.11.64-1.37-2.22-.26-4.56-1.14-4.56-5.06
        0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71
        0 0 .84-.28 2.75 1.05A9.26 9.26 0 0 1 12 6.84
        c.85 0 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05
        .55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75
        0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9
        0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49
        A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z"
      />
    </svg>
  `,

  linkedin: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.5 8.25H3V21h3.5V8.25ZM4.75 3
        A2.03 2.03 0 1 0 4.75 7.06
        A2.03 2.03 0 0 0 4.75 3ZM21 13.69
        c0-3.84-2.05-5.63-4.79-5.63-2.21 0-3.2 1.22-3.75 2.07V8.25H9V21h3.46v-6.32
        c0-1.67.32-3.29 2.39-3.29 2.04 0 2.07 1.91 2.07 3.4V21H21v-7.31Z"
      />
    </svg>
  `,

  email: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        d="M3 5.5h18v13H3z M3 6l9 7 9-7"
      />
    </svg>
  `,

  download: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 3v12m0 0 5-5m-5 5-5-5M4 20h16"
      />
    </svg>
  `
}

function renderHero() {
  const container = document.querySelector('#hero-content')

  if (!container) return

  container.innerHTML = `
    <p class="hero__eyebrow">${profile.hero.eyebrow}</p>

    <h1 class="hero__title">
      ${profile.name}
    </h1>

    <p class="hero__role">${profile.role}</p>

    <h2 class="hero__headline">
      ${profile.hero.headline}
    </h2>

    <p class="hero__description">
      ${profile.hero.description}
    </p>

    <div class="hero__actions">
      <a
        class="button button--primary"
        href="${profile.hero.primaryCta.href}"
      >
        ${profile.hero.primaryCta.label}
      </a>

      <a
        class="button button--secondary"
        href="${profile.hero.secondaryCta.href}"
      >
        ${profile.hero.secondaryCta.label}
      </a>
    </div>
  `
}

function renderAbout() {
  const container = document.querySelector('#about-content')

  if (!container) return

  const paragraphs = profile.about.paragraphs
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join('')

  container.innerHTML = `
    <div class="section-heading">
      <p class="section-heading__eyebrow">A little about me</p>
      <h2>${profile.about.heading}</h2>
    </div>

    <div class="about__content">
      ${paragraphs}
    </div>
  `
}

function renderProjects() {
  const container = document.querySelector('#projects-grid')

  if (!container) return

  const sortedProjects = [...projects].sort(
    (a, b) => Number(b.featured) - Number(a.featured)
  )

  container.innerHTML = sortedProjects
    .map((project) => {
      const techTags = project.tech
        .map((technology) => `<span class="skill-tag">${technology}</span>`)
        .join('')

      const liveDemoLink = project.liveDemo
        ? `
          <a
            class="project-card__link"
            href="${project.liveDemo}"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        `
        : ''

      return `
        <article
          class="project-card${project.featured ? ' project-card--featured' : ''}"
        >
          <div class="project-card__image-wrapper">
            <img
              class="project-card__image"
              src="${project.image}"
              alt="${project.imageAlt}"
              loading="lazy"
            />
          </div>

          <div class="project-card__content">
            ${
              project.featured
                ? '<p class="project-card__featured">Featured Project</p>'
                : ''
            }

            <h3>${project.title}</h3>

            <p class="project-card__description">
              ${project.description}
            </p>

            <div
              class="project-card__tech"
              aria-label="Technologies used"
            >
              ${techTags}
            </div>

            <div class="project-card__links">
              <a
                class="project-card__link"
                href="${project.github}"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              ${liveDemoLink}
            </div>
          </div>
        </article>
      `
    })
    .join('')
}

function renderSkills() {
  const container = document.querySelector('#skills-grid')

  if (!container) return

  container.innerHTML = skills
    .map((group) => {
      const skillTags = group.skills
        .map((skill) => `<span class="skill-tag">${skill}</span>`)
        .join('')

      return `
        <article class="skills-group">
          <h3>${group.category}</h3>

          <div class="skills-group__list">
            ${skillTags}
          </div>
        </article>
      `
    })
    .join('')
}

function renderEducation() {
  const container = document.querySelector('#education-list')

  if (!container) return

  container.innerHTML = education
    .map(
      (entry) => `
        <article class="education-card">
          <div class="education-card__header">
            <div>
              <h3>${entry.institution}</h3>
              <p class="education-card__program">
                ${entry.program}
              </p>
            </div>

            <span class="education-card__status">
              ${entry.status}
            </span>
          </div>

          <p class="education-card__description">
            ${entry.description}
          </p>
        </article>
      `
    )
    .join('')
}

function renderSocials() {
  const container = document.querySelector('#social-links')

  if (!container) return

  container.innerHTML = socials
    .map((social) => {
      const externalAttributes = social.external
        ? 'target="_blank" rel="noopener noreferrer"'
        : ''

      const downloadAttribute =
        social.icon === 'download' ? 'download' : ''

      return `
        <a
          class="social-link"
          href="${social.url}"
          ${externalAttributes}
          ${downloadAttribute}
          aria-label="${social.name}"
        >
          <span class="social-link__icon">
            ${icons[social.icon] ?? ''}
          </span>

          <span>${social.name}</span>
        </a>
      `
    })
    .join('')
}

export function renderPortfolio() {
  renderHero()
  renderAbout()
  renderProjects()
  renderSkills()
  renderEducation()
  renderSocials()
}
