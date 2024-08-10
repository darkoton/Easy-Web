import domain from '@/assets/img/advantages/domain.webp';
import team from '@/assets/img/advantages/team.webp';
import tests from '@/assets/img/advantages/tests.webp';
import view from '@/assets/img/advantages/view.webp';
import Card from '@/components/UI/Card';

const cards = [
  {
    title: 'Автоматическая покупка доменов',
    description:
      'Забудьте о регистраторах доменов, DNS и прочее. С нами все легко и просто',
    img: domain,
    className: 'col-span-10 md:col-span-6 ',
  },
  {
    title: 'Командный режим',
    description: 'Совместная работа с трафиком проще чем когда-либо',
    img: team,
    className: 'col-span-10 md:col-span-4',
  },
  {
    title: 'A/B тестирование',
    description: 'Оптимизируйте лендинги до максимального профита',
    img: tests,
    className: 'col-span-10 md:col-span-4',
  },
  {
    title: 'Удобный просмотр заказов',
    description:
      'Вся информация в одном месте, а Шейв / Потеря лидов становится невозможным',
    img: view,
    className: 'col-span-10 md:col-span-6',
  },
];

export default function AdvantagesSection() {
  return (
    <section className="advantages mt-[120px]">
      <div className="advantages__container w-full max-w-[944px] mx-auto px-4">
        <div className="advantages__body">
          <h2 className="advantages__title title-section text-center mb-8 md:mb-12">
            Наши преимущества
          </h2>

          <div className="advantages__grid grid gap-4 grid-cols-10 grid-flow-dense">
            {cards.map(c => (
              <Card key={c.title} {...c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
