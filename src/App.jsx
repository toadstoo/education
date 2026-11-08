import { useState } from 'react';
import './styles/App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import About from './components/About/About';
import Lectors from './components/Lectors/Lectors';
import Partners from './components/Partners/Partners';

const SECTIONS = [
  { id: 'main', label: 'Главная' },
  { id: 'about', label: 'О нас' },
  { id: 'lectors', label: 'Лекторы' }, // отдельная страница
  { id: 'partners', label: 'Партнеры' },
];

function App() {
  const [page, setPage] = useState('home');    // 'home' | 'lectors'
  const [active, setActive] = useState('main'); // активный пункт навбара

  const handleNavigate = (id) => {
    // "Лекторы" — отдельная страница
    if (id === 'lectors') {
      setPage('lectors');
      setActive('lectors');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // если мы на странице лекторов — вернуться на главную и проскроллить
    if (page !== 'home') {
      setPage('home');
      setActive(id);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 0);
      return;
    }

    // мы уже на главной — просто скроллим
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Navbar sections={SECTIONS} current={active} onNavigate={handleNavigate} />

      {page === 'home' && (
        <main className="main">
          <section id="main">
            <Main />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="partners">
            <Partners />
          </section>
        </main>
      )}

      {page === 'lectors' && (
        <main className="main">
          <Lectors />
        </main>
      )}
    </div>
  );
}

export default App;