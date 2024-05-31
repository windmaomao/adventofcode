function twoColorable(edges) {
  let valid = true;
  const visited = {};

  function visit(i, color) {
    if (!valid) return;
    if (i in visited) {
      if (visited[i] != color) {
        valid = false;
      }
      return;
    } else {
      visited[i] = color;
    }

    edges[i].forEach((j) => {
      visit(j, 1 - color);
    });
  }

  for (let i = 0; i < edges.length; i++) {
    if (!(i in visited)) visit(i, 0);
  }

  return valid;
}

console.log(
  twoColorable([
    [1, 2],
    [0, 2],
    [0, 1],
  ])
);
