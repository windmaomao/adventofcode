function list(items) {
  let root = {}, curr = root
  items.forEach(n => {
    curr.next = { value: n }
    curr = curr.next
  })
  const head = root.next
  curr.next= head

  const arr = () => {
    const res = [head.value]
    let c = head.next
    while (c != head) { 
      res.push(c.value)
      c = c.next
    }
    return res.join('')
  }

  return { root, arr }
}

const move = curr => {
  let pickup = curr.next.next.next
  let dest = pickup.next
  pickup.next = dest.next
  dest.next = curr.next
  curr.next = dest
  return dest
}

const part1 = () => {
  const nums = "389125467".split('')
  const l = list(nums)
  let i = 1, curr = l.root.next
  while (i <= 3) {
    console.log(i, l.arr())
    curr = move(curr)
    i++
  }
  
  return l.arr()
}

const read = require('./read.js')
const num = read('23')
const run = require('./run')
const log = require('./log')
run(part1, num)