import '../../utils/js/array'

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

    const _g = j => modes[j] ? ops[i + j] : ops[ops[i + j]]
    const _s = (j, v) => { ops[ops[i + j]] = v }
    const _j = v => { i = v }

    switch (op) {
      case 1: { _s(3, _g(1) + _g(2)); _j(i+4); break; }
      case 2: { _s(3, _g(1) * _g(2)); _j(i+4); break; }
      case 3: { _s(1, inputs.pop()); _j(i+2); break; }
      case 4: { outputs.push(_g(1)); _j(i+2); break; }
      case 5: { if (_g(1) != 0) _j(_g(2)); else _j(i+3); break; }
      case 6: { if (_g(1) == 0) _j(_g(2)); else _j(i+3); break; }
      case 7: { _s(3, (_g(1) < _g(2)) ? 1 : 0); _j(i+4); break; }
      case 8: { _s(3, (_g(1) == _g(2)) ? 1 : 0); _j(i+4); break; }
      default: {}
    }
  }

  const halted = () => {
    if (i >= ops.length) return true
    return (ops[i] == 99)
  }

  const run = () => {
    while (!halted()) { step() }
    return ops
  }

  const runOutput = () => {
    run()
    return outputs.last()
  }

  const nextOutput = (ins) => {
    if (ins != undefined) inputs.unshift(ins)
    const p = outputs.length
    while (!halted() && outputs.length == p) { step() }
    return (outputs.length > p) ? outputs.last() : null
  }

  return { step, run, outputs, runOutput, nextOutput }
}

export { Intcode }