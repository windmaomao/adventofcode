import { input } from './utils'
import debug from 'debug'

const day = '05'

const before = (prepare, data) => prepare ? prepare(data) : data
const print = part => debug(`day${day}:part${part}`)
const after = (finish, data) => finish ? finish(data) : data
async function load() {
  const parts = await import(`./${day}`)
  const { separator, prepare, finish, part1, part2 } = parts.default()

  const data = input(`${day}.input`, separator)  
  print(1)(after(finish, part1(before(prepare, data))))
  print(2)(after(finish, part2(before(prepare, data))))
}

load()
