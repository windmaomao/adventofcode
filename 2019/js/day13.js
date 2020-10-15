import { Intcode } from './day09'
import '../../utils/js/math'
import '../../utils/js/number'

const Game = (ops) => {
  const ic = Intcode(ops, [])
  const boards = []

  const step = () => {
    const x = ic.nextOutput()
    const y = ic.nextOutput()
    const t = ic.nextOutput()
    boards.push([x, y, t])
    return !ic.halted()
  }

  const run = () => { while (step()) {} }

  return { step, boards, run }
}

const part1 = ops => {
  const g = Game(ops)
  g.run()
  return g.boards.count(t => (t[2] == 2))
}

export { Game, part1 }
