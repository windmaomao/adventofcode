// 5/28/24
import React, { useEffect, useRef } from "react";

function useInterval(callback, delay) {
  const cb = useRef(callback);
  const handle = useRef();

  function cleanup() {
    if (handle.current) {
      clearInterval(handle.current);
      handle.current = null;
    }
  }

  function invoke() {
    if (handle.current) {
      cb.current();
    }
  }

  useEffect(() => {
    if (delay) {
      handle.current = setInterval(invoke, delay);
    }
    return () => {
      cleanup();
    };
  }, [delay]);

  useEffect(() => {
    cb.current = callback;
  }, [callback]);
}

// Do not edit the line below.
exports.useInterval = useInterval;
