import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({
        behavior: 'smooth',
      });
      return;
    }

    window.scrollTo({ top: 0 });
  }, [pathname, hash]);

  return (
    <div className="app">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
