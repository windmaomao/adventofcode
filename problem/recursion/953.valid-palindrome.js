function validPalindrome(s) {
  function isValid(i, j, k) {
    if (k == 2) return false;
    if (i >= j) return true;

    if (s[i] == s[j]) return isValid(i + 1, j - 1, k);
    return isValid(i + 1, j, k + 1) || isValid(i, j - 1, k + 1);
  }

  return isValid(0, s.length - 1, 0);
}

console.log(validPalindrome("aba"));
console.log(validPalindrome("abca"));
console.log(validPalindrome("abc"));
