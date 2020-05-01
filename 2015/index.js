import { input } from './utils'
import debug from 'debug'

const day = '01'

async function load() {
  const parts = await import(`./${day}`)
  const { separator, part1, part2 } = parts.default()

  const data = input(`${day}.input`, separator)
  // console.log(data)
  const print = part => debug(`day${day}:part${part}`)
  print(1)(part1(data))
  print(2)(part2(data))
}

load()
