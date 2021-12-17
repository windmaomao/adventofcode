Array.prototype.myMap = function(callback) {
	const arr = this
	const n = arr.length
	const arr2 = new Array(n).fill(0)
	for (let i = 0; i < n; i++) {
		arr2[i] = callback(arr[i], i, arr)
	}
	return arr2
}

Array.prototype.myFilter = function(callback) {
	const arr = this
	const n = arr.length
	const arr2 = []
	for (let i = 0; i < n; i++) {
		if (callback(arr[i], i, arr) === true) {
			arr2.push(arr[i])
		}
	}
	return arr2
}

Array.prototype.myReduce = function(callback, initialValue) {
	const arr = this
	const n = arr.length
	let res = initialValue
	for (let i = 0; i < n; i++) {
		if (res === undefined) {
			res = arr[i]
		} else {
			res = callback(res, arr[i], i, arr)
		}
	}
	return res
}

const arr = [1,2,3]
console.log(arr.myMap(v => v + 1))
console.log(arr.myFilter(v => v > 1))
console.log(arr.myReduce((acc, v) => acc + v))