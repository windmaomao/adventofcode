function groupStrings(strings) {
  let m = {};

  const getKey = (str) => {
    if (str.length == 1) return "";

    let res = [];
    for (let i = 0; i < str.length - 1; i++) {
      const d = str[i + 1].charCodeAt(0) - str[i].charCodeAt(0);
      res.push((d + 26) % 26);
    }
    return res.join(",");
  };

  strings.forEach((str) => {
    const k = getKey(str);

    m[k] = m[k] || [];
    m[k].push(str);
  });

  return Object.values(m);
}

//console.log(groupStrings(["abc","bcd","acef","xyz","az","ba","a","z"]))
//console.log(groupStrings(["a"]))
//console.log(groupStrings(["ab", "ba"]))
