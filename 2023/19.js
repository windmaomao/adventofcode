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

const cloneValues = (values) => {
  let v = {};
  ["x", "m", "a", "s"].forEach((c) => {
    v[c] = [...values[c]];
  });
  return v;
};

const updateValues = (values, seg, not = false) => {
  const [name, op, num, next] = seg;
  const v = cloneValues(values);
  const [min, max] = v[name];
  if (!not) {
    switch (op) {
      case "<":
        if (num < min) return null;
        v[name] = [min, Math.min(max, num - 1)];
        break;
      case ">":
        if (num > max) return null;
        v[name] = [Math.max(min, num + 1), max];
        break;
    }
  } else {
    switch (op) {
      case "<": // >=
        if (num >= max) return null;
        v[name] = [Math.max(min, num), max];
        break;
      case ">": // <=
        if (num <= min) return null;
        v[name] = [min, Math.min(max, num)];
        break;
    }
  }
  return v;
};

const findNextRules = (values, rule) => {
  let curr = cloneValues(values);
  let res = [];
  rule.forEach((seg) => {
    if (typeof seg == "string") {
      res.push([seg, curr]);
    } else {
      const next = updateValues(curr, seg);
      if (next) {
        res.push([seg[3], next]);
      } else {
        return res;
      }
      curr = updateValues(curr, seg, true);
    }
  });
  return res;
};

const part2 = ({ parts, rules }) => {
  let start = [
    "in",
    ["x", "m", "a", "s"].reduce((acc, c) => {
      acc[c] = [1, 4000];
      return acc;
    }, {}),
  ];

  let heap = [start];
  let curr, currRule, currValues;
  let visited = {};
  let res = [];
  let k = 0;

  while ((curr = heap.shift()) && k < 111127) {
    k++;
    [currRule, currValues] = curr;

    // accept or reject
    if (["A", "R"].indexOf(currRule) >= 0) {
      // console.log(currRule, currValues);
      if (currRule == "A") res.push(currValues);
      continue;
    }

    // can visit once
    const key = JSON.stringify(curr);
    if (key in visited) continue;
    visited[key] = true;
    // console.log(key);

    // go next rules
    findNextRules(currValues, rules[currRule]).forEach(
      ([nextRule, nextValues]) => {
        heap.push([nextRule, nextValues]);
      }
    );
  }

  console.log("k", k);
  return res
    .map((obj) =>
      Object.values(obj)
        .map(([i, j]) => j - i + 1)
        .multiply()
    )
    .sum();
};

run(part2, parsed);
