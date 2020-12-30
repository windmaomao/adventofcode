require('./utils/index.js')
const lines = read('2016', '02')

const dirs = { U: [-1, 0], D: [1, 0], L: [0, -1], R: [0, 1] }

const part = (pads, start) => {
	let p = start
	const _c = is => pads[is[0]][is[1]]
	
	return lines.map(line => {
		line.split('').forEach(c => {
			np = p.vplus(dirs[c])
			p = _c(np) == ' ' ? p : np
		})
		return _c(p)
	}).join('')
}

run(part, [
	'     ',
	' 123 ', 
	' 456 ', 
	' 789 ',
	'     '
], [2, 2])

run(part, [
	'       ',
	'   1   ',
	'  234  ',
	' 56789 ',
	'  ABC  ',
	'   D   ',
	'       '
], [3, 1])