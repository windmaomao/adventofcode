function Heap() {
  const arr = [0]

  const size = () => arr.length - 1

  const _up = () => {
    let i = size()
    while (i / 2 > 0) {
      if (arr[i] < arr[i / 2]) {
        const tmp = arr[i]
        arr[i] = arr[i / 2]
        arr[i / 2] = tmp
      }
      i = i / 2
    }
  }

  const add = v => {
    arr.push(v)
    _up()
    return this
  }

  const _min = i => {
    const c = i * 2
    if (c + 1 > size()) return c
    return (arr[c] < arr[c + 1]) ? c : c + 1
  }

  const _down = () => {
    let i = 1
    const len = size()
    while (i * 2 <= len) {
      const c = _min(i)
      if (arr[i] > arr[c]) {
        const tmp = arr[c]
        arr[c] = arr[i]
        arr[i] = tmp
      }
      i = c
    }
  }

  const pop = () => {
    const len = size()
    if (len < 1) return null

    const res = arr[1]
    arr[1] = arr[len]
    arr.pop()
    _down()
    return res
  }

  const toArray = () => {
    const b = arr.slice()
    b.shift()
    return b
  }

  return {
    size, add, pop,
    toArray
  }
}

export default Heap