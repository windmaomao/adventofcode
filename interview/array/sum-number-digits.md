# Max sum of two integers with same digit sum

```javascript
function sum2(arr) {
    const l = arr.length
    if (l < 2) return -1
    if (l > 2) {
      arr.sort((a, b) => b - a)
    }
    return arr[0] + arr[1]
}

function solution(arr) {
    let m = {}

    arr.map(v => `${v}`
      .split("")
      .reduce((p, c) => p + parseInt(c), 0)
    ).forEach((v, i) => {
        const k = `${v}`
        m[k] = m[k] || []
        m[k].push(arr[i])
    })

    const tmp = Object.values(m).map(sum2)
    return Math.max(...tmp)
}

```