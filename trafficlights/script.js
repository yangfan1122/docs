let red
let yellow
let green
let time
let offColor = 'gray'
let redDuration = 3000
let yellowDuration = 1000
let greenDuration = 5000
let timer
let counter
let rBtn
let yBTn
let gBTn

window.addEventListener('load', init)

function init () {
  time = document.getElementById('time')
  time.addEventListener('click', () => {
    window.clearInterval(counter)
    window.clearTimeout(timer)
  })

  red = document.getElementsByClassName('rl')[0]
  yellow = document.getElementsByClassName('yl')[0]
  green = document.getElementsByClassName('gl')[0]

  rBtn = document.getElementById('redbtn')
  rBtn.addEventListener('click', clickHandler)
  yBTn = document.getElementById('yellowbtn')
  yBTn.addEventListener('click', clickHandler)
  gBTn = document.getElementById('greenbtn')
  gBTn.addEventListener('click', clickHandler)


  const s = 'green'
  lightsStatus(s)
  access(s, greenDuration)
}

function access (status, duration) {
  lightsStatus(status)
  counterHandler(duration)
  timer = window.setTimeout(() => {
    if (status === 'red') {
      access('green', greenDuration)
    } else if (status === 'yellow') {
      access('red', redDuration)
    } else if (status === 'green') {
      access('yellow', yellowDuration)
    }
  }, duration + 1000)
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

function counterHandler (duration) {
  window.clearInterval(counter)
  let d = duration / 1000
  time.innerHTML = '0' + d
  counter = window.setInterval(() => {
    time.innerHTML = '0' + --d
  }, 1000)
}