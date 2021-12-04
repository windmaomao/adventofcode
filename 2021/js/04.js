const bundle = require('./bundle')
const inputs = bundle.read('04', '\n', false)

const nums = inputs.shift().toNumbers()
const boards = []
const patterns = []
const n = 5

const parseBoards = () => {
	let i = 0
	while (i < inputs.length) {
		let arr = []
		for (let j = 1; j <= n; j++) {
			arr = arr.concat(inputs[i+j].toNumbers())
		}
		boards.push(arr)
		i += n + 1
	}
	return boards
}

const preparePatterns = () => {
	for (let i = 0; i < n; i++) {
		patterns.push([].new(n)
			.map((_, k) => i * n + k)
		)
	}
	for (let j = 0; j < n; j++) {
		patterns.push([].new(n)
			.map((_, k) => k * n + j)
		)
	}
}

const winBoard = (b, num) => {
	const fi = b.findIndex(v => v == num)
	if (fi >= 0) b[fi] = -1
	
	for (let pi = 0; pi < patterns.length; pi++) {
		if (patterns[pi].sum(vi => b[vi]) == -5) {
			return pi
		}
	}
	
	return -1
}

const scoreBoard = (b, num) => {
	return b.sum(v => v < 0 ? 0 : v) * num
}

parseBoards()
preparePatterns()

const part1 = (bs) => {
	let k = 0
	let done = false	
	let score = -1
	while (k < nums.length && !done) {
		const num = nums[k]
		bs.forEach(b => {
			const match = winBoard(b, num)
			if (match >= 0) {
				score = scoreBoard(b, num)
				done = true
			}
		})

		k++
	}
	return score
}

const part2 = (bs) => {
	let k = 0
	let done = false	
	let score = -1
	let won = []
	while (k < nums.length && !done) {
		const num = nums[k]
		bs.forEach((b, bi) => {
			const match = winBoard(b, num)
			if (match >= 0) {
				if (won.indexOf(bi) < 0) won.push(bi)
				if (won.length == boards.length && score < 0) {
					score = scoreBoard(b, num)
					done = true
				}
			}
		})
		
		k++
	}
	return score	
}

bundle.run(part1, boards.clone())
bundle.run(part2, boards.clone())