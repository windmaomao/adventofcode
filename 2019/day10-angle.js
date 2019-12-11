const filereader = require('./utils/filereader')
const raw = filereader.readFile('day10e.data')
const indexOf = require('./utils/indexOf')

const PLOT = 0
const size = raw.length
const asteroids = []

let count = 0
const grid = new Array(size).fill(0).map(_ =>
  new Array(size).fill(PLOT ? '.' : -1)
)
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if (raw[i][j] !== '.') {
      asteroids.push({ x: j, y: i })
      grid[i][j] = PLOT ? '#' : count
      count++
    }
  }
}

// console.log(grid.map(row => row.join('')).join('\n'))

const ROUND = 2
const _radial = (c, t) => {
  let radial = Math.atan2(1, 0) - 
    Math.atan2(c.y - t.y, t.x - c.x)
  if (radial < 0) radial += 2 * Math.PI
  return Number((radial * 180 / Math.PI).toFixed(ROUND))
}

const contacts = asteroids.map(c => {
  const radials = asteroids.map(t => {
    if (c === t) return -1
    return _radial(c, t)
  })
  const map = new Map();
  for (const r of radials) {
    if (!map.has(r)) {
      map.set(r, true)
    }
  }
  return map.size - 1
})

const index = indexOf(contacts, 'max')
const center = asteroids[index]
console.log('Day 10/1:', contacts[index], center.x, center.y)

const vaporize = (c) => {
  const radials = asteroids.map(t => {
    if (c === t) return -1
    return _radial(c, t)
  })  

  const FRACT = 0.1
  const TOTAL = Math.round(360.0/FRACT)
  let sweeps = [], count = 0
  do {
    sweeps = new Array(TOTAL).fill(0).reduce((list, _, deg) => {
      const inRange = radials.reduce((acc, r, i) => {
        if (r >= FRACT* deg && r < FRACT*(deg + 1)) acc.push(i)
        return acc
      }, [])
      if (inRange.length) {
        const dists = inRange.map(i => {
          const t = asteroids[i]
          return (t.x - c.x) * (t.x - c.x) +
            (t.y - c.y) * (t.y - c.y)
        })
        const selected = inRange[indexOf(dists)]
        list.push(selected)
        const ast = asteroids[selected]
        console.log(count+1, ast.x, ast.y, radials[selected])
        count++
        radials[selected] = -1
      }
      return list
    }, sweeps)
  } while (sweeps.length < asteroids.length - 1)

  return sweeps
}

const day10Arr = vaporize(center)
console.log('Day 10/2:', asteroids[day10Arr[199]])

// const output = grid.map(row => row.join('')).join('\n')

// Case A, best position 8
// Sweep order 516792340
// .0..1
// .....
// 23456
// ....7
// ...89

// Case B, 33
// 
// ......*.*.
// *..*.*....
// ..*******.
// .*.*.***..
// .*..*.....
// ..*....*.*
// *..*....*.
// .**.*..***
// **...*..*.
// .*....**** 

// Case C, 35
// Case D, 41
// Case E, 210

// Final Case
//
//   *      *   *     *  *      *  **  *
//   *       *          *  ** **       
// **      * *  *  *  **   * ** ***    
//   *        *           *       **   
//  **     *       *        *  * *     
//  *   *   *     * **       *   *    *
// *   *  **    *    *      *          
//     *      * *     *  *   *      *  
//       ***       *          * ** *   
// *      *  *     *  *      *  *  ****
//  **   **      **  *****       **    
//      *   *         *        *    *  
//     **     *   *        * **  *    *
//     *        * *** *        *   *  *
//     *  * * **    *         *     * *
// **    ***    **  *  *        *      
//      * *         *       *    *    *
//  ***     *    * *      *   ** **    
//    **   **    **         *   *      
//      *    **    *  * * *   ** *   * 
// *   * * * *  ** *   *  *  *  *      
//       *   *   * *     * *     * ****
//           *                  * * ** 
//     *    *    *   *  *    *     *   
//  *****  ****        *               
// *    * *  *  *    **      *   *     
//    ****    *  *      * *   **     * 
//   **    * *** ** * ** *     *      *
//     * ****   *      ***     **      
//  *     *    *      *  *  * *  *     
//   *       *   *        * **   *     
// *     **** *          * *       *   
//   **  *  *     * *         *  * * **
//          *          ** * **       **
// *  *     *    *    * *       ****  *
//               * *           ** * *  

