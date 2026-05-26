import SectionHeader from "../components/SectionHeader";

const docCards = [
  {
    title: "API Overview",
    description:
      "Integrate real-time FX pricing using our read-only endpoints and clear rate limits.",
  },
  {
    title: "Conversion Workflow",
    description:
      "Fetch rates, validate amounts, and execute conversions with auditable metadata.",
  },
  {
    title: "Security & Compliance",
    description:
      "SOC 2 ready infrastructure with encryption in transit and per-request logging.",
  },
];

const steps = [
  "Authenticate your application and register environments.",
  "Request live rates and cache responses for 60 seconds.",
  "Submit conversions with your preferred settlement currency.",
  "Review conversion logs and export audit reports.",
];

function DocsPage() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Docs"
          title="Build with NovaFX APIs"
          description="Developer-first tooling with reliable documentation and clear implementation steps."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {docCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-lg font-semibold text-slate-900">
                {card.title}
              </p>
              <p className="mt-2 text-sm text-slate-600">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Quick start
          </p>
          <ol className="mt-4 grid gap-3 text-sm text-slate-700">
            {steps.map((step) => (
              <li key={step} className="rounded-lg bg-slate-50 px-4 py-3">
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default DocsPage;
