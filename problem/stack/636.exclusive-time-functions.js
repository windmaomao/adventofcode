function exclusiveTime(n, logs) {
  const arr = logs.map((l) => {
    const parts = l.split(":");
    return [parseInt(parts[0]), parts[1], parseInt(parts[2])];
  });

  const res = new Array(n).fill(0);
  const count = new Array(logs.length).fill(0);
  const stack = [];

  for (let i = 0; i < logs.length; i++) {
    const [curr, s, time] = arr[i];
    if (s == "start") {
      stack.push(i);
    } else {
      const prev = stack.pop();
      const j = arr[prev][0];
      const duration = time - arr[prev][2] + 1;
      count[prev] += duration;
      res[j] += count[prev];

      if (stack.length) {
        const prev2 = stack[stack.length - 1];
        count[prev2] -= duration;
      }
    }
  }

  return res;
}

console.log(exclusiveTime(2, ["0:start:0", "1:start:2", "1:end:5", "0:end:6"]));
console.log(
  exclusiveTime(1, [
    "0:start:0",
    "0:start:2",
    "0:end:5",
    "0:start:6",
    "0:end:6",
    "0:end:7",
  ])
);
console.log(
  exclusiveTime(2, [
    "0:start:0",
    "0:start:2",
    "0:end:5",
    "1:start:6",
    "1:end:6",
    "0:end:7",
  ])
);
console.log(
  exclusiveTime(8, [
    "0:start:0",
    "1:start:5",
    "2:start:6",
    "3:start:9",
    "4:start:11",
    "5:start:12",
    "6:start:14",
    "7:start:15",
    "1:start:24",
    "1:end:29",
    "7:end:34",
    "6:end:37",
    "5:end:39",
    "4:end:40",
    "3:end:45",
    "0:start:49",
    "0:end:54",
    "5:start:55",
    "5:end:59",
    "4:start:63",
    "4:end:66",
    "2:start:69",
    "2:end:70",
    "2:start:74",
    "6:start:78",
    "0:start:79",
    "0:end:80",
    "6:end:85",
    "1:start:89",
    "1:end:93",
    "2:end:96",
    "2:end:100",
    "1:end:102",
    "2:start:105",
    "2:end:109",
    "0:end:114",
  ])
);
