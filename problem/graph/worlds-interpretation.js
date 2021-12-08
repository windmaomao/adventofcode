const lines = [
	"#########",
	"#b.A.@.a#",
	"#########",
]

const charsMap = lines.map(l => l.split(''))

const findRoot = (m) => {
	const i = m.findIndex(l => l.indexOf('@') >= 0)
	const j = m[i].findIndex(c => c == '@')
	m[i][j] = '.'
	return `${i},${j}`
}

const key2Pos = s => s.split(',').map(v => parseInt(v))
const getAdjs = (m, u) => {
	const [i, j] = key2Pos(u)
	return [[i-1,j], [i+1,j], [i,j-1],[i,j+1]]
		.filter(([x, y]) => m[x][y] && m[x][y] != '#')
		.map(([x,y]) => `${x},${y}`)
}

const findKeys = (m, src) => {
	const parent = {}
	const marked = { [src]: true }
	const queue = [src]
	const keys = {}

	while (queue.length) {
		const u = queue.shift()
		const [x, y] = key2Pos(u)
		const char = m[x][y]
		if (char != '.') keys[char] = u
		
		getAdjs(m, u).forEach(v => {
			if (!marked[v]) {
				marked[v] = true
				parent[v] = u
				queue.push(v)
			}
		})
	}

	const dists = {}
	Object.keys(keys).forEach(k => {
		let j = 0
		for (let x = keys[k]; x != src; x = parent[x]) { j++ }
		dists[k] = j
	})
	return [keys, dists]
}



const root = findRoot(charsMap)
console.log('@', root)
console.log(charsMap.map(a => a.join('')))
console.log(findKeys(charsMap, root))
