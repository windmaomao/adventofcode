require('./utils/index')
const nums = read('2020', '01a', '\n', true)

const part = (ns, target, d = 2) => {
	const n = ns.length
	const res = Array.new(d, ns).runN(
		(acc, vs) => {
			return vs.sum() == target ? vs : null
		}, null, acc => acc
	)
	return res[0].multiply()
}

run(part, nums, 2020)
run(part, nums, 2020, 3)

//const part = (ns, target, d) => {
//	const n = ns.length
//	const [k] = Array.indexes(Array.new(d, n))
//	.filter(is => is.sum(i => ns[i]) == target)
//	return k.multiply(v => ns[v])
//}
//
//run(part, nums, 2020, 2)
//run(part, nums, 2020, 3)