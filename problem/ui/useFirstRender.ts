import React, { useRef } from 'react';

export function useIsFirstRender(): boolean {
  const ref = useRef<boolean>();

  if (ref.current === undefined) {
    ref.current = true;
  } else if (ref.current) {
    ref.current = false;
  }

  return ref.current;
}
