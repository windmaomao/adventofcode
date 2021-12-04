function scan(str, regexp) {
  if (!regexp.global) {
    throw new Error("RegExp without global (g) flag is not supported.");
  }
  var result = [];
  var m;
  while (m = regexp.exec(str)) {
    if (m.length >= 2) {
      result.push(m.slice(1));
    } else {
      result.push(m[0]);
    }
  }
  return result;
}

//'22 13 17 11  0'.scan(/[0-9]+/g)
String.prototype.scan = function (re) {
  return scan(this, re)
}

// '12'.toNumbers()
String.prototype.toNumbers = function() {
  return scan(this, /[0-9]+/g).map(v => parseInt(v))
}