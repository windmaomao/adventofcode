## Day 2 - I was Told There Would Be No Math
> From Advent of Code 2015, Day 2



```fortran
3x11x24
13x5x19
1x9x27
24x8x21
6x8x17
```

If two wrongs don't make a right,

try three,

so to make it an object?

---

### Model

Model the `Box` as a list of integer sizes which can be extracted via `Regex`.

```kotlin
typealias Box = List<Int>

fun extractBox(s: String): Box = "\\d+".toRegex()
  .findAll(s)
  .map { it.value.toInt() }
  .toList()
}
```

> If you are not sure why we need a model (object) first, please check Day 0 and also how to get a list of models.

Type alias is used here to emphasize the `Model` thus simplify the data definition later.

### Part 1

Given a list of box dimensions in string, find out the total wrapping paper required.

```kotlin
fun part1(list: List<Box>): Int {
  val paper = { l: Int, w: Int, h: Int ->
    val m = maxOf(l, w, h)
    (l * w + w * h + h * l) * 2 + l * w * h / m
  }

  return list
    .map { (l, w, h) -> paper(l, w, h) }
    .sum()
}
```

For each line in order to calculate the paper, we outsource it to a function that takes geometric sizes and output wrapping paper .

### Part 2

For same list of box dimensions in string, find out the total wrapping paper following another wrapping method.

```kotlin
fun part2(list: List<Box>): Int {
  val paper = { l: Int, w: Int, h: Int ->
    val m = maxOf(l, w, h)
    (l + w + h - m) * 2 + l * w * h
  }

  return list
    .map { (l, w, h) -> paper(l, w, h) }
    .sum()
}
```

If you happen to have quite a bit different wrapping methods, it might be worthwhile to come up a function that accept the wrapping method as one of the input variables.

```kotlin
fun part(
  list: List<Box>,
  fn: (Int, Int, Int) -> Int
) = list
  .map { (l, w, h) -> fn(l, w, h) }
  .sum()

fun part1(list: List<Box>) = part(list, paper)
fun part2(list: List<Box>) = part(list, paper2)
```

### Highlights

- How to extract info from `regex` expression?
- How to easily swap a method to the current method?

---

*Now, ready for the next day?* [*Day 3 — Perfectly Spherical Houses in a Vaccum*](https://medium.com/@windmaomao/kotlin-day-2-i-was-told-there-would-be-no-math-ec0f9e1064cc)

*Or, revisit the previous day?* [*Day 1 — Not Quite Lisp*](https://medium.com/@windmaomao/kotlin-day-1-up-and-down-38885a5fc2b1)

*For Complete source code, please visit [*AoC 2015 Kotlin*](https://github.com/windmaomao/adventofcode/tree/master/2015/kt/src/test/kotlin/org/adventofcode)*.