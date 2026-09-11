import './styles/main.scss'

import { renderPortfolio } from './js/render.js'
import { initializeTheme } from './js/theme.js'
import { initializeNavigation } from './js/navigation.js'
import { initializeAnimations } from './js/animations.js'

renderPortfolio()
initializeTheme()
initializeNavigation()
initializeAnimations()

const currentYear = document.querySelector('#current-year')

if (currentYear) {
  currentYear.textContent = new Date().getFullYear()
}
