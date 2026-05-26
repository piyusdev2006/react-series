function RateTable({ base, rows }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-slate-50 px-6 py-4">
        <div>
          <p className="text-sm font-semibold text-slate-900">
            Live exchange rates
          </p>
          <p className="text-xs text-slate-500">Updated moments ago</p>
        </div>
        <div className="text-xs font-semibold text-slate-600">
          Base: {base.toUpperCase()}
        </div>
      </div>
      {rows.length === 0 ? (
        <div className="px-6 py-8 text-sm text-slate-500">
          Rates are loading. Try again in a moment.
        </div>
      ) : (
        <div className="divide-y divide-slate-200">
          {rows.map((row) => (
            <div
              key={row.code}
              className="flex items-center justify-between px-6 py-4">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {row.code.toUpperCase()}
                </p>
                <p className="text-xs text-slate-500">{row.name}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-slate-900">
                  {row.rate}
                </p>
                <p className="text-xs text-slate-500">
                  per 1 {base.toUpperCase()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RateTable;
