const start = document.getElementById('start-button')
const stop = document.getElementById('stop-button')
const reset = document.getElementById('reset-button')
const timer = document.getElementById('timer')

let started = false
let count = 0
let prevTime = null
let intervalId = null

function format(c) {
	let tmp
	const mils = c % 1000
	tmp = (c - mils) / 1000
	const secs = tmp % 60
	tmp = (tmp - secs) / 60
	const mins = tmp
	
	return [
		`${mins}`.padStart(2, '0'),
		`${secs}`.padStart(2, '0'),
		`${mils}`.padStart(3, '0'),
	].join(':')
}

function render() {
  if (started) {
    start.setAttribute('disabled', true)
    stop.removeAttribute('disabled')
  } else {
    start.removeAttribute('disabled')
    stop.setAttribute('disabled', true)
  }
  if (!started && count) {
    reset.removeAttribute('disabled')
  } else {
    reset.setAttribute('disabled', true)
  }

  const now = Date.now()
  if (started) {
    count += now - prevTime
    prevTime = now
  }
  timer.textContent = format(count)
}

render()

start.addEventListener('click', e => {
  e.preventDefault()
  started = true
  prevTime = Date.now()
  intervalId = setInterval(render, 50)
  render()
})

stop.addEventListener('click', e => {
  e.preventDefault()
  started = false
  clearInterval(intervalId)
  render()
})

reset.addEventListener('click', e => {
  e.preventDefault()
  started = false
  count = 0
  render()
})