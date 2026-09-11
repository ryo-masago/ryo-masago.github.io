export function initializeAnimations() {
  const elements = document.querySelectorAll(
    [
      '.section-heading',
      '.about__content',
      '.project-card',
      '.skills-group',
      '.education-card',
      '.social-link'
    ].join(',')
  )

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches

  if (prefersReducedMotion) {
    elements.forEach((element) => {
      element.classList.add('reveal', 'reveal--visible')
    })

    return
  }

  elements.forEach((element, index) => {
    element.classList.add('reveal')

    const delay = (index % 4) * 70
    element.style.setProperty('--reveal-delay', `${delay}ms`)
  })

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        entry.target.classList.add('reveal--visible')
        observerInstance.unobserve(entry.target)
      })
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    }
  )

  elements.forEach((element) => observer.observe(element))
}
