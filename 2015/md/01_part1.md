### Part 1 - Map to a value

#### Problem

Starting from position `0`, find out the latest position after a series of up and down operations. 

Ex.

- `()` and `(())` end in position `0`.
- `(())))` ends in position `-2`.

#### Prepare

In order to get our thinking into a stream of data, we can assign a value for each operation, 

```kotlin
fun charValue(c: Char): Int = if (c == '(') 1 else -1
```

Given a string of characters, we get a list of `Int` (Atomic data type).

```kotlin
fun extractOps(s: String): List<Int> = s.map { charValue(it) }.toList()
```

#### Solution 

```kotlin
fun part1(ops: List<Int>) = ops.sum()
```

Assuming the string is prepared into  `ops`, the solution is as simple as the `sum` .

#### Test

In order to make sure it's robust, we write test for `extractOps`.

```kotlin
@Test fun day01ExtractOps() {
  assertEquals(listOf(1, 1, -1), extractOps("(()"))
}
```

We then test the final or intermediate answers,

```kotlin
val ops = extractOps(parseFile("01")[0])

@Test fun day01Part1() { 
  assertEquals(???, part1(ops))
}
```
