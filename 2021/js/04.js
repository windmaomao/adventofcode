const bundle = require('./bundle')
const inputs = bundle.read('04', '\n', false)

const nums = (inputs.shift()).split(',').map(v => parseInt(v))
const boardCount = inputs.length / 6
const boards = []

for (let i = 0; i < boardCount; i++) {
  const b = []
  for (let j = i*6+1; j < i*6+6; j++) {
    b.push(inputs[j].split(' ').filter(v => v != '').map(v => parseInt(v)))
  }
  boards.push(b)
}

const oldBoard = boards.map(b => {
  return b.map(v => v.slice())
})

const checkBoardX = (b) => {
  for (let i = 0; i < 5; i++) {
    if (b[i].sum() == -5) {
      return i
    }
  }
  return -1
}

const checkBoardY = b => {
  for (let j = 0; j < 5; j++) {
    let s = 0
    for (let i = 0; i < 5; i++) {
      s += b[i][j]
    }
    if (s == -5) {
      return j
    }
  }
  return -1
}

const markBoard = (b, v) => {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (b[i][j] == v) b[i][j] = -1
    }
  }
}

const sumRestX = (b, x) => {
  let s = 0
  for (let i = 0; i < 5; i++) {
    if (i == x) continue
    for (let j = 0; j < 5; j++) {
      if (b[i][j] >= 0) s += b[i][j]
    }
  }
  return s
}

const sumRestY = (b, y) => {
  let s = 0
  for (let j = 0; j < 5; j++) {
    if (j == y) continue
    for (let i = 0; i < 5; i++) {
      if (b[i][j] >= 0) s += b[i][j]
    }
  }
  return s
}

const part1 = (ns) => {
  let k = 0
  let done = false
  while (k < nums.length && !done) {
    boards.forEach((b, bi) => {
      markBoard(b, nums[k])
      const i = checkBoardX(b)
      if (i >= 0) { 
        console.log('s', sumRestX(b, i) * nums[k])
        done = true
      }
      const j = checkBoardY(b)
      if (j >= 0) {
        console.log('s', sumRestY(b, j) * nums[k])
        done = true
      }
    })
    if (!done) k++
  }

  return k
}

//bundle.run(part1, inputs)

const part2 = (ns) => {
  let k = 0
  let wins = []
  let done = false
  while (k < nums.length && !done) {
    boards.forEach((b, bi) => {
      markBoard(b, nums[k])
      const i = checkBoardX(b)
      if (i >= 0) { 
        console.log('s', sumRestX(b, i) * nums[k])
        if (wins.indexOf(bi) < 0) wins.push(bi)
        if (wins.length == boardCount) {
          console.log('k', k)
          console.log('win', sumRestX(b, i) * nums[k])
          done = true
        }
      }
      const j = checkBoardY(b)
      if (j >= 0) {
        console.log('s', sumRestY(b, j) * nums[k])
        if (wins.indexOf(bi) < 0) wins.push(bi)
        if (wins.length == boardCount) {
          console.log('k', k)
          console.log('win', sumRestY(b, j) * nums[k])
          done = true
        }
      }
    })
    if (!done) k++
  }
  
  return 1
}

bundle.run(part2, inputs)