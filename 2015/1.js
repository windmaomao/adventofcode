import { input } from './utils'

const _m = { '(': 1, ')': -1 }
const floor = arr => arr.reduce((acc, a, i) => {
  const res = acc + _m[a]
  if (res === -1) { console.log(i) }
  return acc + _m[a]
}, 0)

const day1 = () => {
  const raw = input('1', '')
  console.log(floor(raw)) 
}

export default day1