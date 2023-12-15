require("./array");
const read = require("./read");
const run = require("./run");

const calcType = (card) => {
  const m = {};
  card.split("").forEach((c) => {
    m[c] = m[c] ? m[c] : 0;
    m[c]++;
  });
  const cs = Object.values(m).sort((a, b) => b - a);
  let rank = 0;
  if (cs[0] === 5) {
    rank = 6;
  } else if (cs[0] === 4) {
    rank = 5;
  } else if (cs[0] === 3 && cs[1] === 2) {
    rank = 4;
  } else if (cs[0] === 3 && cs[1] === 1) {
    rank = 3;
  } else if (cs[0] === 2 && cs[1] === 2) {
    rank = 2;
  } else if (cs[0] === 2 && cs[1] === 1) {
    rank = 1;
  }

  return rank;
};

const parseCards = (strs) => {
  return strs.map((str) => {
    const parts = str.split(" ");
    return {
      card: parts[0],
      bid: Number(parts[1]),
      type: calcType(parts[0]),
    };
  });
};

const strs = read("07", "\n");
const cards = parseCards(strs);

const ranks = {
  A: 14,
  K: 13,
  Q: 12,
  J: 11,
  T: 10,
  9: 9,
  8: 8,
  7: 7,
  6: 6,
  5: 5,
  4: 4,
  3: 3,
  2: 2,
};
const part1 = (cards) => {
  const ranked = cards.sort((a, b) => {
    if (a.type !== b.type) {
      return a.type - b.type;
    } else {
      for (let i = 0; i < 5; i++) {
        if (a.card[i] !== b.card[i]) {
          return ranks[a.card[i]] - ranks[b.card[i]];
        }
      }
      return 0;
    }
  });

  return ranked.map((card, i) => card.bid * (i + 1)).sum();
};

run(part1, cards);
