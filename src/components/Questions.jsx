import { useState } from 'react';
import Accordion from '@/components/UI/Accordion';

const questions = [
  {
    id: 0,
    title: 'Как начать?',
    text: 'Для чего вкладка коллеги и коллективные лендинги. Как отдать лендинг другому пользователю навсегда. Как дать доступ к лендингу другому пользователю. Во вкладке "Коллективные лендинги" будут отображаться лендинги к которым Вам дан доступ (от коллег, фрилансеров). Также вы можете сортировать лендинги задавая свои фильтры и категории. В данном разделе вы можете добавлять коллег по работе, людей задействованных в создании с вами сайта, сортировать список и осуществлять поиск по заданному фильтру.',
  },
  {
    id: 1,
    title: 'Что включено в бесплатный план?',
    text: 'Для чего вкладка коллеги и коллективные лендинги. Как отдать лендинг другому пользователю навсегда. Как дать доступ к лендингу другому пользователю. Во вкладке "Коллективные лендинги" будут отображаться лендинги к которым Вам дан доступ (от коллег, фрилансеров). Также вы можете сортировать лендинги задавая свои фильтры и категории. В данном разделе вы можете добавлять коллег по работе, людей задействованных в создании с вами сайта, сортировать список и осуществлять поиск по заданному фильтру.',
  },
  {
    id: 2,
    title: 'Могу ли я использовать свой домен?',
    text: 'Для чего вкладка коллеги и коллективные лендинги. Как отдать лендинг другому пользователю навсегда. Как дать доступ к лендингу другому пользователю. Во вкладке "Коллективные лендинги" будут отображаться лендинги к которым Вам дан доступ (от коллег, фрилансеров). Также вы можете сортировать лендинги задавая свои фильтры и категории. В данном разделе вы можете добавлять коллег по работе, людей задействованных в создании с вами сайта, сортировать список и осуществлять поиск по заданному фильтру.',
  },
  {
    id: 3,
    title: 'Как считается оплата в вашем сервисе?',
    text: 'Для чего вкладка коллеги и коллективные лендинги. Как отдать лендинг другому пользователю навсегда. Как дать доступ к лендингу другому пользователю. Во вкладке "Коллективные лендинги" будут отображаться лендинги к которым Вам дан доступ (от коллег, фрилансеров). Также вы можете сортировать лендинги задавая свои фильтры и категории. В данном разделе вы можете добавлять коллег по работе, людей задействованных в создании с вами сайта, сортировать список и осуществлять поиск по заданному фильтру.',
  },
  {
    id: 4,
    title: 'Могу ли я не передавать данные о своих заказах в вашу систему?',
    text: 'Для чего вкладка коллеги и коллективные лендинги. Как отдать лендинг другому пользователю навсегда. Как дать доступ к лендингу другому пользователю. Во вкладке "Коллективные лендинги" будут отображаться лендинги к которым Вам дан доступ (от коллег, фрилансеров). Также вы можете сортировать лендинги задавая свои фильтры и категории. В данном разделе вы можете добавлять коллег по работе, людей задействованных в создании с вами сайта, сортировать список и осуществлять поиск по заданному фильтру.',
  },
  {
    id: 5,
    title: 'Как покупаются и хранятся домены?',
    text: 'Для чего вкладка коллеги и коллективные лендинги. Как отдать лендинг другому пользователю навсегда. Как дать доступ к лендингу другому пользователю. Во вкладке "Коллективные лендинги" будут отображаться лендинги к которым Вам дан доступ (от коллег, фрилансеров). Также вы можете сортировать лендинги задавая свои фильтры и категории. В данном разделе вы можете добавлять коллег по работе, людей задействованных в создании с вами сайта, сортировать список и осуществлять поиск по заданному фильтру.',
  },
  {
    id: 6,
    title: 'Какие рекламные источники я могу подключить к лендингам?',
    text: 'Для чего вкладка коллеги и коллективные лендинги. Как отдать лендинг другому пользователю навсегда. Как дать доступ к лендингу другому пользователю. Во вкладке "Коллективные лендинги" будут отображаться лендинги к которым Вам дан доступ (от коллег, фрилансеров). Также вы можете сортировать лендинги задавая свои фильтры и категории. В данном разделе вы можете добавлять коллег по работе, людей задействованных в создании с вами сайта, сортировать список и осуществлять поиск по заданному фильтру.',
  },
  {
    id: 7,
    title: 'Куда я могу передавать свои заказы?',
    text: 'Для чего вкладка коллеги и коллективные лендинги. Как отдать лендинг другому пользователю навсегда. Как дать доступ к лендингу другому пользователю. Во вкладке "Коллективные лендинги" будут отображаться лендинги к которым Вам дан доступ (от коллег, фрилансеров). Также вы можете сортировать лендинги задавая свои фильтры и категории. В данном разделе вы можете добавлять коллег по работе, людей задействованных в создании с вами сайта, сортировать список и осуществлять поиск по заданному фильтру.',
  },
];

export default function QuestionsSection() {
  const [active, setActive] = useState(null);

  function selectQuestion(id) {
    if (active == id) {
      setActive(null);
    } else {
      setActive(id);
    }
  }

  return (
    <section className="questions mt-[120px] md:mt-[160px] mb-[120px] md:mb-[160px]">
      <div className="questions__container _container">
        <div className="questions__body">
          <h2 className="questions__title title-section md:ml-8 mb-8 md:mb-12 text-center md:text-left">
            FAQ
          </h2>

          <div className="questions__questions flex flex-col gap-y-3 md:gap-y-4">
            {questions.map(q => (
              <Accordion
                key={q.id}
                {...q}
                active={q.id == active}
                onClick={() => selectQuestion(q.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
