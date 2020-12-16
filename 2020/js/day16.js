const read = require('./read.js')
const lines = read('16')

const getNumbers = line => {
	if (!line) return []
	const m = line.match(/\d+/g)
	if (!m) return []
	return [...m].map(v => parseInt(v))
}

let mode = 0
let nums = [], tickets = []
for (let i = 0; i < lines.length; i++) {
	const l = lines[i]
	if (!l) { mode++; continue }
	const parts = getNumbers(l)
	if (parts.length < 1) continue
	if (mode == 0) { nums.push(parts) } 
	else if (mode == 1) { } 
	else { tickets.push(parts) }
}

const part1 = () => {
	const m = new Array(60).fill(false)
	
	nums.reduce(
		(acc, a) => {
			acc.push([a[0], a[1]])
			acc.push([a[2], a[3]])
			return acc
	  }, []
	).forEach(r => {
		for (let i = r[0]; i <= r[1]; i++) {
			m[i] = true
		}
	})
	
	return tickets.reduce((acc, a) => acc.concat(a), [])
		.filter(v => !m[v])
		.reduce((acc, v) => acc + v, 0)
}

const run = require('./run.js')
run(part1)