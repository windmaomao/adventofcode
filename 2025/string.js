String.prototype.replaceAt = function (index, char) {
  var a = this.split("")
  a[index] = char
  return a.join("")
}
