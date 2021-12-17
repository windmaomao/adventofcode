let board = null
const players = ['X', 'O']
let turn = 0
let hasWon = false
let hasEnded = false
let winner = -1

const renderBoard = () => {
  const trs = document.querySelectorAll('tr')
  for (let i = 0; i < trs.length; i++) {
    const els = trs[i].querySelectorAll('button')
    for (let j = 0; j < els.length; j++) {
      els[j].textContent = board[i][j]
      if (board[i][j] || hasEnded) {
        els[j].setAttribute('disabled', true)
      } else {
        els[j].removeAttribute('disabled')
      }
    }
  }

  const btn = document.getElementById('restart-button')
  btn.style = hasEnded ? 'display: block' : ''

  const title = document.getElementById('game-heading')
  title.textContent = !hasEnded
    ? `Player ${turn+1}'s Turn`
    : (hasWon ? `Player ${winner+1} Won!` : 'Tie Game!')
}

const restartBoard = () => {
  board = new Array(3).fill(0)
    .map(() => new Array(3).fill(''))

  renderBoard()
}

const onSquareClick = e => {
  const el = e.target
  const i = parseInt(el.getAttribute('data-i'))
  const j = parseInt(el.getAttribute('data-j'))
  board[i][j] = players[turn]
  turn = turn ? 0 : 1
  checkBoard()
  renderBoard()
}

const initBoard = () => {
  const trs = document.querySelectorAll('tr')
  for (let i = 0; i < trs.length; i++) {
    const els = trs[i].querySelectorAll('button')
    for (let j = 0; j < els.length; j++) {
      els[j].setAttribute('data-i', i)
      els[j].setAttribute('data-j', j) 
      els[j].addEventListener('click', onSquareClick)
    }
  }

  const btn = document.getElementById('restart-button')
  btn.addEventListener('click', onRestartClick)
}

const wins = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
]
const checkBoard  = () => {
  const chars = board[0]
    .concat(board[1]).concat(board[2])

  hasWon = wins.map(w => (
    w.every(i => chars[i] == 'X') 
    || w.every(i => chars[i] == 'O')
  )).some(v => v)

  winner = hasWon ? (1 - turn) : winner

  hasEnded = !chars.some(v => !v) || hasWon
}

const onRestartClick = () => {
  hasEnded = false
  hasWon = false
  turn = 0
  winner = -1
  restartBoard()
}

initBoard()
restartBoard()
checkBoard()