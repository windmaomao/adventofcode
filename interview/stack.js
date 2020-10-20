function Stack(d) {
  this.data = d || []
}

Stack.prototype.push = function(a) {
  this.data.push(a)
  return this
}

Stack.prototype.pop = function() {
  return this.data.pop()
}

Stack.prototype.empty = function() {
  return this.data.length < 1
}

Stack.prototype.peek = function() {
  return this.data[this.data.length - 1]
}


const s = new Stack()
s.push(1).push(2)

console.log(s.pop())

// https://www.interviewbit.com/problems/simplify-directory-path/
// .. closes the bracket therefore ignored afterwards
const res = str
  .split("/")
  .reduce((s, p) => {
    switch(p) {
      case '..': s.pop(); break;
      case '.': break;
      default: s.push(p)
    }
    return s
  }, new Stack())

const res2 = res.data
  .filter(p => !!p)

console.log(res2)


// https://www.interviewbit.com/problems/redundant-braces/
// when pop if no operator is found, it's redundant
const str = "(a + (a + b))"
const ops = "+-*/()"

const res = str
  .split("")
  .reduce((acc, p) => {
    const i = ops.indexOf(p)
    if (i < 0) return acc
    if (i < 5) { acc.s.push(p); return acc }
    let out = acc.s.pop()
    if (out == "(") { acc.r++ }
    while (out != "(") { out = acc.s.pop() }
    return acc
  }, { s: new Stack(), r: 0 })

console.log(res)


// https://www.interviewbit.com/problems/nearest-smaller-element/
// I don't need history of past min stack once a smallest is found
const res = A.reduce((acc, p) => {
  const { s, r } = acc

  let found = false
  let n = -1
  while (!found) {
    n = s.empty() ? -1 : s.peek()
    if (p > n) {
      s.push(p)
      found = true
    } else {
      s.pop()
    }
  }

  r.push(n)

  return acc
}, { s: new Stack(), r: [] })

return res.r

// https://www.interviewbit.com/problems/largest-rectangle-in-histogram/
// https://medium.com/@dimko1/largest-rectangle-in-histogram-bbd7c1e1158
// if next item is smaller, then the information can be gathered up til now
const arr = [ 90, 58, 69, 70, 82, 100, 13, 57, 47, 18 ]
const ps = new Stack([-1])

const res = arr.reduce((acc, p, i, a) => {
  const { s } = acc

  while ((s.peek() != -1) && a[s.peek()] >= p) {
    const j = s.pop()
    const pk = s.peek()
    acc.r = Math.max(acc.r, a[j] * (i - 1 - pk))
  }
  s.push(i)

  if (i == a.length - 1) {
    while ((s.peek() != -1)) {
      const j = s.pop()
      const pk = s.peek()
      acc.r = Math.max(acc.r, a[j] * (a.length - pk - 1))
    }
  }

  return acc
}, { s: ps, r: 0 })

console.log(res)


// https://www.interviewbit.com/problems/evaluate-expression/
// I guess eventually it'll become prefix structure via stack
const arr = ["2", "1", "+", "3", "*"]
const ops = "+-*/"

const res = arr.reduce((acc, p) => {
  const { s } = acc

  const op = ops.indexOf(p)
  if (op < 0) {
    s.push(parseInt(p))
  } else {
    const a = s.pop()
    const b = s.pop()
    switch(op) {
      case 0: acc.r = b + a; break;
      case 1: acc.r = b - a; break;
      case 2: acc.r = b * a; break;
      case 3: acc.r = Math.floor(b / a); break;
    }
    s.push(acc.r)
  }

  return acc
}, { s: new Stack(), r: undefined })

console.log(res.s.pop())



