const read = require('./read.js')
const lines = read('17')

const _k = pos => pos.map(p => `${p}`).join(',')

const initBoard= d => {
	const mat = {}
	const ln = lines.length
	for (let i = 0; i < ln; i++) {
		for (let j = 0; j < ln; j++) {
			if (lines[i][j] == '#') {
				const p = new Array(d).fill(0)
				p[0] = i; p[1] = j
				mat[_k(p)] = true
			}
		}
	}
	const sizes = new Array(d).fill([0, 0])
	sizes[0] = [0, ln-1]
	sizes[1] = [0, ln-1]
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

const part = board => {
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
	
	return Object.keys(nmat).length
}

const run = require('./run.js')
run(part, initBoard(3))
run(part, initBoard(4))


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