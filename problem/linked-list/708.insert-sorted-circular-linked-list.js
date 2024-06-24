function insert(head, v) {
  if (!head) {
    const node = { next: null, val: v };
    node.next = node;
    return node;
  }
  if (head.next == head) {
    const node = { next: head, val: v };
    head.next = node;
    return head;
  }

  let prev = head,
    curr = head.next,
    notFirst = false;

  function add() {
    const node = { next: curr, val: v };
    prev.next = node;
    return head;
  }

  while (!notFirst || prev != head) {
    notFirst = true;
    console.log(prev.val, curr.val);
    if (v >= prev.val && v <= curr.val) return add();
    if (curr.val < prev.val) {
      if (v >= prev.val || v <= curr.val) return add();
    }

    prev = curr;
    curr = curr.next;
  }

  return add();
}
