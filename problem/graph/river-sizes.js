const Graph = require('./graph')

const riverSizes  = (matrix) => {
	const m = matrix.length
	const n = matrix[0].length
	
	const neighbours = ([ i, j ]) => {
		const res = []
		const tryPos = ([ p, q ]) => {
			if (p >= 0 && p < m && q >=0 && q < n ) {
				if (matrix[p][q] == matrix[i][j]) {
					res.push([p, q])
				}
			}
		}
		
		tryPos([i-1, j]); tryPos([i+1, j])
		tryPos([i, j-1]); tryPos([i, j+1])
//	console.log(i, j, res)
		return res
	}
	
	
	const g = Graph(neighbours)
	const islands = [] 

	let visited = {}
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			const pos = [i, j]
			let k = 0
			if (matrix[i][j] && !visited[`${pos}`]) {
//			console.log(i,j)
				visited = g.traverse(
					pos, () => { k++ }, { visited }
				)
				islands.push(k)
			}
		}
	}

	return islands
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
