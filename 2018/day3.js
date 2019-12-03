const claims = [
  '#1 @ 1,3: 4x4',
  '#2 @ 3,1: 4x4',
  '#3 @ 5,5: 2x2'
]

const claimsPos = [
  { l: 1, t: 3, w: 4, h: 4 },
  { l: 3, t: 1, w: 4, h: 4 },
  { l: 5, t: 5, w: 2, h: 2 },
]

const size = 6
const arr = Array.from(Array(size), () => new Array(size))

const fillClaim = (l, t, w, h) => {
  var i,j
  for (i=l-1; i<l+w-1; i++) {
    for (j=t-1; j<t+h-1; j++) {
      arr[i][j] = arr[i][j] ? arr[i][j] + 1 : 1
    }
  }
}

const countArr = () => {
  let c = 0;
  for (i=0; i<size; i++) {
    for (j=0; j<size; j++) {
      if (arr[i][j]>1) {
        c++
      }
    }
  }
  return c
}

fillClaim(1, 3, 4, 4)
fillClaim(3, 1, 4, 4)
fillClaim(5, 5, 2, 2)
console.log(countArr(arr))
