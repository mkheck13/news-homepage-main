const mobileMenu = document.querySelector('#mobileMenu')

document.querySelector('#openMobileMenu').addEventListener('click', () => {
  mobileMenu.classList.replace('menuInactive', 'menuActive')
  document.body.classList.add('overflow-hidden')
})

document.querySelector('#closeMobileMenu').addEventListener('click', () => {
  mobileMenu.classList.replace('menuActive', 'menuInactive')
  document.body.classList.remove('overflow-hidden')

})