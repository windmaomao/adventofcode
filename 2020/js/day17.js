const read = require('./read.js')
const lines = read('17')

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
	const n = sizes.length
	const nbSizes = new Array(n).fill([0, 0])
	
	let j = 0
	let pmat, nmat = mat
	let psizes, nsizes = sizes
	while (j < 6) {
		pmat = nmat; psizes = nsizes
		nmat = {}
		nsizes = new Array(n).fill([Infinity, -Infinity])
		
		visitBoard(psizes, p => {
			let actives = 0
			visitBoard(nbSizes, rel => {
				if (!rel.every(v => v == 0)) {
					const np = p.map((v, i) => v + rel[i])
					if (pmat[_k(np)]) actives++
				}
			})
			const key = _k(p)
			const state = (actives == 3) ? true : (
				((actives == 2) && pmat[key]) ? true : false
			)
			if (state) {
				nmat[key] = true
				nsizes = nsizes.map(
					(v, i) => [Math.min(v[0], p[i]), Math.max(v[1], p[i])]
				)			
			}
		})
		j++
	}
	
//	return { mat: nmat, sizes: nsizes }
	return Object.keys(nmat).length
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
//13532 .#.#.
//11322 ..##.
//12321 ..#..