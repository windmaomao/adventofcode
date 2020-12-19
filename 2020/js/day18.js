const ops = ['+', '-', '*', '/', '(', ')']
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
          case '-': res -= j; break;
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

const evalStack = exp => {
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
      j = evalExp(e)
    }
    stack.push(j)
    i++
  }
  return evalExp(stack)
}

const part1 = arr => {
  return arr.map(e => evalStack(e))
    .reduce((acc, v) => acc + v, 0)
}

const read = require('./read.js')
const run = require('./run.js')
const lines = read('18')
const exps = getExps()
//console.log(exps)

run(part1, exps)