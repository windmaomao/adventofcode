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
      // console.log(count, digits.toString())
    }
  } while (count < 495)

  console.log('Part1:', count, digits)
}

countPasswords()

const isValid2 = pd => {
  for (let i = 0; i <= 4; i++) {
    for (let j = i + 1; j <= 5; j++) {
      if (pd[i] < pd[j]) return false
    }
  }

  const counts = [0,0,0,0,0,0,0,0,0,0]
  pd.forEach(d => {
    counts[d]++
  })  

  for (let k = 0; k < counts.length; k++) {
    if (counts[k] == 2) return true
  }

  return false
}

const countPasswords2 = () => {
  let digits = [...mins]
  let count = 0
  do {
    digits = moveToNext(digits)
    if (isValid2(digits)) {
      count++
      // console.log(count, digits.toString())
    }
  } while (count < 305) // 245, 262, ?, 308

  console.log('Part2:', count, digits)
}

countPasswords2()



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


