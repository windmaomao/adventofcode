# Reverse Linked List

Write a function that takes in the head of a Singly Linked List, reverses the list in place (i.e., doesn't create a brand new list), and returns its new head.

Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to None / null if it's the tail of the list.

You can assume that the input Linked List will always have at least one node; in other words, the head will never be None / null

```bash
  head = 0->1->2->3->4->5 -> 5->4->3->2->1->0
```

## Hint

Store the prev O(1) in space.

## Code

```javascript
function reverseLinkedList(head) {
  let curr = head, prev = null
  while (curr) {
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  
  return prev
}
```