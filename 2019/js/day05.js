import '../../utils/js/array'

const Intcode = (lines) => {
  const ops = lines.slice()
  const inputs = []
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
    const _j = v => { i = v }

    switch (op) {
      case 1: { _s(3, _g(1) + _g(2)); _j(i+4); break; }
      case 2: { _s(3, _g(1) * _g(2)); _j(i+4); break; }
      case 3: { _s(1, inputs.pop()); _j(i+2); break; }
      case 4: { output = _g(1); _j(i+2); break; }
      case 5: { if (_g(1) != 0) _j(_g(2)); else _j(i+3); break; }
      case 6: { if (_g(1) == 0) _j(_g(2)); else _j(i+3); break; }
      case 7: { _s(3, (_g(1) < _g(2)) ? 1 : 0); _j(i+4); break; }
      case 8: { _s(3, (_g(1) == _g(2)) ? 1 : 0); _j(i+4); break; }
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
      if (res) outputs.push(res)
    }
    return ops
  }

  const runOutput = (a) => {
    inputs.push(a)
    run()
    return outputs.last()
  }

  return { step, run, outputs, runOutput }
}

export { Intcode }