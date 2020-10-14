import '../../utils/js/array'
// import { Intcode } from './day05'

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

  const halted = () => ops[i] == 99

  const nextOutput = () => {
    const p = outputs.length
    while (!halted() && outputs.length == p) { step() }
    return (outputs.length > p) ? outputs.last() : null
  }

  // const runIO = ins => {
  //   inputs.unshift(ins)
  //
  //   let res = false
  //   while (!halted() && (res === false)) {
  //     res = step()
  //   }
  //   return [res, halted()]
  // }

  return { step, outputs, nextOutput }
}

const Thruster = ops => {
  const signal = settings => settings
    .reduce((acc, s) => Intcode(ops, [acc, s]).nextOutput(), 0)
  return { signal }
}

const part1 = ops => {
  const sig = Thruster(ops).signal
  return [0, 1, 2, 3, 4]
    .permute()
    .map(sig)
    .max()
}

const ThrusterR = ops => {
  const signal = settings => {
    const ths = settings.map(s => Intcode(ops, [s]))
    const outputs = []

    let res2 = [0, false]
    while (!res2[1]) {
      res2 = ths.reduce((res, th) => {
        return th.runIO(res[0])
      }, res2)
      outputs.push(res2[0])
    }

    return outputs.last()
  }

  return { signal }
}

const part2 = ops => {
  const sig = ThrusterR(ops).signal
  return [5, 6, 7, 8, 9]
    .permute()
    .map(sig)
    .max()
}

export { Thruster, part1, ThrusterR, part2 }