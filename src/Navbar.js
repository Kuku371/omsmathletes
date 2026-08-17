import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/meetings", label: "Meetings" },
  { to: "/events", label: "Events" },
  { to: "/staff", label: "Staff" },
  { to: "/faq", label: "FAQ" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="wrap nav__inner">

        <NavLink
          to="/"
          end
          className="nav__brand"
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark" aria-hidden="true">
            ∑
          </span>

          <span>Oregon Middle School Mathletes</span>
        </NavLink>

        <button
          className="nav__toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "×" : "≡"}
        </button>

        <nav className={`nav__links ${open ? "open" : ""}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `nav__link ${isActive ? "active" : ""}`
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

      </div>
    </header>
  );
}
