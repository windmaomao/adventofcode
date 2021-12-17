const merge = (arr, aux, low, mid, high) => {
	let i = low, j = mid + 1, v
	for (let k = low; k <= high; k++) aux[k] = arr[k]
	for (let k = low; k <= high; k++) {
		if (i > mid) v = aux[j++];
		else if (j > high) v = aux[i++];
		else if (aux[j] < aux[i]) v = aux[j++];
		else v = aux[i++];
		arr[k] = v
	}
}

const sortTopDown = (arr) => {
	const aux = new Array(arr.length).fill(0)
	
	const sort = (low, high) => {
		if (low < high) {
			const mid = Math.floor((low + high) / 2)
			sort(low, mid)
			sort(mid + 1, high)
			merge(arr, aux, low, mid, high)
			console.log(low, high, arr.join(''))
		}
	}
	
	sort(0, arr.length-1)
	return arr
}

const sortBottomUp = (arr) => {
	const n = arr.length
	const aux = new Array(n).fill(0)
	
	for (let sz = 1; sz < n; sz = sz * 2) {
		for (let low = 0; low < n - sz; low += sz * 2) {
			merge(
				arr, aux, 
				low, 
				low + sz - 1,
				Math.min(low + sz * 2 - 1, n - 1)
			)
		}
	}
	
	return arr	
}

const {log} =  console
log(sortTopDown([3,8,6,5,4,3,0,7]).join(','))
log(sortBottomUp([3,8,6,5,4,3,0,7]).join(','))

