const lcm = require('./utils/lcm')

const a = Math.sign
const simulate = p => {
  let dv = [0, 0, 0, 0], dp = [0, 0, 0, 0], step = 0, done
  do {
    step++
    dv[0] += a(p[1] - p[0]) + a(p[2] - p[0]) + a(p[3] - p[0])
    dv[1] += a(p[0] - p[1]) + a(p[2] - p[1]) + a(p[3] - p[1])
    dv[2] += a(p[0] - p[2]) + a(p[1] - p[2]) + a(p[3] - p[2])
    dv[3] += a(p[0] - p[3]) + a(p[1] - p[3]) + a(p[2] - p[3])
    p[0] += dv[0]; p[1] += dv[1]; p[2] += dv[2]; p[3] += dv[3]
    dp[0] += dv[0]; dp[1] += dv[1]; dp[2] += dv[2]; dp[3] += dv[3]
    done = dv.reduce((acc, _, i) => acc && (dv[i] === 0), true) &&
      dp.reduce((acc, _, i) => acc && (dp[i] === 0), true)
  } while (!done)
  return step
}

const raw = [
  [16, 4, 17, 13],
  [-8, 10, -5, -3],
  [13, 10, 6, 0]
]

const steps = raw.map(simulate)
const total = lcm(lcm(steps[0], steps[1]), steps[2])
console.log(total)

// 113028, 231614, 102356
// console.log(2*2*3*9419*115807*25589)
