import * as flsFunctions from './modules/functions.js'

const sidebar = document.querySelector('.sidebar');

  
const mobileSearch = () => {
  const mobileSearchGroup = document.querySelector('.mobile-search')
  let isOpen = false

  document.addEventListener('click', (e) => {
    if (e.target.closest('.mobile-search')) {
      mobileSearchGroup.classList.add('is-open')
      isOpen = true
    } else if (!e.target.closest('.input-group') && isOpen) {
      mobileSearchGroup.classList.remove('is-open')
      isOpen = false
    }
  })
}


if (document.documentElement.scrollWidth <= 640) {
    sidebar.remove()
}

console.log('All is work')