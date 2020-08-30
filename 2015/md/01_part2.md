### Part 2 - Stop while you are there

#### Problem

Given a position `-1`, find out how many operations you need to take to get there.  

Ex.

- `())` reaches with `3` steps.
- `(())((())))` reaches with `11` steps.

#### Solution

In order to break from a list (or loop, or stream), we can use `break`,  `while` or similar flow control. More or less  an `if` is introduced in the middle of the process. 

```kotlin
  fun part2(s: String): Int {
    var i = 0
    var v = 0
    while(v != -1) {
      v += charValue(s[i])
      i++
    }
    return i
  }
```

Instead of the previous part, we need an intermediate variable `v` to keep track of the position so to compare with the destination `-1`. And we use another index variable `i` to keep track of the steps taken. 

#### Test

```kotlin
  @Test fun day02Part2Example() {
    assertEquals(1, d.part2(")"))
    assertEquals(5, d.part2("()())"))
  }

  @Test fun day01Part2() {
    assertEquals(1797, d.part2(d.getLine()))
  }
```
