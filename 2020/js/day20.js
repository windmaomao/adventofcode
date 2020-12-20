const reverse = str => str.split('').reverse().join('')

const getBorders = pic => {
	const n = pic.length
	const cols = i => pic.map(s => s[i]).join('')
	const edges = [pic[0], pic[n-1], cols(0), cols(n-1)]
	return edges.reduce((acc, edge) => {
		acc.push(edge); acc.push(reverse(edge))
		return acc
	}, [])
}

const getTiles = () => lines.map(l => {
	const [t, ...pic] = l.split('\n')
	const id = [...t.match(/\d+/)][0]
	const borders = getBorders(pic)
	return { id, pic, borders }
})

const getBoard = () => {
	const tiles = getTiles()
	
	const m = {}
	tiles.forEach(tile => {
		tile.borders.forEach(b => {
			if (!m[b]) m[b] = []
			m[b].push(tile.id)
		})
	})
	
	const conns = {};
	for (let [, ids] of Object.entries(m)) {
		ids.forEach(id => { if (!conns[id]) conns[id] = new Set() })
		if (ids.length == 2) {		// assume unique match
			conns[ids[0]].add(ids[1]); conns[ids[1]].add(ids[0])
		}
	}
	
	return { tiles, conns }
}

const part1 = board => {
	const { tiles, conns } = board
	const corners = Object.keys(conns).filter(id => 
		[...conns[id].values()].length == 2
	)	
	return corners.map(v => parseInt(v))
	  .reduce((acc, v) => acc*v, 1)
}

const read = require('./read.js')
const run = require('./run.js')
const log = require('./log.js')

const lines = read('20', '\n\n')
run(part1, getBoard())