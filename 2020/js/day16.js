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
	else if (mode == 1) { tickets.push(parts) } 
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

const part2 = () => {
	const cols = nums.length
	const deps = new Array(cols)
	
	const valid = (l, h, v) => (v >= l && v <= h)
	
	for (let i = 0; i < cols; i++) {
		deps[i] = new Array(cols).fill(true)
		
		for (let j = 0; j < tickets.length; j++) {
			const v = tickets[j][i]
			const checks = new Array(cols).fill(true)

			for (let k = 0; k < cols; k++) {
				const r = nums[k]
				if (valid(r[0], r[1], v) 
					|| valid(r[2], r[3], v)) continue
				checks[k] = false
			}
			
			if (!checks.every(v => !v)) {
				for (let k = 0; k < cols; k ++) {
					if (!checks[k]) deps[i][k] = false
				}
			}
		}
	}

	const depNums = deps.map(a => a
		.map((v, i) => v ? i : -1)
		.filter(v => v >= 0)
	)
	
	const res = new Array(cols).fill(-1)
	for (let i = 0; i < cols; i++) {
		let j = 0
		while (j < cols && depNums[j].length != 1) { j++ }
		res[j] = depNums[j][0]
		for (let k = 0; k < cols; k++) {
			depNums[k] = depNums[k].filter(v => v != res[j])
		}
	}
	
	let sum = 1
	for (let i = 0; i < cols; i++) {
		if (res[i] < 6) sum *= tickets[0][i]
	}
	return sum
}

const run = require('./run.js')
run(part1)
run(part2)