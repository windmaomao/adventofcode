import React, { useState, useEffect, useRef } from 'react';

export function useSWR<T = any, E = any>(
  _key: string,
  fetcher: () => T | Promise<T>
): {
  data?: T;
  error?: E;
} {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<E>();
  const ref = useRef<T>();

  const res = fetcher();
  const isPromise = res instanceof Promise;

  if (isPromise) {
    res.then(setData).catch(setError);
  }

  return {
    data: isPromise ? data : res,
    error,
  };
}
