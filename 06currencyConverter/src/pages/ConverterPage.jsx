import ConverterCard from "../components/ConverterCard";
import SectionHeader from "../components/SectionHeader";
import useLocalStorageState from "../hooks/useLocalStorageState";
import { currencyLabels, formatRate, popularCurrencies } from "../utils/currency";

const amountFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2,
});

function ConverterPage() {
  const [watchlist, setWatchlist] = useLocalStorageState("fx-watchlist", []);
  const [alerts, setAlerts] = useLocalStorageState("fx-alerts", []);
  const [history, setHistory] = useLocalStorageState("fx-history", []);

  const [watchFrom, setWatchFrom] = useLocalStorageState(
    "fx-watch-from",
    "usd",
  );
  const [watchTo, setWatchTo] = useLocalStorageState("fx-watch-to", "eur");
  const [alertFrom, setAlertFrom] = useLocalStorageState(
    "fx-alert-from",
    "usd",
  );
  const [alertTo, setAlertTo] = useLocalStorageState("fx-alert-to", "inr");
  const [alertDirection, setAlertDirection] = useLocalStorageState(
    "fx-alert-direction",
    "above",
  );
  const [alertTarget, setAlertTarget] = useLocalStorageState(
    "fx-alert-target",
    "",
  );

  const alertTargetValue = Number.parseFloat(alertTarget);
  const isAlertValid =
    Number.isFinite(alertTargetValue) &&
    alertTargetValue > 0 &&
    alertFrom !== alertTo;
  const isWatchValid = watchFrom !== watchTo;
  const watchExists = watchlist.some(
    (item) => item.from === watchFrom && item.to === watchTo,
  );
  const alertExists = alerts.some(
    (item) =>
      item.from === alertFrom &&
      item.to === alertTo &&
      item.direction === alertDirection &&
      item.target === alertTargetValue,
  );

  const handleAddWatchlist = () => {
    if (!isWatchValid) {
      return;
    }

    if (watchExists) {
      return;
    }

    setWatchlist((previous) => [
      ...previous,
      {
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        from: watchFrom,
        to: watchTo,
      },
    ]);
  };

  const handleAddAlert = () => {
    if (!isAlertValid) {
      return;
    }

    if (alertExists) {
      return;
    }

    setAlerts((previous) => [
      ...previous,
      {
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        from: alertFrom,
        to: alertTo,
        direction: alertDirection,
        target: alertTargetValue,
      },
    ]);
    setAlertTarget("");
  };

  const handleConvert = (entry) => {
    setHistory((previous) => [entry, ...previous].slice(0, 10));
  };

  const handleRemoveWatchlist = (id) => {
    setWatchlist((previous) => previous.filter((item) => item.id !== id));
  };

  const handleRemoveAlert = (id) => {
    setAlerts((previous) => previous.filter((item) => item.id !== id));
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  return (
    <>
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            eyebrow="Converter"
            title="Professional-grade conversion workspace"
            description="Manage your most important pairs, set target alerts, and track conversion history in one place."
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <ConverterCard onConvert={handleConvert} />
            <div className="grid gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">Watchlist</p>
                <p className="mt-1 text-xs text-slate-500">
                  Track your most-used currency pairs.
                </p>
                <div className="mt-4 grid gap-3">
                  <div className="grid gap-2 sm:grid-cols-2">
                    <select
                      className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700"
                      value={watchFrom}
                      onChange={(event) => setWatchFrom(event.target.value)}>
                      {popularCurrencies.map((code) => (
                        <option key={code} value={code}>
                          {code.toUpperCase()} — {currencyLabels[code]}
                        </option>
                      ))}
                    </select>
                    <select
                      className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700"
                      value={watchTo}
                      onChange={(event) => setWatchTo(event.target.value)}>
                      {popularCurrencies.map((code) => (
                        <option key={code} value={code}>
                          {code.toUpperCase()} — {currencyLabels[code]}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-slate-300"
                    onClick={handleAddWatchlist}
                    disabled={!isWatchValid || watchExists}>
                    Add to watchlist
                  </button>
                </div>
                {watchExists && (
                  <p className="text-xs text-slate-500">
                    This pair is already in your watchlist.
                  </p>
                )}
                <div className="mt-5 space-y-3">
                  {watchlist.length === 0 ? (
                    <p className="text-sm text-slate-500">
                      No pairs yet. Add your first watchlist entry.
                    </p>
                  ) : (
                    watchlist.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-sm">
                        <span className="font-semibold text-slate-900">
                          {item.from.toUpperCase()} → {item.to.toUpperCase()}
                        </span>
                        <button
                          className="text-xs font-semibold text-slate-500 hover:text-slate-900"
                          onClick={() => handleRemoveWatchlist(item.id)}>
                          Remove
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">
                  Rate alerts
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Save thresholds and get notified when your target is hit.
                </p>
                <div className="mt-4 grid gap-3">
                  <div className="grid gap-2 sm:grid-cols-2">
                    <select
                      className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700"
                      value={alertFrom}
                      onChange={(event) => setAlertFrom(event.target.value)}>
                      {popularCurrencies.map((code) => (
                        <option key={code} value={code}>
                          {code.toUpperCase()} — {currencyLabels[code]}
                        </option>
                      ))}
                    </select>
                    <select
                      className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700"
                      value={alertTo}
                      onChange={(event) => setAlertTo(event.target.value)}>
                      {popularCurrencies.map((code) => (
                        <option key={code} value={code}>
                          {code.toUpperCase()} — {currencyLabels[code]}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-[1fr_1fr_1fr]">
                    <select
                      className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700"
                      value={alertDirection}
                      onChange={(event) =>
                        setAlertDirection(event.target.value)
                      }>
                      <option value="above">Above</option>
                      <option value="below">Below</option>
                    </select>
                    <input
                      className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700"
                      type="number"
                      min="0"
                      step="0.0001"
                      placeholder="Target rate"
                      value={alertTarget}
                      onChange={(event) => setAlertTarget(event.target.value)}
                    />
                    <button
                      className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-slate-300"
                      onClick={handleAddAlert}
                      disabled={!isAlertValid || alertExists}>
                      Create alert
                    </button>
                  </div>
                </div>
                {alertExists && (
                  <p className="text-xs text-slate-500">
                    This alert already exists.
                  </p>
                )}
                <div className="mt-5 space-y-3">
                  {alerts.length === 0 ? (
                    <p className="text-sm text-slate-500">
                      No alerts set. Add your first threshold.
                    </p>
                  ) : (
                    alerts.map((alert) => (
                      <div
                        key={alert.id}
                        className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-sm">
                        <div>
                          <p className="font-semibold text-slate-900">
                            {alert.from.toUpperCase()} →{" "}
                            {alert.to.toUpperCase()}
                          </p>
                          <p className="text-xs text-slate-500">
                            {alert.direction} {formatRate(alert.target)}
                          </p>
                        </div>
                        <button
                          className="text-xs font-semibold text-slate-500 hover:text-slate-900"
                          onClick={() => handleRemoveAlert(alert.id)}>
                          Remove
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Conversion history
                </p>
                <p className="text-xs text-slate-500">
                  Last 10 conversions are stored locally in your browser.
                </p>
              </div>
              <button
                className="text-xs font-semibold text-slate-500 hover:text-slate-900"
                onClick={handleClearHistory}
                disabled={history.length === 0}>
                Clear history
              </button>
            </div>
            <div className="mt-5 space-y-3">
              {history.length === 0 ? (
                <p className="text-sm text-slate-500">
                  No conversions yet. Convert a currency pair to populate this
                  list.
                </p>
              ) : (
                history.map((entry) => (
                  <div
                    key={entry.id}
                    className="flex flex-col gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-semibold text-slate-900">
                        {amountFormatter.format(entry.amount)}{" "}
                        {entry.from.toUpperCase()} →{" "}
                        {amountFormatter.format(entry.convertedAmount)}{" "}
                        {entry.to.toUpperCase()}
                      </p>
                      <p className="text-xs text-slate-500">
                        Rate: {formatRate(entry.rate)} •{" "}
                        {new Date(entry.timestamp).toLocaleString()}
                      </p>
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      Stored locally
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ConverterPage;
