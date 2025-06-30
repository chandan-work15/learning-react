import { useState, useEffect } from "react";

function useCurrencyOptions() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://api.frankfurter.app/currencies`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.error("Error fetching currencies :", err))
  }, []);
  
  return data;
}

export default useCurrencyOptions;
