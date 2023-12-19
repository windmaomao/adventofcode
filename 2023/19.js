require("./array");
const read = require("./read");
const run = require("./run");
const strs = read("19.a", "\n");

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

  // console.log(updateValues(start[1], rules["in"][0], false));
  const inRes = findNextRules(start[1], rules["in"]);
  inRes.log("in");
  const pxRes = findNextRules(inRes[0][1], rules["px"]);
  pxRes.log("px");
  const qkqRes = findNextRules(pxRes[0][1], rules["qkq"]);
  qkqRes.log("qkq");
  const crnRes = findNextRules(qkqRes[1][1], rules["crn"]);
  crnRes.log("crn");
  const rfgRes = findNextRules(pxRes[2][1], rules["rfg"]);
  rfgRes.log("rfg");
  const qqzRes = findNextRules(inRes[1][1], rules["qqz"]);
  qqzRes.log("qqz");
  const qsRes = findNextRules(qqzRes[0][1], rules["qs"]);
  qsRes.log("qs");
  const lnxRes = findNextRules(qsRes[1][1], rules["lnx"]);
  lnxRes.log("lnx");
  const hdjRes = findNextRules(qqzRes[1][1], rules["hdj"]);
  hdjRes.log("hdj");
  const pvRes = findNextRules(hdjRes[1][1], rules["pv"]);
  pvRes.log("pv");
  return;

  let heap = [start];
  let curr, currRule, currValues;
  let visited = {};
  let k = 0;

  while ((curr = heap.pop()) && k < 1) {
    k++;
    [currRule, currValues] = curr;

    // accept or reject
    if (["A", "R"].indexOf(currRule) >= 0) {
      console.log(currRule, JSON.stringify(curr));
      break;
    }

    // can visit once
    const key = JSON.stringify(curr);
    if (key in visited) continue;
    visited[key] = true;
    console.log(key);

    // go next rules
    rules[currRule].forEach((seg) => {
      console.log("p", seg);
    });
  }

  return Object.keys(visited).length;
};

run(part2, parsed);
