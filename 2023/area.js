// shoelace formula, given vertices [[x1,y1], [x2,y2]]
function area(v) {
  const n = v.length;
  let area = 0.0;
  let j = n - 1;
  for (let i = 0; i < n; i++) {
    area += (v[j][0] + v[i][0]) * (v[j][1] - v[i][1]);
    j = i;
  }

  return Math.abs(area / 2.0);
}

module.exports = area;
