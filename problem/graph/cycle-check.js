const Graph = require('./graph')

const hasSingleCycle = (arr) => {
	const n = arr.length
	const next = i => {
		const v = arr[i]
		let j = (i + v) % n
		if (j < 0) j += n
		if (j >= n) j -= n
		return j
	}

	const g = Graph(i => [next(i)])
	const visited = []
	const hasCycle = g.cycle(0, v => { 
		visited.push(v) 
	})
	const last = visited.pop()

	return hasCycle 
		&& visited.length === n - 1
		&& next(last) === 0
}

console.log(hasSingleCycle([2,3,1,-4,-4,2]))
console.log(hasSingleCycle([0,1,1,1,1]))
console.log(hasSingleCycle([1,1,0,1,1]))
console.log(hasSingleCycle([1,1,1,1,2]))
console.log(hasSingleCycle([3,5,5,-5,-2,-5,-12,-2,-1,2,-6,1,1,2,-5,2]))