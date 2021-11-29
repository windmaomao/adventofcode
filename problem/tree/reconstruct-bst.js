const Node = (value, left = null, right = null) => ({ 
	value, left, right
})

const reconstructBst = arr => {
	const inRange = (v, l, h) => {
		return (v >= l && v < h)
	}
	
	let i = 0
	const done = () => i >= arr.length
	const value = () => arr[i + 1]
	
	const createNode = (p, l, h) => {
		let left = null
		let right = null
		
		if (!done() && inRange(arr[i+1], l, p)) {
			i++
			left = createNode(arr[i], l, p)
		}
		if (!done() && inRange(arr[i+1], p, h)) {
			i++
			right = createNode(arr[i], p, h)
		}
		
		return Node(p, left, right)
	}
	
	return createNode(arr[0], -Infinity, Infinity)
}

//console.log(reconstructBst([10,4,2,1,5,17,19,18]))
console.log(reconstructBst([2,0,1,4,3,3]))

//    2
//   0  4
//    1 3
         3
		