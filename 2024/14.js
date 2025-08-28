require("./array")
const read = require("./read")
const run = require("./run")

const strs = read("14", "\n")
const nums = strs.map((str) =>
  str.match(/-?\d+/g).map(Number)
)
const m = nums.map((arr) => arr[0]).max() + 1
const n = nums.map((arr) => arr[1]).max() + 1

function countRobots(pos) {
  const [mx, my] = [(m - 1) / 2, (n - 1) / 2]
  let [c0, c1, c2, c3] = [0, 0, 0, 0]
  for (let i = 0; i < pos.length; i++) {
    const [x, y] = pos[i]
    if (x < mx && y < my) c0++
    if (x < mx && y > my) c2++
    if (x > mx && y < my) c1++
    if (x > mx && y > my) c3++
  }
  return [c0, c1, c2, c3]
}

const part1 = (nums) => {
  const seconds = 100
  const pos = nums.map(([x, y, u, v]) => {
    let nx = (((x + seconds * u) % m) + m) % m
    let ny = (((y + seconds * v) % n) + n) % n
    return [nx, ny]
  })
  return countRobots(pos).multiply()
}

run(part1, nums)

function genPicture(pos) {
  const pic = new Array(m)
    .fill(0)
    .map((_) => new Array(n).fill(0))

  for (let i = 0; i < pos.length; i++) {
    const [x, y] = pos[i]
    pic[x][y]++
  }
  return pic
    .map((a) => a.map((c) => c || ".").join(""))
    .join("\n")
}

const part2 = (nums) => {
  let seconds = 0,
    pos
  while (true) {
    pos = nums.map(([x, y, u, v]) => {
      let nx = (((x + seconds * u) % m) + m) % m
      let ny = (((y + seconds * v) % n) + n) % n
      return [nx, ny]
    })
    const [c0, c1, c2, c3] = countRobots(pos)
    if (c0 == c1 && c2 == c3) {
      console.log(seconds, ")", c0, c1, c2, c3)
      console.log(genPicture(pos))
      console.log("")
      break
    }
    seconds++
  }
}

run(part2, nums)
