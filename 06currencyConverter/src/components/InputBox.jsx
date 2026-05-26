import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const amountInputId = useId();
  return (
    <div
      className={`flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-4 text-sm sm:flex-row sm:items-center ${className}`}>
      <div className="w-full sm:w-1/2">
        <label
          htmlFor={amountInputId}
          className="mb-2 inline-block text-xs font-semibold uppercase tracking-wide text-slate-500">
          {label}
        </label>
        <input
          id={amountInputId}
          className="w-full bg-transparent py-2 text-base font-semibold text-slate-900 outline-none placeholder:text-slate-400"
          type="number"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(parseFloat(e.target.value) || 0)
          }
        />
      </div>
      <div className="w-full sm:w-1/2 sm:text-right">
        <p className="mb-2 w-full text-xs font-semibold uppercase tracking-wide text-slate-500">
          Currency
        </p>
        <select
          className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 outline-none sm:w-auto"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}>
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
