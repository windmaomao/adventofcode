require("./array");
const read = require("./read");
const run = require("./run");
const strs = read("19", "\n");

const parseRules = (strs) => {
  const [workflows, items] = strs.split("");

  const parts = items.map((str) => {
    return str
      .slice(1, -1)
      .split(",")
      .reduce((acc, p) => {
        const [name, num] = p.split("=");
        acc[name] = Number(num);
        return acc;
      }, {});
  });

  const parseCondition = (seg) => {
    const k = seg.indexOf(":");
    if (k < 0) return seg;
    const s = seg.slice(0, k);
    return [s[0], s[1], Number(s.slice(2)), seg.slice(k + 1)];
  };

  const rules = workflows.reduce((obj, str) => {
    const i = str.indexOf("{");
    const name = str.slice(0, i);
    obj[name] = str
      .slice(i + 1, -1)
      .split(",")
      .map(parseCondition);
    return obj;
  }, {});

  return { parts, rules };
};

const parsed = parseRules(strs);

const runRules = (part, startRule, rules) => {
  let currRule = startRule;
  while (currRule != "A" && currRule != "R") {
    // console.log(currRule);
    currRule = rules[currRule].reduce((acc, seg) => {
      if (acc) return acc;
      if (typeof seg == "string") return seg;
      const [name, op, num, next] = seg;
      switch (op) {
        case "<":
          if (part[name] < num) return next;
          break;
        case ">":
          if (part[name] > num) return next;
          break;
      }
    }, null);
  }
  return currRule;
};

const part1 = ({ parts, rules }) => {
  return parts
    .map((p) => {
      const status = runRules(p, "in", rules);
      if (status == "R") return 0;
      return Object.values(p).sum();
    })
    .sum();
};

run(part1, parsed);
