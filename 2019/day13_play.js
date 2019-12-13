const intcode = require('./day13_intcode')

const tile = [' ', '|', 'B', '_', 'o']
const play = (data, board) => {
  let {
    done, once, print, output, i, relative,
    score, pos, ball, bar, auto
  } = board

  while (!done) {
    let res, x, y, tileId
    res = intcode(data, { once, print, output, i, relative })
    i = res.i; x = res.output; relative = res.relative
    res = intcode(data, { once, print, output, i, relative })
    i = res.i; y = res.output; relative = res.relative
    res = intcode(data, { once, print, output, i, relative })
    i = res.i; tileId = res.output; relative = res.relative

    if (x == -1 && y == 0) {
      score = tileId
      return { once, print, output, i, relative, score, pos, ball, bar }
    }

    pos[y][x] = tile[tileId]
    if (tileId === 4) { ball.x = x; ball.y = y }
    if (tileId === 3) { bar.x = x; bar.y = y }

    done = res.done
    if (auto) output = Math.sign(ball.x - bar.x)
  }
  return { once, print, output, i, relative, score, pos, ball, bar }
}

module.exports = play