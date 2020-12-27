const array = (n, v = i => i, T = Array) => {
	const arr = new T(n).fill(0)
	if (v === undefined) return arr
	const isFn = typeof v === 'function'
	return arr.map(isFn ? (_, i) => v(i) : _ => v)
}

module.exports = array