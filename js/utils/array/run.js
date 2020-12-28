const run = (arr, fn, init, until = () => false) => {
	let i = 0, acc = init, done = false, n = arr.length
	while (i < n && !done) {
		acc = fn(acc, arr[i], i, arr)
		done = until(acc, arr[i], i, arr)
		i++
	}
	return [acc, i]
}

module.exports = run

//console.log(run(
//	[1,3,6],
//	(acc, v, i) => acc + v, 0,
//	(acc, v, i) => acc > 3,
//))