require('./javascript')

const dirs = [[0, 1], [1, 0],  [0, -1], [-1, 0]]
const nextFacing = (facing, turnRight) => {
	let res = turnRight ? facing + 1 : facing - 1
	return res.mod(4)
}

const part1 = () => {
	const lines = ['R2', 'L3']
	let p = [0, 0], facing = 0
	lines.forEach(ins => {
		const turnRight = ins[0] === 'R'
		const steps = parseInt(ins.slice(1))
		facing = nextFacing(facing, turnRight)
		const dir = dirs[facing]
		array(steps).forEach(_ => {
			p = p.map((v, i) => v + dir[i])
		})
	})
	return p.sum(Math.abs)
}

const read = require('./read.js')
const run = require('./run.js') 
const array = require('./array.js')
const lines = read('01')

run(part1)
