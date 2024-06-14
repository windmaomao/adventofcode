function minRemoveToMakeValid(s) {
  let res = [],
    count = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c == "(") {
      res.push(c);
      count++;
    } else if (c == ")") {
      if (count > 0) {
        res.push(c);
        count--;
      }
    } else {
      res.push(c);
    }
  }

  let s1 = res.join("");

  let res2 = [],
    count2 = 0;
  for (let i = s1.length - 1; i >= 0; i--) {
    const c = s1[i];
    if (c == ")") {
      res2.push(c);
      count2++;
    } else if (c == "(") {
      if (count2 > 0) {
        res2.push(c);
        count2--;
      }
    } else {
      res2.push(c);
    }
  }

  return res2.reverse().join("");
}

console.log(minRemoveToMakeValid("lee(t(c)o)de)"));
console.log(minRemoveToMakeValid("a)b(c)d"));
console.log(minRemoveToMakeValid("))(("));
