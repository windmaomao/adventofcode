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