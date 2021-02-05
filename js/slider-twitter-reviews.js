const slider = document.getElementById('slider')
const buttonLeft = document.getElementById('arrowLeft')
const buttonRight = document.getElementById('arrowRight')

slider.style.left = '0px'
let number = 1

// /////////////////////////////////////////////////////
function moveLeft() {
  number--
  if (number >= -1) {
    slider.style.left = parseInt(slider.style.left) - 100 + '%'
  } else {
    number = -1
  }
}

buttonRight.addEventListener('click', moveLeft)

// /////////////////////////////////////////////////////

function moveRight() {
  if (number >= 1) {
    number = 1
    slider.style.left = '0px'
  } else {
    number++
    slider.style.left = parseInt(slider.style.left) + 100 + '%'
  }
}

buttonLeft.addEventListener('click', moveRight)
