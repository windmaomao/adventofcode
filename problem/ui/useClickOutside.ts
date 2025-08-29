import React, { useEffect, useRef } from 'react'

export function useClickOutside<T extends HTMLElement>(callback: () => void) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const handler = (event: MouseEvent | TouchEvent) => {
      const el = ref.current
      if (!el) return
      const target = event.target
      if (target instanceof Node && !el.contains(target)) {
        callback()
      }
    }

    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler, { passive: true })
    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [callback])

  return ref
}