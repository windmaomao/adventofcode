require('./utils/index')
const nums = read('2020', '01a', '\n', true)

const part = (ns, target, d) => {
	const n = ns.length
	const [k] = Array.indexes(Array.new(d, n))
	  .filter(is => is.sum(i => ns[i]) == target)
	return k.multiply(v => ns[v])
}

run(part, nums, 2020, 2)
run(part, nums, 2020, 3)

// [[0, 3], [0, 3]].runN(
//   (acc, vs, is, arr) => {}, {}
//   (acc, vs, is, arr) => false
// )

//const part1 =  (ns, target) => {
//  const n = ns.length
//	const res = Array.new(n*n).run(
//		(_, k) => {
//			const j = k % n
//			const i = (k - j) / n
//			return [i, j]
//		}, null, 
//		([i, j]) => (ns[i] + ns[j] == target)
//	)
//	return res[0].multiply(v => ns[v])
//}
//
//run(part1, nums, 2020)