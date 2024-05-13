require("./array");
const read = require("./read");
const run = require("./run");
const strs = read("15", "\n");
const sequences = strs[0].split(",");

const hashed = (seq, starting) => {
  let v = starting;
  seq.split("").forEach((c) => {
    v += c.charCodeAt(0);
    v *= 17;
    v %= 256;
  });
  return v;
};

const part1 = (seqs) => {
  return seqs.map((s) => hashed(s, 0)).sum();
};

run(part1, sequences);

const part2 = (seqs) => {
  const boxes = {};

  seqs.forEach((seq) => {
    const remove = seq.at(-1) == "-";
    let label, focal, id;
    if (remove) {
      label = seq.slice(0, -1);
    } else {
      [label, focal] = seq.split("=");
    }

    id = hashed(label, 0);
    boxes[id] = boxes[id] || [];

    if (remove) {
      boxes[id] = boxes[id].filter((v) => v[0] != label);
    } else {
      const found = boxes[id].find((v) => v[0] == label);
      if (!found) {
        boxes[id].push([label, focal]);
      } else {
        found[1] = focal;
      }
    }
  });

  return Object.keys(boxes)
    .map((id) => {
      const box = boxes[id];
      console.log(box);
      const k = Number(id) + 1;
      return box.map((v, i) => k * (i + 1) * v[1]).sum();
    })
    .sum();
};

run(part2, sequences);
