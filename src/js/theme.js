const STORAGE_KEY = 'portfolio-theme'

function getPreferredTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEY)

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme

  const toggle = document.querySelector('.theme-toggle')
  const icon = document.querySelector('.theme-toggle__icon')

  if (!toggle || !icon) return

  const isDark = theme === 'dark'

  icon.textContent = isDark ? '☀' : '☾'

  toggle.setAttribute(
    'aria-label',
    isDark ? 'Switch to light mode' : 'Switch to dark mode'
  )
}

export function initializeTheme() {
  let currentTheme = getPreferredTheme()

  applyTheme(currentTheme)

  const toggle = document.querySelector('.theme-toggle')

  if (!toggle) return

  toggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark'

    localStorage.setItem(STORAGE_KEY, currentTheme)

    applyTheme(currentTheme)
  })
}
