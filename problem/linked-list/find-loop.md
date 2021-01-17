# Find Loop
Write a function that takes in the head of a Singly Linked List that contains a loop (in other words, the list's tail node points to some node in the list instead of None / null ). The function should return the node (the actual node--not just its value) from which the loop originates in constant space.

Each LinkedList node has an integer value as well as a next node pointing to the next node in the list.

```bash
  head = 0->1->2->3->4->5->6
                     ^     v
                     9<-8<-7  -> 4
```

https://www.algoexpert.io/questions/Find%20Loop

## Hint
To get O(1) in space, we can refer to https://stackoverflow.com/questions/2936213/explain-how-finding-cycle-start-node-in-cycle-linked-list-work

## Code

```javascript
function findLoop(head) {
  let curr = head, curr2 = head
  while (true) {
    curr = curr.next
    curr2 = curr2.next.next
		if (curr === curr2) break
  }
	curr2 = head
	while (curr2 !== curr) {
		curr = curr.next
		curr2 = curr2.next
	}
  return curr
}
```
