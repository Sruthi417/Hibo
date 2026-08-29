"use client";

import { useState } from "react";
import "./Navbar.scss";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${isOpen ? "navbar--open" : ""}`}>
      <div className="navbar__inner">

        {/* Logo */}
        <a href="/" className="navbar__logo" onClick={closeMenu}>
          <img
            src="/logo.png"
            alt="Hibo"
          />
        </a>

        {/* Navigation */}
        <div className="navbar__links">
          <a href="/" className="navbar__link navbar__link--active" onClick={closeMenu}>
            Home
          </a>

          <a href="#feature" className="navbar__link" onClick={closeMenu}>
            Feature
          </a>

          <a href="#process" className="navbar__link" onClick={closeMenu}>
            Process
          </a>

          <a href="#contact" className="navbar__link" onClick={closeMenu}>
            Contact
          </a>
        </div>

        {/* Download (desktop) */}
        <a href="#download" className="navbar__download navbar__download--desktop">
          Download
        </a>

        {/* Hamburger */}
        <button
          type="button"
          className="navbar__toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <svg viewBox="0 0 24 24" width="20" height="20">
              <line x1="5" y1="5" x2="19" y2="19" stroke="#001824" strokeWidth="2" strokeLinecap="round" />
              <line x1="19" y1="5" x2="5" y2="19" stroke="#001824" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <>
              <span></span>
              <span></span>
              <span></span>
            </>
          )}
        </button>

      </div>

      {/* Mobile dropdown menu */}
      <div className="navbar__menu">
        <div className="navbar__menu-links">
          <a href="/" className="navbar__link navbar__link--active" onClick={closeMenu}>
            Home
          </a>

          <a href="#feature" className="navbar__link" onClick={closeMenu}>
            Feature
          </a>

          <a href="#process" className="navbar__link" onClick={closeMenu}>
            Process
          </a>

          <a href="#contact" className="navbar__link" onClick={closeMenu}>
            Contact
          </a>

          <a href="#download" className="navbar__download navbar__download--mobile" onClick={closeMenu}>
            Download
          </a>
        </div>
      </div>
    </nav>
  );
}
