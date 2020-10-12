const duplicates = (arr, keyBy = v => `${v}`) => {
  if (arr.length < 2) return []

  const m = {}
  arr.forEach(p => {
    const k = keyBy(p)
    m[k] = m[k] || []
    m[k].push(p)
  })

  return Object
    .values(m)
    .filter(v => v.length > 1)
}

export default duplicates
