import React, { useEffect, useRef } from 'react';

export function useTimeout(callback: () => void, delay: number) {
  const ref = useRef({
    handler: 0,
    callback,
  });

  useEffect(() => {
    ref.current.callback = callback;
  }, [callback]);

  useEffect(() => {
    if (ref.current.handler) {
      clearTimeout(ref.current.handler);
    }

    ref.current.handler = setTimeout(() => {
      ref.current.callback();
    }, delay);

    return () => {
      if (ref.current.handler) {
        clearTimeout(ref.current.handler);
      }
    };
  }, [delay]);
}
