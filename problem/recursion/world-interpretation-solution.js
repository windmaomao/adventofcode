function getNeighbors(map, { x, y }) {
  return [
    map[y][x - 1],
    map[y][x + 1],
    map[y - 1] && map[y - 1][x],
    map[y + 1] && map[y + 1][x],
  ].filter(x => x);
}

function blockDeadEnds(map, current, visited = []) {
  visited.push(current);
  const neighbors = getNeighbors(map, current).filter(p => p && p.c !== '#');
  const filtered = neighbors.filter(p => !visited.includes(p));
  const blocked = filtered.filter(p => blockDeadEnds(map, p, visited));
  if (
    filtered.length + 1 === neighbors.length &&
    blocked.length === filtered.length &&
    current.c === '.'
  ) {
    current.c = '#';
    return true;
  }
}

function findNextKeys(map, point, keys) {
  const nextKeys = [];
  let queue = [{ point, distance: 0 }];
  const visited = new Set();
  while (queue.length) {
    const next = queue.shift();
    visited.add(next.point);
    getNeighbors(map, next.point)
      .filter(p => p && p.c !== '#' && !visited.has(p))
      .filter(p => !p.c.match(/[A-Z]/) || keys.includes(p.c.toLowerCase()))
      .forEach(p => {
        if (p.c.match(/[a-z]/) && !keys.includes(p.c)) {
          nextKeys.push({ key: p.c, point: p, distance: next.distance + 1 });
        } else {
          queue.push({ point: p, distance: next.distance + 1 });
        }
      });
  }
  return nextKeys;
}

function calcMemoKey(p, keys) {
  return [
    `(${p.x},${p.y})`,
    keys.sort().join(''),
  ].join(':');
}

function minimumDistance(map, point, keys = [], memo = {}) {
  const memoKey = calcMemoKey(point, keys)
  if (memo[memoKey] == undefined) {
    const nextKeys = findNextKeys(map, point, keys)
    console.log(nextKeys)
    if (nextKeys.length === 0) {
      memo[memoKey] = 0;
    } else {
      const distances = nextKeys.map(x => {
        const nextPoint = x.point
        return (
          x.distance +
          minimumDistance(map, nextPoint, keys.concat([x.key]), memo)
        )
      })
      memo[memoKey] = Math.min(...distances)
    }
  }
  return memo[memoKey]
}

function part1(input) {
  const map = input.slice(1)
    .split('\n')
    .map((line, y) => line.split('').map((c, x) => ({ c, x, y })));
  const line = map.find(line => line.find(p => p.c === '@'));
  const current = line.find(p => p.c === '@');
  blockDeadEnds(map, current);
  return minimumDistance(map, current);
}

const problem1 = `
#########
#b.A.@.a#
#########`

const problem2 = `
########################
#f.D.E.e.C.b.A.@.a.B.c.#
######################.#
#d.....................#
########################`

console.log(part1(problem1))
