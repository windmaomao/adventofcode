require('./utils/index')
const lines = read('2018', '02a')

const part1 = strs => {
	let c = [0, 0]
	strs.forEach(str => {
		const stats = str.split('').reduce((acc, letter) => {
			acc[letter] = acc[letter] ? acc[letter] + 1 : 1
			return acc 
		}, {})
		const vs = Object.values(stats);
		[2,3].map((m, i) => {
			if (vs.filter(v => v == m).length) c[i]++
		})
	})
	return c.multiply()
}

run(part1, lines)