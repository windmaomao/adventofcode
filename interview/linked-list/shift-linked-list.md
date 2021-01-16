# Shift Linked List

Write a function that takes in the head of a Singly Linked List and an integer k shifts the list in place (i.e., doesn't create a brand new list) by k positions, and returns its new head.

Shifting a Linked List means moving its nodes forward or backward and wrapping them around the list where appropriate. For example, shifting a Linked List forward by one position would make its tail become the new head of the linked list.
Whether nodes are moved forward or backward is determined by whether k is positive or negative.

Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to None / null if it's the tail of the list.
You can assume that the input Linked List will always have at least one node; in other words, the head will never be None / null

```bash
  0->1->2->3->4->5 and 2 -> 4->5->0->1->2->3
```

## Hint

The distance of k can be controlled by using two pointer and start one pointer ahead of another one. However when k is negative, we need to flip these two pointers.

## Code

```javascript
function shiftLinkedList(head, k) {
  if (k == 0) return head
  
  let curr = head, i = 0
  while (i < Math.abs(k)) {
    curr = curr.next || head
    i++
  }
  
  if (curr == head) return head
  
  let curr2 = head
  while (curr.next) {
    curr2 = curr2.next
    curr = curr.next
  }

  if (k > 0) {
    curr.next = head
    const head2 = curr2.next
    curr2.next = null
    return head2    
  }
  
  while (curr2.next) {
    curr2 = curr2.next
    curr = curr.next || head
  }
  
  curr2.next = head
  const head2 = curr.next
  curr.next = null
  return head2      
}
```