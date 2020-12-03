function twoNumberSum(arr, target) {
  const m = {}
  for (const i of arr) {
    m[i] = true
    const k = target - i
    if (m[k]) return [i, k]
  }
  return []
}

module.exports = twoNumberSum