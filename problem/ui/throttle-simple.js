function throttle(fn, delay) {
  let handle = null
  let prevArgs = undefined
  
  return function() {
    prevArgs = arguments
    if (!handle) {
      fn(...prevArgs)
      prevArgs = null
      handle = setInterval(() => {
        if (!prevArgs) {
          handle = clearInterval(handle)
        } else {
          fn(...prevArgs)
          prevArgs = null
        }
      }, delay)
    }
  }
}

const fn = (x) => {
  console.log(x)
}

console.log('start ...')
const d = throttle(fn, 2000)
d(1)
d(1)
d(3)
d(1)
d(5)