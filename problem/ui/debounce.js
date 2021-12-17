function debounce(fn, delay) {
  let handle = null
  
  return function () {
    if (handle) {
      clearTimeout(handle)
    }
    
    handle = setTimeout(() => {
      fn(...arguments)
    }, delay)
  }
}

const fn = (x) => {
  console.log(x)
}

console.log('start ...')
const d = debounce(fn, 2000)
d(1)
d(1)
d(3)
d(1)
d(5)
