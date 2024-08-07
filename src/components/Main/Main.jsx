import laptop from '@/assets/img/main/laptop.png';
import head from '@/assets/img/main/head.png';
import '@/components/Main/Main.css';

export default function MainSection() {
  return (
    <main className="main">
      <div className="main__container _container">
        <div className="main__body">
          <div className="main__left">
            <img src={laptop} alt="" className="main__laptop" />
          </div>
          <div className="main__right">
            <h1 className="main__title">
              Конструктор лендингов для товарного бизнеса
            </h1>
            <p className="main__description">
              Зарабатывайте больше, создавайте за минуты
            </p>

            <button className="main__button">Начать бесплатно</button>

            <div className="main__head-body">
              <img src={head} alt="" className="main__head" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
