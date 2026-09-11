export function initializeNavigation() {
  const menuToggle = document.querySelector('.navbar__menu-toggle')
  const navLinksContainer = document.querySelector('.navbar__links')
  const navLinks = document.querySelectorAll('.navbar__link')

  if (menuToggle && navLinksContainer) {
    menuToggle.addEventListener('click', () => {
      const isOpen =
        menuToggle.getAttribute('aria-expanded') === 'true'

      menuToggle.setAttribute('aria-expanded', String(!isOpen))

      navLinksContainer.classList.toggle(
        'navbar__links--open',
        !isOpen
      )
    })
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle?.setAttribute('aria-expanded', 'false')
      navLinksContainer?.classList.remove('navbar__links--open')
    })
  })

  const sections = document.querySelectorAll(
    'main section[id]:not(#home)'
  )

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        const activeSection = entry.target.id

        navLinks.forEach((link) => {
          const isActive =
            link.getAttribute('href') === `#${activeSection}`

          link.classList.toggle(
            'navbar__link--active',
            isActive
          )
        })
      })
    },
    {
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    }
  )

  sections.forEach((section) => observer.observe(section))
}
