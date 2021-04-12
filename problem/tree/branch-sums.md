# Branch Sums

Write a function that takes in a Binary Tree and returns a list of its branch sums ordered from leftmost branch sum to rightmost branch sum.

A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree branch is a path of nodes in a tree that starts at the root node and ends at any leaf node. 

Each Binary Tree node has an integer value , a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None / null

https://www.algoexpert.io/questions/Branch%20Sums

```xquery
            1
         /     \
        2       3
      /   \    /  \
     4      5 6    7
    / \    /
   8   9 10          -> [15, 16, 18, 10, 11]
```

## Hint

```haskell
visit (node, sum)
	if (not valid), do nothing
	
	calc next sum, ns
	if (no left and right), print ns
	
	visit (left, ns)
	visit (right, ns)
```

## Code

### Recursive

```javascript
function branchSums(root) {
  const res = []

	const reach = (n, s) => {
		if (!n) return
		const ns = s + n.value

		if (!n.left && !n.right) {
			res.push(ns); return
		}
		reach(n.left, ns)
		reach(n.right, ns)
	}

	reach(root, 0)
	return res
}
```

### Stack

```javascript
function branchSums(root) {
  const res = []
	root.sum = root.value
	const stack = [root]
	
	while (stack.length) {
		const node = stack.pop()
		
		if (!node.left && !node.right) {
			res.push(node.sum)	
		}
		if (node.right) {
			node.right.sum = node.sum + node.right.value
			stack.push(node.right)
		}
		if (node.left) {
			node.left.sum = node.sum + node.left.value
			stack.push(node.left)
		}
	}

	return res
}
```

