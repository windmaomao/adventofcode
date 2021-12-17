function swap(arr, i, j) {
	const tmp = arr[i]
	arr[i] = arr[j]
	arr[j] = tmp
}

function partition(arr, low, high) {
	let i = low, j = high + 1
	// pick ref element
	const v = arr[low]
	
	while (true) {
		//	console.log(arr.join(''))
		
		// find element >= v from one end
		while (arr[++i] < v) {
			if (i == high) break;
		}
		
		// find element < v from another end
		while (arr[--j] >= v) {
			if (j == low) break;
		} 
		
		if (i >= j) break;
		
		// swap these two elements
		//	console.log('swap:', i, j)
		swap(arr, i, j)
	}
	// swap last element with ref
	swap(arr, low, j)
	
	return j
}

const test1 = 'KRATELEPUIMQCXOS'.split('')
const index1 = partition(test1, 0, test1.length - 1)
console.log(test1.join(''), test1[index1])