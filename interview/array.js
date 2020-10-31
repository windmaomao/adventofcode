/**
 * Largest Number
 * Given a list of non negative integers, arrange them such that they form the largest number.
 * https://www.interviewbit.com/problems/largest-number/
 */
const A = [3, 30, 34, 5, 9]

const compare = (n1, n2) => {
  const s1 = parseInt(`${n1}${n2}`, 10)
  const s2 = parseInt(`${n2}${n1}`, 10)
  return s2 - s1
}

A.sort(compare);

console.log(A)

/**
 * Max Sum Contiguous Subarray
 * Find the contiguous subarray within an array, A of length N which has the largest sum.
 * https://www.interviewbit.com/problems/max-sum-contiguous-subarray/
 */
const A = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

let m = -10000000
let i = 0
let s = 0

while (i < A.length) {
  s += A[i]
  if (s > m) { m = s }
  if (s < 0) { s = 0 }
  i++
}

console.log(m)

