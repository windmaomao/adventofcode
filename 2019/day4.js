const mins = [3, 6, 7, 4, 7, 9].reverse()
// const mins = [4, 4, 4, 4, 4, 4]
const maxs = [8, 9, 3, 6, 9, 8]

const isValid = pd => {
  for (let i=0; i<=4; i++) {
    for (let j=i+1; j<=5; j++) {
      if (pd[i] < pd[j]) return false
    }
  }
  for (let i=0; i<=4; i++) {
    if (pd[i] === pd[i + 1]) {
      return true
    }
  }
  return false
}

const moveToNext = pd => {
  const digits = [...pd]
  let found = false
  let pos = 0
  do {
    digits[pos]++
    if (digits[pos] < 10) {
      if (pos) {
        pos--
        digits[pos] = digits[pos+1]-1
      } else {
        found = true
      }
    } else {
      pos++
    }
  } while(!found)
  return digits
}

const countPasswords = () => {
  let digits = [...mins]
  let count = 0
  do {
    digits = moveToNext(digits)
    if (isValid(digits)) {
      count++
      console.log(count, digits.toString())
    }
  } while (count < 495) //451

  console.log('Count', count, digits)
}

countPasswords()


