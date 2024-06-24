var LRUCache = function (capacity) {
  const dic = new Map();
  let head = { prev: null, next: null };
  let tail = { prev: head, next: null };
  head.next = tail;

  function add(node) {
    let prev = tail.prev;
    prev.next = node;
    node.prev = prev;
    node.next = tail;
    tail.prev = node;
  }

  function remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  function get(key) {
    if (dic.has(key)) {
      const node = dic.get(key);
      remove(node);
      add(node);
      return node.val;
    }
    return -1;
  }

  function put(key, val) {
    if (dic.has(key)) remove(dic.get(key));

    const node = { key, val, prev: null, next: null };
    add(node);
    dic.set(key, node);

    if (dic.size > capacity) {
      const _node = head.next;
      remove(_node);
      dic.delete(_node.key);
    }
  }

  return { get, put };
};

var obj = new LRUCache(2);
obj.put(2, 1);
obj.put(1, 1);
obj.put(2, 3);
obj.put(4, 1);
console.log(obj.get(1));
console.log(obj.get(2));
//obj.put(3,3)
//console.log(obj.get(2))
//obj.put(4,4)
//console.log(obj.get(1))
//console.log(obj.get(3))
//console.log(obj.get(4))
