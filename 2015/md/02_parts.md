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

fun part1(lines: List<String>): Int {
  return lines.map { 
    val (l, w, h) = extractNumbers(s)
		Box(l, w, h).paper()
  }.sum()                     
}
```

For each line in order to calculate the paper, we outsource it to an internal model `Box` .

> Function programming and Object oriented programming can be used together. They are mostly serving two different ways of organizing functions in this case.

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
  fun reserved() = 
  	(l + w + h - m) * 2 + l * w * h
}

fun part2(lines: List<String>): Int {
  return lines.map { 
    val (l, w, h) = extractNumbers(s)
		Box(l, w, h).reserved()
  }.sum()                     
}
```

We add an additional function `reserved` to `Box` and kept the rests of code intact.

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