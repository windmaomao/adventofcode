function list(items) {
  let root = {}, curr = root
  items.forEach(n => {
    curr.next = { value: n }
    curr = curr.next
  })
  curr.next= root.next

  const arr = () => {
    let c = root.next
    const res = []
    while (c.next != root.next) { 
      res.push(c.value)
      c = c.next 
    }
    return res
  }

  return { root, arr }
}

const part1 = () => {
  const nums = "389125467".split('')
  
  return list(nums).arr()
}

const read = require('./read.js')
const num = read('23')
const run = require('./run')
run(part1, num)