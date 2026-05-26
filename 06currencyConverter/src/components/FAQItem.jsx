function FAQItem({ question, answer }) {
  return (
    <details className="group rounded-xl border border-slate-200 bg-white p-5">
      <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-900">
        <span>{question}</span>
        <span className="ml-4 text-base text-slate-400 transition group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="mt-3 text-sm text-slate-600">{answer}</p>
    </details>
  );
}

export default FAQItem;
