const filereader = require('./utils/filereader')
const raw = filereader.readFile('day10.data')
const indexOf = require('./utils/indexOf')

const size = raw.length
const asteroids = []

let count = 0
const grid = new Array(size).fill(0).map(_ =>
  new Array(size).fill(-1)
)
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if (raw[i][j] !== '.') {
      asteroids.push({ x: j, y: i })
      grid[i][j] = count
      count++
    }
  }
}

const ROUND = 2
const _radial = (c, t) => {
  let radial = Math.atan2(1, 0) - 
    Math.atan2(c.y - t.y, t.x - c.x)
  if (radial < 0) radial += 2 * Math.PI
  return Number((radial * 180 / Math.PI).toFixed(2))
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

console.log('Day 10/1:', contacts[indexOf(contacts, 'max')])

// const output = grid.map(row => row.join('')).join('\n')

// Case A, 8
//
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

