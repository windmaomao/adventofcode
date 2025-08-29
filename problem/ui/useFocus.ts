import { Ref, useLayoutEffect, useState, useCallback } from 'react';

export function useFocus<T extends HTMLElement>(): [Ref<T>, boolean] {
  const [focused, setFocused] = useState(false);
  const [target, setTarget] = useState<T>();

  const attachRef = useCallback((node: T) => {
    setTarget(node);
  }, []);
  const onfocus = useCallback(() => {
    setFocused(true);
  }, []);
  const onblur = useCallback(() => {
    setFocused(false);
  }, []);

  useLayoutEffect(() => {
    if (target) {
      target.addEventListener('focus', onfocus);
      target.addEventListener('blur', onblur);
    }

    return () => {
      if (target) {
        target.removeEventListener('focus', onfocus);
        target.removeEventListener('blur', onblur);
      }
    };
  }, [target]);

  return [attachRef, focused];
}
