import { useState } from "react";
import useCurrencyInfo from "../hooks/useCurrencyInfo";
import InputBox from "./InputBox";
import { formatRate, popularCurrencies } from "../utils/currency";

const timeFormatter = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "2-digit",
});

function ConverterCard({ className = "", onConvert }) {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const { data: currencyInfo, isLoading, error, retry } = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  const displayRate = currencyInfo[to] ? formatRate(currencyInfo[to]) : "--";
  const selectOptions = options.length > 0 ? options : popularCurrencies;
  const lastUpdated = timeFormatter.format(new Date());

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    const rate = currencyInfo[to] ?? 0;
    const nextAmount = amount * rate;

    setConvertedAmount(nextAmount);

      if (onConvert) {
        onConvert({
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        from,
        to,
        amount,
        rate,
        convertedAmount: nextAmount,
        timestamp: Date.now(),
      });
    }
  };

  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-xl backdrop-blur ${className}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-slate-900">
            Currency Converter
          </p>
          <p className="text-xs text-slate-500">Real-time mid-market rates</p>
        </div>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          Live
        </span>
      </div>
      <form
        className="mt-6 space-y-4"
        onSubmit={(event) => {
          event.preventDefault();
          convert();
        }}>
        <InputBox
          label="From"
          amount={amount}
          onAmountChange={(nextAmount) => setAmount(nextAmount)}
          currencyOptions={selectOptions}
          onCurrencyChange={(currency) => setFrom(currency)}
          selectedCurrency={from}
          className="bg-slate-50"
        />
        <div className="relative flex items-center justify-center">
          <div className="h-px w-full bg-slate-200" />
          <button
            type="button"
            className="absolute rounded-full border border-slate-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600 shadow-sm hover:text-slate-900"
            onClick={swap}>
            Swap
          </button>
        </div>
        <InputBox
          label="To"
          amount={convertedAmount}
          currencyOptions={selectOptions}
          onCurrencyChange={(currency) => setTo(currency)}
          selectedCurrency={to}
          amountDisabled
          onAmountChange={setConvertedAmount}
          className="bg-slate-50"
        />
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg bg-slate-50 p-3">
            <p className="text-xs text-slate-500">Rate</p>
            <p className="text-sm font-semibold text-slate-900">
              1 {from.toUpperCase()} = {displayRate} {to.toUpperCase()}
            </p>
          </div>
          <div className="rounded-lg bg-slate-50 p-3">
            <p className="text-xs text-slate-500">Last updated</p>
            <p className="text-sm font-semibold text-slate-900">
              {lastUpdated}
            </p>
          </div>
        </div>
        {isLoading && (
          <p className="rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-500">
            Fetching latest rates...
          </p>
        )}
        {error && (
          <div className="flex items-center justify-between gap-3 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-xs text-rose-700">
            <span>Rates are unavailable. Try again.</span>
            <button
              type="button"
              className="text-xs font-semibold text-rose-700"
              onClick={retry}>
              Retry
            </button>
          </div>
        )}
        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
          disabled={isLoading || Boolean(error)}>
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
        <p className="text-xs text-slate-500">
          By continuing you agree to our terms and transparent pricing policy.
        </p>
      </form>
    </div>
  );
}

export default ConverterCard;
