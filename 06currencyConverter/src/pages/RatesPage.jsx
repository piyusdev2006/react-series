import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import RateTable from "../components/RateTable";
import useCurrencyInfo from "../hooks/useCurrencyInfo";
import {
  currencyLabels,
  popularCurrencies,
  formatRate,
} from "../utils/currency";

function RatesPage() {
  const [base, setBase] = useState("usd");
  const { data: currencyInfo, isLoading, error, retry } = useCurrencyInfo(base);
  const baseOptions = Object.keys(currencyLabels);
  const rateRows = popularCurrencies
    .filter((code) => code !== base && currencyInfo[code])
    .map((code) => ({
      code,
      name: currencyLabels[code],
      rate: formatRate(currencyInfo[code]),
    }));

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Rates"
            title="Monitor popular currency pairs"
            description="Stay informed with frequently traded pairs and real-time updates from trusted sources."
          />
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Base currency
            </p>
            <select
              className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 outline-none"
              value={base}
              onChange={(event) => setBase(event.target.value)}>
              {baseOptions.map((code) => (
                <option key={code} value={code}>
                  {code.toUpperCase()} — {currencyLabels[code]}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-8">
          {error ? (
            <div className="flex flex-col gap-3 rounded-2xl border border-rose-200 bg-rose-50 px-6 py-5 text-sm text-rose-700">
              <p>We couldn&apos;t load rates right now.</p>
              <button
                className="w-fit rounded-full bg-rose-700 px-4 py-2 text-xs font-semibold text-white"
                onClick={retry}>
                Retry
              </button>
            </div>
          ) : (
            <RateTable base={base} rows={rateRows} isLoading={isLoading} />
          )}
        </div>
      </div>
    </section>
  );
}

export default RatesPage;
