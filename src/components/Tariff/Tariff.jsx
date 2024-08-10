import yes from '@/assets/img/tariff/yes.svg';
import no from '@/assets/img/tariff/no.svg';
import tariffs from './tariff.js';
import Slider from '@/components/UI/Slider.jsx';
import { useState, useEffect } from 'react';

const tabs = [
  {
    value: '1',
    text: '1 мес.',
    pcText: '1 месяц',
    discount: null,
  },
  {
    value: '3',
    text: '3 мес.',
    pcText: '3 месяца',
    discount: '-10%',
  },
  {
    value: '6',
    text: '6 мес.',
    pcText: '6 месяцев',
    discount: '-20%',
  },
  {
    value: '12',
    text: '12 мес.',
    pcText: '12 месяцев',
    discount: '-30%',
  },
];

export default function TariffSection() {
  const [duration, setDuration] = useState('1');
  const [swipeable, setSwipeable] = useState(true);

  function selectTime(time) {
    return () => {
      setDuration(time);
    };
  }

  useEffect(() => {
    function checkWindow() {
      setTimeout(() => {
        if (window.outerWidth <= 1024) {
          setSwipeable(true);
        } else {
          setSwipeable(false);
        }
      }, 400);
    }
    checkWindow();
    window.addEventListener('resize', checkWindow);

    return () => window.removeEventListener('resize', checkWindow);
  }, []);

  return (
    <section className="tariff mt-28 lg:mt-40">
      <div className="tariff__container _container">
        <div className="tariff__body rounded-[32px] flex flex-col items-center lg:bg-cardGray p-0 lg:px-8 lg:pb-8 lg:pt-7">
          <div className="tariff__top flex w-full items-center justify-between gap-y-8 gap-x-8 mb-6 flex-col lg:mb-5 lg:flex-row">
            <h2 className="tariff__title title-section">Тарифы</h2>
            <div className="tariff__tabs lg:gap-x-2 flex justify-between  p-2 rounded-2xl bg-cardGray text-sm lg:p-1 lg:rounded-xl lg:text-base lg:bg-white w-full lg:w-auto">
              {tabs.map(tab => (
                <button
                  key={tab.value}
                  className={[
                    'tariff__tab w-full lg:w-auto flex flex-wrap max-[520px]:flex-col items-center justify-center gap-x-2  font-bold border-transparent border-[1px] rounded-xl px-3 py-2 lg:px-5 lg:py-1',
                    duration == tab.value ? '!border-mainBlue' : null,
                  ].join(' ')}
                  onClick={selectTime(tab.value)}
                >
                  <span className="lg:hidden">{tab.text}</span>
                  <span className="hidden lg:block">{tab.pcText}</span>

                  {tab.discount && (
                    <span className="text-mainBlue">{tab.discount}</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="tariff__main w-full flex items-center mb-8 gap-x-[15px]">
            <div className="tariff__notes whitespace-nowrap flex-col text-blueGray items-start gap-y-4 text-base hidden lg:flex leading-[1.4] mt-2">
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

            {swipeable ? (
              <Slider
                pagination={true}
                className="tariff__plans w-full md:hidden"
                classWindow="overflow-visible md:overflow-hidden"
                slidesPerView={1.15}
                spaceBetween={3}
              >
                {tariffs.map(tariff => (
                  <div
                    key={tariff.tariffName}
                    className="tariff__plan w-full flex gap-y-4 flex-col items-center px-5 lg:px-3 py-4 rounded-3xl bg-cardGray lg:bg-white"
                  >
                    <h4 className="plan__title font-bold text-2xl">
                      {tariff.tariffName}
                    </h4>
                    <ul className="plan__offer w-full rounded-2xl bg-white lg:bg-cardGray text-blueGray flex-flex-col">
                      {tariff.features.map(feature => (
                        <li
                          key={feature.title}
                          className="plan__offer-item border-t-[1px]  border-[#E7E7E7] first:border-transparent py-3 px-4 flex items-center gap-x-6"
                        >
                          <div className="plan__offer-value font-bold text-base flex justify-center lg:w-full">
                            {feature.value && (
                              <div className="w-4 text-center">
                                {feature.value}
                              </div>
                            )}

                            {feature.has !== null && (
                              <div className="w-4 text-center">
                                <img
                                  src={feature.has ? yes : no}
                                  className="w-4 max-w-full"
                                  alt=""
                                />
                              </div>
                            )}
                          </div>
                          <h5 className="plan__offer-title text-sm lg:hidden">
                            {feature.title}
                          </h5>
                        </li>
                      ))}
                    </ul>

                    <div className="plan__price font-bold text-2xl">
                      {tariff.price[duration]}
                    </div>
                  </div>
                ))}
              </Slider>
            ) : (
              <div className="tarrif__plans w-full flex gap-x-4">
                {tariffs.map(tariff => (
                  <div
                    key={tariff.tariffName}
                    className="tariff__plan w-full flex gap-y-4 flex-col items-center px-5 lg:px-3 py-4 rounded-3xl bg-cardGray lg:bg-white"
                  >
                    <h4 className="plan__title font-bold text-2xl">
                      {tariff.tariffName}
                    </h4>
                    <ul className="plan__offer w-full rounded-2xl bg-white lg:bg-cardGray text-blueGray flex-flex-col">
                      {tariff.features.map(feature => (
                        <li
                          key={feature.title}
                          className="plan__offer-item border-t-[1px]  border-[#E7E7E7] first:border-transparent py-3 px-4 flex items-center gap-x-6"
                        >
                          <div className="plan__offer-value font-bold text-base flex justify-center lg:w-full">
                            {feature.value && (
                              <div className="text-center">{feature.value}</div>
                            )}

                            {feature.has !== null && (
                              <div className="w-4 text-center">
                                <img
                                  src={feature.has ? yes : no}
                                  className="max-w-full"
                                  alt=""
                                />
                              </div>
                            )}
                          </div>
                          <h5 className="plan__offer-title text-sm lg:hidden">
                            {feature.title}
                          </h5>
                        </li>
                      ))}
                    </ul>

                    <div className="plan__price font-bold text-2xl">
                      {tariff.price[duration]}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="tariff__button btn">Попробовать бесплатно</div>
        </div>
      </div>
    </section>
  );
}
