function intervalIntersection(firstList, secondList) {
  let i = 0,
    j = 0,
    res = [];
  while (i < firstList.length && j < secondList.length) {
    let left = Math.max(firstList[i][0], secondList[j][0]);
    let right = Math.min(firstList[i][1], secondList[j][1]);

    if (left <= right) res.push([left, right]);

    if (firstList[i][1] > secondList[j][1]) j++;
    else i++;
  }

  return res;
}
