require('./utils/index')
const lines = read('2018', '02b')

const getStats = str => {
	const stats = Array.new(26, 0)
	Array.new(str.length).map(i => {
		const j = str.charCodeAt(i) - 97
		stats[j]++
	})
	return stats
}

const part1 = strs => {
	let c = [0, 0]
	strs.forEach(str => {
		const vs = getStats(str);
		[2,3].map((m, i) => {
			if (vs.filter(v => v == m).length) c[i]++
		})
	})
	return c.multiply()
}

const part2 = strs => {
	const allStats = strs.map(getStats)
	log(allStats, { compact: true })
	const n = strs.length
	const res = Array.new(2, allStats).runN(
		(acc, [vi, vj], [i, j]) => {
			if (i >= j) return null
			const diff = vi.map((v, k) => Math.abs(v - vj[k])).sum()
			return (diff <= 2) ? [vi, vj] : null
		}, null,
		acc => acc
	)
	const [[vi, vj], [i, j]] = res
	const str = strs[i]
	return Array.new(str.length).filter(k => {
		const l = str.charCodeAt(k) - 97
		return vi[l] == vj[l]
	}).map(k => str[k]).join('')
}

run(part1, lines)
run(part2, lines)