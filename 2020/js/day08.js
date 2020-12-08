const read = require('./read.js')
const fn = read('08')

const instructions  = strs => {
  return strs.map(s => {
    const parts = s.split(" ")
    return [parts[0], parseInt(parts[1])]
  })
}

const part1 = arr => {
  let i = 0, g = 0
  const visited = {}
  while (i < arr.length && !visited[i]) {
    const [ins, num] = arr[i]
    visited[i] = true

    switch(ins) {
      case 'acc':
        g += num
        i++
        break
      case 'jmp':
        i += num
        break
      default:
        i++
    }
  }
  return [g,i]
}

const clone = arr =>  arr.map(a => a.slice())
const remaps = { nop: 'jmp', jmp: 'nop' }
const part2 = arr => {
  for (let i = 0; i < arr.length; i++) {
    const [ins, num] = arr[i]
    if (remaps[ins]) {
      const arr2 = clone(arr)
      arr2[i][0] = remaps[ins]
      const res = part1(arr2)
      if (res[1] == arr.length) return res
    }
  }
  return null
}

const inss = instructions(fn)
console.log(part1(inss))
console.log(part2(inss))
