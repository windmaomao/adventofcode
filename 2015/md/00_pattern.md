### Pattern - Finding the answer

#### Problem

Given list of strings as input, what could be our general process of looking for answer?

> There's a problem writing code as laundry list. Trying not to do that is very time consuming, and fruitful at the same time. It gives you better chance finding this/next answer.

#### Solution

```kotlin
fun part1(lines: List<String>): Int {
  return lines
    .map { extractNumbers(it) }
    .map { Box(it) }           
    .map { it.wrappingPaper() }
    .sum()                     
}
```

Finding the answer normally involves a few steps.

- If data isn't ready to be used, we'll do preparation work, ex. parse the data into the right format. 

- We chop the problem into smaller pieces, and deal with them one by one. 

- Once every piece of information is available, we then assemble them into the final answer. 

Each of the steps could have its own complexity,  which might splits into more pieces. Once the complexity is fully understood, the task could be out-sourced to a helper, ex. `Box` class, to simplify the work.

#### Test

The preliminary answer is first checked with some examples to save time, and more tests need to be written in case there are more helper utility / class. The real run is performed later  and if issues are spotted, we need to go through these tests again until the confidence level reaches an acceptable level.

```
  @Test fun day00Example() {
    assertEquals(0, part1(listOf("(())")))
    assertEquals(48, part1(listOf("32x454x44")))
    assertEquals(10, part1(listOf("pmdfewf")))
  }
  
  @Test fun day00part1() {
    assertEquals(23232, part1(parseFile("00.input")))
  }
```




