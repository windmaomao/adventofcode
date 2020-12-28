require('./utils/index')
const nums = read('2018', '01', '\n', true)

const part1 = ops => ops.sum()
const part2 = ops => {
	let c = 0, m = { '0': true }, res = null

	while (res == null) {
		ops.forEach((v, i) => {
			c += v
			if (res == null && m[c] != undefined) res = c
			m[c] = true
		})
	}

	return res
}

run(part1, nums)
run(part2, nums)