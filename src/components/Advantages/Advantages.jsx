import './Advantages.css';
import domain from '@/assets/img/advantages/domain.png';
import team from '@/assets/img/advantages/team.png';
import tests from '@/assets/img/advantages/tests.png';
import view from '@/assets/img/advantages/view.png';
import propTypes from 'prop-types';

const cards = [
  {
    title: 'Автоматическая покупка доменов',
    description:
      'Забудьте о регистраторах доменов, DNS и прочее. С нами все легко и просто',
    img: domain,
    width: 'col-span-10 md:col-span-6 ',
  },
  {
    title: 'Командный режим',
    description: 'Совместная работа с трафиком проще чем когда-либо',
    img: team,
    width: 'col-span-10 md:col-span-4',
  },
  {
    title: 'A/B тестирование',
    description: 'Оптимизируйте лендинги до максимального профита',
    img: tests,
    width: 'col-span-10 md:col-span-4',
  },
  {
    title: 'Удобный просмотр заказов',
    description:
      'Вся информация в одном месте, а Шейв / Потеря лидов становится невозможным',
    img: view,
    width: 'col-span-10 md:col-span-6',
  },
];

export default function AdvantagesSection() {
  return (
    <section className="advantages">
      <div className="advantages__container">
        <div className="advantages__body">
          <h2 className="advantages__title">Наши преимущества</h2>

          <div className="advantages__grid">
            {cards.map(card => (
              <Card key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Card.propTypes = {
  img: propTypes.string,
  title: propTypes.string,
  description: propTypes.string,
  width: propTypes.string,
};

function Card({ img, title, description, width }) {
  return (
    <div className={['advantages__card', width].join(' ')}>
      <img src={img} alt="" className="advantages__card-img" />

      <h4 className="advantages__card-title">{title}</h4>
      <p className="advantages__card-desctiption">{description}</p>
    </div>
  );
}
