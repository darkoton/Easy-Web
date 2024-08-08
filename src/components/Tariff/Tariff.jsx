import './Tariff.css';

export default function TariffSection() {
  return (
    <section className="tariff">
      <div className="tariff__container _container">
        <div className="tariff__body">
          <div className="tariff__top">
            <h2 className="tariff__title">Тарифы</h2>
            <div className="tariff__tabs">
              <button className="tariff__tab">1 месяц</button>
              <button className="tariff__tab">
                3 месяца <span className="blue-text">-10%</span>
              </button>
              <button className="tariff__tab">
                6 месяцев <span className="blue-text">-20%</span>
              </button>
              <button className="tariff__tab">
                12 месяцев <span className="blue-text">-30%</span>
              </button>
            </div>
          </div>

          <div className="tariff__main">
            <div className="tariff__notes">
              <span className="tariff__note">Сайтов</span>
              <span className="tariff__note">Шаблоны лендингов</span>
              <span className="tariff__note">Логирование лидов</span>
              <span className="tariff__note">Интеграции</span>
              <span className="tariff__note">Хост + покупка доменов</span>
              <span className="tariff__note">Подключение счетчиков</span>
              <span className="tariff__note">Скачивание сайтов</span>
              <span className="tariff__note">Трекер</span>
              <span className="tariff__note">А/B тестирование</span>
              <span className="tariff__note">Командный режим</span>
            </div>
            <div className="tariff__plans">
              <div className="tariff__plan"></div>
            </div>
          </div>

          <div className="tariff__button">Попробовать бесплатно</div>
        </div>
      </div>
    </section>
  );
}
