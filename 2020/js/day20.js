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
	
	const corners = Object.keys(conns).filter(id => 
		[...conns[id].values()].length == 2
	)

	return { tiles, conns, corners }
}

const part1 = board => board
  .corners.map(v => parseInt(v))
  .reduce((acc, v) => acc*v, 1)
  
const rotate = p => {  
  const n = p.length
  const p2 = new Array(n).fill([]).map(v => new Array(n).fill(' '))
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      p2[j][n-1-i] = p[i][j]
    }
  }
  return p2.map(v => v.join(''))
}
      
const flip = p => {
  return p
    .map(line => line.split(''))
    .reverse()
    .map(v => v.join(''))
}
			
const part2 = board => {
  const { conns, corners, tiles, borders } = board
  const tilesMap = {}
  tiles.forEach(t => { tilesMap[t.id] = t.pic })
  
  log(corners)
  let curr = corners[0]
  const n = 3
  const image = new Array(3).fill([]).map(v => new Array(n).fill([]))
  image[0][0] = rotate(tilesMap[curr])
  image[0][1] = tilesMap['2473']
  image[0][2] = rotate(rotate(rotate(flip(tilesMap['3079']))))
  image[1][0] = rotate(rotate(rotate(tilesMap['1489'])))
  image[1][1] = rotate(rotate(rotate(tilesMap['1427'])))
  image[1][2] = rotate(rotate(rotate(tilesMap['2311'])))
  image[2][0] = rotate(rotate(rotate(tilesMap['2971'])))
  image[2][1] = rotate(rotate(rotate(tilesMap['2729'])))
  image[2][2] = rotate(rotate(rotate(tilesMap['1951'])))

  log(image, { breakLength: 1 })
//	return image
}

const read = require('./read.js')
const run = require('./run.js')
const log = require('./log.js')

const lines = read('20a', '\n\n')
const b = getBoard()
run(part1, b)
run(part2, b)