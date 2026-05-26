import { Link, NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  `transition hover:text-slate-900 ${
    isActive ? "text-slate-900" : "text-slate-600"
  }`;

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link className="flex items-center gap-3" to="/">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-semibold text-white">
            FX
          </div>
          <div>
            <p className="text-xs text-slate-500">NovaFX</p>
            <p className="text-base font-semibold leading-tight text-slate-900">
              Currency Platform
            </p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <NavLink className={navLinkClass} end to="/">
            Overview
          </NavLink>
          <NavLink className={navLinkClass} to="/converter">
            Converter
          </NavLink>
          <NavLink className={navLinkClass} to="/rates">
            Rates
          </NavLink>
          <NavLink className={navLinkClass} to="/docs">
            Docs
          </NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden rounded-full px-4 py-2 text-sm text-slate-600 hover:text-slate-900 sm:inline-flex">
            Log in
          </button>
          <Link
            className="inline-flex items-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            to="/converter">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
