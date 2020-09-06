### Part 1 - Map to a value

#### Problem

Given a list of characters for up and down operations, find out his last position. 

Ex.

- `()` and `(())` both end in position `0`.
- `(())))` ends in position `-2`.

#### Solution

We can count the `(` and `)` character, and take the difference, ex. `s.count("(") - s.count(")") to get our answer quickly. 

```kotlin
  val charValue = { c: Char -> 
    when (c) { '(' -> 1 else -> -1 }
  }

  fun part1(s: String) = s.map(charValue).sum()
```

But if we want to be a bit generic, we can assign an integer value to each character, ex. `1` or `-1`, with a lambda function `charValue` . We then use it to map each character and sum them up in the end. 

>Lambda function, a form of expression, is a short function used as arguments to other functions. It's a piece of executable code, let it be a method, a module or even a dependency. 


#### Test

In order to make sure it's robust, we write

```kotlin
  @Test fun day01Part1Example() {
    assertEquals(0, part1("(())"))
    assertEquals(0, part1("()()"))
    assertEquals(3, part1("((("))
    assertEquals(3, part1("(()(()("))
    assertEquals(3, part1("))((((("))
    assertEquals(-1, part1("())"))
    assertEquals(-1, part1("))("))
    assertEquals(-3, part1(")))"))
    assertEquals(-3, part1(")())())"))
  }
```

Therefore the answer could be checked with an additional `test`,

```kotlin
  val line = parseFile("01").first()

  @Test fun day01Part1() {
    assertEquals(280, part1(line))
  }
```

Check `parseFile` from Day 0. And here we are interested at one line. 