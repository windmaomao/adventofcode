type Pos = [number, number]

type Maze = {
	maze: string[][]
	startPos: Pos
	numKeys: number
}

function buildMaze(data: string): Maze {
	const maze = data.slice(1).split('\n')
		.map(r => r.split(''))
	
	let startPos: Pos = [0, 0], numKeys = 0
	for (let i = 0; i < maze.length; i++) {
		const row = maze[i]
		const j = row.indexOf('@')
		if (j >= 0) {
			startPos = [i, j]
		}
		numKeys += row.filter(c => c.match(/[a-z]/))
			.length
	}
	
	return { maze, startPos, numKeys }
}

function move(a: Pos, b: Pos): Pos {
	return [a[0]+b[0], a[1]+b[1]]
}

type QueueItem = [Pos, number]
const dirs: Pos[] = [[-1,0], [0,1], [1,0], [0,-1]]

function findMazeKeys(
	maze: string[][], srcPos: Pos, keysTaken: string[]
) {
	const queue: QueueItem[] = [[srcPos, 0]]
	const marked = {}
	const dests = {}
	let ii = 0

	const mazeChar = (p: Pos) => maze[p[0]][p[1]]
	const canOpen = (c: string) => keysTaken
		.indexOf(c.toLowerCase()) >= 0

	while (ii < queue.length) {
		const [pos, k] = queue[ii++]
		marked[pos.toString()] = true
		const c = mazeChar(pos)
		//  console.log(pos, k, c)
		if (c.match(/[a-z]/) 
			&& keysTaken.indexOf(c) < 0) {
				dests[c] = { pos, k }
			} else {
				dirs
				.map(dp => move(pos, dp))
				.filter(p => !marked[p.toString()])
				.filter(p => mazeChar(p) !== '#')
				.filter(p => !(
					mazeChar(p).match(/[A-Z]/) &&
						!canOpen(mazeChar(p)
					)
				)).forEach(p => { 
					queue.push([p, k + 1]) 
				})
			}
	}

	return dests
}

const {log} = console
const world1 = `
#########
#b.A.@.a#
#########`
const m = buildMaze(world1)
log(findMazeKeys(m.maze, [1, 5], []))


