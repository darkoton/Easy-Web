import landing from '@/assets/img/benefit/landing.webp';
import hosting from '@/assets/img/benefit/hosting.webp';
import test from '@/assets/img/benefit/test.webp';
import head from '@/assets/img/benefit/head.webp';
import Card from '@/components/UI/Card';

const cards = [
  {
    description:
      'Создавайте продающие лендинги в пару кликов без дизайнеров и верстальщиков',
    img: landing,
  },
  {
    description: 'Экономьте до 20$ ежемесячно с нашим бесплатным хостингом',
    img: hosting,
  },
  {
    description:
      'A/B тестирование точно покажет, какие цены и дизайны максимизируют вашу прибыль',
    img: test,
  },
];

export default function BenefitSection() {
  return (
    <section className="benefit mt-[120px] md:mt-[160px]">
      <div className="benefit__container _container">
        <div className="benefit__body flex flex-col items-center">
          <h2 className="benefit__title title-section relative text-center mb-8 max-w-[150px] md:mb-12 md:max-w-full">
            С нами выгоднее
            <img
              src={head}
              alt=""
              className="benefit__head w-full absolute max-w-[96px] -right-[96px] md:max-w-[128px] md:-right-[128px] top-5 -translate-y-1/2 md:top-0"
            />
          </h2>

          <div className="benefit__cards flex justify-center gap-4 flex-wrap flex-col md:flex-row">
            {cards.map(c => (
              <Card
                key={c.description}
                {...c}
                textClassName="font-bold !text-lg !leading-[21px] md:!text-xl md:!leading-[24px]"
                className="max-w-full md:max-w-[350px]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
