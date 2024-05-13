Inputs:
pre-order: [6, 10, 12, 7, 8]
in-order: [10, 6, 7, 12, 8]

Output:



                 6
         10                 12
                       7          8


Algorithm Solution:

                 6
         10            12  
                    7      8


const Node = (value, left, right) => ({
  value, left, right
})

function gen(preOrder, inOrder) {
  const len = preOrder.length
  if (len < 1) return null

  let root = Node(preOrder[0])
  if (len < 2) return root


  function createNode(low, high, i) {
    const node = Node(preOrder[i])
    return node
  }


  return root
}


UI Solutions:

      Input box: preOrder
      Input box: inOrder
      Button: "APPLY"   (button or debounce approach)
      
      Paint screen: tree rendering

   

## Redux direction

const state = {
  root: {   //ref
     value:
     left: { ...
     right: [
   }
   preOrder: []
   inOrder: []
}

const reducer = (action) => {
  return newState
}


## OLD Approach, non-state driven
Button.addEventListener('click', () => {
  callAPI().then((data) => {
    // paint the screen, DOM directly
  })
}

## React Approach,

const Test = () => {
  const [root, setRoot] = useState(null)                      
                        
  const _apply = () => {
     callAPI().then(data => setRoot(data))
       .catch(console.error)
  }

  const apply = useMemo(() => {  // optimization
    return debounce(_apply, 250)
  }, [...])
                        
  return (
    <>
      <Input />
      <Input />
      <Button onClick={() => { apply() }}> Apply </Button> 
      {root && (
        <Tree node={root} />
      )}
    </>
  )
}

<Test />
    