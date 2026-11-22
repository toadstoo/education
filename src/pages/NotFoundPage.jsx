import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <main className="main">
      <section className="block stack">
        <h1 className="page-title">Страница не найдена</h1>
        <p>Проверьте адрес или вернитесь на главную.</p>
        <p>
          <Link to="/">На главную</Link>
        </p>
      </section>
    </main>
  );
}

export default NotFoundPage;
