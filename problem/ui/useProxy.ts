import { useEffect, useMemo, useRef, useState } from 'react'

type ChangeListener = (key: PropertyKey) => void

type Store = {
  listeners: Set<ChangeListener>
}

const proxyStore = new WeakMap<object, Store>()

export function proxy<T extends object>(target: T): T {
  const store: Store = { listeners: new Set() }
  const p = new Proxy(target as object, {
    set(obj, key, value, receiver) {
      const oldValue = (obj as any)[key]
      const result = Reflect.set(obj, key, value, receiver)
      if (oldValue !== value) {
        const s = proxyStore.get(p)!
        s.listeners.forEach((fn) => fn(key))
      }
      return result
    },
  }) as T
  proxyStore.set(p as unknown as object, store)
  return p
}

export function useSnapshot<T extends object>(state: T): T {
  const accessedRef = useRef<Set<PropertyKey>>(new Set())
  const [, force] = useState(0)

  useEffect(() => {
    const store = proxyStore.get(state as unknown as object)
    if (!store) return
    const listener: ChangeListener = (key) => {
      if (accessedRef.current.has(key)) {
        force((v) => v + 1)
      }
    }
    store.listeners.add(listener)
    return () => {
      store.listeners.delete(listener)
    }
  }, [state])

  const snap = useMemo(() => {
    accessedRef.current.clear()
    return new Proxy(state as object, {
      get(obj, key, receiver) {
        accessedRef.current.add(key)
        return Reflect.get(obj, key, receiver)
      },
    }) as T
  }, [state, force])

  return snap
}

/*
// Example usage (JSX removed to keep this file as .ts):
const state = proxy({ count: 0, text: 'hello' })
function inc() { ;(state as any).count += 1 }
const snap = useSnapshot(state)
console.log(snap.count)
*/