### Day 2 - Model an object

#### Problem

Given a list of box dimensions in string, find out the total wrapping paper required.

Ex. 

- `23x34x45`
- `90x9x12`

#### Solution

```kotlin
data class Box(
  val l: Int, 
  val w: Int, 
  val h: Int
) {
  private val m = maxOf(l, w, h)
  fun paper() = 
    (l * w + w * h + h * l) * 2 + 
    l * w * h / m
}

fun getBox(s: String): Box {
  val (l, w, h) = extractNumbers(s)
  return Box(l, w, h)
}

fun part1(lines: List<String>): Int {
  return lines.map { getBox(s).paper() }.sum()                     
}
```

For each line  `getBox` is applied to build a model `Box` which is defined from a `class`.

> Isn't it against Functionoal Programming (FP) to use `class`? Well, `class` to an object is like integer type to a number. Whether you are sticking to FP depends on whether the `Box` change any external states and whether it prodeces the same `paper` for a given set of sizes.

#### Test

You can test the model first

```kotlin
  @Test fun day02Part1Example() {
    assertEquals(58, Box(2,3,4).paper())
    assertEquals(43, Box(1,1,10).paper())
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
data class Box(...) {
  ...
  fun reserved() = (l + w + h - m) * 2 + l * w * h
}

fun part2(lines: List<String>): Int {
  return list.map { getBox(it).reserved() }.sum()
}
```

#### Test

You can test the model first

```kotlin
  @Test fun day02Part2Example() {
    assertEquals(34, Box("2x3x4").reserved())
    assertEquals(14, Box("1x1x10").reserved()) }
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