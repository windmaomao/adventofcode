function all(strs) {
  function pick(n) {
    if (n < 1) return ['']
    const list = pick(n-1)
    const lists = [0, 1, 2].map(i => list.map(s => s + strs[i]))

    return lists[0].concat(lists[1]).concat(lists[2])
  }
  return pick(strs.length)
}
