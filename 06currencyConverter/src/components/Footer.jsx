const columns = [
  {
    title: "Product",
    links: ["Converter", "Rate alerts", "Payments", "API access"],
  },
  {
    title: "Company",
    links: ["About", "Security", "Careers", "Contact"],
  },
  {
    title: "Resources",
    links: ["Help center", "Documentation", "Blog", "Status"],
  },
];

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-sm font-semibold text-white">
              FX
            </div>
            <div>
              <p className="text-xs text-slate-400">NovaFX</p>
              <p className="text-base font-semibold text-white">
                Currency Platform
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            Global currency infrastructure with real-time rates, transparent
            pricing, and enterprise-grade controls.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-slate-300">
            <span className="rounded-full bg-white/10 px-3 py-1">
              PCI-ready
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1">SOC 2</span>
            <span className="rounded-full bg-white/10 px-3 py-1">
              24/7 Support
            </span>
          </div>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <p className="text-sm font-semibold text-white">{column.title}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              {column.links.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 NovaFX. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
