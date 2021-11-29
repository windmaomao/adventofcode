const same = (arr1, arr2) => {
	if (arr1.length != arr2.length) return false
	return arr1.every((_, i) => arr1[i] === arr2[i])
}

const bigger = (arr1, arr2) => {
	const size = arr1.length
	
	const decreasing= (arr) => {
		let p = Infinity
		let i = 0
		const res = []
		while (i < arr.length) {
			if (arr[i] < p) {
				res.push(arr[i])
				p = arr[i]
			}
			i++
		}
		return res		
	}
	
	const greaterEqual = (arr, r) => {
		let hasTaken = false
		return arr.filter(v => {
			if (v == r) {
				if (!hasTaken) {
					hasTaken = true
					return false
				}
			}
			return v >= r 
		})
	} 
	
	let f1 = [...arr1]
	let f2 = [...arr2]
	while (f1.length) {
//	console.log(f1, f2)
		
		const s1 = decreasing(f1)
		const s2 = decreasing(f2)
//	console.log(s1, s2)
		
		if (!same(s1, s2)) return false
		
		const r = f1[0]
		f1 = greaterEqual(f1, r)
		f2 = greaterEqual(f2, r)
	}
	
	return true
}

const smaller = (arr1, arr2) => {
	const size = arr1.length
	
	const increasing= (arr) => {
		let p = -Infinity
		let i = 0
		const res = []
		while (i < arr.length) {
			if (arr[i] >= p) {
				res.push(arr[i])
				p = arr[i]
			}
			i++
		}
		return res		
	}
	
	const lesser = (arr, r) => {
		let hasTaken = false
		return arr.filter(v => {
			if (v == r) {
				if (!hasTaken) {
					hasTaken = true
					return false
				}
			}
			return v < r 
		})
	} 	
	
	let f1 = [...arr1]
	let f2 = [...arr2]
	while (f1.length) {
		//	console.log(f1, f2)
		
		const s1 = increasing(f1)
		const s2 = increasing(f2)
		//	console.log(s1, s2)
		
		if (!same(s1, s2)) return false
		
		const r = f1[0]
		f1 = lesser(f1, r)
		f2 = lesser(f2, r)
	}
	
	return true
}


const sameBsts = (arr1, arr2) => {
	return bigger(arr1, arr2) 
		&& smaller(arr1, arr2)
}

console.log(sameBsts(
	[10, 15, 8, 12, 94, 81, 5, 2, 11],
	[10, 8, 5, 15, 2, 12, 11, 94, 81]
))

//console.log(sameBsts(
//[10, 15, 8, 12, 94, 81, 5, 2, 10],
//[10, 8, 5, 15, 2, 10, 12, 94, 81]
//))

console.log(sameBsts(
	[10, 15, 8, 12, 94, 81, 5, 2, -1, 100, 45, 12, 9, -1, 8, 2, -34],
	[10, 8, 5, 15, 2, 12, 94, 81, -1, -1, -34, 8, 2, 9, 12, 45, 100]
))

												