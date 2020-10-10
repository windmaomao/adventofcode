const windowed = (arr, size = 2) => {
  const l = arr.length
  if (l < size) return []

  const res = arr.slice()
  for (let i = 0; i < size - 1; i++) res.pop()

  return res.map((v, i) => new Array(size).fill(0).map((_, j) => arr[i+j]))
}

export default windowed