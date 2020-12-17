const lines = [
	".#.",
	"..#",
	"###"
]

const mat = {}

const initMat = () => {
	const m = Math.floor(lines.length / 2)
	const _k = pos => pos.map(p => `${p}`).join(',')
	for (let i = -1; i <= m; i++) {
		for (let j = -1; j <= m; j++) {
			if (lines[i+m][j+m] == '#') {
				mat[_k([j, -i, 0])] = true
			}
		}
	}	
}

initMat()
console.log(mat)