### Day 3 - Less dimension is better

#### Problem

Given a list of direction instructions in two dimensions, find out total number of places visited.

Ex. 

- `><^v^v^v`
- `90x9x12`

#### Solution

```kotlin
  private val len = 10000

  private val nextPos = { acc: Int, c: Char ->
    when(c) {
      '^' -> acc + len
      'v' -> acc - len
      '>' -> acc + 1
      '<' -> acc - 1
      else -> acc
    }
  }

  fun part1(s: String): Int {
    return s.scan(0, nextPos).distinct().count()
  }
```

Given a new instruction character, we can navigate to a new location via `nextPos`, written in another form of function, lambda expression.

> Lambda expression, by nature, is no much different than a function. It does look a bit different since `->` is used instead of `{`,  and it also makes passing into other expression and functions easier. 

We want to get all the snapshot of all locations, therefore  `scan` is used here to iterate from the initial position . Once all positions are there, we find the distinct set of them and take the count as the answer.

We take a tricky that expands the two dimensions space into a linear one dimension space to simplify the counting therefore avoiding two nested loops. 

>  2D -> 1D saves quite a bit of coding and simplifies the way we think of the problem. Human brain is a lot more functional dealing with simple dimension and geometry if we don't sacrifice too much in terms of storage and time spent for the dimensional transformation. 

#### Test

You can test the model first

```kotlin
  @Test fun day03Part1Example() {
    assertEquals(2, part1(">"))
    assertEquals(4, part1("^>v<"))
    assertEquals(2, part1("^v^v^v^v^v"))
  }
```

And then test for the answer

```kotlin
  @Test fun day02Part1() {
    assertEquals(2572, parseFile('02')))
  }
```

Check day 0 for `parseFile`.

#### 