const filereader = require('./utils/filereader.js')
const day2States = filereader.readFile('/day2.data', ',', true)

const compDay2States = arr => {
  let i = 0
  let done = false
  do {
    const op = arr[i]
    const a = arr[i + 1], b = arr[i + 2], p = arr[i + 3]
    switch (op) {
      case 1:
        arr[p] = arr[a] + arr[b]
        break;
      case 2:
        arr[p] = arr[a] * arr[b]
        break;
      case 99:
        done = true
        break;
    }

    // next op
    i = i + 4
    done = (i >= arr.length) || arr[i] === 99
  } while (!done)
  return arr
}

const day21States = [...day2States]
day21States[1] = 12
day21States[2] = 2

console.log('Day 2/1 - Comp:', compDay2States(day21States)[0])

const day22States = [...day2States]
day22States[1] = 62
day22States[2] = 55

console.log('Day 2/1 - Comp:', compDay2States(day22States)[0])


// 19690720
// const day2States = [1, 0, 0, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 1, 9, 19, 1, 19, 5, 23, 1, 13, 23, 27, 1, 27, 6, 31, 2, 31, 6, 35, 2, 6, 35, 39, 1, 39, 5, 43, 1, 13, 43, 47, 1, 6, 47, 51, 2, 13, 51, 55, 1, 10, 55, 59, 1, 59, 5, 63, 1, 10, 63, 67, 1, 67, 5, 71, 1, 71, 10, 75, 1, 9, 75, 79, 2, 13, 79, 83, 1, 9, 83, 87, 2, 87, 13, 91, 1, 10, 91, 95, 1, 95, 9, 99, 1, 13, 99, 103, 2, 103, 13, 107, 1, 107, 10, 111, 2, 10, 111, 115, 1, 115, 9, 119, 2, 119, 6, 123, 1, 5, 123, 127, 1, 5, 127, 131, 1, 10, 131, 135, 1, 135, 6, 139, 1, 10, 139, 143, 1, 143, 6, 147, 2, 147, 13, 151, 1, 5, 151, 155, 1, 155, 5, 159, 1, 159, 2, 163, 1, 163, 9, 0, 99, 2, 14, 0, 0]
// const states = [1,9,10,3,2,3,11,0,99,30,40,50]

