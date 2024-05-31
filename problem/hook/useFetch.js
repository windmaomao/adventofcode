// 5/28/24
import React, { useState, useEffect, useRef } from "react";

function useFetch(url) {
  const [responseJSON, setResponseJSON] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const mounted = useRef();

  useEffect(() => {
    mounted.current = url;
    setIsLoading(true);
    setError(null);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (url != mounted.current) return;
        setResponseJSON(res);
        setIsLoading(false);
      })
      .catch((e) => {
        if (url != mounted.current) return;
        setResponseJSON(null);
        setError(e);
        setIsLoading(false);
      });

    return () => {
      mounted.current = "";
    };
  }, [url]);

  return {
    responseJSON,
    isLoading,
    error,
  };
}

// Do not edit the line below.
exports.useFetch = useFetch;
