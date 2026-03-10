"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "../content";
import { OlympicRings } from "./OlympicRings";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const links = (
    <div className="nav-links">
      {navLinks.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-link${active ? " active" : ""}`}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link href="/" className="brand">
          <OlympicRings compact />
          <span>
            Paris 2024
            <small>Tableau de bord interactif</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Navigation principale">
          {links}
        </nav>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
        </button>
      </div>
      {open ? (
        <div className="container">
          <nav className="mobile-nav" aria-label="Navigation mobile">
            {links}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
