function list(items) {
  let root = {}, curr = root, map = {}
  items.forEach(n => {
    curr.next = { value: n }
    curr = curr.next
    map[n] = curr
  })
  const head = root.next
  curr.next= head
  return { root, head, map }
}

const move = (curr, dest) => {
  let pickup = curr.next.next.next
  const res = pickup.next
  pickup.next = dest.next
  dest.next = curr.next
  curr.next = res
  return res
}

const dest = (curr, m, max) => {
  let v = curr.value
  const ns = [curr.next, curr.next.next, curr.next.next.next]
  while (true) {
    v = v - 1 
    if (v < 1) v = max
    const res = m[v]
    if (ns.indexOf(res) < 0) return res
  }
}

const play = (arr, n) => {
  const l = list(arr)
  let i = 1, curr = l.head, next
  while (i <= n) {
    next = dest(curr, l.map, arr.length)
    curr = move(curr, next)
    i++
  }
  while (curr.value != 1) { curr = curr.next }
  return curr
}

const part1 = n => {
  let curr = play(nums, n)
  const res = []
  i = 1
  while (i < nums.length) {
    curr = curr.next
    res.push(curr.value)
    i++
  }
  return res.join('')
}

const part2 = n => {
  const nn = 1000000
  const numList = new Uint32Array(nn).fill(0).map((_, i) => i+1)
  for (let i = 0; i < nums.length; i++) { numList[i] = nums[i] }
  let curr = play(numList, n)
  return curr.next.value * curr.next.next.value
}

const read = require('./read.js')
const nums = read('23')[0].split('').map(v => parseInt(v))
const run = require('./run')
run(part1, 100)
run(part2, 10000000)
