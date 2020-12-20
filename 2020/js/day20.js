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

const part1 = tiles => {
	const m = {}
	tiles.forEach(tile => {
		tile.borders.forEach(b => {
			if (!m[b]) m[b] = []
			m[b].push(tile.id)
		})
	})
	const m2 = {};
	for (let [, ids] of Object.entries(m)) {
		ids.forEach(id => { if (!m2[id]) m2[id] = new Set() })
		if (ids.length == 2) {		// assume unique match
			m2[ids[0]].add(ids[1]); m2[ids[1]].add(ids[0])
		}
	}
	const corners = Object.keys(m2).filter(id => 
		[...m2[id].values()].length == 2
	)
	
	return corners.map(v => parseInt(v))
	  .reduce((acc, v) => acc*v, 1)
}

const read = require('./read.js')
const run = require('./run.js')
const log = require('./log.js')

const lines = read('20', '\n\n')
run(part1, getTiles())