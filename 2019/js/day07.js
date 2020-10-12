import '../../utils/js/array'
import { Intcode } from './day05'

const Thruster = ops => {
  const signal = settings => settings
    .reduce((acc, s) => Intcode(ops, [acc, s]).runOutput(), 0)

  return { signal }
}

const part1 = ops => {
  const sig = Thruster(ops).signal
  return [0, 1, 2, 3, 4]
    .permute()
    .map(sig)
    .max()
}

export { Thruster, part1 }