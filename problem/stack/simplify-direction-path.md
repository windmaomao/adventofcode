# Simplify Direction Path

Given a string **A** representing an absolute path for a file (Unix-style).

Return the string A after simplifying the absolute path.

```javascript
"/home/" -> "/home"
"/a/./b/../../c/" -> "/c"
```

[Interview Bit](https://www.interviewbit.com/problems/simplify-directory-path/)

## Hint

closes the bracket therefore ignored afterwards

## Code

```javascript
const res = str
  .split("/")
  .reduce((s, p) => {
    switch(p) {
      case '..': s.pop(); break;
      case '.': break;
      default: s.push(p)
    }
    return s
  }, new Stack())

const res2 = res.data
  .filter(p => !!p)

console.log(res2)
```

