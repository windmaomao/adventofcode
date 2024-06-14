function validWord(word, abbr) {
  let n = 0,
    j = 0;
  for (let i = 0; i < abbr.length; i++) {
    const c = abbr[i];
    if (c >= "0" && c <= "9") {
      if (n == 0 && c == "0") return false;
      n = n * 10 + parseInt(c);
    } else {
      if (n) {
        j += n;
        n = 0;
      }
      if (word[j] != abbr[i]) return false;
      j++;
    }
  }

  if (n) j += n;
  if (j != word.length) return false;

  return true;
}
