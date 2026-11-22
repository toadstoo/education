import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const SECTIONS = [
  { id: 'main', label: 'Главная', to: '/' },
  { id: 'about', label: 'О нас', to: '/about' },
  { id: 'lectors', label: 'Лекторы', to: '/lecturers' },
  // { id: 'partners', label: 'Партнеры', to: '/#partners' },
];

function Navbar() {
  const { pathname, hash } = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link
            to="/"
            className="navbar-logo"
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
          </Link>

          <ul className="navbar-list">
            {SECTIONS.map((section) => (
              <li key={section.id}>
                <NavLink
                  to={section.to}
                  end={section.id === 'main'}
                  className={({ isActive }) =>
                    `navbar-button ${
                      (section.id === 'partners'
                        ? pathname === '/' && hash === '#partners'
                        : isActive)
                        ? 'active'
                        : ''
                    }`
                  }
                >
                  {section.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;