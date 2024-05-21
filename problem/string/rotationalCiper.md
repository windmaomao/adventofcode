Rotational Cipher
One simple way to encrypt a string is to "rotate" every alphanumeric character by a certain amount. Rotating a character means replacing it with another character that is a certain number of steps away in normal alphabetic or numerical order.
For example, if the string "Zebra-493?" is rotated 3 places, the resulting string is "Cheud-726?". Every alphabetic character is replaced with the character 3 letters higher (wrapping around from Z to A), and every numeric character replaced with the character 3 digits higher (wrapping around from 9 to 0). Note that the non-alphanumeric characters remain unchanged.
Given a string and a rotation factor, return an encrypted string.
Signature
string rotationalCipher(string input, int rotationFactor)
Input
1 <= |input| <= 1,000,000
0 <= rotationFactor <= 1,000,000
Output
Return the result of rotating input a number of times equal to rotationFactor.
Example 1
input = Zebra-493?
rotationFactor = 3
output = Cheud-726?

```js
function buildTable(k) {
  let m = {}
  let from, to
  
  const lowers = 'abcdefghijklmnopqrstuvwxyz'
  const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  new Array(26).fill(0).forEach((_, i) => {
    from = lowers[i]
    to = (i + k) % 26
    m[from] = lowers[to]
    from = uppers[i]
    to = (i + k) % 26
    m[from] = uppers[to]
  })
  
  const digits = '0123456789'
  new Array(10).fill(0).forEach((_, i) => {
    from = digits[i]
    to = (i + k) % 10
    m[from] = digits[to]
  })
  
  return m
}

function rotationalCiper(input, rotationFactor) {
  const m = buildTable(rotationFactor)
  return new Array(input.length).fill(0)
    .map((_, i) => m[input[i]] || input[i])
    .join('')
}

//console.log(buildTable(3))
console.log(rotationalCiper('Zebra-493?', 3))
```

