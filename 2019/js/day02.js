const Intcode = lines => {
  const ops = lines.slice()
  let i = 0

  const step = () => {
    const op = ops[i]

    const _g = j => ops[ops[i + j]]
    const _s = (j, v) => { ops[ops[i + j]] = v }

    switch (op) {
      case 1: { _s(3, _g(1) + _g(2)); i += 4; break; }
      case 2: { _s(3, _g(1) * _g(2)); i += 4; break; }
    }

    return !(op == 99)
  }

  const run = () => {
    while(step()) {}
    return ops
  }

  return { step, run }
}

const part1 = (ops, noun, verb) => {
  ops[1] = noun
  ops[2] = verb
  return Intcode(ops).run()[0]
}

const part2 = (ops, m) => {
  let noun = 0
  let pv = 0
  while (true) {
    const v = part1(ops, noun, 0)
    if (v > m) {
      return (noun - 1) * 100 + m - pv
    }
    pv = v
    noun++
  }
  return 0
}

export { Intcode, part1, part2 }