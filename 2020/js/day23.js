function list(items) {
  let root = {}, curr = root
  items.forEach(n => {
    curr.next = { value: n }
    curr = curr.next
  })
  const head = root.next
  curr.next= head
  return { root, head }
}

const move = (curr, dest) => {
  let pickup = curr.next.next.next
  const res = pickup.next
  pickup.next = dest.next
  dest.next = curr.next
  curr.next = res
  return res
}



const arr = curr => {
  const res = [curr.value]
  let c = curr.next
  while (c != curr) { 
    res.push(c.value)
    c = c.next
  }
  return res
}


const dest = curr => {
  const a = arr(curr)
  const m = a.slice(4, a.length)
  let v = a[0]
  while (true) {
    v = v - 1 
    if (v < 1) v = 9
    const i = m.indexOf(v) 
    if (i >= 0) {
      let n = curr
      for (let j = 0; j < i + 4; j++) { n = n.next }
      return n
    }
  }
}

const part1 = n => {
  const l = list(nums)
  let i = 1, curr = l.head, next
  while (i <= n) {
    next = dest(curr)
    curr = move(curr, next)
    i++
  }
  
  while (curr.value != 1) { curr = curr.next }
  const res = []
  i = 1
  while (i < nums.length) {
    curr = curr.next
    res.push(curr.value)
    i++
  }
  return res.join('')
}

const part2 = () => {

}

const read = require('./read.js')
const nums = read('23')[0].split('').map(v => parseInt(v))
const run = require('./run')
run(part1, 100)
