import { useState, useEffect } from "react";

function useCurrencyInfo(from, to) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!from || !to)
      {
        return;
      }
    fetch(`https://api.frankfurter.app/latest?from=${from}&to=${to}`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.error("Error fetching exchance rate : ", err));
  }, [from, to]);

  return data;
}

// function useCurrencyInfo(from, to) {
//   const [data, setData] = useState({});
//   useEffect(() => {
//     fetch(`https://api.frankfurter.app/latest?from=${from}&to=${to}`)
//       .then((res) => res.json())
//       .then((res) => setData(res));
//   }, []);
//   console.log(data);
//   return data;
// }

export default useCurrencyInfo;
