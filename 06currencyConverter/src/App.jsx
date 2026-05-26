import { useState } from "react";
import {
  InputBox,
  Header,
  Footer,
  SectionHeader,
  StatCard,
  FeatureCard,
  RateTable,
  FAQItem,
} from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";
import bg from "./assets/currencyConverterBackgroundImage.jpg";
import "./App.css";

const highlights = [
  {
    label: "Real-time quotes",
    value: "Sub-second refresh",
  },
  {
    label: "Total currencies",
    value: "160+ supported",
  },
  {
    label: "Transparent pricing",
    value: "No hidden fees",
  },
];

const stats = [
  {
    value: "1.8M+",
    label: "Conversions this month",
    helper: "Processed with enterprise-grade security.",
  },
  {
    value: "99.99%",
    label: "Uptime for FX services",
    helper: "Redundant infrastructure across regions.",
  },
  {
    value: "24/7",
    label: "Monitoring and support",
    helper: "Always-on observability and expert help.",
  },
];

const features = [
  {
    title: "Live mid-market rates",
    description:
      "Pricing is sourced from top liquidity providers to keep conversions accurate and fair.",
    tag: "Pricing",
  },
  {
    title: "Multi-currency wallets",
    description:
      "Hold balances in multiple currencies and convert on demand with full visibility.",
    tag: "Treasury",
  },
  {
    title: "Automated compliance",
    description:
      "Built-in risk checks and audit trails keep every conversion accountable.",
    tag: "Risk",
  },
];

const faqs = [
  {
    question: "How often are exchange rates updated?",
    answer:
      "Rates refresh continuously throughout the day with automatic failover.",
  },
  {
    question: "Are there any hidden conversion fees?",
    answer:
      "No. All fees are shown before you convert, and mid-market rates are used.",
  },
  {
    question: "Can I integrate this into my product?",
    answer:
      "Yes. Use our API access plan to embed conversion, payouts, and reporting.",
  },
];

const trustBadges = ["Stripe", "Wise", "Revolut", "Shopify", "Airbnb"];

const currencyLabels = {
  usd: "US Dollar",
  eur: "Euro",
  gbp: "British Pound",
  inr: "Indian Rupee",
  jpy: "Japanese Yen",
  aud: "Australian Dollar",
  cad: "Canadian Dollar",
  cny: "Chinese Yuan",
  sgd: "Singapore Dollar",
};

const popularCurrencies = ["usd", "eur", "gbp", "inr", "jpy", "aud", "cad"];
const rateFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 4,
});

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  const lastUpdated = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date());
  const displayRate = currencyInfo[to]
    ? rateFormatter.format(currencyInfo[to])
    : "--";
  const rateRows = popularCurrencies
    .filter((code) => code !== from && currencyInfo[code])
    .slice(0, 6)
    .map((code) => ({
      code,
      name: currencyLabels[code] || "Popular currency",
      rate: rateFormatter.format(currencyInfo[code]),
    }));

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main>
        <section id="converter" className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
            <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-blue-200/50 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
            <div
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{ backgroundImage: `url(${bg})` }}
            />
          </div>
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                Live currency conversion
              </span>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Convert, compare, and move money with confidence.
              </h1>
              <p className="mt-4 text-base text-slate-600">
                Production-grade FX platform with transparent pricing, real-time
                monitoring, and enterprise-ready controls.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
                  Start converting
                </button>
                <button className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:border-slate-400">
                  View live rates
                </button>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <p className="text-sm font-semibold text-slate-900">
                      {item.value}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-xl backdrop-blur">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Currency Converter
                  </p>
                  <p className="text-xs text-slate-500">
                    Real-time mid-market rates
                  </p>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Live
                </span>
              </div>
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  convert();
                }}>
                <InputBox
                  label="From"
                  amount={amount}
                  onAmountChange={(amount) => setAmount(amount)}
                  currencyOptions={options}
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
                  currencyOptions={options}
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
                <button
                  type="submit"
                  className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
                  Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
                <p className="text-xs text-slate-500">
                  By continuing you agree to our terms and transparent pricing
                  policy.
                </p>
              </form>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-5 md:flex-row md:items-center md:justify-between">
              <p className="text-sm font-semibold text-slate-700">
                Trusted by teams moving money globally
              </p>
              <div className="flex flex-wrap gap-3 text-xs font-semibold text-slate-500">
                {trustBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="mx-auto max-w-6xl px-4">
            <SectionHeader
              eyebrow="Scale"
              title="Production-ready infrastructure"
              description="Built to handle high-volume conversions, multi-currency wallets, and audit-ready reporting."
            />
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <SectionHeader
              eyebrow="Features"
              title="Everything you need to operate at scale"
              description="Modern tooling for pricing, treasury, and compliance with clear visibility for every conversion."
            />
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </section>

        <section id="rates" className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <SectionHeader
              eyebrow="Rates"
              title="Monitor popular currency pairs"
              description="Stay informed with frequently traded pairs and real-time updates from trusted sources."
              align="center"
            />
            <div className="mt-8">
              <RateTable base={from} rows={rateRows} />
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <SectionHeader
              eyebrow="FAQ"
              title="Answers for teams and individual users"
              description="Need help? Here are the most common questions from production-scale deployments."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {faqs.map((faq) => (
                <FAQItem key={faq.question} {...faq} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-10 text-white md:px-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-blue-100">
                    Ready to scale?
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold">
                    Launch production-grade FX in days, not weeks.
                  </h2>
                  <p className="mt-3 text-sm text-blue-100">
                    Get API access, rate alerts, and treasury controls built for
                    global teams.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-blue-700">
                    Request a demo
                  </button>
                  <button className="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white">
                    Talk to sales
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
