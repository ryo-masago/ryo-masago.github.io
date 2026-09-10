import './styles/main.scss'
import { renderPortfolio } from './js/render.js'

renderPortfolio()

const currentYear = document.querySelector('#current-year')

if (currentYear) {
  currentYear.textContent = new Date().getFullYear()
}
