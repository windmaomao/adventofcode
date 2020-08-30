### Part 1 - Map to a value

#### Problem

Given a list of characters represending up and down operations, find out his last position. 

Ex.

- `^v` and `^^vv` both end in position `0`.
- `vv^^^^` ends in position `2`.

#### Solution

> A quick solution is to count the `^` and `v`, and take the difference, ex. `s.count("^") - s.count("v")`

If you assign a value to each character, ex. `1` for `^` and `-1` for 

`v`, you can first `map` each to value and then `sum` them togather. 

```kotlin
  val charValue = { c: Char -> 
    when (c) { '^' -> 1 else -> -1 }
  }

  fun part1(s: String): Int {
    return s.map(charValue).sum()
  }
```

> Each question has two parts, therefore the solution will be given in two different function, `part1` and `part2`. The input is a `String` and here the output is an `Int`.

`charValue` is a `function`, referenced by  `map` which accepts `function` as its input.

> Sending a `function` into another as input is normally referred as Functional Programming (FP) these days. Although this book will not get deep into FP, the pattern of using a function to simplify  so that this function can be studied early on, normally through `test`, is applied throughtout this book.

#### Test

In order to make sure it's robust, we write

```kotlin
  @Test fun day01Part1Example() {
    assertEquals(0, d.part1("(())"))
    assertEquals(0, d.part1("()()"))
    assertEquals(3, d.part1("((("))
    assertEquals(3, d.part1("(()(()("))
    assertEquals(3, d.part1("))((((("))
    assertEquals(-1, d.part1("())"))
    assertEquals(-1, d.part1("))("))
    assertEquals(-3, d.part1(")))"))
    assertEquals(-3, d.part1(")())())"))
  }
```

Therefore the answer could be checked with an additional `test`,

```kotlin
  @Test fun day01Part1() {
    assertEquals(280, d.part1(d.getLine()))
  }
```

> `getLine` is a function loading a input file `01.input` to a single line string. Throughout the book, we will use quite a few utility functions like these to simplify the loading. For your interest, they will be provided in Appendix I - Day class. 