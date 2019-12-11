# Adevent of Code

## Types

C - Counting, H - Hashmap, I - Intcode

                  1 1 1 1 1 1 1 1
1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7
C I H C I H I C I H
    C     C       C

## Stats

```
      --------Part 1--------   --------Part 2--------
Day       Time   Rank  Score       Time   Rank  Score
 10   04:18:23   3801      0   05:41:17   2452      0
  9   01:45:38   2096      0   01:47:26   2067      0
  8   01:21:21   3168      0   01:38:31   2859      0
  7   00:40:14   1484      0   02:45:02   1763      0
  6   08:15:48   9683      0   09:57:11   9389      0
  5   07:17:34   7666      0   08:42:00   7201      0
  4   00:50:55   4248      0   02:27:19   5787      0
  3   15:01:01  16736      0   16:24:15  14944      0
  2   02:48:52   6619      0   02:56:45   5582      0
  1   17:41:17  25487      0   18:17:49  23501      0
```

Quote: 

- Ranking depends mostly on first three days
- Number of lines does matter, aim small
- Write tight using utils function
- No perfect solution at the moment
- No need to rush to part II if things is not clear enough
- Store values first and then compute/collect later
- Don't reinvent simple algorith, choose easy to implement 
- Use brutal force with computer for cheap operation
- Get up early for higher ranking consistently
- Old work matters, please clean the code after done
- Infrastructure framework is required to speed up work
- Custom recursive algorithm can be be very effective
- Need to rely on test cases very precisely
- Old work is vital starting point for new work
- No need to get perfect solution, move on to next step quickly
- Handy utility functions will come very useful when it's needed
- Pay attention to question details, read major part carefully
- Print out key step and make them clean for debugging

## Day 1

Coming back from the thanks-giving trip at night, I was curious to know what is Advent Code at around 5:40pm. I joined with my github account, and finished within half a hour. My skillset is pretty rough, spend half time in setting up the infrastracture code, ex. copy and paste data. I'm really shocked by how fast others finish the question. After some study, later I found

- Ranking depends on mostly first few days
- Number of lines does matter
- Think fast and write tight with utils function

## Day 2

Day 2 problem is the warm up part for the long series of Intcode program. I waked up in the middle of night at 3am, I was excited to checkout the question. It was pretty interesting to read and work on, although I'm sure it might be a bit difficult for non-english speaking audience. I finished in about an hour, and was very shocked by how much time I spent on unnecceary thinking and work.

- No perfect solution at the moment, no need to dwell on

## Day 3

Started the test after work at 3pm, finished within 1.5 hours. The question could be easy using Map but I solved with some math skill, a bit more complicated. I spend a bit more time on second part, lesson learned

- Hashmap can be used to speed up the matching process
- Store values first and then compute/collect later

## Day 4

Waited till 12:00pm to start, be able to finish under 2.5 hour. I felt it's really slow for me to finish this way, since I try to reinvent increment number through array.

- Don't reinvent simple algorith, choose simple version first
- Brutal force with computer might not be bad idea

## Day 5

Waked up pretty late around 6:30am, finished pretty quickly since it was based on day 2 work. Lesson learned that day

- You might need to get up early for rewards
- Old work matters, clean the code after done

## Day 6

Waked up in regular hour 7am, and finish it in 2 hour during sprint planning. I kept thinking the tree algorithm and eventually made that work. To find the result, I ended with a brutal force and lots of manual work. Later that day I reviewed others' work, I realized couple of issue

- Brutal force can only used for small dataset
- Custom recursive algorithm can be be very effective

## Day 7

Waited till 12:00pm to start right on time, but in the end spent almost 3 hour to finish. The question depends on the work from day 5. The question is not so easy to understand, and i wasn't be able to figure the second part out due to the fact that there's some missing information that I simply have to make a guess, and afterwards code it up to test it. Lesson learned

- Need to rely on test cases very precisely
- Old work is useful starting point for new work

## Day 8

Waked up in the middle of night at 1am, quickly finished two parts under half hour. Used quite a bit eye balling in figuring out the image text. This day once again told me 

- No need to get perfect solution, move on to next step quickly
- Handy utility functions will come very useful when it's needed

## Day 9

Fully prepared once again to finish day 9 and still spent almost 2 hours. While improving day 5 code (relative simple version of day 7 code), the problem I stuck with are

- Forgot some term from the past days
- Made a mistake in setting address vs value

This time, it ommitted some details and asked you figure them out. For instance, the third parameter it introduced requires same parameters which is not handled or even revealed by the old version. Lessor learned

- Pay attention to question details, read slow
- Print out key step and make them clear and clean

## Day 10

Waked up at 2am, and found the question a bit difficult to finish quickly. It took me pretty long to finish it, the lesson learned

- Vital parameter is the mostly effective way, try derive one early one
- Debug on middle result early and print out often
