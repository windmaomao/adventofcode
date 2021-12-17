function debounce(fn, delay) {
	let handle = null

	return function () {
		if (!handle) {
			fn(...arguments)
		}
		if (handle) {
			clearTimeout(handle)
		}
		handle = setTimeout(() => {
			handle = null
		}, delay)
	}
}

const fn = (x) => {
	console.log(x)
}

console.log('start ...')
const d = debounce(fn, 2000)
d(1)
d(2)