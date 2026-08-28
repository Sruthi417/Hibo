import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__inner">

        {/* Logo */}
        <a href="/" className="navbar__logo">
          <img
            src="/logo.png"
            alt="Hibo"
          />
        </a>

        {/* Navigation */}
        <div className="navbar__links">
          <a href="/" className="navbar__link navbar__link--active">
            Home
          </a>

          <a href="#about" className="navbar__link">
            About
          </a>

          <a href="#pricing" className="navbar__link">
            Pricing
          </a>

          <a href="#blog" className="navbar__link">
            Blog
          </a>
        </div>

        {/* Download */}
        <a href="#download" className="navbar__download">
          Download
        </a>

      </div>
    </nav>
  );
}