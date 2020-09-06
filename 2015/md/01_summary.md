### Extra Credit - Deferral to the rescue

#### Problem

Avoid using a `while` loop. 

#### Solution

```kotlin
  fun part2s(s: String): Int {
    val all = s.asSequence()
      scan(0) { acc, c -> acc + charValue(c) }
    return all.indexOf(-1)
  }
```

We `scan` to get all positions where the first index of the destination position can be found.

> `Scan` transforms a collection into a single result, similar to `reduce`, while returning all the intermediate values as well as a starting one.

This almost works except for a large collections, we don't want to wait till we go through all the elements, it could take too much resources than we expected.

So here's an ideal order that we want things to happen,

- 1) define the dataset generation
- 2) define the dataset analysis
- 3) run the generation while running analysis 

What is the best way to define something without running it? Bingo, it's `Function`. Haha. Write the generation process as  a function `fn` and then feed it into future function, ex. `arr.indexOf(arr, fn)`. We do have the right tool already.

You might already notice `asSequence`  in the above. It's here for the rescue . The string is first converted into a `sequence` so that any sequence actions `fn` afterwards to be deferred. As long as we keep producing `sequence` along the way, the execution is all deferred. We won't see the implementation `fn` of `acc + charValue(c)` to be visited.

Only when it reached a terminal function, something that tells the sequence to terminate the deferral, ex. `indexOf` here, it then go execute `fn` for that cycle. If we try visualize the actual code execution, it'll be very similar  (if not identical)  to the `while` case. 

The most fascinating thing here to watch is the place we write `if` statement for both cases. `while` is written inside the loop, and `indexOf` is written outside the loop. 

> What's wrong with `while` approach? The code is concise and easy to understand. However, the workflow isn't testable as a reusable pattern, therefore makes it hard to fit to any library/framework, which in turn has direct impact to the scalability of your work. 

#### Test

```kotlin
val line = parseFile("01").first()

@Test fun day01Part2y() {
  assertEquals(1797, part2y(line))
}
```