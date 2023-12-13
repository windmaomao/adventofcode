require("./array");
const read = require("./read");
const run = require("./run");

const pass = { red: 12, green: 13, blue: 14 };
const part1 = (strs) => {
  return strs
    .map((str) => {
      const p = str.split(": ");
      const id = Number(p[0].split(" ")[1]);
      const cant = p[1].split("; ").some((re) => {
        return re.split(", ").some((color) => {
          const q = color.split(" ");
          return Number(q[0]) > pass[q[1]];
        });
      });
      return cant ? 0 : id;
    })
    .sum();
};

const part2 = (strs) => {
  return strs
    .map((str) => {
      const p = str.split(": ");
      const id = Number(p[0].split(" ")[1]);
      const count = { red: 0, green: 0, blue: 0 };
      p[1].split("; ").forEach((re) => {
        re.split(", ").forEach((color) => {
          const q = color.split(" ");
          if (Number(q[0]) > count[q[1]]) {
            count[q[1]] = Number(q[0]);
          }
        });
      });
      return Object.values(count).multiply();
    })
    .sum();
};

const strs = read("02", "\n");
run(part1, strs);
run(part2, strs);
