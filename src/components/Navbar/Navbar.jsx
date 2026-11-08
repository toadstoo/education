import './Navbar.css';

function Navbar({ sections, current, onNavigate }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <button
            type="button"
            className="navbar-logo"
            onClick={() => onNavigate('main')}
            aria-label="На главную"
          >
            <svg
              viewBox="0 0 24 24"
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 10 12 5 2 10l10 5 10-5Z" />
              <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
            </svg>
          </button>

          <ul className="navbar-list">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  type="button"
                  className={`navbar-button ${section.id === current ? 'active' : ''}`}
                  onClick={() => onNavigate(section.id)}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;