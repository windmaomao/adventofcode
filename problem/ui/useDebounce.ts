import React, { useState, useEffect, useRef } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  const ref = useRef({
    handler: 0,
    hit: (v: T) => {
      if (ref.current.handler) {
        clearTimeout(ref.current.handler);
      }
      ref.current.handler = setTimeout(() => {
        setDebounced(v);
      }, delay);
    },
  });

  useEffect(() => {
    if (ref.current) {
      ref.current.hit(value);
    }

    return () => {
      if (ref.current.handler) {
        clearTimeout(ref.current.handler);
      }
    };
  }, [value]);

  return debounced;
}
