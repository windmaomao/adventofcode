require('./utils/index.js')
const lines = read('2016', '01')[0].split(', ')

const dirs = [[0, 1], [1, 0],  [0, -1], [-1, 0]]
const nextFacing = (facing, turnRight) => {
	let res = turnRight ? facing + 1 : facing - 1
	return res.mod(4)
}

const part = (outputFirst) => {
	const runs = lines.run((acc, ins) => {
		let { p, facing, visited, first } = acc
		const turnRight = ins[0] === 'R'
		const steps = parseInt(ins.slice(1))
		facing = nextFacing(facing, turnRight)
		const dir = dirs[facing]
		Array.new(steps).forEach(_ => {
			p = p.map((v, i) => v + dir[i])
			if (outputFirst) {
				const key = p.join(',')
				if (visited[key]) { first = p }
				visited[key] = true
			}
		})
		return { p, facing, visited, first }
	}, { 
		p: [0, 0], facing: 0, visited: {}, first: null
	}, outputFirst ? acc => acc.first : undefined)
	
	const res = runs[0].first || runs[0].p
	return res.sum(Math.abs)
}

run(part)
run(part, true)