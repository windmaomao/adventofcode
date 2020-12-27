require('./js_array.js')

const part = (ns, target, d) => {
	const n = ns.length
	const [k] = indexes(array(d, n))
	  .filter(is => is.sum(i => ns[i]) == target)
	return k.multiply(v => ns[v])
}

const read = require('./read.js')
const array = require('./array.js')
const indexes = require('./indexes.js')
const nums = read('01a', '\n', true)
const run = require('./run')
run(part, nums, 2020, 2)
run(part, nums, 2020, 3)