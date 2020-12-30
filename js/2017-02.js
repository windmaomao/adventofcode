require('./utils/index')
const lines = read('2017', '02')
  .map(line => line.split('\t').map(Number))

const part1 =() => lines.map(l => l.max() - l.min()).sum()

const part2 = () => {
	return lines.map(l => {
		const index = Array.new(l.length)
		const res = Array.new(2, index).runN(
			(acc, is) => is, null, 
			is => {
				if (is[0] == is[1]) return false
				return l[is[0]] % l[is[1]] == 0
			}
		)
		const is = res[0]
		return l[is[0]] / l[is[1]]
	}).sum()
}

run(part1)
run(part2)