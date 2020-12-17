const lines = [
	".#.",
	"..#",
	"###"
]

const _k = pos => pos.map(p => `${p}`).join(',')

const initBoard= d => {
	const n = lines.length
	const mat = {}
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (lines[i][j] == '#') {
				mat[_k([i, j, 0])] = true
			}
		}
	}
	const sizes = new Array(d).fill([0, 0])
	sizes[0] = [0, n-1]
	sizes[1] = [0, n-1]
	return { mat, sizes }
}

// Visit board based on sizes with extra border
const visitBoard = (sizes, fn, b = 1) => {
	const n = sizes.length
	const low = i => sizes[i][0] - b
	const high = i => sizes[i][1] + b
	
	const c = sizes.map((_, i) => low(i))
	let hasDigit = false
	while (!hasDigit) {
		fn(c.slice())
		hasDigit = true
		let i = 0
		while (hasDigit && i < n) {
			c[i]++
			if (c[i] > high(i)) { c[i] = low(i); i++ } 
			else { hasDigit = false }
		}
	}
}

const part1 = board => {
	let { mat,  sizes } = board
	
	visitBoard(sizes, p => {
		console.log(p)
	})
	
	return ''
}

//console.log(initBoard(3))
//visitBoard([[0,1],[0,1],[0,1]], console.log, 0)
//visitCube(2, 3, console.log)

const config = initBoard(3)
const run = require('./run.js')
run(part1, config)


// .#.
// ..#
// ###
//
//
//01110 .....
//01121 .....
//13432 .#.#.
//11322 ..##.
//12321 ..#..