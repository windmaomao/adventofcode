const mins = 367479
const maxs = 893698

const isValid = s => {
  let prev = -1
  for (let i = 0; i < s.length; i++) {
    if (s[i] < prev) return false
    prev = s[i]
  }

  const multiples = s.match(/(\d)\1/i)
  if (!multiples) return false

  return true
}

const countPasswords = (validFunc) => {
  let count = 0
  for (let i=mins; i<=maxs; i++) {
    if (validFunc(i.toString())) count++
  }
  return count
}

const isValid2 = s => {
  let prev = -1
  for (let i = 0; i < s.length; i++) {
    if (s[i] < prev) return false
    prev = s[i]
  }

  const multiples = s.match(/(\d)\1+/g)
  if (!multiples) return false
  return multiples.map(m => m.length).includes(2)
}

console.log('Day 4-1 Count:', countPasswords(isValid))
console.log('Day 4-2 Count:', countPasswords(isValid2))

// 367777
// 367778
// 367779
// 367788 x
// 367789 x
// 367799 x
// 367888
// 367889 x
// 367899 x
// 367999 
// 368888 
// 368889
// 368899 x
// 368999
// 369999
// 377777
// 377778 
// 377779
// 377788 x
// 377789
// 377799 x
// 377888 x
// 377889 x
// 377899 x
// 377999 x
// 378888
// 378889
// 378899
// 378999
// 379999
// 388888
// 388889
// 388899
// 388999
// 389999
// 399999
// 444444
// 444445
// 444446
// 444447
// 444448
// 444449
// 444455
// 444456
// 444457
// 444458
// 444459
// 444466
// 444467


