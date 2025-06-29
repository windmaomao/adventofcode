// Facebook interview question

/* <body>
	<h1>A. Welcome</h1>
	<em>B.</em>
	<ul class="B">
		<li>C. Item1</li>
		<li>D. Item2</li>
		<li class="G">
			G -
			<em>H. Item3</em>
		</li>
	</ul>
	<div class="E">
		<em>E - </em>
		<ul>F. Hello World</ul>
	</div>
	
	<h1>DFS preorder</h1>
	<ul>
		<li>A->D: ABCD</li>
		<li>A->H: ABCDGH</li>
		<li>H->F: HEF</li>
	</ul>
</body> */

function selectRange(tree, from, to) {
  let started = false,
    found = []

  function visit(node) {
    if (typeof node === "string") {
      if (node === from) {
        started = true
      }

      if (started) {
        found.push(node)
      }

      if (node === to) {
        started = false
      }
      return
    }

    node.forEach(visit)
  }

  visit(tree)
  return found
}

const doms = ["a", "b", ["c", "d", ["g", "h"]], ["e", "f"]]

console.log(selectRange(doms, "a", "d"))
console.log(selectRange(doms, "a", "h"))
console.log(selectRange(doms, "h", "f"))
console.log(selectRange(doms, "d", "e"))
