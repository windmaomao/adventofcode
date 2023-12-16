// https://stackoverflow.com/questions/62854395/permutation-on-arrays-without-duplicate-and-fixed-length

function permute(array, length) {
  return array.flatMap((v, i) =>
    length > 1
      ? permute(array.slice(i + 1), length - 1).map((w) => [v, ...w])
      : [[v]]
  );
}

module.exports = permute;
