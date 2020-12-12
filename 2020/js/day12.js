const read = require('./read.js')
const arr = read('12').map(v => [v[0], v.slice(1)])

const DIRS = {
  E: [1, 0], N: [0, 1], S: [0, -1], W: [-1, 0]
}
const ANGLES = ['E', 'S', 'W', 'N']

const rotate = (curr, degree) => {
  const n = parseInt(degree / 90)
  return ANGLES[(ANGLES.indexOf(curr) + n + 4) % 4]
}

const part1 = instructions => {
  const res = instructions.reduce((acc, ins) => {
    const [id, dt] = ins
    const pos = acc.pos
    let dir = acc.dir, move = true
    switch(id) {
      case 'F':
        break
      case 'E':
      case 'W':
      case 'N':
      case 'S':
        dir = id
        break
      case 'R':
        dir = rotate(dir, dt)
        move = false
        break
      case 'L':
        dir = rotate(dir, -dt)
        move = false
        break
    }
    if (move) {
      acc.pos[0] = pos[0] + DIRS[dir][0]*dt
      acc.pos[1] = pos[1] + DIRS[dir][1]*dt
    } else {
      acc.dir = dir
    }
    return acc
  }, { dir: 'E', pos: [0, 0] })
  
  return Math.abs(res.pos[0]) + Math.abs(res.pos[1])
}

const rotateWp = (wp, degree) => {
  const [x,y] = wp
  const tmp = [[x, y], [y, -x], [-x, -y], [-y, x]]
  const n = parseInt(degree / 90)
  return tmp[(n + 4) % 4]
}

const part2 = instructions => {
  const res = instructions.reduce((acc, ins) => {
    const [id, dt] = ins

    switch(id) {
      case 'F':
        acc.pos[0] += acc.wp[0]*dt
        acc.pos[1] += acc.wp[1]*dt
        break
      case 'E':
      case 'W':
      case 'N':
      case 'S':
        acc.wp[0] += DIRS[id][0]*dt
        acc.wp[1] += DIRS[id][1]*dt
        break
      case 'R':
        acc.wp = rotateWp(acc.wp, dt)
        break
      case 'L':
        acc.wp = rotateWp(acc.wp, -dt)
    }
      
    return acc
  }, { wp: [10, 1], pos: [0, 0] })
  
  return Math.abs(res.pos[0]) + Math.abs(res.pos[1])
}
//console.log(arr)
console.log(part1(arr))
console.log(part2(arr))