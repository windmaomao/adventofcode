## Kotlin Day `4` - The Ideal Stocking Stuffer

> From Advent of Code 2015, [*Day 4*](https://adventofcode.com/2015/day/4)



```fortran
secret key: bgvyzdsv
```

---

### Model

```kotlin
typealias Matcher = (Int) -> Boolean

fun matcher(secret: String, n: Int): Matcher {
  val zeros: String = "0".repeat(n)
  return { i: Int ->
    val s = md5(secret + i.toString())
    s.take(n).equals(zeros)
  }
}
```

We'd like to establish a `Matcher` so that given `secret` it can check whether a number's md5 begins with `n` zeros.

### Part 1

Find the smallest number with md5 encoding starting with `00000`, five zeros.

```kotlin
fun part(m: Matcher) = generateSequence(0, Int::inc)
  .map { m(it) }
  .indexOf(true)
}

fun part1(secret: String) = part(matcher(secret, 5))
```

Provided by `generateSequence`, we can get an infinite number of integers. For each number, we use the `Matcher` to test against and then find our first match with `indexOf`.

> If you wonder why we are using `sequence` instead of `loop`, please checkout [Day 1 - Part 2](https://medium.com/@windmaomao/kotlin-day-1-up-and-down-38885a5fc2b1) for explanation.

### Part 2

Find the smallest number with md5 encoding starting with `000000`, 6 zeros instead.

```kotlin
fun part2(secret: String) = part(matcher(secret, 6))
```

Since we can generate a `Matcher` based on parameters,  `n` of zeros being one of them, we can easily swap with another matcher.

> Please checkout [Day 2- Part 2](https://medium.com/@windmaomao/kotlin-day-2-i-was-told-there-would-be-no-math-ec0f9e1064cc) for more example of swapping a method.s

### Highlights

- How to learn patterns from Day 1 and Day 2?

---

*Now, ready for the next day?* [*Day 5*](https://medium.com/@windmaomao/kotlin-day-2-i-was-told-there-would-be-no-math-ec0f9e1064cc)

*Or, revisit the previous day?* [*Day 3 — Perfectly Spherical Houses in a Vaccum*](https://medium.com/@windmaomao/kotlin-day-2-i-was-told-there-would-be-no-math-ec0f9e1064cc)

*For Complete source code, please visit [*AoC 2015 Kotlin*](https://github.com/windmaomao/adventofcode/tree/master/2015/kt/src/test/kotlin/org/adventofcode)*.
