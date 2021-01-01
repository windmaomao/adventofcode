require('./utils/index')
const lines = read('2017', '02')
  .map(line => line.split('\t').map(Number))

const part1 =() => lines.map(l => l.max() - l.min()).sum()

const part2 = () => {
	return lines.map(l => {
		const res = Array.new(2, l).runN(
			(_, vs) => vs, null, 
			(_, vs) => {
				if (vs[0] >= vs[1]) return false
				return vs[1] % vs[0] == 0
			}
		)[0]
		return res[1] / res[0]
	}).sum()
}

run(part1)
run(part2)