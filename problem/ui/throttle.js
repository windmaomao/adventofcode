function throttle(fn, delay) {
	let handle = null
	let prevArgs = undefined
		
	const res = function () {
		const fire = () => {
			fn.call(this, ...prevArgs)
			prevArgs = null
			handle = setInterval(() => {
				if (!prevArgs) {
					handle = clearInterval(handle)
				} else {
					fn.call(this, ...prevArgs)
					prevArgs = null
				}
			}, delay)
		}
		
		prevArgs = arguments
		if (!handle) fire()
	}
	
	res.cancel = function() {
		prevArgs = null
	}
	
	return res
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
