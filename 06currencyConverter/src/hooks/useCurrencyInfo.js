// Custom hooks

// it is also an hook but it is a custom hook that we created
// function hello() {
//     return ["Hello, World!"]
// }

// custom hooks can also use built in hooks like useState, useEffect, etc. and we can also use other custom hooks inside our custom hook

import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.min.json`,
    )
      .then((res) => res.json())
      .then((data) => setData(data[currency]));
    console.log(data);
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;
