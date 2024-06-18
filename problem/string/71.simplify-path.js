function simplifyPath(path) {
  let stack = [],
    seg = "";

  for (let i = 0; i < path.length; i++) {
    const c = path[i];

    if (c == "/" || i == path.length - 1) {
      if (c != "/") seg += c;
      if (seg) {
        if (seg == "..") {
          stack.pop();
        } else if (seg == ".") {
        } else {
          stack.push(seg);
        }
        seg = "";
      }
    } else {
      seg += c;
    }
  }

  if (seg) stack.push(seg);
  return "/" + stack.join("/");
}

console.log(simplifyPath("/home/"));
console.log(simplifyPath("/home//foo/"));
console.log(simplifyPath("/home/user/Documents/../Pictures"));
console.log(simplifyPath("/../"));
console.log(simplifyPath("/.../a/../b/c/../d/./"));
