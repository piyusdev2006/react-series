function SectionHeader({ eyebrow, title, description, align = "left" }) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-semibold text-slate-900">{title}</h2>
      {description && (
        <p className="text-base text-slate-600 md:max-w-2xl">{description}</p>
      )}
    </div>
  );
}

export default SectionHeader;
