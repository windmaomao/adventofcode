/**
 * Pattern to solve backtracking problems
 */
var solveNQueens = function(n) {
  const res = []
  const curr = new Array(n).fill(-1)

  const printMove = arr => {
  }

  const nextMove = i => {
    // found
    if (i == n) {
      res.push([...curr])
      return
    }

    // possible moves
    curr[i] = j
    if (isValid(i)) {
      nextMove(i+1)
    }
  }

  nextMove(0)
  return res.map(printMove)
};