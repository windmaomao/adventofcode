# Evaluate Expression

Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are `+, -, *, /`. Each operand may be an integer or another expression.

```javascript
["2", "1", "+", "3", "*"] -> 9
["4", "13", "5", "/", "+"] -> 6
```

[Interview Bit](https://www.interviewbit.com/problems/evaluate-expression/)

## Hint

I guess eventually it'll become prefix structure via stack

## Code

```javascript
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

```

