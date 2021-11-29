const emptyBoard = (n) => new Array(n*n).fill(0)
const dirs = [
	[0, -1], [0, 1], [-1, 0], [1, 0],
	[-1, -1], [-1, 1], [1, -1], [1, 1]
]
const paintBoard = (b, n, i, j) => {
	for (const [di, dj] of dirs) {
		let p = i, q = j
		while (p >= 0 && p < n && q >= 0 && q < n) {
			b[p*n + q] = 1
			p += di
			q += dj
		}
	}
}

const attackQueens = (n) => {
	const qs = []
	let count = 0
	
	const visit = (board, k) => {
		if (k == n) {
			console.log(qs)
			count++
			return
		}
		
		for (let i = 0; i < n; i++) {
			if (i != k) continue
			for (let j = 0; j < n; j++) {
				if (board[i*n+j] == 0) {
					const b2 = [...board]
					paintBoard(b2, n, i, j)
					qs.push([i,j])
					visit(b2, k + 1)
					qs.pop()
				}
			}
		}
	}
	
	const b = emptyBoard(n)
	visit(b, 0)
console.log(count)
	return count
}

attackQueens(5)

function printBoard(b, n) {
	const res = []
	for (let i = 0; i < n; i++) {
		const row = []
		for (let j = 0; j < n; j++) {
			row.push(b[i*n+j])
		}
		res.push(row)
	}
	console.log(res)
}

function printQs(qs, n) {
	const b = emptyBoard(n)
	for (const [i, j] of qs) {
		b[i*n+j] = 1
	}
	printBoard(b, n)
}
