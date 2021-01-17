# Invert Binary Tree

Write a function that takes in a Binary Tree and inverts it. In other words, the function should swap every left node in the tree for its corresponding right node.

Each BinaryTree node has an integer value , a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None / null

```bash
            1
         /     \
        2       3
      /   \    /  \
     4      5 6    7
    / \    
   8   9               -> 
   
            1
         /     \
        3       2
      /   \    /  \
     7      6 5    4
                  / \    
                 8   9               
```

## Hint

```haskell
swap (node)
	if (not valid), do nothing
	swap node.left and node.right
	swap(node.left)
	swap(node.right)
```

## Code

```javascript
function invertBinaryTree(tree) {
  const swap = n => {
		if (!n) return
		[n.left, n.right] = [n.right, n.left]
		swap(n.left)
		swap(n.right)
	}
	
	return swap(tree)
}
```