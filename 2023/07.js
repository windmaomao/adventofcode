require("./array");
const read = require("./read");
const run = require("./run");
const strs = read("07", "\n");

const calcType = (card, ranks, hasJ = false) => {
  const m = {};
  card.split("").forEach((c) => {
    m[c] = m[c] ? m[c] : 0;
    m[c]++;
  });

  let extra = 0;
  if (hasJ) {
    extra = m.J || 0;
    delete m.J;
  }
  const cs = Object.values(m).sort((a, b) => {
    if (a != b) return b - a;
    return ranks[b] - ranks[a];
  });
  if (hasJ) {
    cs[0] += extra;
  }

  let type = 0;
  if (cs[0] === 5) {
    type = 6;
  } else if (cs[0] === 4) {
    type = 5;
  } else if (cs[0] === 3 && cs[1] === 2) {
    type = 4;
  } else if (cs[0] === 3 && cs[1] === 1) {
    type = 3;
  } else if (cs[0] === 2 && cs[1] === 2) {
    type = 2;
  } else if (cs[0] === 2 && cs[1] === 1) {
    type = 1;
  }

  return type;
};

const parseCards = (strs) => {
  return strs.map((str) => {
    const parts = str.split(" ");
    return {
      card: parts[0],
      bid: Number(parts[1]),
    };
  });
};

const sortAndCalc = (cards, ranks) => {
  const sorted = cards.sort((a, b) => {
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
  sorted.forEach((card) => {
    console.log(card.card, card.type);
  });
  return sorted.map((card, i) => card.bid * (i + 1)).sum();
};

const ranks1 = {
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
const part1 = (strs) => {
  const cards = parseCards(strs);
  cards.forEach((card) => {
    card.type = calcType(card.card, ranks1);
  });
  return sortAndCalc(cards, ranks1);
};

run(part1, strs);

const ranks2 = {
  A: 14,
  K: 13,
  Q: 12,
  T: 10,
  9: 9,
  8: 8,
  7: 7,
  6: 6,
  5: 5,
  4: 4,
  3: 3,
  2: 2,
  J: 1,
};
const part2 = (strs) => {
  const cards = parseCards(strs);
  cards.forEach((card) => {
    card.type = calcType(card.card, ranks2, true);
  });
  return sortAndCalc(cards, ranks2);
};

run(part2, strs);
