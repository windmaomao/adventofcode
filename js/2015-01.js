require('./utils/index')
const line = read('2015', '01')[0]

const floors = line.split('')
	.map(s => s == '(' ? 1 : -1)

const part1 = ops => ops.sum()
const part2 = ops => ops
	.scan((acc, v) => acc + v, 0)
	.indexOf(-1)

run(part1, floors)
run(part2, floors)