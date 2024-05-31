function getPermutations(a) {
  const n = a.length;
  let res = [];

  function collect(collected) {
    if (collected.length == n) {
      res.push([...collected]);
      return;
    }

    a.filter((v) => !collected.includes(v)).forEach((v) =>
      collect([...collected, v])
    );
  }

  collect([]);
  return res;
}

console.log(getPermutations([1, 2, 3]));
