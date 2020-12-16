# Redundant Braces

Given a string **A** denoting an expression. It contains the following operators **’+’, ‘-‘, ‘\*’, ‘/’**.

Chech whether **A** has redundant braces or not.

```javascript
"((a+b))" -> true
"(a+(a+b))" -> false
```

[Interview Bit](https://www.interviewbit.com/problems/redundant-braces/)

## Hint

when pop if no operator is found, it's redundant

## Code

```javascript
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
```