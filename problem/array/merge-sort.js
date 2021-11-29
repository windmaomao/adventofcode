//const arr = [3,4,1,2]
const arr = [2,3,3,1,9,5,6] // 1+2+1+1

const merge = (l, m, h) => {
	let i = l
	let j = m + 1
	const tmp = []
	
	while (i <= m || j <= h) {
		if (i > m) {
			tmp.push(arr[j])
			j++
		} else if (j > h) {
			tmp.push(arr[i])
			i++
		} else {
			if (arr[i] < arr[j]) {
				tmp.push(arr[i])
				i++
			} else {
				tmp.push(arr[j])
				j++
			}
		}
	}
	
	for (let k = l; k <= h; k++) {
		arr[k] = tmp[k - l]
	}
}

const sort = (l, h) => {
	if (l < h) {
		const m = Math.floor((l + h) / 2)
		sort(l, m)
		sort(m + 1, h)
		merge(l, m, h)
	}
}

console.log('arr:', arr)
sort(0, arr.length - 1)
console.log('arr:', arr)

