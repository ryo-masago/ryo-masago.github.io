import './styles/main.scss'

const currentYear = document.querySelector('#current-year')

if (currentYear) {
  currentYear.textContent = new Date().getFullYear()
}
