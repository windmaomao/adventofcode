import raw from './input'

const _m = { '(': 1, ')': -1 }
const floor = arr => arr.reduce((acc, a, i) => {
  const res = acc + _m[a]
  if (res === -1) { console.log(i) }
  return acc + _m[a]
}, 0)

const day1 = () => {
  console.log(floor(raw.split('')))
  // console.log(raw.split('').length)
}

export default day1