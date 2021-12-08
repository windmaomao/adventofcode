// AdventOfCode 2019 day18
const isDoor = c => c >= 'A' && c <= 'Z'
const isKey = c => c >= 'a' && c <= 'z'

const findRoot = (m) => {
	const i = m.findIndex(l => l.indexOf('@') >= 0)
	const j = m[i].findIndex(c => c == '@')
	m[i][j] = '.'
	return `${i},${j}`
}

const getKeyCount = (m) => {
	return m.reduce((acc, l) => acc + l.filter(isKey).length, 0)
}

const key2Pos = s => s.split(',').map(v => parseInt(v))
const getAdjs = (m, u) => {
	const [i, j] = key2Pos(u)
	return [[i-1,j], [i+1,j], [i,j-1],[i,j+1]]
		.filter(([x, y]) => {
			const c = m[x][y]
			if (c == '#') return false

			return true
	  })
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

		if (!isDoor(char)) {
			getAdjs(m, u).forEach(v => {
				if (!marked[v]) {
					marked[v] = true
					parent[v] = u
					queue.push(v)
				}
			})
		}
	}

	const dists = {}
	Object.keys(keys).forEach(k => {
		let j = 0
		for (let x = keys[k]; x != src; x = parent[x]) { j++ }
		dists[k] = j
	})
	return [keys, dists]
}

const canOpen = (char, keys) => {
	if (!isDoor(char)) return true
	return keys.indexOf(char.toLowerCase()) >= 0
}
const cloneMap = m => m.map(arr => arr.slice())

const runWorld = (lines) => {
	const charsMap = lines.map(l => l.split(''))
	const keysCount = getKeyCount(charsMap)
	const root = findRoot(charsMap)
	console.log('@', root, keysCount)
	console.log(charsMap.map(a => a.join('')))
	
	const visit = (u, char, m) => {
		const [x, y] = key2Pos(u)
		m[x][y] = '.'
		visited.push(char)
		console.log(visited)
		if (visited.filter(isKey).length == keysCount) {
			console.log('solution', visited)
		} else {
			const [keys, dists] = findKeys(m, u)
			const nexts = Object.keys(keys).filter(k => 
				visited.indexOf(k) < 0 && canOpen(k, visited)
			)
			console.log('nexts', nexts)
			nexts.forEach(k => {
				if (visited.indexOf(k) < 0
					&& canOpen(k, visited)
				) {
					visit(keys[k], k, cloneMap(m))
				}
			})
		}
		
		visited.pop()
	}
	
	const visited = []
	visit(root, '@', cloneMap(charsMap))
}

//runWorld([
//"#########",
//"#b.A.@.a#",
//"#########",
//])

runWorld([
	"########################",
	"#f.D.E.e.C.b.A.@.a.B.c.#",
	"######################.#",
	"#d.....................#",
	"########################"
])