require("./array");
require("./string");
const read = require("./read");
const run = require("./run");

const strs = read("17.b", "\n");

function getInfo(strs) {
  const nums = (str) => str.match(/\d+/g).map(Number);
  const a = nums(strs[0])[0];
  const b = nums(strs[1])[0];
  const c = nums(strs[2])[0];

  return { a, b, c, codes: nums(strs[4]) };
}

function runProgram({ a, b, c, codes }) {
  const combo = (j) => {
    switch (j) {
      case 4:
        return a;
      case 5:
        return b;
      case 6:
        return c;
      default:
        return j;
    }
  };

  let i = 0,
    out = [];
  while (i < codes.length) {
    const op = codes[i];
    const v = codes[i + 1];
    switch (op) {
      case 0: // adv
        a = a >> combo(v);
        i += 2;
        break;
      case 1: // bxl
        b = b ^ v;
        i += 2;
        break;
      case 2: // bst
        b = combo(v) & 7;
        i += 2;
        break;
      case 3: // jnz
        if (a) {
          i = v;
        } else {
          i += 2;
        }
        break;
      case 4: // bxc
        b = b ^ c;
        i += 2;
        break;
      case 5: // out
        out.push(combo(v) & 7);
        i += 2;
        break;
      case 6: // bdv
        b = a >> combo(v);
        i += 2;
        break;
      case 7: // cdv
        c = a >> combo(v);
        i += 2;
        break;
    }

    // console.log(a, b, c, i, out);
  }

  return { a, b, c, out: out.join(",") };
}

const part1 = (strs) => runProgram(getInfo(strs));

run(part1, strs);

const part2 = (strs) => {
  let { a, b, c, codes } = getInfo(strs);
  a = 117440;
  return runProgram({ a, b, c, codes });
};

run(part2, strs);
