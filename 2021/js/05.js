const bundle = require('./bundle')
const nums = bundle.read('05', '\n', false)
	.map(v => v.toNumbers())

const range = (a, b) => {
	const res = []
	if (a < b) {
		for (let i = a; i <= b; i++) {
			res.push(i)
		}
	} else {
		for (let i = a; i >= b; i--) {
			res.push(i)
		}
	}
	return res
}


const part1 = (ns) => {
	const m = {}
	
	ns.forEach(l => {
		if (l[0] == l[2]) {
			range(l[1], l[3]).forEach(y => {
				const k = `${l[0]},${y}`
				m[k] = m[k] || 0
				m[k]++
			})
		} else if (l[1] == l[3]) {
			range(l[0], l[2]).forEach(x => {
				const k = `${x},${l[1]}`
				m[k] = m[k] || 0
				m[k]++
			})
		}
	})

	return Object.values(m).filter(v => v > 1).length
}


const part2 = (ns) => {
	const m = {}
	
	ns.forEach(l => {
		if (l[0] == l[2]) {
			range(l[1], l[3]).forEach(y => {
				const k = `${l[0]},${y}`
				m[k] = m[k] || 0
				m[k]++
			})
		} else if (l[1] == l[3]) {
			range(l[0], l[2]).forEach(x => {
				const k = `${x},${l[1]}`
				m[k] = m[k] || 0
				m[k]++
			})
		} else {
			const xr = range(l[0], l[2])
			const yr = range(l[1], l[3])
			xr.forEach((_, i) => {
				const k = `${xr[i]},${yr[i]}`
				m[k] = m[k] || 0
				m[k]++
			})
		}
	})

	return Object.values(m).filter(v => v > 1).length
}

bundle.run(part1, nums)
bundle.run(part2, nums)
