const board = [
	[7, 8, 0, 4, 0, 0, 1, 2, 0], 
	[6, 0, 0, 0, 7, 5, 0, 0, 9], 
	[0, 0, 0, 6, 0, 1, 0, 7, 8], 
	[0, 0, 7, 0, 4, 0, 2, 6, 0],
	[0, 0, 1, 0, 5, 0, 9, 3, 0],
	[9, 0, 4, 0, 6, 0, 0, 0, 5],
	[0, 7, 0, 3, 0, 0, 0, 1, 2],
	[1, 2, 0, 0, 0, 7, 4, 0, 0],
	[0, 4, 9, 2, 0, 6, 0, 0, 7]
]

const arrChoices = arr => {
	return new Array(9).fill(0)
	  .map((_, i) => i + 1)
		.filter(v => arr.indexOf(v) < 0)
}

const candidates = (i, j) => {
	let arr = []
	for (let k = 0; k < 9; k++) {
		arr.push(board[i][k])
		arr.push(board[k][j])
	}
	
	const im = Math.floor(i / 3) * 3
	const jm = Math.floor(j / 3) * 3
	
	for (let ik = 0; ik < 3; ik++) {
		for (let jk = 0; jk < 3; jk++) {
			arr.push(board[im+ik][jm+jk])
		}
	}

	return arrChoices(arr)
}

const allBlanks = () => {
	const blanks = []
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (board[i][j] == 0) {
				blanks.push([i, j, candidates(i, j)])
			}
		}
	}
	
	blanks.sort((a, b) => a[2].length - b[2].length)
	
	return blanks
}

const solvePuzzle = () => {
	const blanks = allBlanks()
	const n = blanks.length
	let solved = false
	
	const solve = (k) => {
		if (solved) return
		if (k == n) {
			solved= true
			return
		}
		
		const [i, j] = blanks[k]
		const choices = candidates(i, j)
		for (const choice of choices) {
			if (!solved) {
				board[i][j] = choice
				solve(k + 1)
			}
		}
		if (!solved) board[i][j] = 0
	}
	
	solve(0)
}

solvePuzzle()
console.log(board)
