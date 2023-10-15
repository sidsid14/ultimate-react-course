import { useState, useEffect } from "react";

export default function CurrencyConvertor() {
  const [num, setNum] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [output, setOutput] = useState("");
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState("");

  function handleSetNum(num) {
    setNum(num);
  }

  function handleSelectFromCurrency(currency) {
    setFromCurrency(currency);
  }

  function handleSelectToCurrency(currency) {
    setToCurrency(currency);
  }

  useEffect(
    function () {
      const controller = new AbortController();
      if (!num || fromCurrency === toCurrency) return;

      async function fetchConversion() {
        setIsConverting(true);
        setError("");

        try {
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${num}&from=${fromCurrency}&to=${toCurrency}`,
            { signal: controller.signal }
          );

          if (!res.ok) throw Error("An error occured");

          const data = await res.json();
          const convertedCurrency = data.rates[toCurrency];
          setOutput(
            `${num} from ${fromCurrency} to ${toCurrency} is ${convertedCurrency}`
          );
        } catch (e) {
          if (e.name !== "AbortError") {
            setError(e.message);
            console.log(e);
          }
        } finally {
          setIsConverting(false);
        }
      }

      fetchConversion();

      return function () {
        controller.abort();
      };
    },
    [num, fromCurrency, toCurrency]
  );

  return (
    <div>
      <Search num={num} onInput={handleSetNum} isConverting={isConverting} />
      <SelectCurrency
        isConverting={isConverting}
        currency={fromCurrency}
        onSelect={handleSelectFromCurrency}
      />
      <SelectCurrency
        isConverting={isConverting}
        currency={toCurrency}
        onSelect={handleSelectToCurrency}
      />
      {isConverting && <p>CONVERTING...</p>}
      {error && <p>{error}</p>}
      {!isConverting && !error && <p>{output}</p>}
    </div>
  );
}

function Search({ num, onInput, isConverting }) {
  return (
    <input type="text" value={num} onChange={(e) => onInput(e.target.value)} />
  );
}

function SelectCurrency({ currency, onSelect, isConverting }) {
  return (
    <select
      value={currency}
      onChange={(e) => onSelect(e.target.value)}
      disabled={isConverting}
    >
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="CAD">CAD</option>
      <option value="INR">INR</option>
    </select>
  );
}
