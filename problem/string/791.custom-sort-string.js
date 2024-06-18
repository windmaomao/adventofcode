function customSortString(order, s) {
  let times = {};
  for (let i = 0; i < order.length; i++) {
    times[order[i]] = 0;
  }

  for (let j = 0; j < s.length; j++) {
    if (s[j] in times) times[s[j]]++;
  }

  let res = "";
  for (let k of Object.keys(times)) {
    if (times[k]) {
      for (let j = 0; j < times[k]; j++) res += k;
    }
  }
  for (let j = 0; j < s.length; j++) {
    if (!(s[j] in times)) res += s[j];
  }

  return res;
}

console.log(customSortString("cba", "abcd"));
