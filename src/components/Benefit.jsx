import landing from '@/assets/img/benefit/landing.webp';
import hosting from '@/assets/img/benefit/hosting.webp';
import test from '@/assets/img/benefit/test.webp';
import head from '@/assets/img/benefit/head.webp';

export default function BenefitSection() {
  return (
    <section className="benefit mt-[90px] md:mt-[140px]">
      <div className="benefit__container _container">
        <div className="benefit__body flex flex-col items-center">
          <h2 className="benefit__title title-section relative text-center mb-8 max-w-[150px] md:mb-12 md:max-w-full">
            С нами выгоднее
            <img
              src={head}
              alt=""
              className="benefit__head absolute -right-24 -translate-y-1/2 top-0"
            />
          </h2>

          <div className="benefit__cards flex justify-center gap-4 flex-wrap flex-col md:flex-row">
            <div className="benefit__card rounded-3xl w-full gap-y-4 bg-cardGray flex flex-col items-start p-6 max-w-full md:px-9 md:max-w-[350px]">
              <img src={landing} alt="" className="benefit__card-img" />
              <p className="benefit__card-description font-bold text-lg md:text-xl">
                Создавайте продающие лендинги в пару кликов без дизайнеров и
                верстальщиков
              </p>
            </div>

            <div className="benefit__card rounded-3xl w-full gap-y-4 bg-cardGray flex flex-col items-start p-6 max-w-full md:px-9 md:max-w-[350px]">
              <img src={hosting} alt="" className="benefit__card-img" />
              <p className="benefit__card-description font-bold text-lg md:text-xl">
                Экономьте до 20$ ежемесячно с нашим бесплатным хостингом
              </p>
            </div>

            <div className="benefit__card rounded-3xl w-full gap-y-4 bg-cardGray flex flex-col items-start p-6 max-w-full md:px-9 md:max-w-[350px]">
              <img src={test} alt="" className="benefit__card-img" />
              <p className="benefit__card-description font-bold text-lg md:text-xl">
                A/B тестирование точно покажет, какие цены и дизайны
                максимизируют вашу прибыль
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
