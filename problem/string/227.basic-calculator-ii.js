const isDigit = (c) => c >= "0" && c <= "9";
const isWhite = (c) => c == " ";

function calculate(s) {
  let num = 0,
    stack = [],
    op = "+";
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (isDigit(c)) num = num * 10 + (c - "0");
    if ((!isDigit(c) && !isWhite(c)) || i == s.length - 1) {
      if (op == "+") stack.push(num);
      else if (op == "-") stack.push(-num);
      else if (op == "*") {
        stack.push(stack.pop() * num);
      } else if (op == "/") {
        stack.push(Math.trunc(stack.pop() / num));
      }
      op = c;
      num = 0;
      console.log(stack);
    }
  }

  let res = 0,
    curr;
  while ((curr = stack.pop()) != undefined) res += curr;
  return res;
}

//console.log(calculate('2*2'))
//console.log(calculate('3/2'))
//console.log(calculate('22-3*5'))
//console.log(calculate('3+5 / 1 '))
//console.log(calculate('14-3/2'))
console.log(calculate("1*2-3/4+5*6-7*8+9/10"));

const isDigit = (c) => c >= "0" && c <= "9";
const isWhite = (c) => c == " ";

function calculate(s) {
  let res = 0;
  let num = 0,
    stack = [],
    op = "+",
    prevNum = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (isDigit(c)) num = num * 10 + (c - "0");
    if ((!isDigit(c) && !isWhite(c)) || i == s.length - 1) {
      //    console.log(prevNum, num, res)
      if (op == "*") {
        prevNum = prevNum * num;
      } else if (op == "/") {
        prevNum = Math.trunc(prevNum / num);
      } else if (op == "+" || op == "-") {
        res += prevNum;
        prevNum = op == "+" ? num : -num;
      }
      op = c;
      num = 0;
    }
  }

  return res + prevNum;
}

console.log(calculate("2*2"));
console.log(calculate("3/2"));
console.log(calculate("22-3*5"));
console.log(calculate("3+5 / 2 "));
console.log(calculate("14-3/2"));
console.log(calculate("1*2-3/4+5*6-7*8+9/10"));
