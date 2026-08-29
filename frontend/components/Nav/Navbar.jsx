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

          <a href="#feature" className="navbar__link">
            Feature
          </a>

          <a href="#process" className="navbar__link">
            Process
          </a>

          <a href="#contact" className="navbar__link">
            Contact
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