// only call effect after first render

import React, {EffectCallback, DependencyList, useRef, useEffect} from 'react';

export function useUpdateEffect(effect: EffectCallback, deps?: DependencyList) {
  const ref = useRef<boolean>();

  if (ref.current === undefined) {
    ref.current = true;
  } else if (ref.current) {
    ref.current = false;
  }

  useEffect(() => {
    let res;
    if (ref.current === false) {
      res = effect()
    }

    return res
  }, deps)
}