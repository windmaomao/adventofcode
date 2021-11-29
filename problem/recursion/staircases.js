const staircase = (height, maxSteps) => {
	let count = 0
	
	const visit = (s) => {
		if (s === height) {
			count++
			return
		}
		
		for (let k = 1; k <= maxSteps; k++) {
			const n = s + k
			n <= height && visit(n)
		}
	}
	
	visit(0)
	
	console.log(count)
}

staircase(4, 2)