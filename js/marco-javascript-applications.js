// Global variables

// open close navbar small devices
let nav = document.querySelector('.nav')
let toggle = document.querySelector('.toggleMobileMenu')

// create black screen effect from navbar to page link - scroll type
let coverNav = document.getElementById('coverRemoveonNavigationClick')
let arrayofNavElements = document.querySelectorAll('.nav__ul__li__a')

// arrow go to top of the page
let arrowTopPage = document.getElementById('arrow_goUp_website')

// Functions ////////////////////////////////////////////////////////////////////

// open close mobile navigation
function menuOpenClose() {
  nav.classList.toggle('displayMobileNavigation')
}

// create black screen effect from link to page div
function coverEffect() {
  coverNav.classList.add('addeffect')

  setTimeout(function () {
    coverNav.classList.remove('addeffect')
  }, 1000)
}

// Event Listeners /////////////////////////////////////////////////////////////
arrayofNavElements.forEach(function (bo) {
  bo.addEventListener('click', coverEffect)
})

toggle.addEventListener('click', menuOpenClose)

arrowTopPage.addEventListener('click', coverEffect)

// show arrow to scroll up when navigation bar is not visible
function showArrowGoTopPage() {
  let windowTop = window.pageYOffset

  if (windowTop > 600) {
    arrowTopPage.style.display = 'block'
  } else {
    arrowTopPage.style.display = 'none'
  }
}

window.addEventListener('scroll', showArrowGoTopPage)
