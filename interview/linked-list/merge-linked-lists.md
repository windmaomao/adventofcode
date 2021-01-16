# Merge Linked Lists

Write a function that takes in the heads of two Singly Linked Lists that are in sorted order, respectively. The function should merge the lists in place (i.e., it shouldn't create a brand new list) and return the head of the merged list; the merged list should be in sorted order.

Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to None / null if it's the tail of the list.
You can assume that the input linked lists will always have at least one node; in other words, the heads will never be None / null

```bash
  2->6->7->8 and 1->3->4 -> 1->2->3->4->6->7->8
```

## Hint

Compare each and use `prev` to track, once one of the list is done, you can just point directly to another list to finish.

## Code

```javascript
function mergeLinkedLists(headOne, headTwo) {
  let curr1 = headOne, curr2 = headTwo
  let prev = null, head = null
  while (curr1 && curr2) {
    if (curr1.value < curr2.value) {
      if (prev) prev.next = curr1      
      prev = curr1
      curr1 = curr1.next
    } else {
      if (prev) prev.next = curr2
      prev = curr2
      curr2 = curr2.next
    }
    if (!head) head = prev
  }
  let curr = curr1 ? curr1 : curr2
  prev.next = curr
  return head
}
```
