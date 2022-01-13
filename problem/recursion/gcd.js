const res = []

function gcd(a, b) {
  let r = 0
  res.push([r, a, b])
  if (b == 0) {
    r = a
  } else {
    r = gcd(b, a % b)
    res.push([r, a, b])
  }
  return r
}

//console.log(gcd(461952, 116298))
//console.log(gcd(2*3*5*7*11*13*17,19*23*29*31*37*71))
console.log(gcd(139583862445, 86267571272))
console.table(res)

function gcd1(a, b) {
  return (b == 0) ? a : gcd1(b, a % b)
}

function gcd1b(a, b) {
  if (b) return gcd(b, a % b)
  return a
}

function gcd1c(m, n) {
  function gcd(a, b) {
    return (b == 0) ? a : gcd(b, a % b)
  } 
  return gcd(m, n)
}

function gcd2(a, b) {
  let t
  while (b != 0) {
    t = b
    b = a % b
    a = t
  }
  return a
}

const N = 10
//console.time('recursion')
//for (let i = 0; i < N; i++) { gcd1(461952,116298) }
//console.timeEnd('recursion')

console.time('iteration')
for (let i = 0; i < N; i++) { gcd2(461952,116298) }
console.timeEnd('iteration')