import React, { useEffect, useRef } from 'react';

export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<{ curr?: T; prev?: T }>({
    curr: undefined,
    prev: undefined,
  });

  if (value !== ref.current.curr) {
    ref.current.prev = ref.current.curr;
    ref.current.curr = value;
  }

  return ref.current.prev;
}
