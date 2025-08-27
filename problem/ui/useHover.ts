import { Ref, useLayoutEffect, useState, useCallback } from 'react';

export function useHover<T extends HTMLElement>(): [Ref<T>, boolean] {
  const [hovered, setHovered] = useState(false);
  const [target, setTarget] = useState<T>();

  const attachRef = useCallback((node: T) => {
    setTarget(node);
  }, []);
  const mouseenter = useCallback(() => {
    setHovered(true);
  }, []);
  const mouseleave = useCallback(() => {
    setHovered(false);
  }, []);

  useLayoutEffect(() => {
    if (target) {
      target.addEventListener('mouseenter', mouseenter);
      target.addEventListener('mouseleave', mouseleave);
    }

    return () => {
      if (target) {
        target.removeEventListener('mouseenter', mouseenter);
        target.removeEventListener('mouseleave', mouseleave);
      }
    };
  }, [target]);

  return [attachRef, hovered];
}
