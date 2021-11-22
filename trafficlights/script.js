let red
let yellow
let green
let offColor = 'gray'
let redDuration = 3000
let yellowDuration = 1000
let greenDuration = 5000
let timer
let rBtn
let yBTn
let gBTn

window.addEventListener('load', init)

function init () {
  red = document.getElementsByClassName('rl')[0]
  yellow = document.getElementsByClassName('yl')[0]
  green = document.getElementsByClassName('gl')[0]

  rBtn = document.getElementById('redbtn')
  rBtn.addEventListener('click', clickHandler)
  yBtn = document.getElementById('yellowbtn')
  yBtn.addEventListener('click', clickHandler)
  gBtn = document.getElementById('greenbtn')
  gBtn.addEventListener('click', clickHandler)


  const s = 'green'
  lightsStatus(s)
  access(s, greenDuration)
}

function access (status, duration) {
  lightsStatus(status)
  timer = window.setTimeout(() => {
    if (status === 'red') {
      access('green', greenDuration)
    } else if (status === 'yellow') {
      access('red', redDuration)
    } else if (status === 'green') {
      access('yellow', yellowDuration)
    }
  }, duration)
}

function lightsStatus (status) {
  red.className = 'light'
  yellow.className = 'light'
  green.className = 'light'
  switch (status) {
    case 'green':
      green.className = 'light gl'
      break
    case 'yellow':
      yellow.className = 'light yl'
      break
    case 'red':
      red.className = 'light rl'
      break
    default:
      green.className = 'light gl'
  }
}


function clickHandler (event) {
  window.clearTimeout(timer)
  const id = event.target.id
  if (id === 'redbtn') {
    access('red', redDuration)
  } else if (id === 'yellowbtn') {
    access('yellow', yellowDuration)
  } else if (id === 'greenbtn') {
    access('green', greenDuration)
  }
}