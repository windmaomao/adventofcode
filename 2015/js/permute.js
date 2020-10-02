const PermuteState = (arr, all) => {
  const a = []
  const m = {}
  const _k = v => `${v}`
  const addNext = v => {
    a.push(v)
    m[_k(v)] = true
  }

  arr.forEach(addNext)

  const possibleNexts = () => all.filter(v => !m[_k(v)])

  return {
    getArr: () => a,
    getHashmap: () => m,
    addNext,
    possibleNexts
  }
}

function permute(all) {
  const list = []

  function nextPermute(state) {
    const nexts = state.possibleNexts()
    if (nexts.length < 1) {
      list.push(state.getArr())
      return
    }

    nexts.forEach(v => {
      const stateNew = PermuteState(state.getArr(), all)
      stateNew.addNext(v)
      nextPermute(stateNew)
    })
  }

  nextPermute(PermuteState([], all))
  return list
}

export { PermuteState }
export default permute
