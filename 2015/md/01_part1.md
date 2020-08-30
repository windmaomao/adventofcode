### Part 1 - Map to a value

#### Problem

Given a list of characters for up and down operations, find out his last position. 

Ex.

- `()` and `(())` both end in position `0`.
- `(())))` ends in position `-2`.

#### Solution

> A quick solution is to count the `(` and `)`, and take the difference, ex. `s.count("(") - s.count(")")`

In order to be a bit generic, we assign a value to each character, ex. `1` for `(` and `-1` for `)`, and then  `sum` them together. 

```kotlin
  val charValue = { c: Char -> 
    when (c) { '(' -> 1 else -> -1 }
  }

  fun part1(s: String): Int {
    return s.map(charValue).sum()
  }
```

> Each question has two parts, therefore the solution will be given in two different function, `part1` and `part2`. The input is a `String` and here the output is an `Int`.

`charValue` is a `function`, referenced by  `map` which accepts `function` as its input.

> Sending a `function` into another one as input is normally referred as Functional Programming (FP) these days. Although this book will not get deep into FP, the pattern of using a function to simplify  so that this function can be studied early on, normally through `test`, is applied throughtout this book.

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