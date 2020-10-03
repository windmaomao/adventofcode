// https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
Number.prototype.mod = function(n) {
  return ((this%n)+n)%n
}
