function Stack(d) {
  const s = d || []
  
  const push = v => { s.push(v) }
  const pop = () => s.pop()
  const empty = () => s.length == 0
  const peek = () => s[s.length - 1]
  
  return { push, pop, empty, peek, s }
}

function longestSubstring(str) {
  const st = Stack() 
  let largest = 0
  
  const num = () => {
    let c = 0
    while (!st.empty() 
      && (typeof st.peek() == 'number')
    ) {
      c += st.pop()
    }
    if (c > largest) largest = c
    return c
  }
  
  for (const c of str) {
    if (c == ')') {
      let count = num()
      if (!st.empty() && st.peek() == '(') {
        st.pop()
        count += 2
        st.push(count)
      } else {
        if (count) st.push(count)
        st.push(c)
      }
    } else {
      let count = num()
      if (count) st.push(count)
      st.push(c)
    }
    console.log(c, st.s.join(''))
  }
  
  let count = num()
  if (count) st.push(count)
  
  return [largest, st.s]
}

//console.log(longestSubstring('(()))('))
//console.log(longestSubstring('())()(()())'))
console.log(longestSubstring('(((()))()())))(()()()())()()'))
//console.log(longestSubstring('((()))()()()()()()()()()()'))
//console.log(longestSubstring('(((((((((((((()(()()'))
//console.log(longestSubstring(')))(()(()(()()()((()'))