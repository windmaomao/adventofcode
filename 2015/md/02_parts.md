### Day 2 - Swap the model

#### Problem

Given a list of box dimensions in string, find out the total wrapping paper required.

Ex. 

- `23x34x45`
- `90x9x12`

#### Solution

```kotlin
  val paper = { l: Int, w: Int, h: Int ->
    val m = maxOf(l, w, h)
    (l * w + w * h + h * l) * 2 + l * w * h / m
  }

  private fun part1(list: List<String>): Int {
    return list.map {
      val (l, w, h) = it.extractNumbers()
      paper(l, w, h)
    }.sum()
  }
```

For each line in order to calculate the paper, we outsource it to a function that takes geometric sizes and output wrapping paper .

#### Test

You can test the model first

```kotlin
  @Test fun day02Part1Example() {
    assertEquals(58, paper(2, 3, 4))
    assertEquals(43, paper(1, 1, 10))
  }
```

And then test for the answer

```kotlin
  @Test fun day02Part1() {
    assertEquals(1588178, part1(parseFile('02')))
  }
```

Check day 0 for `parseFile`.

#### Problem

For same list of box dimensions in string, find out the total wrapping paper following another wrapping method.

#### Solution

```kotlin
  val paper2 = { l: Int, w: Int, h: Int ->
    val m = maxOf(l, w, h)
    (l + w + h - m) * 2 + l * w * h
  }

  fun part(
    list: List<String>,
    fn: (Int, Int, Int) -> Int
  ): Int {
    return list.map {
      val (l, w, h) = it.extractNumbers()
      fn(l, w, h)
    }.sum()
  }

  fun part2(list: List<String>): Int {
    return part(list, paper2)
  }
```

Since this is different wrapping method, we'd like to pass the wrapping method as a function `(Int, Int, Int) -> Int` into the assemply line. 

> Passing a function into another function is a typical Functional Programming (FP) technique. You can think of it as one cheap way adding a dependency through the interface. Similar to passing a number, we're passing a pattern, a method, or a module through.

#### Test

You can test the model first

```kotlin
  @Test fun day02Part2Example() {
    assertEquals(34, paper2(2, 3, 4))
    assertEquals(14, paper(1, 1, 10))
  }
```

And then test for the answer

```kotlin
  @Test fun day02Part2() {
    assertEquals(3783758, part1(parseFile('02')))
  }
```

Check day 0 for `parseFile`.

#### 