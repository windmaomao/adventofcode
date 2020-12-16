# Stack

```javascript
function Stack(d) {
  this.data = d || []
}

Stack.prototype.push = function(a) {
  this.data.push(a)
  return this
}

Stack.prototype.pop = function() {
  return this.data.pop()
}

Stack.prototype.empty = function() {
  return this.data.length < 1
}

Stack.prototype.peek = function() {
  return this.data[this.data.length - 1]
}

const s = new Stack()
s.push(1).push(2)
console.log(s.pop())

```

