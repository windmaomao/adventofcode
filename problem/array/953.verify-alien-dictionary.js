function isAlienSorted(words, order) {
  const m = {};
  for (let i = 0; i < order.length; i++) {
    m[order[i]] = i;
  }

  function lessEqual(a, b) {
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
      let oa = m[a[i]],
        ob = m[b[i]];
      if (oa < ob) return true;
      if (oa > ob) return false;
    }
    return a.length <= b.length;
  }

  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (!lessEqual(words[i], words[j])) return false;
    }
  }

  return true;
}

console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));
console.log(
  isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz")
);
console.log(isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz"));
console.log(isAlienSorted(["kruw", "ha", "q"], "zgxlkthsjuoqcpavbfdermiywn"));
