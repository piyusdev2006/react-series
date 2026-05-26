// Custom hooks

// it is also an hook but it is a custom hook that we created
// function hello() {
//     return ["Hello, World!"]
// }

// custom hooks can also use built in hooks like useState, useEffect, etc. and we can also use other custom hooks inside our custom hook

import { useEffect, useState } from "react";
import { fetchJson } from "../utils/api";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retryToken, setRetryToken] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    setError(null);

    fetchJson(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.min.json`,
      { signal: controller.signal, retries: 1 },
    )
      .then((result) => {
        setData(result[currency] ?? {});
        setIsLoading(false);
      })
      .catch((fetchError) => {
        if (fetchError?.name === "AbortError") {
          return;
        }

        setError(fetchError);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [currency, retryToken]);

  const retry = () => setRetryToken((value) => value + 1);

  return { data, isLoading, error, retry };
}

export default useCurrencyInfo;
