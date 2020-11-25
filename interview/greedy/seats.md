# Seats

There is a row of seats. Assume that it contains N seats adjacent to each other. There is a group of people who are already seated in that row randomly. i.e. some are sitting together & some are scattered.

An occupied seat is marked with a character 'x' and an unoccupied seat is marked with a dot ('.')

Now your target is to make the whole group sit together i.e. next to each other, without having any vacant seat between them in such a way that the total number of hops or jumps to move them should be minimum.

Return minimum value % MOD where MOD = 10000003

```
  '..x..x..' -> 2
  '....x..xx...x..' -> 5
  'xx.....xx.x..xxxx..xxxx.xx..xx..x.xxxx' -> 79
  'xxx.x..x....xx.x..x........xxxxx.xx..' -> 112
```

## Notes

  Look for surrounding, and move towards it.

## Code
```javascript
function togather(str) {
  const n = str.length
  const seats = str.split('')

  const move = i => {
    const range = Math.max(...[n - i, i + 1, 3])
    let dir = 0
    for (let j = 1; j < range; j++) {
      if (i+j < n && seats[i+j] == 'x') dir++
      if (i-j >=0 && seats[i-j] == 'x') dir--
    }
    const sign = Math.sign(dir)
    return seats[i+sign] != 'x' ? i+sign : i
  }
  console.log(seats.join(''))

  let done = false
  let moves = 0
  while (!done && moves < 113) {

    let changed = false
    for (let i = 0; i < n; i++) {
      if (seats[i] == '.') continue

      const next = move(i)
//      console.log(i, next)
      if (next != i) {
        seats[i] = '.'
        seats[next] = 'x'
        moves++
        changed = true
      }
    }
    console.log(seats.join(''))
    if (!changed) done = true

    moves = moves % 10000003
  }

  return moves
}

```