// 5/31/24
function powerset(a) {
  let n = a.length;
  const res = [];

  function collect(collected, i) {
    if (i == n) {
      res.push([...collected]);
      return;
    }

    collect(collected, i + 1);
    collect([...collected, a[i]], i + 1);
  }

  collect([], 0);
  return res;
}

// Do not edit the line below.
exports.powerset = powerset;
