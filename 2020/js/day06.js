const read = require('./read.js')
const fn = read('06')

function groups() {
	let i = 0
	let group = []
	let res = []
	while (i < fn.length) {
		const str = fn[i]
		if (str == '') {
			res.push(group)
			group = []
		} else {
			group.push(str)
		}
		i++
	}
	
	return res
}

const part1 = groups => {
	return groups.map(group => {
		const m = {}
		group.forEach(g => {
			for (let i = 0; i < g.length; i++) {
				m[g[i]] = true
			}
		})
		return m
	}).reduce((acc, m) => {
		return acc + Object.keys(m).length
	}, 0)
}

const part2 = groups => {
	return groups.map(group => {
		const m = {}
		group.forEach(g => {
			for (let i = 0; i < g.length; i++) {
				if (!m[g[i]]) m[g[i]] = 0
				m[g[i]]++
			}
		})
		const gn = group.length
		return Object.values(m).filter(v => v == gn).length
	}).reduce((acc, m) => acc + m, 0)
}

console.log(part1(groups()))
console.log(part2(groups()))

