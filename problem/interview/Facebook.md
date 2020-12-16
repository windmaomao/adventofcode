# Facebook Interview
> Nov 30th, 2020

## Round 1
Q1: Hashmap on dom nodes
Q2: Map data into complex JSON format

## Round 2
### Code Interview 1
Write select from one node to another one
```js
//
       Body   -> Direction of the web page downward
      A    B
     C D  E F
    s        e
// s -> D -> B -> E -> F -> e 
    
    breath first preorder traverse
    depth first

// given: start node and end node
// output a string of all text in between

// A
// parent
//   start
//   end

// B
// parent
//   parent1
//     start
//   parentM
//     ...
//   parent2
//     parentN
//     parent 3
//       end
// solution: start-> parent1 children -> parent(M) 
//             -> parent2 -> parentN -> parent3 -> children before -> end
 
// C
// parent
//   start
//   ...
// parentM
// parent1
//   parent2
//     end
// solution: start -> ... -> parent(M) -> parent1 ....

// D
// parent
//   start
//     end
// solution: start -> children before end -> end

// ns - start node
// ne - end node (not null)

// start -> generate node parents [node, parent, .. body]
// end ->                         [node2, ..., .. body]    

// O(N)    
function (ns, ne) {
  // find parent, 2*O(LogN)
  const root = findParent(ns, ne)
  const stack = [root]
  const res = []
  let started = false, ended = false
  
  while (stack.length) {
    const node = stack.pop()

    if (node === ns) started = true
    if (started && !ended) {
      res.push(node)
    }
    if (node === ne) ended = true
    
    if (node.hasChildren) {
      node.childrenElements.forEach(e => {
        stack.push(e)
      })
    }
  }
  
  return strs.map(v => v.getText()).join("")
}
```

### Code Interview 2
- Write animate function(element, duration, distance)
- Write debounce(fn, duration)
### Design Interview

- Design a table component with infinite scrolling.