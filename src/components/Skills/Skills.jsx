import './Skills.css';
import Slider from '@/components/UI/Slider/Slider';
import constructor from '@/assets/img/skills/constructor.png';
import template from '@/assets/img/skills/template.png';
import integrate from '@/assets/img/skills/integrate.png';
import hosting from '@/assets/img/skills/hosting.png';
import counter from '@/assets/img/skills/counter.png';
import propTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

const cards = [
  {
    img: constructor,
    title: 'Удобный конструктор',
    description:
      'Создавайте лендинги за 10 минут, просто заменяя изображения, дизайн и текст',
  },
  {
    img: template,
    title: 'Кастомные шаблоны',
    description: 'Десятки готовых дизайнов и товаров для быстрого старта',
  },
  {
    img: integrate,
    title: 'Быстрые интеграции',
    description: 'Получайте заказы в Телеграм, M1, LP-CRM, 7Leads, CPAshka...',
  },
  {
    img: hosting,
    title: 'Встроенный хостинг',
    description:
      'Размещайте  лендинги используя наш хостинг или скачивайте их себе',
  },
  {
    img: counter,
    title: 'Добавление счетчиков',
    description: 'Подключайте рекламные источники в пару кликов',
  },
];

export default function SkillsSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [sliderAuto, setSliderAuto] = useState(true);

  useEffect(() => {
    function checkWindow() {
      setSliderAuto(false);

      setTimeout(() => {
        if (window.outerWidth <= 768) {
          setSliderAuto(false);
        } else {
          setSliderAuto(true);
        }
      }, 400);
    }
    checkWindow();
    window.addEventListener('resize', checkWindow);

    return () => window.removeEventListener('resize', checkWindow);
  }, []);

  return (
    <section className="skills">
      <div className="skills__container _container">
        <div className="skills__body">
          <div className="skills__top">
            <h2 className="skills__title">
              Что умеет Easy<span className="blue-text">Web</span>?
            </h2>

            <div className="skills__navigation">
              <button className="skills__button group" ref={prevRef}>
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.877054 9.12055L5.46705 13.7106C5.65441 13.8968 5.90787 14.0013 6.17205 14.0013C6.43624 14.0013 6.68969 13.8968 6.87705 13.7106C6.97078 13.6176 7.04518 13.507 7.09594 13.3851C7.14671 13.2633 7.17285 13.1326 7.17285 13.0006C7.17285 12.8685 7.14671 12.7378 7.09594 12.616C7.04518 12.4941 6.97078 12.3835 6.87705 12.2906L2.27705 7.71055C2.18333 7.61759 2.10893 7.50699 2.05816 7.38513C2.00739 7.26327 1.98126 7.13256 1.98126 7.00055C1.98126 6.86854 2.00739 6.73783 2.05816 6.61597C2.10893 6.49411 2.18333 6.38351 2.27705 6.29055L6.87705 1.71055C7.06536 1.52357 7.17167 1.26945 7.17261 1.00409C7.17355 0.738723 7.06903 0.483854 6.88205 0.29555C6.69508 0.107247 6.44095 0.000930942 6.17559 -6.7629e-06C5.91023 -0.000944468 5.65536 0.103573 5.46705 0.290551L0.877054 4.88055C0.315252 5.44305 -0.000307355 6.20555 -0.000307425 7.00055C-0.000307494 7.79555 0.315252 8.55805 0.877054 9.12055Z"
                    className="fill-white group-disabled:fill-[#7288A5] "
                  />
                </svg>
              </button>

              <button className="skills__button group" ref={nextRef}>
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.2958 9.12067L1.7058 13.7107C1.51844 13.8969 1.26498 14.0015 1.0008 14.0015C0.736612 14.0015 0.483161 13.8969 0.295798 13.7107C0.20207 13.6177 0.127676 13.5071 0.0769071 13.3852C0.0261384 13.2634 -7.59512e-08 13.1327 -8.74921e-08 13.0007C-9.90329e-08 12.8687 0.0261384 12.738 0.076907 12.6161C0.127676 12.4942 0.20207 12.3836 0.295798 12.2907L4.8958 7.71067C4.98953 7.61771 5.06392 7.50711 5.11469 7.38525C5.16546 7.26339 5.1916 7.13268 5.1916 7.00067C5.1916 6.86866 5.16546 6.73795 5.11469 6.6161C5.06392 6.49424 4.98953 6.38364 4.8958 6.29067L0.295797 1.71067C0.107494 1.52369 0.0011788 1.26957 0.000241097 1.00421C-0.000696608 0.738845 0.10382 0.483976 0.290798 0.295672C0.477776 0.107368 0.731898 0.00105279 0.997262 0.000115307C1.26263 -0.000822178 1.51749 0.103696 1.7058 0.290673L6.2958 4.88067C6.8576 5.44317 7.17316 6.20567 7.17316 7.00067C7.17316 7.79567 6.8576 8.55817 6.2958 9.12067Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>

          <Slider
            navigation={{ prev: prevRef, next: nextRef }}
            className="skills__slider"
            units={'px'}
            autoPlay={sliderAuto}
            slidesPerView={3.5}
            swipeable={false}
            spaceBetween={20}
          >
            {cards.map(card => (
              <Skill key={card.title} {...card} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

Skill.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
  img: propTypes.string,
};
function Skill({ title, description, img, ...props }) {
  return (
    <div className="skills__card" {...props}>
      <div className="skills__card-top">
        <img src={img} alt="logo" className="skills__card-img" />
        <h3 className="skills__card-title">{title}</h3>
      </div>
      <p className="skills__card-description">{description}</p>
    </div>
  );
}
