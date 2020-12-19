const ops = ['+', '*', '(', ')']
const getExps = () => {
  return lines.map(str => [...str.match(/(\d+)|[\+\-\*\(\)]/g)]
    .map(s => ((ops.indexOf(s[0]) < 0) ? parseInt(s) : s))
  )
}

const evalExp = exp => {
  let i = 1, res = exp[0], op
  while (i < exp.length)
    {
      const j = exp[i]
      if (typeof j == 'number') {
        switch (op) {
          case '+': res += j; break;
          case '*': res *= j; break;
          default: 
        }
      } else {
        op = j
      }
      i++
    }
  return res
}

const evalBracket = (exp, calc = evalExp) => {
  const stack = []
  let i = 0
  while (i < exp.length) {
    let j = exp[i]
    if (j == ')') {
      const e = []
      while (curr = stack.pop()) {
        if (curr == '(') break
        e.unshift(curr)
      }
      j = calc(e)
    }
    stack.push(j)
    i++
  }
  return calc(stack)
}

const part1 = arr => {
  return arr.map(e => evalBracket(e))
    .reduce((acc, v) => acc + v, 0)
}

const evalExp2 = exp => {
  const op = [], stack = []
  let i = 0
  while (i < exp.length) {
    let j = exp[i]
    if (typeof j == 'number') {
      stack.push(j)
      if (op[op.length - 1] == '+') {
        const n1 = stack.pop(), n2 = stack.pop()
        op.pop(); stack.push(n1 + n2)
      }
    } else {
      op.push(j)
    }
    i++
  }
  return stack.reduce((acc, v) => acc * v, 1)
}

const part2 = arr => {
  return arr.map(e => evalBracket(e, evalExp2))
    .reduce((acc, v) => acc + v, 0)
}

const read = require('./read.js')
const run = require('./run.js')
const lines = read('18')
const exps = getExps()
//console.log(exps)

run(part1, exps)
run(part2, exps)

//console.log(evalExp2([1, '+', 2, '+', 3]))
// 1 2
// * +