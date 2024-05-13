require("./array");
const read = require("./read");
const run = require("./run");

const strs = read("04", "\n");

const cardWinning = (strs) => {
  return strs.map((card) => {
    const p = card.split(": ");
    const parts = p[1].split("|");
    const m = {};
    parts[0].match(/\d+/g).forEach((c) => {
      m[c] = true;
    });
    return parts[1].match(/\d+/g).filter((c) => m[c]);
  });
};

const part1 = (strs) => {
  return cardWinning(strs)
    .map((matches) => {
      if (matches.length < 1) return 0;
      return Math.pow(2, matches.length - 1);
    })
    .sum();
};

run(part1, strs);

const part2 = (strs) => {
  const n = strs.length;
  const winnning = cardWinning(strs);
  const cards = [].new(n);

  for (let i = 0; i < n; i++) {
    const l = winnning[i].length;
    cards[i]++;
    if (l < 1) continue;
    for (let j = 0; j < l; j++) {
      const k = i + j + 1;
      cards[k] += cards[i];
    }
  }

  return cards.sum();
};

run(part2, strs);
