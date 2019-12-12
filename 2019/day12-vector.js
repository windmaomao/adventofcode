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

console.log(simulate([16, 4, 17, 13]))

// const po = [-1, 2, 4, 3]
// const po = [0, -10, -8, 5]
// const po = [2, -7, 8, -1]

  // < x=16, y = -8, z = 13 >
  //   <x=4, y = 10, z = 10 >
  //     <x=17, y = -5, z = 6 >
  //       <x=13, y = -3, z = 0 >

// const po = [16,4,17,13]
// const po = [-8,10,-5,-3]
// const po = [13,10,6,0]



// 8, 5, 3, 3 = 3*5*8
// 11, 16, 13, 16 = 16*11*13
// 5, 16, 16, 5 = 5*16

// = 3*5*11*13*16

// 2772 = 3*7*11*12

// 9, 14, 22 = 2*2772
  //  3, 3, 2, 7, 11 = 1386

// 56514, 115807, 51178

// console.log(2*3*9419*115807*25589*2)

// two low

// 113028, 231614, 102356
console.log(2*2*3*9419*115807*25589)
