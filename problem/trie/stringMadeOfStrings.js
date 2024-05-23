// https://www.algoexpert.io/questions/strings-made-up-of-strings
function canBeMade(str, list) {
  const options = list.filter(
    (s) => str.length >= s.length && str.startsWith(s)
  );
  let can = false;
  for (let o of options) {
    if (can) continue;
    if (o.length < str.length) {
      can = canBeMade(str.slice(o.length), list);
    } else {
      can = true;
    }
  }
  return can;
}

function stringsMadeUpOfStrings(strings, substrings) {
  return strings.filter((str) => canBeMade(str, substrings));
}

console.log(
  stringsMadeUpOfStrings(
    ["bar", "are", "foo", "ba", "b", "barely"],
    ["b", "a", "r", "ba", "ar", "bar"]
  )
);
