const dirs = [
  [-1, 0], [1, 0], [0, -1], [0, 1],
  [-1, -1], [-1, 1], [1, -1], [1, 1]
]

const boggleBoard = (board, words) => {
  const m = board.length
  const n = board[0].length
  
  const neighbours = ([i, j]) => {
    const res = []
    const tryPos = ([p, q]) => {
      if (p >= 0 && p < m && q >= 0 && q < n) {
        res.push([p, q])
      }
    }
    
    dirs.forEach(([p, q]) => { 
      tryPos([i+p, j+q]) 
    })
    
    return res
  }  
  
  const matches = []
  
  words.forEach(str => {
    let matched = false
    
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (matched) continue
        if (str[0] !== board[i][j]) continue
        
        const visit = (pos) => {          
          if (path.length === str.length) {
            matched = true
            return
          }
          
          const pathStrs = path.map(v => `${v}`)
          neighbours(pos).forEach(next => {
            const [p, q] = next
            if (str[path.length] != board[p][q]) return
            if (pathStrs.indexOf(`${next}`) >= 0) return
            
            path.push(pos)
            visit(next)
            path.pop()
          })
        }
        
        const path = [[i, j]]
        visit([i, j])
        if (matched) matches.push(str)
      }
    }
  })
    
  return matches
}


console.log(boggleBoard([
  ['l', 'h', 'i', ' ', ''],
  [' ', 'o', ' ', ' ', ' '],
  [' ', ' ', 'v', 'w', ' '],
  [' ', ' ', ' ', 'e', ' '],
], ['hi', 'love', 'we']))

console.log(boggleBoard([
  ["t", "h", "i", "s", "i", "s", "a"],
  ["s", "i", "m", "p", "l", "e", "x"],
  ["b", "x", "x", "x", "x", "e", "b"],
  ["x", "o", "g", "g", "l", "x", "o"],
  ["x", "x", "x", "D", "T", "r", "a"],
  ["R", "E", "P", "E", "A", "d", "x"],
  ["x", "x", "x", "x", "x", "x", "x"],
  ["N", "O", "T", "R", "E", "-", "P"],
  ["x", "x", "D", "E", "T", "A", "E"]
], [
  "this", "is", "not", "a", "simple", 
  "boggle", "board", "test", "REPEATED", 
  "NOTRE-PEATED"
]))