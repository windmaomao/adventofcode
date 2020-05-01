import _ from 'lodash'

const d = s => s === '(' ? 1 : -1
const sumFloor = (acc, s) => acc + d(s)
const sum2Basement = (acc, s, i) => {
  if (acc.value === -1) return acc
  return { 
    pos: i + 1,
    value: acc.value + d(s) 
  }
}

const parse = data => data[0].split('')
const part1 = data => parse(data)
  .reduce(sumFloor, 0)

const part2 = data => _.chain(data)
  .flatMap(x => x.split(''))
  .reduce(sum2Basement, { value: 0, pos: 0 }
  ).value()

export default () => ({ part1, part2 })