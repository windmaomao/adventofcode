let n = 20151125 
let i = 1, j = 1, done = false

while (!done) {

  // console.log(i, j, n)

  if (i>1) {
    i--; j++
  } else {
    i = i+j; j=1
  }

  n = n * 252533 % 33554393

  done = (i===3010 && j ===3019)
}
console.log(n) 