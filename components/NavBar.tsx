"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/chisiamo", label: "Chi siamo" },
  { href: "/servizi", label: "Servizi" },
  { href: "/filosofia", label: "La nostra filosofia" },
  { href: "/contatti", label: "Contatti" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo">
          <Link href="/">PL&amp;CO</Link>
        </div>
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
      </div>
    </header>
  );
}
