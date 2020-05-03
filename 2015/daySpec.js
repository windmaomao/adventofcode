import './utils'

const daySpec = day => {
  const { prepare, part1, part2, finish } = day()
  const before = prepare || (x => x)
  const after = finish || (x => x)

  const test1 = (data, res) => () => {
    expect(after(part1(before(data)))).toEqual(res)
  }
  
  const test2 = (data, res) => () => {
    expect(after(part2(before(data)))).toEqual(res)
  }

  return { test1, test2 }
}

export default daySpec