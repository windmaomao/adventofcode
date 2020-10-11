const lookAndSay = s => [...s.matchAll(/(.)\1*/g)]
  .map(v => `${v[0].length}${v[1]}`)
  .join('')

const part = (s, n) => {
  let p = s
  for (let i = 0; i < n; i++) {
    p = lookAndSay(p)
  }
  return p.length
}

const part1 = s => part(s, 40)
const part2 = s => part(s, 50)

export { lookAndSay, part1, part2 }
