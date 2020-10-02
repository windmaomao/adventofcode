function f(n) {
  if (n < 1) return [0, 0]
  if (n < 2) return [1, 0]

  const [c, p] = f(n-1)
  return [c+p, c]
}
