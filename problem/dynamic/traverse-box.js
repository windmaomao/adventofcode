function traverseGraph(width, height) {
	const m = height + 1, n = width + 1
	const mat = new Array(m).fill(0).map((_) => 
		new Array(n).fill(0)
	)
	
	mat[0][1] = 1
	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			mat[i][j] = mat[i][j-1] + mat[i-1][j]
		}
	}
	
	return mat[m-1][n-1]
}

console.log(traverseGraph(2,3))