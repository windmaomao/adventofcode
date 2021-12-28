var test = ['b', 'c', 'd', 'a']
//           0    1    2    3
//           3    0    1    2
const { log } = console


Array.prototype.sortIndices = function(compare) {
	const arr = this
	const indices = new Array(arr.length).fill(0).map((_, i) => i)
	return indices.sort((a, b) => compare(arr[a], arr[b]))
}

log(test.sortIndices((a, b) => a.charCodeAt(0) - b.charCodeAt(0)))
