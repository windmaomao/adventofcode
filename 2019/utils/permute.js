const perm = a => a.length ? a.reduce((r, v, i) => [...r, ...perm([...a.slice(0, i), ...a.slice(i + 1)]).map(x => [v, ...x])], []) : [[]];
module.exports = perm
