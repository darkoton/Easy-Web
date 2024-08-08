import './Benefit.css';
import landing from '@/assets/img/benefit/landing.png';
import hosting from '@/assets/img/benefit/hosting.png';
import test from '@/assets/img/benefit/test.png';
import head from '@/assets/img/benefit/head.png';

export default function BenefitSection() {
  return (
    <section className="benefit">
      <div className="benefit__container _container">
        <div className="benefit__body">
          <h2 className="benefit__title">
            С нами выгоднее <img src={head} alt="" className="benefit__head" />
          </h2>

          <div className="benefit__cards">
            <div className="benefit__card">
              <img src={landing} alt="" className="benefit__card-img" />
              <p className="benefit__card-description">
                Создавайте продающие лендинги в пару кликов без дизайнеров и
                верстальщиков
              </p>
            </div>

            <div className="benefit__card">
              <img src={hosting} alt="" className="benefit__card-img" />
              <p className="benefit__card-description">
                Экономьте до 20$ ежемесячно с нашим бесплатным хостингом
              </p>
            </div>

            <div className="benefit__card">
              <img src={test} alt="" className="benefit__card-img" />
              <p className="benefit__card-description">
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
