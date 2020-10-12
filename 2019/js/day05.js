const Intcode = (lines, inputs) => {
  const ops = lines.slice()
  let i = 0

  const step = (input) => {
    const op = ops[i]

    const _g = j => ops[ops[i + j]]
    const _s = (j, v) => { ops[ops[i + j]] = v }

    switch (op) {
      case 1: { _s(3, _g(1) + _g(2)); i += 4; return 0; }
      case 2: { _s(3, _g(1) * _g(2)); i += 4; return 0; }
      case 3: { _s(1, inputs.pop()); i += 2; return 0; }
      case 4: { const res = _g(1); i += 2; return res; }
      default: return -100
    }

  }

  const run = () => {
    let res = 0
    while (i < ops.length
      && (ops[i] != 99)
      && (res == 0)
    ) {
      res = step()
      console.log(res)
    }
    return ops
  }

  return { step, run }
}

const part1 = (ops) => {
  return Intcode(ops).run()
}

export { Intcode, part1 }