import { useState } from 'react';
import './Main.css';
import Lectors from '../Lectors/Lectors';

const photo = '/main.jpg';

function Main() {
  const [showLectors, setShowLectors] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
  }

  if (showLectors) {
    return <Lectors />;
  }

  return (
    <section className="block stack stack-lg">
      <div className="main-hero">
        <div className="main-photo">
          <img src={photo} alt="" />
        </div>

        <div className="main-content">
          <h1 className="page-title">Наши лекторы — признанные специалисты в своих областях, готовые делиться опытом и знаниями.</h1>

          <button
  type="button"
  className="lectors-cta"
  onClick={() => setShowLectors(true)}
>
  Найти лектора
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="4" y1="12" x2="20" y2="12" />
    <polyline points="13 5 20 12 13 19" />
  </svg>
</button>
        </div>
      </div>

      <div className="card-grid">
        <article className="card">
          <h2>Экспертиза под ваш запрос</h2>
          <p>
            Учитываем ваши цели, уровень подготовки и формат обучения — предложим
            специалиста, чья экспертиза максимально точно закрывает поставленную задачу.
          </p>
        </article>

        <article className="card">
          <h2>Удобный формат обучения</h2>
          <p>
            Онлайн или офлайн, индивидуально или в группе — вы сами выбираете удобный
            ритм и расписание, а мы адаптируем программу под ваши сроки.
          </p>
        </article>

        <article className="card">
          <h2>Отобранные лекторы</h2>
          <p>
            Мы тщательно отбираем преподавателей: смотрим на квалификацию, практический
            опыт и отзывы. Всё это открыто — изучайте профили и принимайте решение уверенно.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Main;