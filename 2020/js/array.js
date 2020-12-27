const array = (n, v = i => i, T = Array) => {
	const arr = new T(n).fill(0)
	if (v === undefined) return arr
	const isFn = typeof v === 'function'
	return arr.map(isFn ? (_, i) => v(i) : _ => v)
}

module.exports = array

//const N = 100000000
//const a = array(N, 0, Uint8Array)
//console.log(a[N-1])
//
//const used = process.memoryUsage();
//for (let key in used) {
//	console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
//}
