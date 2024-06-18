function minAddToMakeValid(s) {
  let res = 0,
    left = 0;
  for (let i = 0; i < s.length; i++) {
    let c = s[i] == "(" ? 1 : -1;
    res += c;
    if (res < 0) {
      left++;
      res++;
    }
  }

  return [res, left];
}
