// 5/30/24
// https://www.algoexpert.io/questions/longest-peak
function longestPeak(a) {
  if (a.length < 1) return 0;
  if (a.length < 2) return 1;

  const d = [];
  for (let i = 0; i < a.length - 1; i++) {
    d.push(a[i + 1] - a[i]);
  }

  let m = 1,
    c = 0,
    res = [],
    i = 0;
  while (i < d.length) {
    if (m > 0) {
      if (d[i] == 0) {
        m = 1;
        c = 0;
      } else if (d[i] > 0) {
        c++;
      } else if (c && d[i] < 0) {
        c++;
        m = -1;
      } else {
        c = 0;
      }
      i++;
    } else {
      if (d[i] < 0) {
        c++;
        i++;
      } else {
        res.push(c);
        m = 1;
        c = 0;
      }
    }
  }

  if (m < 0 && c) res.push(c);
  console.log(res);
  if (!res.length) return 0;
  return Math.max(...res) + 1;
}

// Do not edit the line below.
exports.longestPeak = longestPeak;
