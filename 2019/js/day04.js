const numValid = num => {
  const s = `${num}`
  if (!s.match(/(.)\1/g)) return false

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] > s[i+1]) return false
  }

  return true
}

export { numValid }