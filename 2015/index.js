import { input } from './utils'
import debug from 'debug'
// import main from './01'

const day = '01'

async function load() {
  const parts = await import('./01')

  const data = input(`${day}.input`, '')
  const { part1, part2 } = parts.default()
  const print = part => debug(`day${day}:part${part}`)
  print(1)(part1(data))
  print(2)(part2(data))
}

load()
