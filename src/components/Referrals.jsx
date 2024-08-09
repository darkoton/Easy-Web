import people from '@/assets/img/referrals/people.png';
import emoji from '@/assets/img/referrals/emoji.png';

export default function ReferralsSection() {
  return (
    <section className="referrals mt-20 lg:mt-32">
      <div className="referrals__container _container">
        <div className="referrals__body flex items-center justify-center gap-x-16 gap-y-8 flex-col md:flex-row">
          <div className="referrals__left flex justify-center relative w-full lg:w-1/2 before:content-[''] before:bg-mainBlue before:w-48 before:h-48 before:rounded-full before:absolute before:-bottom-10 before:left-1/2 before:-translate-x-1/2 before:-z-10 before:blur-[264px]">
            <img
              src={people}
              alt="young people standing and talking."
              className="referrals__people max-w-full sm:max-w-6.5/12 md:max-w-full"
            />
          </div>
          <div className="referrals__right flex flex-col text-center items-center w-full lg:text-left lg:items-start lg:w-1/2">
            <h2 className="referrals__title font-bold  mb-6 t ext-3xl lg:mb-8 lg:text-4xl">
              Реферальная <br /> программа
            </h2>
            <p className="referrals__descripion max-w-64 text-sm mb-8 lg:max-w-96 lg:text-xl lg:mb-9">
              Рекомендуйте Easy<span className="text-mainBlue">Web</span> своим
              друзьям, подписчикам и получайте
            </p>

            <button className="referrals__button group flex justify-center font-bold relative py-2 px-5 pl-20 items-center bg-black rounded-3xl text-white transition-transform duration-300 active:scale-[0.98] mb-8 lg:mb-10">
              <img
                src={emoji}
                alt="emoji"
                className="referrals__emoji absolute -left-1 transition-transform duration-700 group-hover:rotate-[30deg]"
              />
              <span>20% от всех их покупок</span>
            </button>

            <p className="referrals__note text-slate-500 text-sm lg:text-base">
              * Выводите средства на свою <br /> банковскую карту / крипто
              кошельки
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
