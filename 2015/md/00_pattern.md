### Pattern - Finding the answer

#### Problem

Given list of strings as input, what could be our general process of looking for answer?

> There's a problem writing code as laundry list. Trying not to do that is very time consuming, but fruitful at the same time. It gives you better chance finding the right answer in a consistent manner.

#### Solution

```kotlin
fun part1(lines: List<String>): Int {
  return lines
    .map { extractNumbers(it) }
    ...           
    .map { it.wrappingPaper() }
    .sum()                     
}
```

Finding the answer normally involves a few steps.

- If data isn't ready, preparation work is required to get the data and put into the right format.

- Data then passes through each step of the problem, and results in the intermediate data as the input for the next step. 

- Once the problem is solved, it reaches the aggregation where we make a decision in the format of the result for the output. 

Each of the above could have its own complexity,  which might splits into more pieces. The goal of each piece needs to be fully understood, and then be handled via its own implementation. 

This way we can always focus on one piece at a time, and most importantly, that idea is readable,  repeatable, and testable. You have luxury of focusing on one piece as much as you want without the burden of attaching it with anything else. 

> The success of the problem solving is destined to the ability of decoupling pieces from the body and stitching them back, so to speak, the mastermind of the work.   

#### Test

Test is an early plan of how you measure the success of the solution, and if better crafted, should reveal how you decouple and assemble all units back to solve the puzzle.

Your driver of writing test early on is mostly driven by your eagerness of having a workable solution in the end. Your reputation is on the line, your money is in the pot, but how can you increase the chance of the success before seeing it? 

Your experience, or what you have learned so far from the past, will lead into the type of test you write. This is a money/risk game, and imagine it's all your money, you're managing it for the long run. To some extent, this is risk management topic, not a computer technique. Mastering the technique 




