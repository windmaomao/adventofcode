const Intcode = (lines, inputs) => {
  const ops = lines.slice()
  const outputs = []
  let i = 0

  const _modes = op => `${op}`
    .padStart(5, '0')
    .substring(0, 4)
    .split('')
    .reverse()
    .map(Number)

  const step = (input) => {
    const modes = _modes(ops[i])
    const op = ops[i] % 100
    let output = 0

    const _g = j => modes[j] ? ops[i + j] : ops[ops[i + j]]
    const _s = (j, v) => { ops[ops[i + j]] = v }

    switch (op) {
      case 1: { _s(3, _g(1) + _g(2)); i += 4; break; }
      case 2: { _s(3, _g(1) * _g(2)); i += 4; break; }
      case 3: { _s(1, inputs.pop()); i += 2; break; }
      case 4: { output = _g(1); i += 2; break; }
      default: { output = -100; }
    }

    return output
  }

  const run = () => {
    let res = 0
    while (i < ops.length
      && (ops[i] != 99)
      && (res == 0)
    ) {
      res = step()
      outputs.push(res)
    }
    return ops
  }

  return { step, run, outputs }
}

const part1 = (ops) => {
  return Intcode(ops).run()
}

export { Intcode, part1 }