const bundle = require('./bundle')
const nums = bundle.read('05', '\n', false)
	.map(v => v.toNumbers())

const range = (a, b) => a < b
  ? [].range(a, b+1) 
	: [].range(a, b-1, -1)

const part1 = (ns, withDiagonal) => {
	const m = {}
	const paint = k => {
		m[k] = m[k] || 0
		m[k]++
	}
	
	ns.forEach(l => {
		if (l[0] == l[2]) {
			range(l[1], l[3]).forEach(y => {
				paint(`${l[0]},${y}`)
			})
		} else if (l[1] == l[3]) {
			range(l[0], l[2]).forEach(x => {
				paint(`${x},${l[1]}`)
			})
		} else if (withDiagonal) {
			const xr = range(l[0], l[2])
			const yr = range(l[1], l[3])
			xr.forEach((_, i) => {
				paint(`${xr[i]},${yr[i]}`)
			})
		}
	})

	return Object.values(m)
		.filter(v => v > 1)
		.length
}

bundle.run(part1, nums)
bundle.run(part1, nums, true)
