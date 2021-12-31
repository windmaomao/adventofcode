const riverSizes  = (mat) => {
	const m = mat.length
	const n = mat[0].length
	const dots = []
	
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (mat[i][j]) dots.push([i, j])
		}
	}
	
	const marked = {}
	const _key = p => p.join(',')
	let visited = 0

	const visit = (p) => {
		if (!marked[_key(p)]) {
			marked[_key(p)] = true
			visited++
		}
		
		return [[1,0],[-1,0],[0,1],[0,-1]]
			.map(dp => [p[0]+dp[0], p[1]+dp[1]])
			.filter(([i, j]) => {
				if (i < 0 || i >= m) return false
				if (j < 0 || j >= n) return false
				if (!mat[i][j]) return false
				if (marked[_key([i,j])]) return false
				return true
		  }).forEach(visit)
	}
	
	let prev = 0
	const res = []
	for (let k = 0; k < dots.length; k++) {
		if (!marked[_key(dots[k])]) {
			visit(dots[k])
			res.push(visited - prev)
			prev = visited
		}
	}
	
	return res
}

//console.log(riverSizes([
//[1,0,0,1,0],
//[1,0,1,0,0],
//[0,0,1,0,1],
//[1,0,1,0,1],
//[1,0,1,1,0]
//]))

//console.log(riverSizes([
//[1,1,1,0,1,1,0,0,0,1,0]
//]))

console.log(riverSizes([
	[1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0],
	[1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0],
	[0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1],
	[1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0],
	[1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1]	
]))
