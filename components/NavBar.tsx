"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/chisiamo", label: "Chi siamo" },
  { href: "/servizi", label: "Servizi" },
  { href: "/filosofia", label: "La nostra filosofia" },
  { href: "/contatti", label: "Contatti" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo">
          <Link href="/" onClick={closeMenu}>
            PL&amp;CO
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="main-nav">
          {links.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={active ? "nav-link active" : "nav-link"}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          className={open ? "nav-toggle open" : "nav-toggle"}
          type="button"
          aria-label="Apri il menu"
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile dropdown */}
      <nav className={open ? "mobile-nav open" : "mobile-nav"}>
        <div className="container mobile-nav-inner">
          {links.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={active ? "mobile-nav-link active" : "mobile-nav-link"}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
