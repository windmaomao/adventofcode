# Meeting Rooms

https://www.interviewbit.com/problems/meeting-rooms/

Problem Description

Given an 2D integer array A of size N x 2 denoting time intervals of different meetings.

Where:
A[i][0] = start time of the ith meeting.
A[i][1] = end time of the ith meeting.

Find the minimum number of conference rooms required so that all meetings can be done.


## Notes

## Code

```javascript
function schedule(meetings) {
  const arr = []

  for (let i = 0; i < meetings.length; i++) {
    const m = meetings[i]
    arr.push([m[0], 0])
    arr.push([m[1], 1])
  }

  const sorted = arr.sort((a, b) => {
    if (a[0] != b[0]) return a[0] - b[0]
    return b[1] - a[1]
  })

  let rooms = 0
  let prevs = []
  let h = 0
  for (let j = 0; j < sorted.length; j++) {
    if (sorted[j][1] == 0) {
      rooms++
      h = Math.max(h, rooms)
    } else {
      rooms--
    }
  }

  return h
}

// 0           30     // + 1
//   5 10             // + 1
//        15 20
//        
//       7    10     
// 2     7              // + 1
//     6 7
```