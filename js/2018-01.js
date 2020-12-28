require('./utils/index')
const nums = read('2018', '01', '\n', true)

const part1 = ops => ops.sum()
const part2 = ops => Array.new(300000).run(
	(acc, i) => {
		let { c, m, res } = acc
		c += ops[i % ops.length]
		if (m[c] != undefined) res = c
		m[c] = true
		return { c, m, res }
	}, { 
		c: 0, m: { '0': true }, res: null 
	}, acc => acc.res
)[0].res

run(part1, nums)
run(part2, nums)