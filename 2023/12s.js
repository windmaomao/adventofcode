require("./array");

const parseLine = (str) => {
  const parts = str.split(" ");
  const pattern = parts[0].split("");
  const filled = pattern.filter((c) => c == "#").length;
  const records = parts[1].split(",").map(Number);
  const count = records.sum() - filled;
  const fills = pattern.map((_, i) => i).filter((i) => pattern[i] == "?");

  return {
    pattern,
    records,
    count,
    fills,
  };
};

const str = "???.### 1,1,3";
const parsed = parseLine(str);
console.log(parsed.pattern.join(""));

// given current filled template, start to work on ith ?
// and see if can be matched with next records
const permute = ({ records, fills, count, pattern }) => {
  const solve = (template, index) => {
    if (index == fills.length) {
      console.log(template.join(""));
      return;
    }

    let i = fills[index];
    ["#", "."].forEach((c) => {
      const newTemplate = [...template];
      newTemplate[i] = c;
      solve(newTemplate, index + 1);
    });
  };

  solve(pattern, 0);
};

permute(parsed);
