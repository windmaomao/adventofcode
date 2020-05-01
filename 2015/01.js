import debug from 'debug'
import { input } from './utils'

const print1 = debug('day1:part1')
const print2 = debug('day1:part2')
const data = input('01.input', '')

const d = s => s === '(' ? 1 : -1
const sumFloor = (acc, s) => acc + d(s)
const reachBasement = (acc, s, i) => {
  if (acc.value === -1) return acc
  return { 
    pos: i + 1,
    value: acc.value + d(s) 
  }
}

const part1 = () => data.reduce(sumFloor, 0)
const part2 = () => data.reduce(reachBasement, { value: 0, pos: 0 }).pos

export default () => {
  print1(part1())
  print2(part2())
}