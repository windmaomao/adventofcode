import '../../utils/js/array'
import { Intcode } from './day05'

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
    let pout = null
    let out = 0

    while (out != null) {
      pout = out
      out = ths.reduce((res, th) => th.nextOutput(res), out)
    }

    return pout
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