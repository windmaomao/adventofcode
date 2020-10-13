import '../../utils/js/array'
import { Intcode } from './day05'

const Thruster = ops => {
  const signal = settings => settings
    .reduce((acc, s) => Intcode(ops, [acc, s]).runOutput(), 0)

  const signalR = settings => {
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

  return { signal, signalR }
}

const part1 = ops => {
  const sig = Thruster(ops).signal
  return [0, 1, 2, 3, 4]
    .permute()
    .map(sig)
    .max()
}

const part2 = ops => {
  const sig = Thruster(ops).signalR
  return [5, 6, 7, 8, 9]
    .permute()
    .map(sig)
    .max()
}

export { Thruster, part1, part2 }