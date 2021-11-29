const Stack = () => ({
  arr: [],
  push: function(v) { this.arr.push(v) },
  pop: function() { return this.arr.pop() },
  empty: function() { return this.arr.length === 0 },
  size: function() { return this.arr.length },
  peek: function() { return this.arr[this.arr.length - 1] }
})


const s = Stack()
s.push(1)
s.push(2)
s.pop()
console.log(s.size())