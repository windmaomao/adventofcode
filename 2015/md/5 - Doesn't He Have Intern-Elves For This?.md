## Kotlin Day `5` - Doesn't He Have Intern-Elves For This?

> From Advent of Code 2015, [*Day 5*](https://adventofcode.com/2015/day/5)


```fortran
sszojmmrrkwuftyv
isaljhemltsdzlum
fujcyucsrxgatisb
qiqqlmcgnhzparyg
oijbmduquhfactbc
```



### Model

```kotlin
typealias Matcher = (String) -> Boolean

val matches1: Matcher = {
  if ("ab|cd|pq|xy".toRegex().containsMatchIn(s)) return false
  if (!"([a-z])\\1".toRegex().containsMatchIn(s)) return false
  "[aeiou]".toRegex().findAll(s).toList().size > 2
}
```

We use regular expression to find out if we get a nice string.

>  Regular expression was introduced in [Day 2](https://medium.com/@windmaomao/kotlin-day-2-i-was-told-there-would-be-no-math-ec0f9e1064cc), and proved to be one of effective ways to extract pattern information out of a text. 

### Part 1

Given list of strings, count the right ones following a pattern.

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

> Please checkout [Day 2- Part 2](https://medium.com/@windmaomao/kotlin-day-2-i-was-told-there-would-be-no-math-ec0f9e1064cc) for more example of swapping a method.

### Highlights

- How to use regular expression to make a match?