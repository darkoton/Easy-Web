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
    <section className="advantages mt-16 md:mt-32">
      <div className="advantages__container w-full max-w-[944px] mx-auto px-4">
        <div className="advantages__body">
          <h2 className="advantages__title text-center font-bold text-[28px] mb-8 md:text-4xl md:mb-12">
            Наши преимущества
          </h2>

          <div className="advantages__grid grid gap-4 grid-cols-10 grid-flow-dense">
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
    <div
      className={[
        'advantages__card flex flex-col items-start bg-[#F6F7FB] rounded-[24px] p-6 md:rounded-[32px] md:p-8',
        width,
      ].join(' ')}
    >
      <img src={img} alt="" className="advantages__card-img max-w-full mb-4" />

      <h4 className="advantages__card-title font-bold mb-3 text-lg md:mb-4 md:text-2xl">
        {title}
      </h4>
      <p className="advantages__card-desctiption text-sm md:text-base">
        {description}
      </p>
    </div>
  );
}
