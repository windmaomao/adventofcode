
   0   1  2  3   4   5

  100  3  8  5  10  20


   3 100  8   5  10  20
       5  8 100  10  20
             10 100  20
                 20 100

O(n^2)

- Insertion sort, insert later element to the front part of sorted array
- Selection sort, move the largest element to the front of sorted array
- Bubble sort, keep swapping adjacent elements until sorted

O(nlogN) worst O(n^2)

- Heap sort, use min/max heap to generate and process the array
- Quick sort, keep dividing into two sections to sort locally
- Merge sort, divides into sections and merge indexes back

O(m+n), m << n
- Couting sort, count all numbers using hashmap
- Bucket sort, seperate into multiple buckets and sort each
