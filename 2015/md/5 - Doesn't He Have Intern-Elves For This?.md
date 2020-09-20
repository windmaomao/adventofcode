## Kotlin Day 05 - Doesn't He Have Intern-Elves For This?

### Model

```kotlin
typealias Matcher = (String) -> Boolean

val matches1: Matcher = {
  if ("ab|cd|pq|xy".toRegex().containsMatchIn(s)) return false
  if (!"([a-z])\\1".toRegex().containsMatchIn(s)) return false
  "[aeiou]".toRegex().findAll(s).toList().size > 2
}
```

We look for a way to check whether a string is a match.

>  Regular expression was introduced in [Day 2](https://medium.com/@windmaomao/kotlin-day-2-i-was-told-there-would-be-no-math-ec0f9e1064cc), and proved to be one effective way to extract pattern information out of a text. 

### Part 1

Given list of strings, count the nice ones following some pattern.

```kotlin
fun part(list: List<String>, m: Matcher) = list.
  .map{ m(it) }
  .count{ it }

fun part1(list: List<String) = part(list, matches1)
```

### Part 2

Gien list of strings, count the nice ones following another pattern.

```kotlin

val matches2: Matcher = {
  if (!"([a-z]).\\1".toRegex().containsMatchIn(s)) return false
  if (!"(\\w.)\\w*\\1".toRegex().containsMatchIn(s)) return false
  true
}

fun part2(list: List<String>) = part(list, matches2)
```

### Highlights

- How to use regular expression to make a match?