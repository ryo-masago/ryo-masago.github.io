import './styles/main.scss'

import { renderPortfolio } from './js/render.js'
import { initializeTheme } from './js/theme.js'
import { initializeNavigation } from './js/navigation.js'

renderPortfolio()
initializeTheme()
initializeNavigation()

const currentYear = document.querySelector('#current-year')

if (currentYear) {
  currentYear.textContent = new Date().getFullYear()
}
