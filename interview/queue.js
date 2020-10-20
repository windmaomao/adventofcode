function Queue(d) {
  this.data = d || []
}

Queue.prototype.en = function(a) {
  this.data.unshift(a)
}

Queue.prototype.de = function() {
  return this.data.pop()
}

Queue.prototype.empty = function() {
  return this.data.length < 1
}

Queue.prototype.peek = function() {
  return this.data[this.data.length - 1]
}

const str = "jyhrcwuengcbnuchctluxjgtxqtfvrebveewgasluuwooupcyxwgl"

const res = str.split('').reduce((acc, c) => {
  if (!acc.m[c]) {
    const ol = acc.q.data.length
    acc.q = new Queue(acc.q.data.filter(v => v != c))
    const found = acc.q.data.length != ol

    if (found) {
      acc.m[c] = true
    } else {
      acc.q.en(c)
    }
  }

  acc.r.push(acc.q.empty() ? '#' : acc.q.peek())

  return acc
}, { m: {}, q: new Queue(), r: [] })