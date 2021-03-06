require('./javascript')

const dirs = [[0, 1], [1, 0],  [0, -1], [-1, 0]]
const nextFacing = (facing, turnRight) => {
	let res = turnRight ? facing + 1 : facing - 1
	return res.mod(4)
}

const part = (outputFirst) => {
	let p = [0, 0], facing = 0, first = null
	const visited = {}
	lines.forEach(ins => {
		if (first) return
		const turnRight = ins[0] === 'R'
		const steps = parseInt(ins.slice(1))
		facing = nextFacing(facing, turnRight)
		const dir = dirs[facing]
		array(steps).forEach(_ => {
			p = p.map((v, i) => v + dir[i])
			if (outputFirst) {
				const key = p.join(',')
				if (visited[key]) { first = p }
				visited[key] = true
			}
		})
	})
	const res = first || p
	return res.sum(Math.abs)
}

const read = require('./read.js')
const run = require('./run.js') 
const array = require('./array.js')
const lines = read('01')[0].split(', ')
run(part, false)
run(part, true)
