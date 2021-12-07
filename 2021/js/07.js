const bundle = require('./bundle')
const nums = bundle.read('07', '\n', false)[0].toNumbers()

const part1 = (ns) => {
	const n = ns.length
	const arr = ns.sort((a, b) => a - b)
	const m = arr[n / 2]
	
	return ns.sum(v => Math.abs(v - m), 0)
}

const part2 = (ns) => {
	const cost = d => d * (d + 1) /2
	const arr = []
		.range(Math.min(...ns), Math.max(...ns))
		.map(m => ns.sum(v => cost(Math.abs(v - m)), 0))
		
	return Math.min(...arr)
}

bundle.run(part1, [...nums])
bundle.run(part2, [...nums])
	