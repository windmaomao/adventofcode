const read = require('./read.js')
const arr = read('10').map(v => parseInt(v))

const compare = (a, b) => a - b

const part1 = nums => {
  let i = 0, c1 =0, c3 = 0, p = 0
  while (i < nums.length) {
    const diff = nums[i] - p
    if (diff == 1) c1++
    if (diff == 3) c3++
    p = nums[i]
    i++
  }
  return [c1, c3+1]
}

let tmp = arr.sort(compare)
console.log(tmp)
console.log(part1(tmp))

const part2 = nums => {
  const nums2 = [0, ...nums]
  const res = []
  let i = 1
  while (i < nums2.length - 1) {
    const diff = nums2[i+1] - nums2[i-1]
    if (diff < 3) res.push(nums2[i])
    i++
  }
  return (res)
}

//console.log(subset([5,6,11]))
//console.log(part2(tmp))

//([]), 1, 4, 5, 6, 7, 10, 11, 12, 15, 16, 19, (22)
//([11]), 1, 4, 5, 6, 7, 10, 12, 15, 16, 19, (22)
//([6]), 1, 4, 5, 7, 10, 11, 12, 15, 16, 19, (22)
//([6,11]), 1, 4, 5, 7, 10, 12, 15, 16, 19, (22)
//([5]), 1, 4, 6, 7, 10, 11, 12, 15, 16, 19, (22)
//([5,11]), 1, 4, 6, 7, 10, 12, 15, 16, 19, (22)
//([5,6]), 1, 4, 7, 10, 11, 12, 15, 16, 19, (22)
//([5,6,11]), 1, 4, 7, 10, 12, 15, 16, 19, (22)
//
//[5,6,11]


//19 -> 16
//16 -> 15
//15 -> 12
//12 -> 11, 10
//11 -> 10
//10 -> 7
//7  -> 6, 5
//6  -> 5, 4
//5  -> 4
//4  -> 1


//(0), 1, 2, 3, 4, 7, 8, 9, 10, 11, 14, 17, 18, 19, 20, 23, 24, 25, 28, 31, 32, 33, 34, 35, 38, 39, 42, 45, 46, 47, 48, 49, (52)

//7*7*2*4*7*7
// 49 -> 48, 47, 46
// 48 -> 47, 46, 45
// 47 -> 46, 45
// 46 -> 45
// 45 -> 42
// 42 -> 39
// 39 -> 38
// 38 -> 35
// 35 -> 34, 33, 32
// 34 -> 33, 32, 31
// 33 -> 32, 31
// 32 -> 31
// 31 -> 28
// 28 -> 25
// 25 -> 24, 23
// 24 -> 23
// 23 -> 20
// 20 -> 19, 18, 17
// 19 -> 18, 17
// 18 -> 17
// 17 -> 14
// 14 -> 11
// 11 -> 10, 9, 8
// 10 -> 9, 8, 7
// 9 -> 8, 7
// 8 -> 7
// 7 -> 4
// 4 -> 3, 2, 1
// 3 -> 2, 1, 0
// 2 -> 1, 0
// 1 -> 0

//(5)->7
//(4)->4
//(3)->2
//(2)->1

//5,6,11
//1+3+3+1
//1,2,3,8,9,10,18,19,24,32,33,34,46,47,48
//1+15+..+(-4)+

//1,   2,   3,   4,   7,   8,  11,  12,  13,  14,  15,  18,
//19,  20,  23,  24,  27,  28,  29,  30,  31,  34,  37,  38,
//39,  40,  41,  44,  45,  46,  47,  48,  51,  54,  55,  56,
//59,  60,  61,  62,  63,  66,  67,  68,  69,  70,  73,  74,
//75,  76,  77,  80,  81,  82,  83,  84,  87,  88,  89,  90,
//91,  94,  95,  96,  97,  98, 101, 104, 105, 108, 109, 110,
//111, 112, 115, 118, 119, 120, 121, 124, 125, 126, 129, 130,
//131, 132, 133, 136, 137
//
//5*5*3*5*5*5*3*5*5*5*5*5*5*5*4*3*5
//7*7*2*7*7*7*2*7*7*7*7*7*7*7*4*2*7
//131,835,937,500 too low