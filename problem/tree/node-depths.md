# Node Depths

The distance between a node in a Binary Tree and the tree's root is called the node's depth.

Write a function that takes in a Binary Tree and returns the sum of its nodes' depths.
Each BinaryTree node has an integer value a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None / null


```bash
            1
         /     \
        2       3
      /   \    /  \
     4      5 6    7
    / \    
   8   9              -> 16
```

## Hint

```haskell
sum (node, d)
  if (no left and right) return d
  return d + sum(left, d+1) + sum(right, d+1)
```

## Code

### Recursive
```javascript
	const sum = (n, d) => {
		if (!n.left && !n.right) return d
		
		let nd = d
		if (n.left) nd += sum(n.left, d + 1)
		if (n.right) nd += sum(n.right, d + 1)
		return nd
	}

	return sum(root, 0)
```