import Heap from './heap'

describe('Heap', () => {

  it('init size', () => {
    const h = new Heap()
    expect(h.size()).toEqual(0)
  })

  it('add pop', () => {
    const h = new Heap()
    h.add(10)
    expect(h.toArray()).toEqual([10])
    h.add(2); h.add(8)
    expect(h.toArray()).toEqual([2, 10, 8])
    h.add(1);
    expect(h.toArray()).toEqual([1, 2, 8, 10])
    h.add(5);
    expect(h.toArray()).toEqual([1, 2, 8, 10, 5])
    h.add(3);
    expect(h.toArray()).toEqual([1, 2, 3, 10, 5, 8])
    h.pop();
    expect(h.toArray()).toEqual([2, 5, 3, 10, 8])
    h.pop();
    expect(h.toArray()).toEqual([3, 5, 8, 10])
    h.pop();
    expect(h.toArray()).toEqual([5, 10, 8])
    h.pop();
    expect(h.toArray()).toEqual([8, 10])
    h.pop();
    expect(h.toArray()).toEqual([10])
    h.pop();
    expect(h.toArray()).toEqual([])
  })

})
