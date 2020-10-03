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

String.prototype.scan = function (re) {
  return scan(this, re)
}

